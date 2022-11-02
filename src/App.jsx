import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ProtectedRoutes } from "./components/ProtectedRoutes";

import { Dashboard } from "./Layouts/Dashboard";
import { Auth } from "./Layouts/Auth";

import { Landing } from "./Pages/Landing";
import { Home } from "./Pages/Home";
import { Error404 } from "./Pages/Error404";
import { Register } from "./Pages/auth/Register";
import { Login } from "./Pages/auth/Login";
import { Casos } from "./Pages/Casos";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Landing />} />
        <Route path="/landing" element={<Landing />}>
          <Route path="" element={<Casos />} />
        </Route>
        <Route path="/dashboard" element={<ProtectedRoutes />}>
          <Route element={<Dashboard />}>
            <Route path="" element={<Home />} />
          </Route>
        </Route>
        <Route path="/auth" element={<Auth />}>
          <Route path="login" index element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
