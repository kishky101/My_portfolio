import { createContext, useState } from "react";

export const ThemeContext = createContext({
    theme: 'dark',
    setTheme: () => {}
})

// eslint-disable-next-line react/prop-types
export const ThemeContextProvider = ({children}) => {
    const [theme, setTheme] = useState(localStorage.getItem('theme'));

    const value = {
        theme,
        setTheme
    }


    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}