import { useEffect } from 'react'
import { useCasos } from '../../../features/casos/casos.actions'
import { Caso } from './Caso'

export const CasosList = () => {
  const { getCasosList, casosList, loading } = useCasos()

  useEffect(() => {
    getCasosList()
  }, [])

  console.log(loading.toString())

  return (
    <div>
      {!loading ?
        casosList.casos.map((caso) => {
          return <Caso caso={caso} key={caso.caso} />
        }) :
        <div>Cargando</div>
      }
    </div>
  )
}
