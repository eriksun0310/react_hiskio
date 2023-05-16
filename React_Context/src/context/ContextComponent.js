import React from "react";
import { ThemeContext } from "../App";


const ContextComponent= ()=>{


    const themeStyle =(dark)=>{
        return{
            backgroundColor: dark ? '#2c3e50': '#f1c40f',
            color: dark ? '#ecf0f1' : '#2c3e50'
        }
    }

    return(
        <ThemeContext.Consumer>
            {
                dark=>
                <div className="section" style={themeStyle(dark)}>
                    Context Component
                </div>
            }
        </ThemeContext.Consumer>
    )
   
}



export default ContextComponent