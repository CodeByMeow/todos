import { useReducer } from "react";
import todoReducer, { initState } from "./todoReducer";
import TodoContext from "./TodoContext.js";
const TodoProvider = ({ children }) => {
   const [state, dispatch] = useReducer(todoReducer, initState);
   return (
      <TodoContext.Provider value={[state, dispatch]}>
         {children}
      </TodoContext.Provider>
   );
};

export default TodoProvider;
