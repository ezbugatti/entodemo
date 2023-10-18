"use client";
import React from "react";
import { useRouter } from "next/router";
import Layout from "./layout";
export default function () {
  const router = useRouter();
  return <Layout>Hello {router.query.slug}</Layout>;
}
