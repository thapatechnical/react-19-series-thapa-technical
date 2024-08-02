//subscribe to Thapa Technical Youtube Channel - https://www.youtube.com/thapatechnical

import { BioProvider } from "./hooks/ContextAPI";
import { About } from "./hooks/ContextAPI/About";
import { Home } from "./hooks/ContextAPI/Home";
import { Services } from "./hooks/ContextAPI/Services";

export const App = () => {
  return (
    <>
      <BioProvider>
        <Home />
        <About />
        <Services />
      </BioProvider>
    </>
  );
};
