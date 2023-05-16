import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


type TodoData = {
  completed: boolean
  id: number
  title: string
  userId: number
}


// Define a service using a base URL and expected endpoints
export const todoApiService = createApi({
  reducerPath: 'todoApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  endpoints: (builder) => ({
    getTodoList:builder.query<TodoData,string>({
        //=>path
        query:(id)=>`todos/${id}`
    })
  }),
})

export const { useGetTodoListQuery } = todoApiService
