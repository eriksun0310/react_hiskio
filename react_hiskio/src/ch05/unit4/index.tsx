/* eslint-disable react-hooks/exhaustive-deps */
import React, {useCallback, useEffect, useMemo, useState, memo} from "react";

type BProps = {
num:number,
obj:{name:string}

}


//memo : 防止無意義渲染( 比較值 而已, obj的話要用useMemo)
const B:React.FC<BProps> = memo(({ num,obj })=>{
    console.log('render B', num)
        return <p>B {num} {obj.name} </p>
})


const App: React.FC =()=>{

    console.log('render App')
    

    const [value , setValue] = useState(false)
    const [num, setNum] = useState(0)
    const [obj, setObj] = useState({name:''})

    const memoObj = useMemo(()=>{
        return obj
    }, [obj.name])



    return(
        <>
        <h1>useMemo 、useCallBack</h1>
        <B num={num} obj={memoObj}/>
        <button onClick={()=>setValue(!value)}>重新render</button>
        <button onClick={()=>setNum(100)}>設定顯示的數字</button>
        <button onClick={()=>setObj({name:'yu'})}>設定顯示的名字</button>
        </>
    )
}

export default App


