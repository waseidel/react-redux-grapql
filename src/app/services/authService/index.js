import { setLogout } from "../../containers/auth/authSlice";
import { apolloClient } from "../../graphql";
import { MUTATION_LOGIN } from "./mutations";

class AuthService {
  async login({ email, password }) {
    try {
      const response = await apolloClient.mutate({
        mutation: MUTATION_LOGIN,
        variables: { loginUserInput: { email, password } },
      });
      if (!response || !response.data) {
        throw new Error("No se pudieron conseguir los casos");
      }
      return { ...response.data };
    } catch (error) {
      throw error;
    }
  }

  async isLoggedIn() {
    const token = localStorage.getItem("token");
    if (!token) {
      return false;
    }
    try {
      const response = await apolloClient.query({
        query: IS_VALID_TOKEN,
        variables: { token },
      });
      if (!response || !response.data) {
        setLogout();
        return false;
      }
      return { ...response.data };
    } catch (error) {
      setLogout();
      return false;
    }
  }
}

export default new AuthService();
