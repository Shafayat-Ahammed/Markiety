import type { FunctionComponent, JSX } from "react";
import Header from "@/components/header/header";
import Hero from "@/components/hero/hero";
import Services from "@/components/services/services";
import WhyUs from "@/components/why-us/why-us";

const Home: FunctionComponent = (): JSX.Element => {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <WhyUs />
    </>
  );
};

export default Home;
