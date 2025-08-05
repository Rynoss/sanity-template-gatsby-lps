import React from 'react';
import { PortableText } from '@portabletext/react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { getGatsbyImageData } from 'gatsby-source-sanity';
import clientConfig from '../../client-config';

// Custom List Item Renderer
const listItemRenderer = ({ children }) => {
  return <li className="leading-relaxed">{children}</li>;
};

// Custom List Renderer
const listRenderer = {
  bullet: ({ children }) => (
    <ul className="list-disc list-inside text-[18px] mb-5">{children}</ul>
  ),
  number: ({ children }) => (
    <ol className="list-decimal list-inside text-[18px] mb-5">{children}</ol>
  ),
};

// Block Components
const blockComponents = {
  block: {
    normal: ({ children }) => <p className="text-[18px] mb-5 leading-relaxed">{children}</p>,
    h1: ({ children }) => (
      <h1 className="default--header text-magic leading-tight font-extrabold mb-8 phablet:text-3xl laptop:text-5xl">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text--secondary text-magic leading-tight font-extrabold mb-8 phablet:text-3xl laptop:text-4xl">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text--secondary text-magic leading-tight font-extrabold mb-8 phablet:text-3xl laptop:text-3xl">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text--secondary text-magic leading-tight font-extrabold mb-8 phablet:text-3xl laptop:text-2xl">
        {children}
      </h4>
    ),
    h5: ({ children }) => (
      <h5 className="text--secondary text-magic leading-tight font-extrabold mb-8 phablet:text-3xl laptop:text-xl">
        {children}
      </h5>
    ),
    h6: ({ children }) => (
      <h6 className="text--secondary text-magic leading-tight font-extrabold mb-8 phablet:text-3xl laptop:text-lg">
        {children}
      </h6>
    ),
  },
  list: listRenderer,
  listItem: listItemRenderer,
};

const FigureRenderer = ({ value }) => {
  const imageAssetId = value?.image?.asset?._ref;
  const imageData = getGatsbyImageData(
    imageAssetId,
    { maxWidth: 675 },
    clientConfig.sanity
  );
  const imageAlignment = value?.alignment;
  const floats = {
    left: 'tablet:float-left',
    right: 'tablet:float-right',
    none: 'tablet:float-none',
  };
  return (
    <GatsbyImage
      image={imageData}
      className={`hidden m-4 tablet:inline-block ${floats[imageAlignment]}`}
      alt=""
    />
  );
};

export default function Intro({ introText, introImage }) {
  return (
    <section
      id="intro"
      className="py-10 px-4 text-gray-alt phablet:px-0 tablet:py-20"
    >
      <div className="container mx-auto">
        <div className="flex flex-col text-lg laptop:flex-row tablet:gap-4">
          <div className="laptop:basis-2/3">
            <PortableText
              value={introText}
              components={{
                ...blockComponents,
                types: {
                  image: FigureRenderer,
                },
              }}
            />
          </div>
          <div className="laptop:basis-1/3">
            <div className="laptop:pt-24 laptop:sticky laptop:top-20">
              <img
                className="mx-auto"
                src={introImage}
              />
            </div>
          </div>
        </div>
        <div className="text-center laptop:text-left">
          <a
            className="button--primary inline-block text-center mt-5 rounded-xl text-xl font-black px-8 py-3 uppercase phablet:text-2xl phablet:inline-block"
            href="#contact"
            title="Contact Us"
          >
            Request Service
          </a>
        </div>
      </div>
    </section>
  );
}