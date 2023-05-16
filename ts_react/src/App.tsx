import React, { useState } from 'react';
import './App.css';

//type:不可擴充
// type TitleProps={
//   name:string
// }


//export
interface TitleProps{
  name:string
}
    

//import:
//interface:到了別隻檔案可以擴充
interface TitleProps{
  desc?:string //可選:string | undefined
}




const Title:React.FC<TitleProps> = ({name}) =>{
  return <p>{name}</p>
}



const App:React.FC = () => {
  
  const [title,setTitle]= useState('hello')

  return (
    <div>
      <Title name={'yu'}  />
      <p>{title}</p>
    </div>
  );
}

export default App;
