import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface ThemeContextProps {
  isLightMode: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [isLightMode, setIsLightMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark" ? true : false;
  });

  const toggleTheme = () => {
    setIsLightMode((prevMode) => {
      const newMode = !prevMode;
      // Salvar o tema no localStorage
      localStorage.setItem("theme", newMode ? "dark" : "light");
      return newMode;
    });
  };

  useEffect(() => {
    if (isLightMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isLightMode]);

  return (
    <ThemeContext.Provider value={{ isLightMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
