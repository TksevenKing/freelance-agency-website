import { createContext, useState } from "react";


// on initialise notre context pour le theme
// il va contenir les infos que je partager de facon global
export const ThemeContext = createContext()


// il va fournir les donnes du context a tous les autres composants qui en on besoin
// 🧒 Les `{ children }` représentent **tout ce qu’il y a à l’intérieur** de ton `ThemeProvider` quand tu l’utiliseras.
export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light')
    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    return (
        // - `ThemeContext.Provider` est comme une **boîte distributrice** :  
        //  elle distribue les valeurs du contexte (`theme` et `toggleTheme`) à tous les composants qui se trouvent à l’intérieur (`{children}`).
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

// Ensuite on peut le mettre a la racine du projet dans index.jsx

export const SurveyContext = createContext()

export const SurveyProvider = ({ children }) => {
    const [answers, setAnswers] = useState({})
    const saveAnswers = (newAnswers) => {
        setAnswers({ ...answers, ...newAnswers})
    }
    return  (
        <SurveyContext.Provider value={{ answers, saveAnswers }}>
            {children}
        </SurveyContext.Provider>
    )
}