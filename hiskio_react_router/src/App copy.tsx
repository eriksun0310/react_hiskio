import React, { useMemo, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { useContext, createContext , Form} from '@vteam_components/cloud';
import {Routes, Route,Link, Outlet, useParams, useNavigate, RouteObject, useRoutes  } from 'react-router-dom'

{/*  http://localhost:3001/about/hi  */}
//Outlet : 在路由內指定 引入的路由位置,(指定 Item在About的位置)
//useParams : 可以獲取動態輸入的路由
//useNavigate : 透過 js 的方式來跳轉路由
//RouteObject
//useRoutes

const ProviderTest = createContext({})


function Home() { 

    const n = useNavigate()
  return (
    <>
    <main>
      <h2> Home pages</h2>
    <nav>
      {/* Link:在不刷新的清況 去切換頁面 */}
      {/* <Link to="/about">About</Link> */}
      {/* 透過 js 的方式來跳轉路由 */}
      <button onClick={()=>{ n('about/100')}}>About</button>
    </nav>
    </main>
      
    </>
  );
}


// http://localhost:3001/about
function About() {
  return (
    <>
    <main>
    <Outlet />
      <h2>About pages</h2>
    <nav>
      <Link to="/">Home</Link>
    </nav>

    </main>
      
    </>
  );
}

//  http://localhost:3001/about/hi
function Item() {
  
  //useParams :可以獲取動態輸入的路由
  const url = useParams()
  console.log('url', url) // {item: 'hi'}
  return (
    <>
    <p>Item xxxxxxx</p>
    </>
  );
}

function Nomatch (){
  return<p>No Match</p>
}


//讓路由結構化處理, 優點:可讓其他地方去引入
const routerConfig : RouteObject[]=[
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/about', //要寫 /
    element:<About/>,
    children:[
      {
        path:'/about/:id',
        element:<Item/>
      }
    ]
  },
  //如果路由亂打,預設到 
  {path:"*", element:<Nomatch/>}
]

const ChildOne = () => {
  const a = useContext({
    context: ProviderTest,
    selector: (v) => v?.ChildOneValue
  })
  console.log('child One rerender')
  return (
    <>
    childone
    </>
  )
}

const ChildTwo = () => {
  const a = useContext({
    context: ProviderTest,
    selector: (v) => v?.ChildTwoValue
  })
  console.log('child Two rerender')
  return (
    <>
    childTwo
    </>
  )
}


function App() {
  const [state, setstate] = useState({
    ChildOneValue: 0,
    ChildTwoValue: 0
  })
  const element = useRoutes(routerConfig)
  const v = useMemo(() => (
    <>
          <ChildOne />
      <ChildTwo />
    </>
  ), [])
  return (
  //   <ProviderTest.Provider value={state}>
  //   <div className="App">
  //     {v}
  //   </div>
  //   <button onClick={() => setstate((prev) => ({...prev, ChildOneValue: prev?.ChildOneValue + 1}))}>click</button>
  //   </ProviderTest.Provider>


  <Form>
    <Form.Input 
    name='aa'
    type='number'
    title='測試'
    ></Form.Input>
  </Form>

  );
}

export default App;
