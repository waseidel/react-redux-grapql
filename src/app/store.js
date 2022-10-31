import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "../features/tasks/task.slice";
import authReducer from '../features/auth/auth.slice';

export const store = configureStore({
  reducer: {
    tasks: taskReducer,
    auth: authReducer
  }
})


