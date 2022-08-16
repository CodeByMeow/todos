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

const todoReducer = (state, action) => { };

export default todoReducer;
