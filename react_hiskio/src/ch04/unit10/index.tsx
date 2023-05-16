import React, { useState } from "react";


const App:React.FC=()=>{

    const [account, setAccount]= useState("")
    const [password, setPassword]= useState("")

    const onChangeHandler =(event:React.FormEvent<HTMLInputElement>)=>{
        if(event.currentTarget){
            setAccount(event.currentTarget.value)
        }

    }

    const onChangePasswordHandler =(event:React.FormEvent<HTMLInputElement>)=>{
        if(event.currentTarget){
            setPassword(event.currentTarget.value)
        }

    }

    const login = ()=>{
        console.log('password',password)
        console.log('account',account)
    }

    return<>
    <h1>Form</h1>
    <p>帳號</p>
    <input type="text" name=""  value={account} onChange={onChangeHandler}></input>
    <p>你輸入的帳號:{account}</p>
    <p>密碼</p>
    <input type="password" name=""  value={password} onChange={onChangePasswordHandler}></input>
    <div>
        <button onClick={login}>登入</button>
    </div>

    </>

}
export default App