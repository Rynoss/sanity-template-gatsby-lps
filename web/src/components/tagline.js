import React from 'react';
import Ornament from './utils/ornament';

export default function Tagline({ tagline, lineColor, iconSrc }) {
  return (
    <section id="tagline">
      <div className="container mx-auto text-center pt-7 pb-6 laptop:pt-14 tablet:pb-10">
        <Ornament {...{ lineColor, iconSrc }} alt={'Company Icon'} className={'mb-4'} />
        <h2 className="default--header leading-snug font-[700] text-[44px] phablet:text-4xl phablet:leading-snug tablet:text-5xl">
          {tagline}
        </h2>
      </div>
    </section>
  );
}
