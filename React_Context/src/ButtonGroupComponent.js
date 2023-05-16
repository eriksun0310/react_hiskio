import React, { useContext } from "react";
import { ThemeContext}  from "./App";

const ButtonGroupComponent = ()=>{

  

     //useContext 的參數必須為context object 自己(接收 ThemeContext.Provider 的 value)
    const darkTheme  = useContext(ThemeContext)

    const themeStyle ={
        backgroundColor: darkTheme ? '#2c3e50' : '#f1c40f',
        color: darkTheme ? '#ecf0f1' : '#2c3e50'
    };



    return(
        // 接收value 這個值
        <ThemeContext.Consumer>
            {
                dark =>
                <button style={themeStyle}>useContext</button>
            }
        </ThemeContext.Consumer>
    )
}

export default  ButtonGroupComponent