import React from "react";
import Layout from "./layout";

export default function slug() {
  return <div>hello</div>;
}

// import Link from "next/link";
// import { getAllPosts, slugByQuery } from "./api/getAllPost";
// import moment from "moment/moment";
// import { urlFor } from "./api/getAllPost";
// import SanityBlockContent from "@sanity/block-content-to-react";
// const serializers = {
//   types: {
//     code: (props) => (
//       <pre data-language={node.language}>
//         <code>{node.code}</code>
//       </pre>
//     ),
//   },
// };

// export default function slug({ post }) {
//   moment.locale("mn");
//   return (
//     <>
//       <Layout>
//         <div>Hello</div>
//         <div className="container w-full md:max-w-3xl mx-auto pt-20">
//           <div className="w-full px-4 md:px-6 text-xl text-gray-800 leading-normal">
//             <div className="font-sans">
//               <p className="text-base md:text-sm text-green-500 font-bold">
//                 &lt;{" "}
//                 <Link
//                   href="/news"
//                   className="text-base md:text-sm text-green-500 font-bold no-underline hover:underline"
//                 >
//                   БУСАД МЭДЭЭНҮҮД
//                 </Link>
//               </p>
//               <h1 className="font-bold font-sans break-normal text-gray-900 pt-6 pb-2 text-3xl md:text-4xl">
//                 {post.title}
//               </h1>
//               <p className="text-sm md:text-base font-normal text-gray-600">
//                 {moment(post.publishedAt).subtract(1, "days").calendar()}
//               </p>
//             </div>
//             <div className="w-full hidden lg:block">
//               {post.image && (
//                 <img
//                   src={urlFor(post.image).height(400).url()}
//                   className="transform rounded-2xl ml-6"
//                   alt="zaxiral"
//                 />
//               )}
//             </div>
//             <p className="py-6">
//               <SanityBlockContent
//                 blocks={post.body}
//                 serializers={serializers}
//                 imageOptions={{ w: 800, h: 600, fit: "max" }}
//               />
//               ,
//             </p>
//           </div>

//           <div className="text-base md:text-sm text-gray-500 px-4 py-6">
//             Категори:{" "}
//             <Link
//               href="#"
//               className="text-base md:text-sm text-green-500 no-underline hover:underline"
//             ></Link>{" "}
//             .{" "}
//             <a
//               href="#"
//               className="text-base md:text-sm text-green-500 no-underline hover:underline"
//             >
//               Link
//             </a>
//           </div>

//           <hr className="border-b-2 border-gray-400 mb-8 mx-4"></hr>

//           <div className="container px-4">
//             <div className="font-sans bg-gradient-to-b from-green-100 to-gray-100 rounded-lg shadow-xl p-4 text-center">
//               <h2 className="font-bold break-normal text-xl md:text-3xl">
//                 И-мэйлээр мэдээ мэдээлэл авах
//               </h2>
//               <h3 className="font-bold break-normal text-gray-600 text-sm md:text-base">
//                 Имэйл хаягаа оруулан шинэ мэдээ бүрийг цаг алдалгүй авах
//                 боломжтой
//               </h3>
//               <div className="w-full text-center pt-4">
//                 <form action="#">
//                   <div className="max-w-xl mx-auto p-1 pr-0 flex flex-wrap items-center">
//                     <input
//                       type="email"
//                       placeholder="youremail@example.com"
//                       className="flex-1 mt-4 appearance-none border border-gray-400 rounded shadow-md p-3 text-gray-600 mr-2 focus:outline-none"
//                     />
//                     <button
//                       type="submit"
//                       className="flex-1 mt-4 block md:inline-block appearance-none bg-green-500 text-white text-base font-semibold tracking-wider uppercase py-4 rounded shadow hover:bg-green-400"
//                     >
//                       Дагах
//                     </button>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>

//           <div className="flex w-full items-center font-sans px-4 py-12">
//             {post.author.picture && (
//               <img
//                 className="w-10 h-10 rounded-full mr-4"
//                 src={urlFor(post.author.picture).height(100).url()}
//                 alt="Avatar of Author"
//               />
//             )}
//             <div className="flex-1 px-2">
//               <p className="text-base font-bold  md:text-xl leading-none mb-2">
//                 {post.author.name}
//               </p>
//               <p className="text-gray-600 text-xs md:text-base">
//                 {/* {post.author.bio} */}
//               </p>
//             </div>
//           </div>
//           <hr className="border-b-2 border-gray-400 mb-8 mx-4"></hr>

//           <div className="font-sans flex justify-between content-center px-4 pb-12">
//             <div className="text-left">
//               <span className="text-xs md:text-sm font-normal text-gray-600">
//                 &lt; Өмнөх
//               </span>
//               <p>
//                 <a
//                   href="#"
//                   className="break-normal text-base md:text-sm text-green-500 font-bold no-underline hover:underline"
//                 >
//                   Blog title
//                 </a>
//               </p>
//             </div>
//             <div className="text-right">
//               <span className="text-xs md:text-sm font-normal text-gray-600">
//                 Дараагийн &gt;
//               </span>
//               <p>
//                 <a
//                   href="#"
//                   className="break-normal text-base md:text-sm text-green-500 font-bold no-underline hover:underline"
//                 >
//                   Blog title
//                 </a>
//               </p>
//             </div>
//           </div>
//         </div>
//       </Layout>
//     </>
//   );
// }

// export const getStaticProps = async ({ params }) => {
//   const post = await slugByQuery(params.slug);
//   return {
//     props: {
//       post, // Use the same variable name as in the component
//     },
//   };
// };

// export const getStaticPaths = async () => {
//   const posts = await getAllPosts();
//   const data = posts?.map((post) => ({
//     params: {
//       slug: post.slug,
//     },
//   }));

//   return {
//     paths: data,
//     fallback: true,
//   };
// };
