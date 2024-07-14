import { useState, useEffect } from 'react';
import { useDocumentOperation } from 'sanity';
import { createClient } from '@sanity/client';
import slugify from 'slugify';

// Initialize Sanity client for fetching field values (with updated v3 configuration)
const client = createClient({
  projectId: process.env.SANITY_STUDIO_API_PROJECT_ID || '<#< sanity.projectId >#>',
  dataset: process.env.SANITY_STUDIO_API_DATASET || '<#< sanity.dataset >#>',
  apiVersion: '2024-07-13', // use current date to target the latest API version
  useCdn: false,
});

export default function SetSlugAndPublishAction({ id, type, draft, published, onComplete }) {
  // Get patch and publish operations for the current document
  const { patch, publish } = useDocumentOperation(id, type);
  const [isPublishing, setIsPublishing] = useState(false);

  // Effect to reset publishing state when the draft is published
  useEffect(() => {
    if (isPublishing && !draft) {
      setIsPublishing(false);
    }
  }, [draft, isPublishing]);

  // Function to handle the custom publish action
  const handlePublish = async () => {
    setIsPublishing(true);

    try {
      // Set the initial slug value from the draft label
      let slug = draft.label;

      if (type === 'page') {
        // Fetch the category label to include in the slug
        const referenceNameType = 'category';
        const query = `*[_type == "${referenceNameType}" && _id == $nameRef][0] {label}`;
        let referenceLabel = draft.category._ref;

        await client.fetch(query, { nameRef: referenceLabel }).then((category) => {
          referenceLabel = category ? category.label : referenceLabel;
        });

        // Create the slug by combining the category label and draft label
        slug = `${slugify(referenceLabel)}/${slugify(draft.label)}`;
        // Update the document with the new slug
        patch.execute([{ set: { slug: { _type: 'slug', current: slug.toLowerCase() } } }]);
      }

      // Execute the publish operation
      await publish.execute();
      // Complete the action
      onComplete();
    } catch (error) {
      console.error('Error in SetSlugAndPublishAction:', error);
      setIsPublishing(false);
    }
  };

  // Return the custom action
  return {
    disabled: publish.disabled,
    label: isPublishing ? 'Publishing…' : 'Publish',
    onHandle: handlePublish,
  };
}
