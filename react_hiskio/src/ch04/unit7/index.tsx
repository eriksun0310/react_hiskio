import React, { useEffect, useState } from "react";

type Comment = {
    body: string
    email: string
    id:number
    name: string
    postId:number
}


//自訂義的hook(邏輯抽離)
const useFetchApi = ()=>{

    const [postId,setPostId] =useState(1)
    const [error,setError] =useState<Error | null>(null)
    const [loading,setLoading] =useState(false)
    const [data, setData] = useState<Comment[]>([])

    async function fetchData (postId:number){
        setLoading(true)

        try {
            const res = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
            const resData = await res.json() as Comment[]
            setData(resData)
        }catch (error){
            setError(error as Error)

        }
        setLoading(false)
    }


    useEffect(()=>{
        fetchData(postId)
    },[postId])


    return [data, loading, error, setPostId] as const //const 精準定義類型(告訴分別對應的位置,這位置是不能變動的)
    // return {data, loading, error, setPostId}
 
}



const App:React.FC=()=>{

    const [data, loading, error, setPostId] = useFetchApi()
    // const {data, loading, error, setPostId} = useFetchApi()

    const clickHandler=(id:number)=>{
        setPostId(id)
    }
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
        <p>結果:</p>
        {
            data?.length > 0 && (
                data?.map((item)=><p>{item?.email}</p>) 
            )
        }         
    </>   
}

export default App