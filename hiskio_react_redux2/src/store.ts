import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './slices/todoReducer'
import {loggerMiddleware, twoMiddleware}  from './middleware'
import { combineReducers } from '@reduxjs/toolkit'
import {todoApiService} from './services/todoApi'

//combineReducers:集結所有reducer(自訂義Middleware)
const reducers = combineReducers({
    todoReducer,
    [todoApiService.reducerPath]:todoApiService.reducer
})

const store = configureStore ({
    reducer:reducers,
    middleware:(getCurrentMiddleware)=>{
        return getCurrentMiddleware()
        // .concat(loggerMiddleware)
        // .concat(twoMiddleware)
        .concat(todoApiService.middleware)
    }
})

export default store

//定義類型
export type RootState = ReturnType<typeof reducers>
export type AppDispatch = typeof store.dispatch