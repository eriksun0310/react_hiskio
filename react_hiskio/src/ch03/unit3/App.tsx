import React from "react"


const App:React.FC = ()=>{
    const time = new Date().getSeconds()
    return(
        <>
            <h1>Hello Unit3</h1>
            <h1>{time}</h1>
        </>
    )
}
export default App