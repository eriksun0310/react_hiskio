import React, {useState,useEffect} from "react";


let interval: NodeJS.Timer | null  = null
let num = 0

const App:React.FC=()=>{

    const [counter ,setCounter] = useState(0)

    const clickHandler = ()=>{
        setCounter(counter+1)
    }



    useEffect(()=>{
        interval = setInterval(()=>{
            num++
            console.log(num)
        },1000)


        //在執行 下一次重新渲染之前,會先執行的動作
        return()=>{
            console.log('preState')
            //清除之前的interval的狀態,為確保每一次的重新渲染都是從0開始
            if(interval !== null){
                clearInterval(interval)
                num = 0
                

            }
        }
    },[counter])//若沒清除,這個counter的依賴項,則會有因為按了3次counter,而去執行3次的interval

    return (
        <>
        <h1>計時器{counter}</h1>
        <button onClick={clickHandler}>+1</button>
        </>
    )

}

export default App