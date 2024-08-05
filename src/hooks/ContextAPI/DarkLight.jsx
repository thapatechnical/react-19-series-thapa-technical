import { createContext, useState, use } from "react";

// Create a Context
const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const DarkLight = () => {
  // Using the new use() hook
  const { theme, toggleTheme } = use(ThemeContext);

  return (
    <div
      className={`p-4 h-lvh font-display tracking-wider flex flex-col justify-center  items-center ${
        theme === "light" ? "bg-white" : "bg-gray-800"
      }`}
    >
      <h1
        className={`my-4 text-xl  ${
          theme === "light" ? "text-gray-800" : "text-white"
        }`}
      >
        Dark Light Mode Website
      </h1>

      <p className={theme === "light" ? "text-gray-800" : "text-white"}>
        Hello!! My React v19 Fans 👍
      </p>

      <button
        onClick={toggleTheme}
        className="bg-blue-500 hover:bg-blue-600 text-white rounded-md mt-4 p-4"
      >
        {theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
      </button>
    </div>
  );
};
