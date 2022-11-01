import { gql } from "@apollo/client";

export const CASOS_QUERY = gql`
  query Casos {
    casos {
      caso
      hora
      viaje
      parada
      tipo
      jerarquia {
        nombre
      }
      bus {
        mc
      }
      linea {
        nombre
      }
      user {
        name
      } 
    }
  }
`
