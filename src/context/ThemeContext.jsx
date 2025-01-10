import { createContext, useContext, useState, useEffect } from 'react'

// Criação do context
const ThemeContext = createContext()

// Criação do provider
export const ThemeProvider = ({ children }) => {
    // Verificação do tema inicial do computador
    const [theme, setTheme] = useState(() => {
        const storedTheme = localStorage.getItem("theme")
        return storedTheme ? storedTheme : "light"
    })

    // Alternar entre o light e o dark
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"))
    }

    // Atualização do localStorage
    useEffect(() => {
        localStorage.getItem("theme", theme)
        document.documentElement.className = theme
    }, [theme])

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

// Criação de um hook para ajudar no ThemeContext
export const useTheme = () => useContext(ThemeContext)