import type { FunctionComponent, JSX } from "react";
import Header from "@/components/header/header";
import Hero from "@/components/hero/hero";
import Services from "@/components/services/services";
import WhyUs from "@/components/why-us/why-us";
import AboutFounder from "@/components/about-founder/about-founder";

const Home: FunctionComponent = (): JSX.Element => {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <WhyUs />
      <AboutFounder />
    </>
  );
};

export default Home;
