import { gql } from "@apollo/client";

export const MUTATION_LOGIN = gql`
  mutation Login($loginUserInput: LoginUserInput!) {
    login(loginUserInput: $loginUserInput) {
      token
      user {
        _id
        email
        name
      }
    }
  }
`;
