import React, { useEffect, useState } from "react";

type Comment = {
    body: string
    email: string
    id:number
    name: string
    postId:number
}

const App:React.FC=()=>{

    const [postId,setPostId] =useState(1)
    const [error,setError] =useState<Error | null>(null)
    const [loading,setLoading] =useState(false)



    async function fetchData (postId:number){
        setLoading(true)

        try {
            const res = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
            const resData = await res.json() as Comment[]
        }catch (error){
            setError(error as Error)

        }
        setLoading(false)
    }


    const clickHandler=(id:number)=>{
        setPostId(id)
    }

    useEffect(()=>{
        fetchData(postId)
    },[postId])



    return<>
        <h1>Fetch</h1>
        <button onClick={()=>clickHandler(1)}>ID 1 Data</button>
        <button onClick={()=>clickHandler(2)}>ID 2 Data</button>
        {
            error === null ?  <p style={{color:'green'}}>資料獲取成功</p> :  <p style={{color:'red'}}>資料獲取失敗</p>
        }
        {
            loading ?  <p> loading</p> : null
        }
    </>   
    

}

export default App