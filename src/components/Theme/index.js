import { createContext, useState } from "react"

export const ThemeContext = createContext(null)

export default function Theme(props) {
    const [theme, setTheme] = useState("light")

    const toggleTheme = () => {
        setTheme((curr) => (curr === "light" ? "dark" : "light"))
    }

    return(
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div id={theme}>
                {props.children}
            </div>
        </ThemeContext.Provider>
    )
}