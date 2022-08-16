import {
   ADD_TODO,
   DELETE_TODO,
   FILTER_TODO,
   TOGGLE_TODO,
} from "../constants/todoConst";

export const initState = {
   todos: [
      { id: 1, title: "Đi cafe với gấu", isCompleted: true },
      { id: 2, title: "Học ReactJS", isCompleted: false },
      { id: 3, title: "Học cách thổi nến", isCompleted: false },
      { id: 4, title: "Dắt gấu đi dạo", isCompleted: false },
      { id: 5, title: "Trade coin", isCompleted: false },
   ],
   query: "",
};

const todoReducer = (state, action) => {
   const { type, payload } = action;
   switch (type) {
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
                  // const todo.isCompleted = todo.isCompleted !== true;
                  const toggle = todo.isCompleted !== true;
                  const todoUpdated = { ...todo, isCompleted: toggle };
                  return [...todos, todoUpdated];
               }

               return [...todos, todo];
            }, []),
         };
      case FILTER_TODO:
         return {
            ...state,
            query: payload,
         };
      default:
         throw Error("Invalid action");
   }
};

export default todoReducer;
