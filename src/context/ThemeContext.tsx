import { createContext, useState, ReactNode } from "react";

export const ThemeContext = createContext({
  themeColor: "light", // Default theme color
  setThemeColor: (color: string) => {}, // Function to update theme color
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [themeColor, setThemeColor] = useState("light");

  return (
    <ThemeContext.Provider value={{ themeColor, setThemeColor }}>
      <div
        style={{
          backgroundColor: themeColor === "light" ? "#fff" : "#333",
          color: themeColor === "light" ? "#000" : "#fff",
        }}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
};