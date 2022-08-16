import {
   ADD_TODO,
   DELETE_TODO,
   FILTER_TODO,
   TOGGLE_TODO,
} from "../constants/todoConst";

export const addTodo = (todo) => {
   return { type: ADD_TODO, payload: todo };
};

export const deleteTodo = (id) => {
   return { type: DELETE_TODO, payload: id };
};

export const toggleTodo = (id) => {
   return { type: TOGGLE_TODO, payload: id };
};

export const filterTodo = (query) => {
   return { type: FILTER_TODO, payload: query };
};
