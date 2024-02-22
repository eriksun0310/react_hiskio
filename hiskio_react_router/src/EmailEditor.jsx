import { useState, useImperativeHandle, forwardRef } from "react";

const EmailEditor = forwardRef((props, ref)=>{
    const [title,setTitle] = useState('');
    const [receive,setReceive] = useState('');
    const [content , setContent] = useState('');

    

    useImperativeHandle(ref,()=>({
        value:{
            title,
            receive,
            content,
        }

    }),[title, receive, content])

    const handleTitle =(e)=>{
        setTitle(e.target.value)
    }
    const handleReceiver =(e)=>{
        setReceive(e.target.value)
    }
    const handleContent =(e)=>{
        setContent(e.target.value)
    }
    return(
        <div>
            <input value={title} onChange={handleTitle} />
            <input value={receive} onChange={handleReceiver} />
            <input value={content} onChange={handleContent} />
        </div>
    )

})

export default EmailEditor