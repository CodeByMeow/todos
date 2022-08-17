import {
   ADD_TODO,
   DELETE_TODO,
   FILTER_TODO,
   FETCH_TODO,
   TOGGLE_TODO,
} from "../constants/actions";

export const loadTodo = (todos) => {
   return { type: FETCH_TODO, payload: todos };
};

export const addTodo = (todo) => {
   return { type: ADD_TODO, payload: todo };
};

export const deleteTodo = (id) => {
   return { type: DELETE_TODO, payload: id };
};

export const toggleTodo = (id) => {
   return { type: TOGGLE_TODO, payload: id };
};
