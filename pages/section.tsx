import React from 'react'

const Section = () => {
  return (
    <div className="news-section">
      <div className="pt-20 pb-12 px-4">
        <div className="section-title text-2xl text-bold text-center uppercase">
          <span>Мэдээ мэдээлэл</span>
          
        </div>
   
        
      
        <button className="float-right relative inline-flex items-center justify-items-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-500 to-teal-500 group-hover:from-teal-500 group-hover:to-teal-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-teal-200 dark:focus:ring-teal-800">
          <span className="relative px-6 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 ">
              Бүгдийг үзэх
          </span>
        </button>
        </div>

        
       
     
     
        <div className="news-section__cards">
          
          <div className="news-section__news-cards md:flex md:flex-1 md:grid-cols-1 ">
            
            <div className="news-section__news-card">
              <div className="news-section__news-card-imageWrapper transform hover:scale-105 transition-all duration-700 ease-in-out">
                <img src="medee1.jpg" alt=""/>
              </div>
              <div className="news-section__news-card-text">
                <div className="news-section__featured-card-title">
                  Хүүхдийн арьс арчилгаа
                </div>
                <div className="news-section__news-card-text">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. At quaerat nisi ut perspiciatis cum eos, quasi sapiente laudantium eveniet laborum.
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
            <div className="news-section__news-card">
              <div className="news-section__news-card-imageWrapper transform hover:scale-105 transition-all duration-700 ease-in-out">
                <img src="medee1.jpg" alt=""/>
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
            <div className="news-section__news-card">
              <div className="news-section__news-card-imageWrapper transform hover:scale-105 transition-all duration-700 ease-in-out ">
                <img src="medee1.jpg" alt=""/>
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
  )
}

export default Section