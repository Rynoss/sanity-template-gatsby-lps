import React from 'react';
import { AnchorLink } from "gatsby-plugin-anchor-links";
  
export default function Interlude({interludeText, interludeImageSrc}) {
    return (
        <section id="interlude">
            <div className="container flex flex-col-reverse mx-auto text-center py-16 text-gray-alt tablet:py-24 laptop:py-36 laptop:flex-row">
                <div className="flex-1 text-center laptop:pr-7">
                    {interludeText.map( (paragraph, index) => (
                        <p className="text-xl tablet:text-2xl tablet:leading-9 mb-8" key={index}>{paragraph}</p>
                    ))}                    
                    <AnchorLink
                        className="button--primary inline-block rounded-xl font-black text-xl px-8 py-3 uppercase phablet:text-2xl"
                        to="#contact" title="Contact Us">
                        Contact Us Today
                    </AnchorLink>
                </div>
                <div className="flex-1 flex justify-center items-center laptop:w-1/2">
                    <img className="mx-auto mb-8 laptop:mb-0" src={interludeImageSrc} alt="" />
                </div>
            </div>
        </section>
    );
}