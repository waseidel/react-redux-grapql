import { gql } from "@apollo/client";

export const LOGIN_MUTATION = gql`
  mutation Login($loginInput: LoginUserInput!) {
    login(loginUserInput: $loginInput) {
      user {
        _id
        email
        name
      }
      token
    }
  }
`;
