/* eslint-disable @typescript-eslint/no-useless-constructor */
import React from "react";


type BProps={
    totalScore:number
}


type AProps={
    totalScore:number
    
}

//--------------------------------------------------------------------


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

//--------------------------------------------------------------------

class ScoreBoardA extends React.Component<AProps>{
    constructor(props:AProps){
        super(props)
       
    }
    render():React.ReactNode{
        return<>
        <p>A Total Score:{this.props.totalScore}</p>
        </>
    }
}


class ScoreBoardB extends React.Component<BProps>{
    constructor(props:AProps){
        super(props)
       
    }
    render():React.ReactNode{
        return<>
        <p>A Total Score:{this.props.totalScore}</p>
        </>
    }
}






//HOC寫法
function withTotalScore(WrappedComponents:React.ComponentType<any>,boardName:string){
    return class extends React.Component<{},{totalScore:number}>{

        constructor(props:{}){
            super(props);
            this.state={
                totalScore:0
            }
        }

        componentDidMount() {
            this.setState({
                totalScore:getCurrentScore()+ getScoreByBoardName(boardName)
            })
        }

        render():React.ReactNode{
            return<WrappedComponents totalScore={this.state.totalScore}></WrappedComponents>
        }
    }
  
}




function Main(){

    const WrappedComponentA = withTotalScore(ScoreBoardA,'boardA')
    const WrappedComponentB = withTotalScore(ScoreBoardB,'boardB')
    return (
        <>
        <WrappedComponentA />
        <WrappedComponentB />
        </>
    )
}

export default Main