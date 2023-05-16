import React, { createContext, useContext,useState} from "react";


const defaultValue = {
    btnVisible:false
}
interface Props {
    children:JSX.Element | JSX.Element[]
}

const BtnContext = createContext(defaultValue)


//設定值的時候 調用他(要傳children要給類型)
 const BtnProvider:React.FC<Props> = ({ children }) => {

    const [btnVisible, setBtnVisible]= useState(false)
    return<>
        <BtnContext.Provider value={{btnVisible}}>
            {children}
        </BtnContext.Provider>
    </>
}


//取值的時候 調用他
 const useBtnContext = () =>{
    return useContext(BtnContext)
}

export {useBtnContext, BtnProvider}