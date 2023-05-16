import React, { useState } from "react"

//--------------function component--------------
type BtnProps={
    currentNum:number
    onClickHandler:()=>void
}

//改變變數->觸發渲染
const Btn:React.FC<BtnProps> = ({currentNum, onClickHandler})=>{
    
    
    // const [num ,setNum] = useState(0)
    
    return(
        <button onClick={onClickHandler}>
            加1,
            <span>目前總數:{currentNum}</span>
        </button>
    )
}


//props state
const App:React.FC = ()=>{
    const [num ,setNum] = useState(0)
    // const num=10

    function btnClickHandler(){
        setNum(num+1)
    }
    return(
        <>
        <h1>計數器:{num}</h1>
        <Btn  currentNum={num} onClickHandler={btnClickHandler} />
        </>
    )
}
export default App


