import React, { useState } from "react";
import Tabs from "./tabs";
import Footer from "../footer.tsx";
import Link from "next/link";

const TabsActive = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (newTab) => {
    setActiveTab(newTab);
  };

  return (
    <div>
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      {Footer && <Footer onTabChange={handleTabChange} />}
    </div>
  );
};

export default TabsActive;
