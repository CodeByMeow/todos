import { useContext } from "react";
import TodoContext from "../store/TodoContext";

const useTodo = () => {
   const [state, dispatch] = useContext(TodoContext);
   return [state, dispatch];
};

export default useTodo;
