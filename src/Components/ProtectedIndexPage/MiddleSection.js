


// import React from 'react';
// import HelpYou from './HelpYou';
// import JoinLiveClass from './JoinLiveClass';
// import AdminSupport from './AdminSupport';
// import { TypeAnimation } from "react-type-animation";
// import "../../styles/blink-animation.css";

// const MiddleSection = () => {
//   return (
//     <section className="bg-blue-500 min-h-screen flex items-center justify-center">
//       <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row">
        
//         {/* Left Column */}
//         <div className="lg:w-1/2 flex flex-col items-center justify-center text-center mb-8 lg:mb-0">
//           {/* Blinking Widget */}
//           <p className="text-gray-400/80 font-semibold border-b border-gray-400/50 pb-0.5 w-fit tracking-[0.2em] text-[13px] mb-12">
//             <span className="">l e a r n i n g</span>
//             <span className="bg-orange-400 h-2 w-2 rounded-full inline-block mx-4 animate-blink"></span>
//             <span className="">a n d</span>
//             <span className="bg-orange-400 h-2 w-2 rounded-full inline-block mx-4 animate-blink"></span>
//             <br />
//             <span className="">e a r n i n g</span>
//             <span className="bg-orange-400 h-2 w-2 rounded-full inline-block mx-4 animate-blink"></span>
//             <span>p l a t f o r m</span>
//             <span className="bg-orange-400 h-2 w-2 rounded-full inline-block mx-4 animate-blink"></span>
//           </p>
//           <h1 className="lg:text-6xl text-5xl mb-7 lg:leading-[4.2rem] leading-[3.7rem] font-light">
//             Advice E- <br />
//             learning
//             <br />
//             <span className="text-purple-dark font-semibold">
//               E-
//               <TypeAnimation
//                 sequence={[
//                   "Learning",
//                   2000, // Waits 2s
//                   "Earning",
//                   2000, // Waits 2s
//                 ]}
//                 wrapper="span"
//                 speed={40} // 40 Km/h
//                 cursor={true}
//                 repeat={Infinity}
//               />
//             </span>
//             <br />
//             Platform
//           </h1>

//           {/* Description */}
//           <p className="text-[18px] text-[#FFFFFFB8] mb-12">
//             The main objective of this setup is how to use online social media
//             in our society and how to earn online without wasting valuable time
//             from online social media.
//           </p>
//         </div>

//         {/* Right Column */}
//         <div className="lg:w-1/2 flex flex-col space-y-8">
//           {/* Component 1 */}
//           <HelpYou />
//           {/* Component 2 */}
//           <JoinLiveClass />
//           {/* Component 3 */}
//           <AdminSupport />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default MiddleSection;

import React from 'react';
import HelpYou from './HelpYou';
import JoinLiveClass from './JoinLiveClass';
import AdminSupport from './AdminSupport';
import { TypeAnimation } from "react-type-animation";
import "../../styles/blink-animation.css";

const MiddleSection = () => {
  return (
    <section className="bg-purple-light min-h-screen flex items-center justify-center"> {/* Adjusted background color */}
      <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row">
        
        {/* Left Column */}
        <div className="lg:w-1/2 flex flex-col items-center justify-center text-center font-semibold mb-8 lg:mb-0">
          {/* Blinking Widget */}
          <p className=" text-gray-400 font-semibold border-b border-gray-400/50 pb-0.5 w-fit tracking-[0.2em] text-[13px]  mb-12">
            <span className="">l e a r n i n g</span>
            <span className="bg-orange-400 h-2 w-2 rounded-full inline-block mx-4 animate-blink "></span>
            <span className="">a n d</span>
            <span className="bg-orange-400 h-2 w-2 rounded-full inline-block mx-4 animate-blink "></span>
            <br />
            <span className="">e a r n i n g</span>
            <span className="bg-orange-400 h-2 w-2 rounded-full inline-block mx-4 animate-blink "></span>
            <span>p l a t f o r m</span>
            <span className="bg-orange-400 h-2 w-2 rounded-full inline-block mx-4 animate-blink "></span>
          </p>
          <h1 className="lg:text-6xl text-4xl mb-5 lg:leading-[4.2rem] leading-[3.7rem] font-light text-purple-dark">
            Advice E- <br />
            learning
            <br />
            <span className="font-semibold">
              E-
              <TypeAnimation
                sequence={[
                  "Learning",
                  2000, // Waits 2s
                  "Earning",
                  2000, // Waits 2s
                ]}
                wrapper="span"
                speed={40} 
                cursor={true}
                repeat={Infinity}
              />
            </span>
            <br />
            Platform
          </h1>

          {/* Description */}
          <p className="text-[16px] text-gray-400 mb-10 max-w-md">
            The main objective of this setup is how to use online social media
            in our society and how to earn online without wasting valuable time
            from online social media.
          </p>
        </div>

        {/* Right Column */}
        <div className="lg:w-1/2 flex flex-col space-y-6">
          {/* Component 1 */}
          <HelpYou />
          {/* Component 2 */}
          <JoinLiveClass />
          {/* Component 3 */}
          <AdminSupport />
        </div>
      </div>
    </section>
  );
};

export default MiddleSection;
