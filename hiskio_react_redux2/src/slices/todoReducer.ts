import { createSlice } from '@reduxjs/toolkit'


interface InitialState {
    todoList:Array<string>
}

//初始化
const initialState: InitialState =  {
    todoList :['...todo']
}

export const todoSlice = createSlice({
  name: 'counter',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {

    // 1. state -> 當下的狀態 ( === initialState
    // 2. action -> 對應的動作

    // action
    addTodo :(state,action)=>{
        state.todoList.push(action.payload) // action.payload: 當下輸入的值
    },
    // action
    addTimestamp:(state)=>{
        state.todoList.push(Date.now().toString()) // push 當下的時間
    }
  } 
})

//透過toolkit 產生對應的action的函式
export const {addTodo,addTimestamp} = todoSlice.actions


//預設輸出
export default todoSlice.reducer