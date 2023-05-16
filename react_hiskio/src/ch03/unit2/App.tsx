import React from "react"
import './App.css'
import Header from "./components/Header"


const App:React.FC = ()=>{
    return(
        <>
        <Header />
        <h1 className="color">Hello Unit2</h1>
        <img src="/logo512.png"></img>
        </>
        
    )
}
export default App