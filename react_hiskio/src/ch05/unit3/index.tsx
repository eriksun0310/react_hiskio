import React, {useCallback, useEffect, useMemo, useState} from "react";



const App: React.FC =()=>{

    console.log('render')



    const [value , setValue] = useState(false)

    
    //useMemo :物件、陣列、值的計算
    const memoObj =useMemo(()=>{
        const obj = {name:'yu', data:{}}
        return obj
    },[])
    

    //useCallback : function
    const func = useCallback (function(){
        console.log('here')
    },[])


    //淺比較
    useEffect(()=>{
        console.log('useEffect cb')
        func()
    },[func])


    return(
        <>
        <h1>useMemo 、useCallBack</h1>
        <button onClick={()=>setValue(!value)}>重新render</button>
        </>
    )
}

export default App



//值
// const a =100
// const b =100
// a === b true 


// 物件
// obj1 ={}
// obj2 ={}
// obj1 === obj2 false (比較不同記憶體位置)


//function
//func1 =()=>{}
//func2 =()=>{}
//func1 === func2  false (比較不同記憶體位置)