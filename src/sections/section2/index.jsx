import React from 'react'
import Navbar from '../../components/Navbar'
import Header from '../section1';
import { GLOBAL_CONTEXT } from '../../layout';
const Section2 = ({show,setShow}) => {
    let address = " 0xbB3eC6DDFD65C209Ca5c33381aA362048b10865F";
     const { magic, noMagic } = React.useContext(GLOBAL_CONTEXT);
  return (
    <>
      <Header />
      <div className="grid container grid-rows auto-rows-auto gap-10">
        <Navbar show={show} setShow={setShow} />
        <div className="grid grid-cols-1 ">
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-8">
            <div className="text-secondary font-medium text-lg md:text-xl flex flex-col md:flex-row  md:space-x-4">
              <div className="">Aug 1-3, 2022 &nbsp;&nbsp;-</div>

              <div className="">Seminole Hard Rock Casino</div>
            </div>
            <div className="text-3xl sm:text-5xl lg:text-5xl xl:text-7xl font-light">
              <span className="text-primary ">THE</span> Metaverse And <br />
              NFT Conferance <br /> Owned By{" "}
              <span className="text-primary ">YOU</span>
            </div>
            <main className="flex flex-col md:flex-row gap-4">
              <div className="bg-dark text-primary font-semibold rounded h-10 w-[200px] sm:w-[300px] flex items-center justify-between px-2">
                <div className="xl:text-xl">MINT QUANTITY</div>
                <select
                  onMouseEnter={magic}
                  onMouseLeave={noMagic}
                  
                  className="bg-transparent text-white outline-none "
                >
                  <option defaultValue={true}>1</option>
                </select>
              </div>
              <div
                onMouseEnter={magic}
                onMouseLeave={noMagic}
                className="bg-primary xl:text-xl font-bold rounded h-10  flex items-center px-4"
              >
                MINT PASS .3 ETH
              </div>
            </main>
            <div className="px-2 font-normal text-sm xl:text-lg">
              <span className="font-semibold">Connected :&nbsp;</span>
              {`${address.substring(0, address.length - 20)}`}....
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section2