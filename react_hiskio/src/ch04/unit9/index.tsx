/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { useEffect, useRef, useState } from "react";


const App:React.FC = ()=>{
    const h1Ref= useRef<HTMLHeadingElement>(null) 
    //當組件渲染完成才會執行useEffect cb
    useEffect(()=>{
        // const element = document.getElementById('h1')
        // console.log('element',element)
        console.log('h1Ref',h1Ref.current)
    },[])

    return <>
    <h1 ref={h1Ref}>Ref</h1>
    </>
}

export default App


//流程
// 1. 建立組件
// 2. return JSX
// 3. 執行useEffect 的cb