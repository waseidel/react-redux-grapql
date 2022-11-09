import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Casos } from "./Casos";
import casosService from "../../services/casosService";
import { setCasos } from "./casosSlice";

const actionDispatch = (dispatch) => ({
  setCasos: (casos) => dispatch(setCasos(casos)),
});

export const CasosPage = () => {
  const { setCasos } = actionDispatch(useDispatch());
  const getCasos = async () => {
    const response = await casosService.getCasos().catch((err) => {
      console.log("Error: ", err);
    });
    if (response) setCasos(response);
  };

  useEffect(() => {
    getCasos();
  }, []);

  return (
    <div className="w-full">
      <Casos />
    </div>
  );
};
