import { TypedUseSelectorHook,useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from './store'

// 自訂義的hook:從 redux 拿的hook去重新包裝自訂義的hook

// export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppDispatch= () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector