import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "../features/tasks/task.slice";
import casosReducer from '../features/casos/casos.slice';

export const store = configureStore({
  reducer: {
    tasks: taskReducer,
    casos: casosReducer
  }
})


