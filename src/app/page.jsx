"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import Loader from "./components/Loader";
//import ScrollToTopAndWhatsapp from "./components/ScrollToTopAndWhatsapp";

const HomeSection = dynamic(() => import("./components/HomeSection"));
const AboutSection = dynamic(() => import("./components/AboutSection"));
const ServicesSection = dynamic(() => import("./components/ServicesSection"));
//const ResumeSection = dynamic(() => import("./components/ResumeSection"));
const PortfolioSection = dynamic(() => import("./components/PortfolioSection"));
const ContactSection = dynamic(() => import("./components/ContactSection"));
const ProcessSection = dynamic(() => import("./components/ProcessSection"));
const VisualBreak = dynamic(() => import("./components/VisualBreak"));

export default function Page() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Loader onFinish={() => setLoading(false)} />}

      {!loading && (
        <>
          <HomeSection />
          <ServicesSection />
          <PortfolioSection />
          <ProcessSection />
          <VisualBreak />
          <AboutSection />
          <ContactSection />
        </>
      )}
    </>
  );
}
