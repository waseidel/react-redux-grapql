import { gql } from "@apollo/client";

export const GET_CASOS = gql`
  query GetCasos {
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
`;
