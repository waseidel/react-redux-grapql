import React, { useEffect } from 'react'
import { useCasos } from '../../features/casos/casos.actions'

export const Casos = () => {
  const { getCasosList, casosList } = useCasos()

  useEffect(() => {
    getCasosList();
  }, [])

  return (
    <div>Casos</div>
  )
}
