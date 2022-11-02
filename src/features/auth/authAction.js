import { useDispatch, useSelector } from "react-redux";
// import { setLogin } from "./authSlice";
import { LOGIN_MUTATION } from "../../graphql/auth/login";
import { useMutation } from "@apollo/client";

export const useAuth = () => {
  const [login, { data, loading, error }] = useMutation(LOGIN_MUTATION);
  const dispatch = useDispatch();
  const userLogged = useSelector(state => state.user);

  const doLogin =  ({ email, password }) => {
     login({
      variables: {
        loginInput: {
          email,
          password,
        },
      },
    });
    dispatch(setLogin(data.login));
  };

  return {
    userLogged,
    loading,
    error,
    doLogin,
  };
};
