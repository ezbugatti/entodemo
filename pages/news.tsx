// import React from 'react'
// import Posts from './components/Post'

// import type { SanityDocument } from "@sanity/client";
// import Layout from './layout'
// import { getAllPosts } from './api/getAllPost'


// export default function news({ data }: { data: SanityDocument[] })  {


//   return (
//     <Layout>
//     <Posts posts={data} />
//     </Layout>
//   )
// }
// export const getStaticProps = async () => {
//   const data = await getAllPosts();
//   return {
//     props: {
//       data, // Use the same variable name as in the component
//     },
//   };
// };