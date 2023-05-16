/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { useRef, useState } from "react";


const App:React.FC = ()=>{

    const [hidden, setHidden]= useState(false)

    //Ref:記住狀態且不會因為重新渲染而丟失變數
    const sumRef = useRef(0)
    // let sum = 0

    const click=()=>{
        sumRef.current = sumRef.current +1
        console.log('sumRef.current',sumRef.current)
        if(sumRef.current === 5){
            setHidden(true)
        }else if(sumRef.current > 15){
            setHidden(false)
        }
    }

    return <>
    <h1>Ref</h1>
    <button onClick={click}>+1</button>
    { hidden && <p>被隱藏的區塊</p>}
    </>
}

export default App