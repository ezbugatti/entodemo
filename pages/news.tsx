import React from 'react'
import Layout from './layout'

const news = () => {
  return (
    <Layout>
    <div id="blog" className="bg-gray-100 px-4 xl:px-4 py-14">
                    <div className="mx-auto container">
                        <span role="contentinfo">
                        <h1 z-0 className="focus:outline-none text-center text-3xl lg:text-5xl tracking-wider text-gray-900">Мэдээ мэдээлэл</h1>
                    </span>
                        <div z-0  aria-label="Group of cards" className="focus:outline-none mt-12 lg:mt-24">
                            <div  className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8">
                                <div z-0 className="focus:outline-none cursor-pointer relative overflow-hidden" aria-label="card 1">
                                    <img role="img" aria-label="code editor" z-0 className="transition-all object-cover  transform ease-in-out hover:scale-105 duration-700 focus:outline-none w-full" src="https://cdn.tuk.dev/assets/components/111220/Blg-6/blog(1).png" alt="code editor" />
                                    <div className="py-4 px-8 w-full flex justify-between bg-teal-700">
                                        <p  z-0 className="focus:outline-none text-sm text-white font-semibold tracking-wide">Bruce Wayne</p>
                                        <p z-0 className="focus:outline-none text-sm text-white font-semibold tracking-wide">13TH Oct, 2020</p>
                                    </div>
                                    <div className="bg-white px-10 py-6 rounded-bl-3xl rounded-br-3xl">
                                        <h1 z-0 className="focus:outline-none text-4xl text-gray-900 font-semibold tracking-wider">Transactions</h1>
                                        <p z-0 className="focus:outline-none text-gray-700 text-base lg:text-lg lg:leading-8 tracking-wide mt-6 w-11/12">Find the latest events updates or create events, concerts, conferences, workshops, exhibitions, and cultural events in all cities of the US. The aim of Eventistan is to promote healthy and entertaining event.Find the latest events updates or create events, concerts, conferences, workshops, exhibitions, and cultural events in all cities of the US. The aim of Eventistan is to promote healthy and entertaining event.</p>
                                        <div className="w-full flex justify-end" >
                                            <button className="focus:outline-none focus:ring-2 ring-offset-2 focus:ring-gray-600 hover:opacity-75 mt-4 justify-end flex items-center cursor-pointer transition-all transform hover:translate-x-4 duration-500 ease-in-out ">
                                                <span className="transform-none transition-none text-base tracking-wide text-indigo-70 ">Цааш унших</span>
                                                <svg className="  ml-3 lg:ml-6 text-indigo-700" xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" fill="none">
                                                    <path d="M11.7998 1L18.9998 8.53662L11.7998 16.0732" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    <path d="M1 8.53662H19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                                </svg>
                                            </button>
                                        </div>
                                        <div className="h-5 w-2"></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
                                        <div z-0 className="focus:outline-none cursor-pointer relative overflow-hidden " aria-label="card 2" >
                                            <img z-0 role="img" aria-label="gaming" className="transition-all object-cover  transform ease-in-out hover:scale-105 duration-700 focus:outline-none w-full" src="https://cdn.tuk.dev/assets/components/111220/Blg-6/blog(2).png" alt="games" />
                                            <div className="py-2 px-4 w-full flex justify-between bg-teal-700">
                                                <p z-0 className="focus:outline-none  text-sm text-white font-semibold tracking-wide">Bruce Wayne</p>
                                                <p z-0 className="focus:outline-none text-sm text-white font-semibold tracking-wide">13TH Oct, 2020</p>
                                            </div>
                                            <div className="bg-white px-3 lg:px-6 py-4 rounded-bl-3xl rounded-br-3xl">
                                                <h1 z-0 className="focus:outline-none text-lg text-gray-900 font-semibold tracking-wider">Transactions</h1>
                                                <p z-0 className="focus:outline-none text-gray-700 text-sm lg:text-base lg:leading-8 pr-4 tracking-wide mt-2">Find the latest events updates or create events, concerts, conferences, workshops...</p>
                                            </div>
                                        </div>
                                        <div  z-0 className="focus:outline-none cursor-pointer relative overflow-hidden" aria-label="card 3">
                                            <img z-0 role="img" aria-label="gaming" className="transition-all object-cover  transform ease-in-out hover:scale-105 duration-700 focus:outline-none w-full" src="https://cdn.tuk.dev/assets/components/111220/Blg-6/blog(3).png" alt="notes" />
                                            <div className="py-2 px-4 w-full flex justify-between bg-teal-700">
                                                <p z-0 className="focus:outline-none text-sm text-white font-semibold tracking-wide">Bruce Wayne</p>
                                                <p z-0 className="focus:outline-none text-sm text-white font-semibold tracking-wide">13TH Oct, 2020</p>
                                            </div>
                                            <div className="bg-white px-3 lg:px-6 py-4 rounded-bl-3xl rounded-br-3xl">
                                                <h1 z-0 className="focus:outline-none text-lg text-gray-900 font-semibold tracking-wider">Transactions</h1>
                                                <p z-0 className="focus:outline-none text-gray-700 text-sm lg:text-base lg:leading-8 pr-4 tracking-wide mt-2">Find the latest events updates or create events, concerts, conferences, workshops...</p>
                                            </div>
                                        </div>
                                    </div>
        
                                    <div className="mt-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
                                        <div z-0 className="focus:outline-none cursor-pointer relative overflow-hidden " aria-label="card 4">
                                            <img z-0 role="img" aria-label="laptop" className="transition-all object-cover  transform ease-in-out hover:scale-105 duration-700 focus:outline-none w-full" src="https://cdn.tuk.dev/assets/components/111220/Blg-6/blog(4).png" alt="laptop" />
                                            <div className="py-2 px-4 w-full flex justify-between bg-teal-700">
                                                <p z-0 className="focus:outline-none text-sm text-white font-semibold tracking-wide">Bruce Wayne</p>
                                                <p z-0 className="focus:outline-none text-sm text-white font-semibold tracking-wide">13TH Oct, 2020</p>
                                            </div>
                                            <div className="bg-white px-3 lg:px-6 py-4 rounded-bl-3xl rounded-br-3xl">
                                                <h1 z-0 className="focus:outline-none text-lg text-gray-900 font-semibold tracking-wider">Transactions</h1>
                                                <p z-0 className="focus:outline-none text-gray-700 text-sm lg:text-base lg:leading-8 pr-4 tracking-wide mt-2">Find the latest events updates or create events, concerts, conferences, workshops...</p>
                                            </div>
                                        </div>
                                        <div z-0 className="focus:outline-none cursor-pointer relative overflow-hidden" aria-label="card 5">
                                            <img z-0 role="img" aria-label="worker" className="transition-all object-cover  transform ease-in-out hover:scale-105 duration-700  focus:outline-none w-full" src="https://cdn.tuk.dev/assets/components/111220/Blg-6/blog(5).png" alt="worker" />
                                            <div className="py-2 px-4 w-full flex justify-between bg-teal-700">
                                                <p z-0 className="focus:outline-none text-sm text-white font-semibold tracking-wide">Bruce Wayne</p>
                                                <p z-0 className="focus:outline-none text-sm text-white font-semibold tracking-wide">13TH Oct, 2020</p>
                                            </div>
                                            <div className="bg-white px-3 lg:px-6 py-4 rounded-bl-3xl rounded-br-3xl">
                                                <h1 z-0 className="focus:outline-none  text-lg text-gray-900 font-semibold tracking-wider">Transactions</h1>
                                                <p z-0 className="focus:outline-none  text-gray-700 text-sm lg:text-base lg:leading-8 pr-4 tracking-wide mt-2">Find the latest events updates or create events, concerts, conferences, workshops...</p>
                                     </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </Layout>
  )
}

export default news