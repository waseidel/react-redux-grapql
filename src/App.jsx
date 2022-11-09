import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ProtectedRoutes } from "./app/components";
import { Dashboard, Auth } from "./app/layouts";
import {
  HomePage,
  LoginPage,
  RegisterPage,
  Error404Page,
  LandingPage,
  CasosPage,
} from "./app/containers";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path="/landing" element={<LandingPage />}>
          <Route path="" element={<CasosPage />} />
        </Route>
        <Route path="/dashboard" element={<ProtectedRoutes />}>
          <Route element={<Dashboard />}>
            <Route path="" element={<HomePage />} />
          </Route>
        </Route>
        <Route path="/auth" element={<Auth />}>
          <Route path="login" index element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Route>
        <Route path="*" element={<Error404Page />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
