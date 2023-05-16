import React, {useEffect, useState} from "react";





const App:React.FC=()=>{

    const [counter,setCounter] =useState(0)

    const [text,setText] = useState('偶數')

    const handleClick = ()=>{
        setCounter(counter+1)
    }


    useEffect(()=>{
        
        if(counter % 2 === 0){
            setText('偶數')
        }else{
            setText('基數')
        }

    },[counter])

    return(
        <>
         <h1>Counter:{counter}</h1>
         <h1>{text}</h1>
         <button onClick={handleClick}>+1</button>
        </>
       
    )
}
export default App