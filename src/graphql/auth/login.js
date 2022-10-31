import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation{
    login() {
      user {
        email
        name
    }
    token
  }  
}
`