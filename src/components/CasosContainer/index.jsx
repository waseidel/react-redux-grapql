import { useSelector } from 'react-redux'
import { CasoItem } from '../CasoItem'

export const CasosContainer = () => {
  const casos = useSelector(store => store.casos.caso)
  return (
    <div className='border bg-white shadow rounded text-black text-sm p-4'>
      <div className='flex justify-between'>
        <h1 className='text-3xl mb-4'></h1>
        <h1 className='text-3xl mb-4'>Casos</h1>
        <div className=''>
          Casos Abiertos: 0
        </div>
      </div>
      <div className='grid grid-cols-3'>

        {casos.length ?
          casos.map((caso) => {
            return <CasoItem caso={caso} key={caso.caso} />
          })
          : <div>
            <p>Todavía no hay casos el día de hoy</p>
          </div>
        }
      </div>
    </div>
  )
}
