import React from "react";
import { BtnProvider,useBtnContext } from "./context/BtnContext";


const D:React.FC = ()=>{
    const data = useBtnContext()
    console.log('data',data.btnVisible)
    
    return<>
    <button>D組件</button>
    </>
}


const C:React.FC = ()=>{
    return<>
    <p >C組件</p>
    <D />
    </>
}


const B:React.FC = ()=>{
    return<>
    <p>B組件</p>
    <C />
    </>
}


const App :React.FC = ()=>{

    return <BtnProvider>
        <h1>useContext</h1>
        <B/>
    </BtnProvider>
}
export default App