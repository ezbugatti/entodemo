import Banner from "./banner";
import Link from "next/link";
import Chiglel from "./chiglel";

import Intro from "./intro";
import Layout from "./layout";

import Section from "./section";
import Stat from "./stat";
import Zaxiral from "./zaxiral";
import Partners from "./components/Partners";
import { getAllPosts } from "./api/getAllPost";
export default function Home({ posts }) {
  return (
    <>
      <Layout>
        <Banner />
        <Intro />
        <div className="wrapper">
          <Zaxiral />
        </div>
        <Stat />

        <div className="news-section">
          <div className="pt-20 pb-8 px-4">
            <div className="section-title text-2xl text-bold text-center uppercase mb-6">
              <span>Мэдээ мэдээлэл</span>
            </div>

            <Link
              href="/news"
              className="float-right relative inline-flex items-center justify-items-center p-0.5 overflow-hidden text-xs font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-500 to-teal-500 group-hover:from-teal-500 group-hover:to-teal-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-teal-200 dark:focus:ring-teal-800"
            >
              <span className="relative px-4 py-1 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 ">
                Бүгдийг үзэх
              </span>
            </Link>
          </div>

          <div className="news-section__cards">
            <div className="news-section__news-cards md:flex md:flex-1 md:grid-cols-1 w-full gap-6  px-6 ">
              {posts.map((post) => (
                <Link href={`/${post.slug}`}>
                  <Section post={post} />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <Chiglel />
        <div className="wrapper">
          <Partners />
        </div>
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {
  const posts = await getAllPosts();

  return {
    props: {
      posts, // Use the same variable name as in the component
    },
  };
};
