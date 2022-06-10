import React from 'react'
import { GLOBAL_CONTEXT } from "../../layout";

import I1 from "../../assets/images/logo.png";
import I2 from "../../assets/images/headerbg.jpg";
import I3 from "../../assets/images/sketch.jpg";
import I4 from "../../assets/images/tix.jpg";
const ARRAY = [
  {
    url: I1,
  },
  {
    url1: I2,
    url2: I3,
    url3: I4,
    url4: I1,
  },
  {
    url: I1,
  },
];
export const Grid = ({ item }) => {
  return (
    <>
      <div className="grid grid-rows-2 gap-1">
        <div className="grid grid-cols-2 gap-1">
          <div className="bg-gray-500 h-[200px] w-full">
            <img src={item.url1}  alt="" className="w-full h-full object-cover" />
          </div>
          <div className="bg-gray-500 h-[200px] w-full">
            <img src={item.url2} alt="" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-1">
          <div className="bg-gray-500 h-[200px] w-full">
            <img src={item.url3} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="bg-gray-500 h-[200px] w-full">
            <img src={item.url4} alt="" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </>
  );
};

export const LGrid = ({ item }) => {
  return (
    <>
      <div className="grid grid-cols-1">
        <div className="bg-gray-500 h-full w-full">
          <img src={item.url} alt="" className="w-full h-full object-cover" />
        </div>
      </div>
    </>
  );
};
const Section4 = () => {
      const { magic, noMagic } = React.useContext(GLOBAL_CONTEXT);
  return (
    <>
      <div className="container flex flex-col gap-10">
        <div
          onMouseEnter={magic}
          onMouseLeave={noMagic}
          className="text-4xl md:text-3xl lg:text-4xl xl:text-7xl font-light"
        >
          <span className="text-primary">Speakers</span>, Panelists, Performers
        </div>
        <div className="md:text-lg">
          We are proud to present some of the brightest builders, community
          leaders and innovators in the space !
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
          {ARRAY.map((item,i) => {
            if (i % 2 === 0) {
              return (
                <>
                  <LGrid key={i} item={item} />
                </>
              );
              
            }
            return <Grid key={i} item={item} />;
          })}
        </div>
      </div>
    </>
  );
}

export default Section4