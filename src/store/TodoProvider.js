import { useEffect, useReducer } from "react";
import todoReducer, { initialState } from "./todoReducer";
import TodoContext from "./TodoContext.js";
import { loadTodo } from "../store/todoActions";
import todoServices from "../services/todoServices";

const TodoProvider = ({ children }) => {
   const [state, dispatch] = useReducer(todoReducer, initialState);
   useEffect(() => {
      todoServices.getTodos().then((res) => dispatch(loadTodo(res)));
   }, []);
   return (
      <TodoContext.Provider value={[state, dispatch]}>
         {children}
      </TodoContext.Provider>
   );
};

export default TodoProvider;
