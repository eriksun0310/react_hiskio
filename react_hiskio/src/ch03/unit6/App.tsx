import React from "react";
import styled from 'styled-components'


type BtnType ={
    colorStatus:boolean
}

const Button = styled.button<BtnType>`
    background: transparent;
    border-radius: 3px;
    border: 2px solid palevioletred;
    color:${props=>props.colorStatus ? 'blue':'palevioletred'} ;
    margin: 0 1em;
    padding: 0.25em 1em;
`

const H1 = styled.h1`
    color:blue
`


const App:React.FC=()=>{
    return<>
        <H1>Unit06</H1>
        <Button colorStatus={true}>Btn</Button>
    </>
}

export default App