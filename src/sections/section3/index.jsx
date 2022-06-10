import React from 'react'
import Img from '../../assets/images/tix.jpg'
const Section3 = () => {
  return (
    <div className="container grid grid-cols-1 items-center gap-10 lg:min-h-[700px] xl:min-h-[900px] md:grid-cols-2">
      <main className="flex flex-col space-y-2">
        <img src={Img} alt="" className="w-full object-contain" />
        <div className=" font-light text-[10px] md:text-sm text-center md:text-left">
          *Metaverse miami will hold 200 tickets for compensation,rewards and
          giveaways.This will result in a total supply of 3,600 tickets
        </div>
      </main>
      <main className="flex flex-col gap-4 lg:gap-10">
        <div className="font-normal text-4xl md:text-3xl lg:text-4xl xl:text-5xl">
          The <span className="text-primary">Genesis Pass</span> NFT
        </div>
        <div className="font-normal flex flex-col gap-4 lg:gap-6  xl:text-xl">
        <div className="">

          Our <span className="text-primary"> GENESIS PASS</span> will be minted
          as an NFT (non-fungible token) on the Ethereum blockchain. There will
          be a total of 3,600 passes available during this minting process, 600
          of which will be our special VIP pass with additional benefits. These
          VIP passes will be randomized within the ticket minting pool and will
          be revealed during our reveal party. This means everyone who mints has
          an equal chance of scoring a VIP pass.
        </div>
          <div className="">

          Additionally, you may sell your ticket on the open market via,
          numerous marketplace platforms such as OpenSeaTM or LooksRareTM. This
          means that you could potentially recover your entire ticket price
          after the event!
          </div>
          <div className="">
            Finally, if you cannot make it to{" "}
          <span className="text-primary">Metaverse Miami</span> this year, next
          year, etc........why not rent your ticket to someone else so they can
          attend <span className="text-primary">Metaverse Miami</span>? We will
          have a dedicated rental system for those who want us to handle this
          aspect for them!
            </div> 
          <div className="">

          YOU <span className="text-primary">OWN</span> your
          experience!
          </div>
        </div>
      </main>
    </div>
  );
}

export default Section3