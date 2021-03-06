import React from 'react'

import Section2 from './sections/section2';
import Section3 from './sections/section3';
import Section4 from './sections/section4';
import Section5 from './sections/section5';
import Section6 from './sections/section6';
import Section7 from './sections/section7';

function App() {

  const [show,setShow]=React.useState(false);

  return (
    <>
      {show && (
        <div className="fixed  w-screen h-screen ham top-0 left-0 z-20">
          <div className="grid grid-rows auto-rows-auto gap-10">
            <div className="text-right ml-auto p-4 ">
              <svg
              onClick={()=>setShow(false)}
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.95625 4.95625C5.26098 4.65161 5.67423 4.48047 6.10512 4.48047C6.53601 4.48047 6.94926 4.65161 7.254 4.95625L13 10.7022L18.746 4.95625C19.0525 4.66024 19.463 4.49645 19.889 4.50015C20.3151 4.50385 20.7227 4.67475 21.024 4.97604C21.3252 5.27733 21.4961 5.6849 21.4998 6.11097C21.5035 6.53704 21.3398 6.94752 21.0437 7.254L15.2977 13L21.0437 18.746C21.3398 19.0525 21.5035 19.463 21.4998 19.889C21.4961 20.3151 21.3252 20.7227 21.024 21.024C20.7227 21.3252 20.3151 21.4961 19.889 21.4998C19.463 21.5035 19.0525 21.3398 18.746 21.0437L13 15.2977L7.254 21.0437C6.94752 21.3398 6.53704 21.5035 6.11097 21.4998C5.6849 21.4961 5.27733 21.3252 4.97604 21.024C4.67475 20.7227 4.50385 20.3151 4.50015 19.889C4.49645 19.463 4.66024 19.0525 4.95625 18.746L10.7022 13L4.95625 7.254C4.65161 6.94926 4.48047 6.53601 4.48047 6.10512C4.48047 5.67423 4.65161 5.26098 4.95625 4.95625V4.95625Z"
                  fill="white"
                />
              </svg>
            </div>
            <div onClick={()=>setShow(false)} className="flex text-white flex-col font-light text-xl items-center gap-5 w-full justify-center">
              <div className="hover:text-secondary">HOME</div>
              <div className="hover:text-secondary">SPEAKERS</div>
              <div className="hover:text-secondary">CALENDAR</div>
              <div className="hover:text-secondary">SPONSOR</div>
              <div className="hover:text-secondary">COMMUNITY</div>
              <div className="hover:text-secondary">MARKETPLACE</div>
              <div className="hover:text-secondary">CONTACT</div>
            </div>
          </div>
        </div>
      )}
       

        <Section2 show={show} setShow={setShow} />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
      
  
    </>
  );
}

export default App;
