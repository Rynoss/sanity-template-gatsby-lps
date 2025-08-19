import React from 'react';

export default function CalloutBar({
  calloutMessage,
  calloutImageSrc,
  calloutGradient,
}) {
  const gradientType = calloutGradient ? 'radial' : 'linear';
  return (
    <section
      id="call-out-bar"
      className={`bg--callout bg--callout-${gradientType} clear-both`}
    >
      <div className="container mx-auto flex flex-col py-8 items-center laptop:flex-row">
        <div className="flex-none">
          <img className="mb-8 laptop:mb-0" src={calloutImageSrc} alt="" />
        </div>
        <div className="flex-1 ml-[80px] text-[26px] font-[600px] tablet:text-2xl">
          {calloutMessage}
        </div>
      </div>
    </section>
  );
}
