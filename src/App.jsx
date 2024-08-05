//subscribe to Thapa Technical Youtube Channel - https://www.youtube.com/thapatechnical

import { DarkLight, ThemeProvider } from "./hooks/ContextAPI/DarkLight";

export const App = () => {
  return (
    <>
      <ThemeProvider>
        <DarkLight />
      </ThemeProvider>
    </>
  );
};
