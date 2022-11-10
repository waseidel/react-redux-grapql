import { gql } from "@apollo/client";

export const IS_LOGGED_IN = gql`
  mutation isLoggedIn($token: String!) {
    isLoggedIn(token: $token) {
      user {
        _id
        email
        name
      }
      token
    }
  }
`;
