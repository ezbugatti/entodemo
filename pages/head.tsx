import React from 'react'
import {AiOutlineMail, AiFillPhone} from 'react-icons/ai'
import {BiTime} from 'react-icons/bi'
const Head = () => {
  return (
   <div
      className="hidden flex-wrap items-center justify-between bg-teal-600 w-full py-2 px-6 top-0 md:block lg:flex"
    >
      <div className="flex flex-row items-center flex-shrink-0 text-white">
        <a className="hover:cursor-pointer" href="https://e.ento.mn"  >
          Онлайн Захиалга</a
        >
      </div>

      <div className="w-full pt-6 lg:flex lg:items-center lg:w-auto lg:pt-0">
        <ul className="font-medium text-white lg:flex lg:flex-1">
          <li className='flex items-center'>
          <AiOutlineMail/>
            <a
              className="target: inline-block py-2 px-2 text-gray-100 hover:text-white"
              href="#"
              >  support@ento.mn
            </a>
          </li>
          <li className='flex items-center px-4'>
          <AiFillPhone/>
            <a
              className="inline-block py-2 px-2 text-gray-100 hover:text-white"
              href="#"
              >701212111</a
            >
          </li>
          <li className='flex items-center '>
          <BiTime/>
            <a
              className="inline-block py-2 px-2 text-gray-100 hover:text-white"
              href="#"
              > 09AM - 18PM
            </a>
          </li>
        </ul>
      </div>
   </div>
  )
}

export default Head