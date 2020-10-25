import React, { useState } from "react";
type Theme = "light" | "dark";
type ThemeContext = { theme: Theme; toggleTheme: () => void };

export const ThemeContext = React.createContext<ThemeContext>(
    {} as ThemeContext
);

export const ThemeProvider: React.FC = ({ children }) => {
    console.log(document.body.style.color);
    
    const [theme, setTheme] = useState<Theme>(document.body.style.color === 'rgb(255, 255, 255)' ? "light" : "dark");
    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    const color = theme === "light" ? "#333" : "#FFF";
    const backgroundColor = theme === "light" ? "#FFF" : "#333";

    document.body.style.color = color;
    document.body.style.backgroundColor = backgroundColor;

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

