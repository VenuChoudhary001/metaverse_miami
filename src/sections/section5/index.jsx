import React from 'react'
import Img from '../../assets/images/sketch.jpg'
import { GLOBAL_CONTEXT } from "../../layout";

const Section5 = () => {
     const { magic, noMagic } = React.useContext(GLOBAL_CONTEXT);

  return (
    <div className="container flex min-h-[700px] flex-col justify-center gap-10">
      <div
        onMouseEnter={magic}
        onMouseLeave={noMagic}
        className="text-4xl md:text-3xl lg:text-5xl xl:text-7xl"
      >
        Seminole <span className="text-primary"> Hard Rock</span> Hotel & Casino{" "}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center">
        <div className="flex flex-col md:text-sm lg:text-lg gap-12">
          <img
            src={Img}
            alt=""
            className="md:hidden block w-full object-contain"
          />
          <div className="flex flex-col gap-4">
            <div className="">Hollywood, FL</div>
            <div className="">
              <span className="text-primary">
                Seminole Hard Rock Hotel & Casino Hollywood{" "}
              </span>{" "}
              is a <span className="text-primary">Four Diamond</span>-rated
              resort minutes from South Florida's sunny beaches! When choosing a
              venue for
              <span className="text-primary"> Metaverse Miam</span> we knew
              there was no choice that made more sense for us than the{" "}
              <span className="text-primary">Hard Rock</span> . We wanted to
              deliver the best experience, in the most luxurious surroundings,
              with a team that knows how to deliver.
            </div>
            <div className="">
              <span className="text-primary">Metaverse Miami</span> negotiated a
              limited room rate of only{" "}
              <span className="text-primary">$199 </span>
              per night! These rooms will go quickly so make your reservation
              today!
            </div>
          </div>

          <button className="bg-primary rounded  font-bold w-[250px] text-xl h-12">
            MAKE RESERVATION
          </button>
        </div>
        <img
          src={Img}
          alt=""
          className="hidden md:block w-full object-contain"
        />
      </div>
    </div>
  );
}

export default Section5