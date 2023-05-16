import React, { useContext } from "react";
import { ThemeContext } from "../App";


const UseContextComponent= ()=>{

    //useContext 的參數必須為context object 自己(接收 ThemeContext.Provider 的 value)
    const darkTheme = useContext(ThemeContext)
    const themeStyle= {
        backgroundColor: darkTheme ? '#2c3e50': '#f1c40f',
        color: darkTheme ? '#ecf0f1' : '#2c3e50'
    }

    return(
        <ThemeContext.Consumer>
            {
                dark=>
                <div className="section" style={themeStyle}>
                    UseContext Component
                </div>
            }
        </ThemeContext.Consumer>
    )
   
}



export default UseContextComponent