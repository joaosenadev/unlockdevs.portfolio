import { createContext, useEffect, useState } from "react"

export const ThemeContext = createContext(null)

export default function Theme(props) {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light")

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light")
    }

    useEffect(() => {
        localStorage.setItem("theme", theme);
    }, [theme]);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
            setTheme(savedTheme);
        }
    }, []);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div id={theme}>
                {props.children}
            </div>
        </ThemeContext.Provider>
    )
}