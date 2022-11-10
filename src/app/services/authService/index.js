import { apolloClient } from "../../graphql";
import { MUTATION_LOGIN } from "./mutations";

class AuthService {
  async login({ email, password }) {
    try {
      console.log(email, password);
      const response = await apolloClient.mutate({
        mutation: MUTATION_LOGIN,
        variables: { loginUserInput: { email, password } },
      });
      if (!response || !response.data) {
        throw new Error("No se pudieron conseguir los casos");
      }
      console.log(response.data);
      return { ...response.data };
    } catch (error) {
      throw error;
    }
  }
}

export default new AuthService();
