import React, { useState } from "react";

type Props ={
    btnVisible:boolean
}

const D:React.FC<Props> = ({btnVisible})=>{
    return<>
    <p>D組件</p>
    
    </>
}


const C:React.FC<Props>  = ({btnVisible})=>{
    return<>
    <p >C組件</p>
    <D btnVisible={btnVisible} />
    </>
}


const B:React.FC<Props>  = ({btnVisible})=>{
    return<>
    <p>B組件</p>
    <C btnVisible={btnVisible} />
    </>
}


const App :React.FC = ()=>{
    const [btnVisible, setBtnVisible]= useState(false)
    return<>
     <h1>APP</h1>
        <B btnVisible={btnVisible} />
    </>
}
export default App