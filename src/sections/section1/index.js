import React from 'react'
import { GLOBAL_CONTEXT } from '../../layout'

const Header = () => {
    const {magic,noMagic}=React.useContext(GLOBAL_CONTEXT);
  return (
    <>
    <div className='header sticky top-0 left-0 w-full'>
      <div className='container md:h-8 flex flex-col md:flex-row py-2 space-x-4 justify-center items-center'>
         <div className="text-[12px] md:text-sm font-normal text-center ">METAVERSE MIAMI GENESIS PASS IS CURRENTLY MINTING</div>
         <button onMouseEnter={magic} onMouseLeave={noMagic} className='bg-black text-secondary text-sm md:py-1 font-light rounded-full px-3'>CONNECT</button>
      </div>
    </div>
    </>
  )
}

export default Header