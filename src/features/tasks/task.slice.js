import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "Task 1",
    description: "Task 1 Description",
    completed: false
  },
  {
    id: "2",
    title: "Task 2",
    description: "Task 2 Description",
    completed: false
  }
]

export const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload)
    },
    deleteTask: (state, action) => {
      const taskFound = state.find(task => task.id === action.payload)
      if (taskFound) {
        state.splice(state.indexOf(taskFound), 1)
      }
    },
    editTask: (state, action) => {
      const { id, title, description } = action.payload
      const taskFound = state.find(task => task.id === id)
      if (taskFound) {
        taskFound.title = title
        taskFound.description = description
      }
    },
    toggleCompleted: (state, action) => {
      const { id } = action.payload
      const taskFound = state.find(task => task.id === id)
      if (taskFound) {
        taskFound.completed = !taskFound.completed
      }
    }
  }
})

export const { addTask, editTask, deleteTask, toggleCompleted } = taskSlice.actions

export default taskSlice.reducer
