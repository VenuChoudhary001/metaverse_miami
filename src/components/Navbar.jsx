import React from 'react'
import Logo from '../assets/images/logo.png'
const Navbar = ({ show, setShow }) => {
  return (
    <>
      <div className="container  flex justify-between  space-x-8">
        <img
          src={Logo}
          alt="Metaverse Miami"
          className="max-w-[200px] xl:max-w-[250px] object-contain"
        />
        <div className="hidden lg:flex w-full justify-center space-x-4">
          <div className="hover:text-secondary font-light">HOME</div>
          <div className="hover:text-secondary font-light">SPEAKERS</div>
          <div className="hover:text-secondary font-light">CALENDAR</div>
          <div className="hover:text-secondary font-light">SPONSOR</div>
          <div className="hover:text-secondary font-light">COMMUNITY</div>
          <div className="hover:text-secondary font-light">MARKETPLACE</div>
          <div className="hover:text-secondary font-light">CONTACT</div>
        </div>
        <div className="lg:hidden ">
       
            <svg
              onClick={() => setShow(!show)}
              width="20"
              height="15"
              viewBox="0 0 20 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="cursor-pointer"
            >
              <path
                d="M0 1C0 0.734784 0.105357 0.48043 0.292893 0.292893C0.48043 0.105357 0.734784 0 1 0H19C19.2652 0 19.5196 0.105357 19.7071 0.292893C19.8946 0.48043 20 0.734784 20 1C20 1.26522 19.8946 1.51957 19.7071 1.70711C19.5196 1.89464 19.2652 2 19 2H1C0.734784 2 0.48043 1.89464 0.292893 1.70711C0.105357 1.51957 0 1.26522 0 1V1ZM0 7.032C0 6.76678 0.105357 6.51243 0.292893 6.32489C0.48043 6.13736 0.734784 6.032 1 6.032H19C19.2652 6.032 19.5196 6.13736 19.7071 6.32489C19.8946 6.51243 20 6.76678 20 7.032C20 7.29722 19.8946 7.55157 19.7071 7.73911C19.5196 7.92664 19.2652 8.032 19 8.032H1C0.734784 8.032 0.48043 7.92664 0.292893 7.73911C0.105357 7.55157 0 7.29722 0 7.032V7.032ZM1 12.064C0.734784 12.064 0.48043 12.1694 0.292893 12.3569C0.105357 12.5444 0 12.7988 0 13.064C0 13.3292 0.105357 13.5836 0.292893 13.7711C0.48043 13.9586 0.734784 14.064 1 14.064H19C19.2652 14.064 19.5196 13.9586 19.7071 13.7711C19.8946 13.5836 20 13.3292 20 13.064C20 12.7988 19.8946 12.5444 19.7071 12.3569C19.5196 12.1694 19.2652 12.064 19 12.064H1Z"
                fill="white"
              />
            </svg>
          
        </div>
      </div>
    </>
  );
};







export default Navbar