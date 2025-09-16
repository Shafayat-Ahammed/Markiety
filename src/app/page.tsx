import type { FunctionComponent, JSX } from "react";
import Header from "@/components/header/header";
import Hero from "@/components/hero/hero";
import Services from "@/components/services/services";
import WhyUs from "@/components/why-us/why-us";
import AboutFounder from "@/components/about-founder/about-founder";
import Work from "@/components/work/work";
import Testimonials from "@/components/testimonials/testimonials";

const Home: FunctionComponent = (): JSX.Element => {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <WhyUs />
      <Work />
      <Testimonials />
      <AboutFounder />
    </>
  );
};

export default Home;
