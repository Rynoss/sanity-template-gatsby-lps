import React from 'react';
import BlockContent from '@sanity/block-content-to-react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { getGatsbyImageData } from 'gatsby-source-sanity';
import clientConfig from '../../client-config';

const listRenderer = ({ type, children }) => {
  if (type === 'bullet') {
    return (
      <ul className="list-disc list-inside text-[18px] mb-5">{children}</ul>
    );
  }
  if (type === 'number') {
    return (
      <ol className="list-decimal list-inside text-[18px] mb-5">{children}</ol>
    );
  }
  return null;
};

const listItemRenderer = ({ children }) => {
  return <li className="leading-relaxed">{children}</li>;
};

const BlockRenderer = ({ node, children }) => {
  const { style = 'normal' } = node;
  const isEmptyString = (child) => child === '';

  if (!children.every(isEmptyString)) {
    if (style === 'normal') {
      return <p className="text-[18px] mb-5 leading-relaxed">{children}</p>;
    }

    if (style === 'h1') {
      return (
        <h1 className="text--secondary text-magic leading-tight font-extrabold mb-8 phablet:text-3xl laptop:text-5xl">
          {children}
        </h1>
      );
    }

    if (style === 'h2') {
      return (
        <h2 className="text--secondary text-magic leading-tight font-extrabold mb-8 phablet:text-3xl laptop:text-4xl">
          {children}
        </h2>
      );
    }

    if (style === 'h3') {
      return (
        <h3 className="text--secondary text-magic leading-tight font-extrabold mb-8 phablet:text-3xl laptop:text-3xl">
          {children}
        </h3>
      );
    }

    if (style === 'h4') {
      return (
        <h4 className="text--secondary text-magic leading-tight font-extrabold mb-8 phablet:text-3xl laptop:text-2xl">
          {children}
        </h4>
      );
    }

    if (style === 'h5') {
      return (
        <h5 className="text--secondary text-magic leading-tight font-extrabold mb-8 phablet:text-3xl laptop:text-xl">
          {children}
        </h5>
      );
    }

    if (style === 'h6') {
      return (
        <h6 className="text--secondary text-magic leading-tight font-extrabold mb-8 phablet:text-3xl laptop:text-lg">
          {children}
        </h6>
      );
    }
  }
  return BlockContent.defaultSerializers.types.block({ node, children }); // Fall back to default handling
};

const FigureRenderer = ({ node }) => {
  const imageAssetId = node?.image?.asset?._ref;
  const imageData = getGatsbyImageData(
    imageAssetId,
    { maxWidth: 675 },
    clientConfig.sanity
  );
  const imageAlignment = node?.alignment;
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
            <BlockContent
              blocks={introText}
              serializers={{
                types: {
                  block: BlockRenderer,
                  //figure: FigureRenderer,
                },
                list: listRenderer,
                listItem: listItemRenderer,
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
