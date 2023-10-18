import React from "react";
import Head from "./head";
import Nav from "./nav";
import Footer from "./footer";
import BottomBar from "./bottomBar";

export default function Layout({ children }) {
  return (
    <>
      {" "}
      <Head />
      <Nav />
      {children}
      <Footer />
      <BottomBar />{" "}
    </>
  );
}
