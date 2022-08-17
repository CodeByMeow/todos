import {
   ADD_TODO,
   DELETE_TODO,
   FETCH_TODO,
   TOGGLE_TODO,
} from "../constants/actions";

export const initialState = {
   todos: [],
};

const todoReducer = (state, action) => {
   const { type, payload } = action;
   switch (type) {
      case FETCH_TODO:
         return payload;

      case ADD_TODO:
         return { ...state, todos: [...state.todos, payload] };

      case DELETE_TODO:
         return {
            ...state,
            todos: state.todos.filter((todo) => todo.id !== payload),
         };
      case TOGGLE_TODO:
         return {
            ...state,
            todos: state.todos.reduce((todos, todo) => {
               if (todo.id === payload) {
                  // todo.isCompleted = !todo.isCompleted;
                  // return [...todos, todo];
                  const toggle = !todo.isCompleted;
                  const todoUpdated = { ...todo, isCompleted: toggle };
                  return [...todos, todoUpdated];
               }

               return [...todos, todo];
            }, []),
         };
      default:
         throw Error("Invalid action");
   }
};

export default todoReducer;
