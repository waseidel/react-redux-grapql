import { useDispatch, useSelector } from "react-redux"
import { apolloClient } from "../../graphql/apolloClient"
import { CASOS_QUERY } from "../../graphql/casos"
import { selectCasosList, setCasosList, } from './casos.slice'

export const useCasos = () => {
  const dispatch = useDispatch()
  const casosList = useSelector(selectCasosList)

  const getCasosList = async () => {
    const response = await apolloClient.query({
      query: CASOS_QUERY
    })
    dispatch(setCasosList(response.data.casos))
  }

  return {
    getCasosList,
    casosList
  }
}
