import type { FunctionComponent, JSX } from "react";
import Header from "@/components/header/header";
import Hero from "@/components/hero/hero";

const Home: FunctionComponent = (): JSX.Element => {
  return (
    <>
      <Header />
      <Hero />
    </>
  );
};

export default Home;
