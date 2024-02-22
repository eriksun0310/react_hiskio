import { Middleware } from "redux";
import { RootState } from "./store";

//Middleware: 在 dispatch發送action 到store的過程中要在多做甚麼事情
export const loggerMiddleware: Middleware<
  {}, // Most middleware do not modify the dispatch return value
  RootState

  // nextDispatch: 原始的dispatch   => 最後把這個function return出去 包裝成新的dispatch
> = (store) => (nextDispatch) => (action) => {
  //自訂義的Middleware : 在 dispatch發送action 到store的過程中要在多做甚麼事情
  console.log("dispatch 1", action); //dispatch 之前
  let result = nextDispatch(action);
  console.log("next state", store.getState()); //dispatch 之後
  return result;
};

export const twoMiddleware: Middleware<
  {}, // Most middleware do not modify the dispatch return value
  RootState
> = (store) => (nextDispatch) => (action) => {
  console.log("dispatch 2", action); //dispatch 之前
  let result = nextDispatch(action);
  console.log("after dispatch"); //dispatch 之後
  return result;
};
