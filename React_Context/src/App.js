/* eslint-disable no-undef */
import logo from './logo.svg';
import './App.css';
import { createContext } from 'react';
import { useState } from 'react';
import  FunctionComponent  from './FunctionComponent';
import  ThemeProvider  from './ThemeProvider';
import ContextComponent from './context/ContextComponent';
import UseContextComponent from './context/UseContextComponent';


// export const context = React.createContext()


// export const ButtonColor = createContext()


//1. 先createContext
export const ThemeContext = createContext()


function App() {

  const [dark, setDark] = useState(true)


  
  //如果要傳值(Redux) 的話要用useMemo記才不會每次都不一樣


  const changeTheme =()=>{
    setDark(prevDark=>!prevDark)
  }

  return (
    <div className="App">
        {/* 傳遞value 這個值 給  FunctionComponent*/}
       {/* <ThemeProvider>
       <FunctionComponent/>
       </ThemeProvider> */}
       


         <ThemeContext.Provider value={dark}>
          <div className='container'>
            <div className='section'>
              <button onClick={changeTheme}>Change Theme</button>
            </div>
            <ContextComponent />
            <UseContextComponent />
          </div>
        </ThemeContext.Provider>
    </div>
  );
}

export default App;
