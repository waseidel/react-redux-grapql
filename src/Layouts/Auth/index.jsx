import { Outlet } from "react-router-dom";

export const Auth = () => {
  return (
    <div className="flex w-full h-screen items-center justify-center bg-slate-200">
      <div className="bg-white border rounded shadow-lg w-auto p-3">
        <Outlet />
      </div>
    </div>
  );
};
