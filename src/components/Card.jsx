import React from 'react'

const Card = () => {
  return (
    <div className="w-full rounded-xl bg-soil   flex flex-col gap-6">
      <div className="flex flex-col border-b-2 p-4 border-white">
        <div className="text-secondary text-2xl lg:text-3xl  font-normal">DAY ONE</div>
        <div className="font-semibold lg:text-lg">August 1, 2022</div>
      </div>
      <div className="flex flex-col ">
        <div className="flex flex-col p-4 gap-1">
          <div className="text-xl lg:text-3xl font-normal">8-10 AM</div>
          <div className="text-[12px] lg:text-[14px] font-semibold">
            <span className="text-primary  uppercase">
              registration / breakfast
            </span>
            <br />
            Join us in the main lobby for snack after registering!
          </div>
        </div>
        <div className="flex flex-col p-4 gap-1">
          <div className="text-xl lg:text-3xl font-normal">10-10:45 AM</div>
          <div className="text-[12px] lg:text-[14px] font-semibold">
            <span className="text-primary font-semibold uppercase">
              The nifty alpha show
            </span>
            <br />
            Join the Nifty Alpha Show live from our casting stage!
          </div>
          <div className="text-[12px] lg:text-[14px] font-semibold">
            <span className="text-primary font-semibold uppercase">
              Women in the Metaverse
            </span>
            <br />
            Learn more about evloving role of women in the metaverse and nfts
          </div>
        </div>
        <div className="flex flex-col p-4 gap-1">
          <div className="text-xl lg:text-3xl font-normal">11-11:45 AM</div>
          <div className="text-[14px] font-semibold">
            <span className="text-primary font-semibold uppercase">
              The nifty alpha show
            </span>
            <br />
            Join the Nifty Alpha Show live from our casting stage!
          </div>
          <div className="text-[14px] font-semibold">
            <span className="text-primary font-semibold uppercase">
              Women in the Metaverse
            </span>
            <br />
            Learn more about evloving role of women in the metaverse and nfts
          </div>
        </div>
      </div>
      <div className="text-primary p-4 text-2xl">SEE MORE</div>
    </div>
  );
}

export default Card