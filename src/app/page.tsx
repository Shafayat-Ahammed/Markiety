import type { FunctionComponent, JSX } from "react";

const Home: FunctionComponent = (): JSX.Element => {
  return (
    <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl font-bold">
      Hello, world!
    </h1>
  );
};

export default Home;
