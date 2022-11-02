import { faCopy, faPencilAlt, faTimes } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"

export const CasoItem = ({ caso }) => {
  const handleCopy = () => {
    const table = document.querySelector(`#table-${caso.caso}`)
    const range = document.createRange();
    const sel = document.getSelection();
    try {
      range.selectNodeContents(table);
      sel.addRange(range);
    } catch (error) {
      range.selectNode(table);
      sel.addRange(range)
    }
    document.execCommand('copy')
    sel.removeAllRanges()
    }
  return (
    <div className="border shadow justify-start p-4 my-2 mx-4 bg-gray-200">
      <div className="flex justify-between place-items-center mb-2">
        <div>
          <span className="font-semibold">Caso:</span> {caso.caso}
        </div>
        <div className="font-semibold uppercase">
          {caso.tipo}
        </div>
        <div className="space-x-1">
          <button 
            className="border rounded bg-green-500 px-2 py-1"
            onClick={handleCopy}
          >
            <FontAwesomeIcon className="w-3 text-white" icon={faCopy} />
          </button>
          <Link
            className="border rounded bg-indigo-500 px-2 py-1"
            to={`edit/${caso.caso}`}
          >
            <FontAwesomeIcon className="w-3 text-white" icon={faPencilAlt} />
          </Link>
          <button
            className="border rounded bg-red-700 px-2 py-1"
          >
            <FontAwesomeIcon className="w-3 text-white" icon={faTimes} />
          </button>
        </div>
      </div>
      <table id={`table-${caso.caso}`}>
        <tbody>
          
        <tr><td className="font-semibold">Hora</td><td>{caso.hora}</td></tr>
        <tr><td className="font-semibold">Tarea</td><td>{caso.tarea}</td></tr>
        <tr><td className="font-semibold">Viaje</td><td>{caso.viaje}</td></tr>
        <tr><td className="font-semibold">Lugar</td><td>{caso.parada}</td></tr>
        <tr><td className="font-semibold">Bus</td><td>{caso.bus.mc}</td></tr>
        <tr><td className="font-semibold">Línea</td><td>{caso.linea.nombre}</td></tr>
        <tr><td className="font-semibold">Descripción</td><td>{caso.descripcion}</td></tr>
        <tr><td className="font-semibold">Jerarquia</td><td>{caso.jerarquia.nombre}</td></tr>
        <tr><td className="font-semibold">Usuario</td><td>{caso.user.name}</td></tr>
        </tbody>
      </table>
    </div>
  )
}
