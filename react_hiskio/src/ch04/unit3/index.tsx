import React, {useState} from "react";

// const App: React.FC = ()=>{



//1. useState 基本用法
//     const [counter, setCounter] = useState<number>(0)

//     const counterHandler= () =>{

//         // 如果沒給預設值 counter:number | undefined
//         // if(counter !== undefined){
//             setCounter(counter+1)
//         // }
//     }


//     return<>
//     <h1>Counter:{counter}</h1>
//     <button onClick={counterHandler}>+1</button>
//     </>
// }

// export default App


//2. 批量更新(batching update)
// const Parent:React.FC=()=>{
//     const[count,setCount]=useState(0)
//     return(
//         <div onClick={()=>{setCount(prev=>prev+1)}}>
//             Parent chilked {count} times
//             <Child/>
//         </div>
//     )
// }

// const Child:React.FC=()=>{
//     const [count, setCount]=useState(0)
//     return(
//         <button onClick={()=>setCount(prev=>prev+1)}>
//             Child clicked {count} times
//         </button>
//     )
// }

// export default Parent

// 3.變數在渲染過程的作用範圍
const Counter:React.FC=()=>{


    const [counter, setCounter] = useState(0)


    const handleClick=()=>{

        //記住上一次的變化的狀態
        function cb (prev:number){
            return prev+1
        }
        setCounter(cb)  //0 1
        setCounter(cb)  //1 1

    }

    return(
        <>
        <h1>counter{counter}</h1>
        <button onClick={handleClick}>Click me</button>
        </>
    )

}

export default Counter