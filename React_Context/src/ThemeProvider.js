import React, { useState, createContext } from "react";

const ThemeContext = createContext()
const ThemeUpdate = createContext()


const ThemeProvider = ({children})=>{

    const [dark, setDark] = useState(true);
    const changeTheme  = ()=>{
        setDark(prevDark=>!prevDark)
    }


    return(
        <ThemeContext.Provider value={dark}>
            <ThemeUpdate.Provider value={changeTheme}>
                {children}
            </ThemeUpdate.Provider>
        </ThemeContext.Provider>

    )


}
export default ThemeProvider