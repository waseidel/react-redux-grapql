import { apolloClient } from "../../graphql";
import { GET_CASOS } from "./queries";
class CasosService {
  async getCasos() {
    try {
      const response = await apolloClient.query({ query: GET_CASOS });
      if (!response || !response.data) {
        throw new Error("No se pudieron conseguir los casos");
      }
      return { ...response.data };
    } catch (error) {
      throw error;
    }
  }
}

export default new CasosService();
