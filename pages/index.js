import Banner from "./banner";

import Chiglel from "./chiglel";

import Intro from "./intro";
import Layout from "./layout";

import Section from "./section";
import Stat from "./stat";
import Zaxiral from "./zaxiral";
import Partners from "./components/Partners";
export default function Home() {
  return (
    <>
      <Layout>
        <Banner />
        <Intro />
        <div className="wrapper">
          <Zaxiral />
        </div>
        <Stat />
        <Section />
        <Chiglel />
        <div className="wrapper">
          <Partners />
        </div>
      </Layout>
    </>
  );
}
