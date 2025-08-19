import React from 'react';

export default function Contact({ children }) {
  return (
    <section id="contact" className="pt-16 pb-7 laptop:pt-36 laptop:pb-14">
      <div className="container mx-auto bg--primary rounded-xl py-6 px-6 tablet:px-12 tablet:py-14 laptop:px-20">
        <h2 className="font-[700] text-center text-[50px] mb-6 phablet:text-3xl tablet:mb-7 tablet:text-4xl laptop:text-5xl desktop:text-6xl">
          Contact Our Team
        </h2>
        {children}
      </div>
    </section>
  );
}
