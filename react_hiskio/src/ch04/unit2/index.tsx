/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";

type MainProps = {

    // name1:string
}


function getCurrentScore(){
    return 100
}

function getScoreByBoardName(boardName:string){
    if(boardName === 'boardA'){
        return 200
    }
    if(boardName === 'boardB'){
        return 1000
    }
    return 0
}

//自定義的hook (HOC:邏輯抽離)
const useGetTotalScore = (boardName:string)=>{
    const [score, setScore] = useState(0)
    useEffect(()=>{
        const currentScore = getCurrentScore()+getScoreByBoardName(boardName)
        setScore(currentScore)
    },[])

    return score
}



const ScoreBoardA:React.FC=()=>{

    // const [score, setScore] = useState(0)
    // useEffect(()=>{
    //     const currentScore = getCurrentScore()+getScoreByBoardName('boardA')
    //     setScore(currentScore)
    // },[])

    const score = useGetTotalScore('boardA')
    return<p>A Total Score:{score}</p>
}

const ScoreBoardB:React.FC=()=>{

    // const [score, setScore] = useState(0)
    // useEffect(()=>{
    //     const currentScore = getCurrentScore()+getScoreByBoardName('boardB')
    //     setScore(currentScore)
    // },[])

    const score = useGetTotalScore('boardB')

    return<p>B Total Score:{score}</p>
}



const Main:React.FC<MainProps> =()=>{
    return(
        <>
            <ScoreBoardA/>
            <ScoreBoardB/>
        </>
    )
}

export default Main