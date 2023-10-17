import { createSlice } from "@reduxjs/toolkit";

export const toDoSlice = createSlice({
  name: "toDo",
  initialState: {
    todo: [],
    category: [""],
  },
  reducers: {
    reset: () => {
      return {
        todo: [],
        category: [""],
      };
    },
    initializeToDoList: (state, action) => {
      return { ...state, todo: action.payload };
    },
    initializeCategoryList: (state, action) => {
      return {
        ...state,
        category: ["", ...action.payload.filter((i) => i != "")],
      };
    },
    addToDo: (state, action) => {
      return { ...state, todo: [...state.todo, action.payload] };
    },
    updateToDo: (state, action) => {
      let updated = action.payload;
      return {
        ...state,
        todo: [...state.todo.filter((i) => i.id != updated.id), updated],
      };
    },
    removeToDo: (state, action) => {
      let toRemove = action.payload;
      if (
        state.todo.length > 0 &&
        state.todo.findIndex((e) => e.id == toRemove.id) > -1
      ) {
        return {
          ...state,
          todo: state.todo.filter((e) => e.id != toRemove.id),
        };
      } else {
        return state;
      }
    },
  },
});

export const {
  reset,
  initializeToDoList,
  initializeCategoryList,
  addToDo,
  updateToDo,
  removeToDo,
} = toDoSlice.actions;

export default toDoSlice.reducer;
