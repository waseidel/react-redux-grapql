import { Link } from "react-router-dom"

export const Caso = ({ caso }) => {
  console.log({ caso })
  return (

    <div className='bg-neutral-800 p-4 rounded-md'>
      <header className="flex justify-between">
        <h3 className="text-md">
          Numero de Caso: {caso.caso}
        </h3>
        {caso.tipo}
        <div className="flex gap-x-2">
          <Link
            className='bg-zinc-600 px-2 py-1 text-xs rounded-md self-center'
            to={`/casos/edit/${caso.caso}`}
          >Editar</Link>
          <button
            className='bg-red-500 px-2 py-1 text-xs rounded-md self-center'
            onClick={() => handleDelete(task.id)}
          >Borrar</button>
        </div>
      </header>

      Fecha y Hora: {caso.hora}
      Vehículo: {caso.bus.mc}
      Viaje: {caso.viaje}
      <div className="flex justify-between">
        <span>
          {caso.jerarquia.nombre}
        </span>
        <p>
          {caso.user.name}
        </p>
      </div>
    </div>
  )
}
