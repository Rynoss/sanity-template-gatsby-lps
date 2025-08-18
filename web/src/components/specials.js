import React from 'react';
import Ornament from './utils/ornament'
export default function Specials({ specials, lineColor, iconSrc }) {
  return (
    <div className="xbg--specials flex flex-1 justify-center w-full laptop:justify-end">
      <div className="grid auto-rows-[1fr] gap-8 w-full laptop:grow-0">
        {specials.map((special, index) => {
          return (
            <div
              className={`flex flex-col text-center items-center justify-center gap-0 m-3 bg-white text-gray-alt rounded-2xl border-2 border-dashed border-gray-alt shadow-custom p-3`}
              key={index}
            >
              <div className="text-[35px] font-extrabold uppercase tablet:text-[35px]">
                {special.title}
              </div>
              {special.details ? (
                <div className="capitalize font-medium text-[22px]">
                  {special.details}
                </div>
              ) : null}
              <Ornament {...{ lineColor, iconSrc }} className={'w-3/4 mb-0'} alt={'Company Icon'} />
              {special.disclaimer ? (
                <div className="capitalize font-medium text-gray-500 text-[16px]">
                  {special.disclaimer}
                </div>
              ) : null}
              {special.secondaryDisclaimer ? (
                <div className="capitalize font-medium text-gray-500 mt-3 text-[14px]">
                  {special.secondaryDisclaimer}
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}
