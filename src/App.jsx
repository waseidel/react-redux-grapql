import { Route, Routes } from "react-router-dom"

import { ProtectedRoutes } from "./components/ProtectedRoutes"

import { Landing } from "./Pages/Landing"
import { Home } from "./Pages/Home"
import { Error404 } from "./Pages/Error404"
import { Dashboard } from "./Layouts/Dashboard"
import { TaskList } from './components/TaskList'
import { TaskForm } from './components/TaskForm'
import { Casos } from "./components/Casos"

const App = () => {
  return (
    <>
      <Routes>
        <Route index element={<Landing />} />
        <Route path="/casos" element={<Casos />} />
        <Route path="/landing" element={<Landing />}>
          <Route path="" element={<TaskList />} />
          <Route path="create" element={<TaskForm />} />
          <Route path=":id" element={<TaskForm />} />
        </Route>
        <Route element={<ProtectedRoutes />}>
          <Route element={<Dashboard />} >
            <Route path="/home" element={<Home />} />
          </Route>
        </Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  )
}

export default App
