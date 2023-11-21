import React from "react";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);

export const urlFor = (source) => {
  return builder.image(source);
};

export const getAllPosts = async () => {
  const posts = await client.fetch(
    groq`*[_type == "post"]{publishedAt, title, 'image': mainImage.asset->url, 'slug': slug.current,'author': author->{name, 'picture': image.asset->url}, featuredText, body, categories }`
  );
  // ()
  return posts; // Return only the array of posts
};

export const slugByQuery = async (slug) => {
  const post = await client.fetch(
    groq`*[_type == "post" && slug.current == $slug]{publishedAt, title, 'image': mainImage.asset->url, 'slug': slug.current, 'author': author->{name, 'picture': image.asset->url}, featuredText, body[]{..., 'asset' : asset->}, categories }`,
    { slug }
  );

  return post[0];
};
