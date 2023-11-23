import React from "react";
import moment from "moment";
import { urlFor } from "./api/getAllPost";
export default function section({ post }) {
  return (
    <div z-0="true" className="news-section__news-card">
      <div
        z-0="true"
        role="img"
        className="news-section__news-card-imageWrapper focus:outline-none cursor-pointer relative overflow-hidden"
      >
        {/* {post.image && (
          <img
            z-0="true"
            role="img"
            aria-label="gaming"
            className="w-full transition-all object-cover  transform ease-in-out hover:scale-105 duration-700 focus:outline-none "
            src={urlFor(post.image).height(400).url()}
            alt="games"
          />
        )} */}

        <div className="py-2 px-4 w-full flex justify-between bg-teal-700 news-section__news-card-text">
          <div
            z-0="true"
            className="focus:outline-none  text-sm text-white font-semibold tracking-wide"
          >
            {/* {post.author.name} */}
          </div>

          <div
            z-0="true"
            className="focus:outline-none text-sm text-white font-semibold tracking-wide"
          >
            {/* {moment(post.publishedAt).subtract(10, "days").calendar()} */}
          </div>
        </div>
        <div className="news-section__news-card-text">
          <div className="news-section__featured-card-title">{post.title}</div>
          {/* <div className="news-section__news-card-title card-title">
            {post.featuredText}
          </div> */}
          <a href="#" className="readmore group">
            <span className="readmores">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span className="readmorespan ease">Цааш унших...</span>
            <span className="relative invisible ease">Цааш унших...</span>
          </a>
        </div>
      </div>
    </div>
  );
}
