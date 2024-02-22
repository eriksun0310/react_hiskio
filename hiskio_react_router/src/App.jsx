/* eslint-disable no-unreachable */
import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import './App.css';
import { useContext, createContext } from '@vteam_components/cloud';
import CustomInput from './CustomInput';
import EmailEditor from './EmailEditor';


// export default function App(){
//   const customInputRef = useRef(null);
//   const handle= ()=>{
//     console.log(customInputRef.current.value)
//   }
//   return(
//     <div>
//       <CustomInput ref={customInputRef}/>
//       <button onClick={handle}> get input value</button>
//     </div>
//   )
// }

export default function App(){
  const emailEditRef = useRef(null);
 
  return(
    <div>
      <EmailEditor ref={emailEditRef}/>
      <button onClick={()=>{
        console.log(emailEditRef.current.value)
      }}> send email
      </button>
    </div>
  )
}








