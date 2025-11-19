import { useState, useEffect,useContext } from "react";
import { ThemeContext } from "../context";


// Pour ce nouveau hook on lui passe en parametre l'url de l'APi qu'on veut appeler il possede un state local qui permet de stocker la donnee

export function useFetch(url) {
    const [data, setData] = useState({})
    const [isLoading, setLoading] = useState(true)
    const [error, setError] = useState(false)


    useEffect(() => {
        if(!url) return
        
        async function fetchData() {
            try {
            const response = await fetch(url)
            const data = await response.json()
            

            setData(data)

                       
            } catch (err) {
                console.log(err)
                setError(true)
            }finally{
                setLoading(false)
            }


        }
        
        // Appel de la fonction
        fetchData()

},[url])

return {isLoading, data, error}
}

//  Pour l'utilsier modifions /Survey/index

export function useTheme() {
  const { theme, toggleTheme } = useContext(ThemeContext)
  return { theme, toggleTheme }
}