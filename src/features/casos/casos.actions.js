import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { apolloClient } from "../../graphql/apolloClient"
import { CASOS_QUERY } from "../../graphql/casos"
import { selectCasosList, setCasosList, } from './casos.slice'

export const useCasos = () => {
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState({})
  const dispatch = useDispatch()
  const casosList = useSelector(selectCasosList)

  const getCasosList = async () => {
    setLoading(true)
    try {
      const response = await apolloClient.query({
        query: CASOS_QUERY
      })
      dispatch(setCasosList(response.data.casos))
      setLoading(false)

    } catch (error) {
      setLoading(false)
      setErrors(error.message)
    }
  }

  return {
    casosList,
    loading,
    errors,
    getCasosList,
  }
}
