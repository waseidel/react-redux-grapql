import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { Caso } from "./Caso";
import { makeSelectCasos } from "./selectors";

const stateSelector = createSelector(makeSelectCasos, (casos) => ({
  casos,
}));

export const Casos = () => {
  const { casos } = useSelector(stateSelector);
  return (
    <div className="border bg-white shadow rounded text-black text-sm p-4">
      <div className="flex justify-between">
        <h1 className="text-3xl mb-4"></h1>
        <h1 className="text-3xl mb-4">Casos</h1>
        <div className="">Casos Abiertos: 0</div>
      </div>
      <div className="grid grid-cols-3">
        {casos ? (
          casos.map((caso) => {
            return <Caso caso={caso} key={caso.caso} />;
          })
        ) : (
          <div>
            <p>Todavía no hay casos el día de hoy</p>
          </div>
        )}
      </div>
    </div>
  );
};
