import axios from "axios";

import { TODO_ADD_URL, TODOS_URL } from "../constants/services.js";

const todoServices = {
  getTodos: async () => {
    const res = await axios.get(TODOS_URL);
    return res.data;
  },
  addTodo: async (todo) => {
    const res = await axios.post(TODO_ADD_URL, { todo });
  },
};

export default todoServices;
