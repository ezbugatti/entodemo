// import { useEffect, useState } from "react";

// const logos1 = [
//   "/partner1.png",
//   "/partner2.png",
//   "/partner3.png",
//   "/partner4.png",
//   "/partner5.png",
// ];
// const logos2 = [
//   "/partner6.png",
//   "/partner7.png",
//   "/partner8.png",
//   "/partner9.png",
//   "/partner10.png",
// ];
// const logos3 = [
//   "/partner11.png",
//   "/partner12.png",
//   "/partner13.png",
//   "/partner14.png",
//   "/partner15.png",
// ];

// const LogoCarousel = () => {
//   const [currentLogos, setCurrentLogos] = useState(logos1);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentLogos((prevLogos) => (prevLogos === logos1 ? logos2 : logos1));
//     }, 1500); // Change logos every 3 seconds (3000ms)

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <>
//       <div className="pb-12 px-4">
//         <div className="section-title text-2xl text-bold text-center uppercase">
//           <span>бизнес хамтрагчид</span>
//         </div>
//       </div>
//       <div className="overflow-hidden mt-10 pl-14">
//         <div className="flex transition transform 1s ease-in-out">
//           {currentLogos.map((logo, index) => (
//             <div key={index} className="flex flex-auto w-50 h-auto mr-5">
//               <img src={logo} alt={`Partner Logo ${index + 1}`} />
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };
import React from "react";

const LogoCarousel = () => {
  return (
    <div className="container mx-auto pt-16">
      <div className="w-11/12 xl:w-2/3 lg:w-2/3 md:w-2/3 mx-auto sm:mb-10 mb-16">
        <div className="px-4">
          <div className="section-title text-2xl text-bold text-center uppercase">
            <span>бизнес хамтрагчид</span>
          </div>
        </div>
      </div>
      <div className="xl:py-16 lg:py-16 md:py-16 sm:py-16 px-15 flex flex-wrap">
        <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-b lg:border-b xl:border-r lg:border-r :border-r border-gray-200 xl:pb-10 pb-16 items-center ">
          <img
            tabIndex="0"
            className="focus:outline-none grayscale "
            src="/partner1.png"
            alt="Adidas"
            role="img"
          />
        </div>
        <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-b lg:border-b xl:border-r lg:border-r border-gray-200 xl:pb-10 pb-16 items-center">
          <img
            tabIndex="0"
            className="focus:outline-none grayscale"
            src="/partner2.png"
            alt="Chanel"
            role="img"
          />
        </div>
        <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-b lg:border-b border-gray-200 xl:pb-10 pb-16 pt-4 items-center">
          <img
            tabIndex="0"
            className="focus:outline-none grayscale"
            src="/partner3.png"
            alt="Nike"
            role="img"
          />
        </div>
        <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center lg:border-b xl:border-b lg:border-l xl:border-l border-gray-200 xl:pb-10 pb-16 items-center">
          <img
            tabIndex="0"
            className="focus:outline-none grayscale"
            src="/partner4.png"
            alt="Toyota"
            role="img"
          />
        </div>
        <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-r lg:border-r border-gray-200 xl:pt-10 items-center">
          <img
            tabIndex="0"
            className="focus:outline-none grayscale"
            src="/partner5.png"
            alt="GS1"
            role="img"
          />
        </div>
        <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-r lg:border-r border-gray-200 xl:pt-10 items-center">
          <img
            tabIndex="0"
            className="focus:outline-none grayscale"
            src="/partner6.png"
            alt="BlackBerry"
            role="img"
          />
        </div>
        <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:pt-10 lg:pt-10 md:pt-2 pt-16">
          <img
            tabIndex="0"
            className="focus:outline-none grayscale"
            src="/partner7.png"
            alt="Mini"
            role="img"
          />
        </div>
        <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-l lg:border-l border-gray-200 xl:pt-10 lg:pt-10 md:pt-2 pt-16">
          <img
            tabIndex="0"
            className="focus:outline-none grayscale"
            src="/partner8.png"
            alt="Honda"
            role="img"
          />
        </div>
      </div>
    </div>
  );
};

export default LogoCarousel;
