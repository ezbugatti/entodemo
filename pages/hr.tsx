import React from "react";
import Layout from "./layout";
import { BsFillCheckCircleFill } from "react-icons/bs";
import TextReveal from "./components/textReveal";
const hr = () => {
  return (
    <Layout>
      <div className="flex h-96 items-center justify-center bg-gradient-to-tr to-teal-300 from-cyan-700 p-10">
          <div className="w-max">
            <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-5xl text-white font-bold">
             Бидэнтэй Нэгдэхийг Хүсвэл
            </h1>
            <TextReveal/>
          </div>
        </div>
      <div className="wrapper">
        
      <div className="w-full flex flex-1 ">
      
        <div className="w-3/6 ">
          <img className="rounded-2xl" src="hrm.jpg" alt="zaxiral"/>
         
          </div>

          <div className="w-3/6 pl-10 ">
          <h1 className="justify-between text-2xl text-gray-900 font-semibold "> АЖИЛЛАХ ТААТАЙ ОРЧИН</h1>
          <ul className="text-base text-gray-900 pt-24 ">
            <li className="flex flex-1 pb-2 items-center "><BsFillCheckCircleFill color="green" className="mr-8 "/> Чадварлаг мэргэжлийн нөхөрсөг хамт олон</li>
            <li className="flex flex-1 pb-2 items-center "><BsFillCheckCircleFill color="green"  className="mr-8"/> Ажилтан бүрт өсөн дэвших боломж адил тэгш олгогдсон</li>
            <li className="flex flex-1  pb-2 items-center"><BsFillCheckCircleFill color="green"  className="mr-8"/> Гүйцэтгэлд тулгуурласан урамшууллын тогтолцоотой</li>
            <li className="flex flex-1 pb-2 items-center"><BsFillCheckCircleFill color="green"  className="mr-8"/> Бизнесийн бусад салбарт хөрвөн ажиллах боломж</li>
            <li className="flex flex-1 pb-2 items-center "><BsFillCheckCircleFill color="green"  className="mr-8"/> Өрсөлдөхүйц цалин урамшуулал</li>
            
          </ul>
         
          </div>
        </div>
        </div>
        <div className="w-full bg-gray-50  flex flex-1">
        
          <div className="w-3/6 pl-10 ">
          <h1 className="text-center text-2xl text-gray-900 font-semibold mt-4 "> АЖИЛЛАХ ТААТАЙ ОРЧИН</h1>
          <ul className="w-full text-base text-gray-900 pt-24 ">
            <li className="flex flex-1 pb-2 items-center "><BsFillCheckCircleFill color="green" className="mr-8 "/> Чадварлаг мэргэжлийн нөхөрсөг хамт олон</li>
            <li className="flex flex-1 pb-2 items-center "><BsFillCheckCircleFill color="green"  className="mr-8"/> Ажилтан бүрт өсөн дэвших боломж адил тэгш олгогдсон</li>
            <li className="flex flex-1  pb-2 items-center"><BsFillCheckCircleFill color="green"  className="mr-8"/> Гүйцэтгэлд тулгуурласан урамшууллын тогтолцоотой</li>
            <li className="flex flex-1 pb-2 items-center"><BsFillCheckCircleFill color="green"  className="mr-8"/> Бизнесийн бусад салбарт хөрвөн ажиллах боломж</li>
            <li className="flex flex-1 pb-2 items-center "><BsFillCheckCircleFill color="green"  className="mr-8"/> Өрсөлдөхүйц цалин урамшуулал</li>
            
          </ul>
         
          </div>
          <div className="w-3/6 ">
          <img className="rounded-2xl" src="hrm.jpg" alt="zaxiral"/>
         
          </div>
        </div>
        

        
      <div className="wrapper">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-14"> 
  
        
        <div className="w-full transform hover:-translate-y-5 transition-all duration-700 ">
          <div className="cursor-pointer px-8 py-6">
            <span className="font-bold text-dark bg-gray-300 rounded-3xl py-2 px-3">1</span>
            <img src="https://www.monos.mn/assets/busad/hr-icon1.gif" className="h-96 w-auto object-fill fill-current" alt="" />
            <p className="text-dark text-lg font-bold my-2">Ажлын байр зарлах</p>
            <p>Та манай ажлын байрны мэдээллийг “АЖЛЫН БАЙР” цэснээс авна уу!</p>
          </div>
        </div>
        <div className="w-full transform hover:-translate-y-5 transition-all duration-700">
          <div className=" cursor-pointer px-8 py-6 ">
            <span className="font-bold text-dark bg-gray-300 rounded-3xl py-2 px-3">2</span>
            <img src="https://www.monos.mn/assets/busad/hr-icon2.gif" className="h-96 w-auto object-fill fill-current" alt="" />
            <p className="text-dark text-lg font-bold my-2">АНКЕТ ХҮЛЭЭН АВАХ</p>
            <p>Та манай ажлын байрны мэдээллийг “АЖЛЫН БАЙР” цэснээс авна уу!</p>
          </div>
        </div>
        <div className="w-full transform hover:-translate-y-5 transition-all duration-700">
          <div className=" cursor-pointer px-8 py-6">
            <span className="font-bold text-dark bg-gray-300 rounded-3xl py-2 px-3">3</span>
            <img src="https://www.monos.mn/assets/busad/hr-icon3.gif" className="h-96 w-auto object-fill fill-current" alt="" />
            <p className="text-dark text-lg font-bold my-2">АНКЕТЫН ШАЛГАРУУЛАЛТ</p>
            <p>Та манай ажлын байрны мэдээллийг “АЖЛЫН БАЙР” цэснээс авна уу!</p>
          </div>
        </div>
        <div className="w-full transform hover:-translate-y-5 transition-all duration-700" >
          <div className="cursor-pointer px-8 py-6 ">
            <span className="font-bold text-dark bg-gray-300 rounded-3xl py-2 px-3">4</span>
            <img src="https://www.monos.mn/assets/busad/hr-icon4.gif" className="h-96 w-auto object-fill fill-current" alt="" />
            <p className="text-dark text-lg font-bold my-2 ">АНХАН ШАТНЫ ЯРИЛЦЛАГА</p>
            <p>Та манай ажлын байрны мэдээллийг “АЖЛЫН БАЙР” цэснээс авна уу!</p>
          </div>
        </div>
        <div className="w-full transform hover:-translate-y-5 transition-all duration-700">
          <div className="cursor-pointer px-8 py-6 ">
            <span className="font-bold text-dark bg-gray-300 rounded-3xl py-2 px-3">5</span>
            <img src="https://www.monos.mn/assets/busad/hr-icon6.gif" className="h-96 w-auto object-fill fill-current" alt="" />
            <p className="text-dark text-lg font-bold my-2">ХОЁРДУГААР ШАТНЫ ЯРИЛЦЛАГА</p>
            <p>Та манай ажлын байрны мэдээллийг “АЖЛЫН БАЙР” цэснээс авна уу!</p>
          </div>
        </div>
        <div className="w-full transform hover:-translate-y-5 transition-all duration-700">
          <div className="cursor-pointer px-8 py-6 ">
            <span className="font-bold text-dark bg-gray-300 rounded-3xl py-2 px-3">6</span>
            <img src="https://www.monos.mn/assets/busad/hr-icon7.gif" className="h-96 w-auto object-fill fill-current" alt="" />
            <p className="text-dark text-lg font-bold my-2">ХӨДӨЛМӨРИЙН ГЭРЭЭ ХИЙХ</p>
            <p>Шалгаруулалтад тэнцэж, шаардлага хангасан ажил горилогчид ажлын санал тавих, гэрээ хийх</p>
          </div>
        </div>

        </div>
        </div>
        
    </Layout>
  );
};

export default hr;
