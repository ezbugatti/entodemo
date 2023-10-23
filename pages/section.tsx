import React from 'react'

const Section = () => {
  return (
    <div className="news-section">
      <div className="pt-20 pb-8 px-4">
        <div className="section-title text-2xl text-bold text-center uppercase mb-6">
          <span>Мэдээ мэдээлэл</span>
          
        </div>
   
        
      
        <button className="float-right relative inline-flex items-center justify-items-center p-0.5 overflow-hidden text-xs font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-500 to-teal-500 group-hover:from-teal-500 group-hover:to-teal-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-teal-200 dark:focus:ring-teal-800">
          <span className="relative px-4 py-1 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 ">
              Бүгдийг үзэх
          </span>
        </button>
        </div>

        
       

     
        <div className="news-section__cards">
          
          <div className="news-section__news-cards md:flex md:flex-1 md:grid-cols-1 w-full gap-6  px-6 ">
            
          <div z-0 className="news-section__news-card">
            <div z-0 role="img" className="news-section__news-card-imageWrapper focus:outline-none cursor-pointer relative overflow-hidden">
                                            <img z-0 role="img" aria-label="gaming" className="w-full transition-all object-cover  transform ease-in-out hover:scale-105 duration-700 focus:outline-none " src="medee1.jpg" alt="games" />
                                            <div className="py-2 px-4 w-full flex justify-between bg-teal-700 news-section__news-card-text">
                                                <p z-0 className="focus:outline-none  text-sm text-white font-semibold tracking-wide">Bruce Wayne</p>
                                                <p z-0 className="focus:outline-none text-sm text-white font-semibold tracking-wide">13TH Oct, 2020</p>
                                            </div>
                <div className="news-section__news-card-text">
                <div className="news-section__featured-card-title">
                  Storie / Ambassadors
                </div>
                <div className="news-section__news-card-title card-title">
                  Imposter Syndrome and Battling the no
                </div>
                <a href="#" className="readmore group">
                  <span className="readmores">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  </span>
                  <span className="readmorespan ease">Цааш унших...</span>
                  <span className="relative invisible ease">Цааш унших...</span>
                  </a>
                
              </div>
                                        </div>
                                        </div>
                                        <div z-0 className="news-section__news-card">
            <div z-0 role="img" className="news-section__news-card-imageWrapper focus:outline-none cursor-pointer relative overflow-hidden">
                                            <img z-0 role="img" aria-label="gaming" className="transition-all object-cover  transform ease-in-out hover:scale-105 duration-700 focus:outline-none w-full" src="medee1.jpg" alt="games" />
                                            <div className="py-2 px-4 w-full flex justify-between bg-teal-700 news-section__news-card-text">
                                                <p z-0 className="focus:outline-none  text-sm text-white font-semibold tracking-wide">Bruce Wayne</p>
                                                <p z-0 className="focus:outline-none text-sm text-white font-semibold tracking-wide">13TH Oct, 2020</p>
                                            </div>
                <div className="news-section__news-card-text">
                <div className="news-section__featured-card-title">
                  Storie / Ambassadors
                </div>
                <div className="news-section__news-card-title card-title">
                  Imposter Syndrome and Battling the no
                </div>
                <a href="#" className="readmore group">
                  <span className="readmores">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  </span>
                  <span className="readmorespan ease">Цааш унших...</span>
                  <span className="relative invisible ease">Цааш унших...</span>
                  </a>
                
              </div>
                                        </div>
                                        </div>


            <div z-0 className="news-section__news-card">
            <div z-0 role="img" className="news-section__news-card-imageWrapper focus:outline-none cursor-pointer relative overflow-hidden">
                                            <img z-0 role="img" aria-label="gaming" className="transition-all object-cover  transform ease-in-out hover:scale-105 duration-700 focus:outline-none w-full" src="medee1.jpg" alt="games" />
                                            <div className="py-2 px-4 w-full flex justify-between bg-teal-700 news-section__news-card-text">
                                                <p z-0 className="focus:outline-none  text-sm text-white font-semibold tracking-wide">Bruce Wayne</p>
                                                <p z-0 className="focus:outline-none text-sm text-white font-semibold tracking-wide">13TH Oct, 2020</p>
                                            </div>
                <div className="news-section__news-card-text">
                <div className="news-section__featured-card-title">
                  Storie / Ambassadors
                </div>
                <div className="news-section__news-card-title card-title">
                  Imposter Syndrome and Battling the no
                </div>
                <a href="#" className="readmore group">
                  <span className="readmores">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  </span>
                  <span className="readmorespan ease">Цааш унших...</span>
                  <span className="relative invisible ease">Цааш унших...</span>
                  </a>
                
              </div>
                                        </div>
                                        </div>


           
            
           
          </div>
        </div>
      </div>
  )
}

export default Section