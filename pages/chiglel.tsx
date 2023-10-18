import React from 'react'

const Chiglel = () => {
  return (
    <div className="news-section">
      <div className="pt-20 pb-12 px-10">
        <div className="section-title text-2xl text-bold text-center uppercase">
          <span>Үйл ажиллагаа</span>
          
        </div>
   
        
      
        </div>

        
       
     
     
        <div className="news-section__cards">
          
          <div className="news-section__news-cards md:flex md:flex-1 md:grid-cols-1 mx-40 gap-4">
            
            <div className="news-section__news-card">
              <div className="news-section__news-card-imageWrapper transform hover:scale-105 transition-all duration-700 ease-in-out">
                <img className=" rounded-lg" src="import1.jpg" alt=""/>
              </div>
              <div className="news-section__news-card-text">
                <div className="news-section__featured-card-title">
                  ИМПОРТ
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
                <img className="rounded-lg" src="medee1.jpg" alt=""/>
              </div>
              <div className="news-section__news-card-text">
                <div className="news-section__featured-card-title">
                  ЭМ, ЭМНЭЛГИЙН ХЭРЭГСЭЛ
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
                <img className="h-96 object-cover rounded-lg" src="medee1.jpg" alt=""/>
              </div>
              <div className="news-section__news-card-text">
                <div className="news-section__featured-card-title">
                  ЭМИЙН САН
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

export default Chiglel