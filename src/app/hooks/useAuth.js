import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createSelector } from "reselect";
import { setIsLoading, setLogin } from "../containers/auth/authSlice";
import { makeSelectIsLoading } from "../containers/auth/selectors";
import authService from "../services/authService";

const actionDispatch = (dispatch) => ({
  setLogin: (auth) => dispatch(setLogin(auth)),
  setIsLoading: (auth) => dispatch(setIsLoading(auth)),
});

const stateSelector = createSelector(makeSelectIsLoading, (isLoading) => ({
  isLoading,
}));

export const useAuth = () => {
  const { setLogin, setIsLoading } = actionDispatch(useDispatch());
  const { isLoading } = useSelector(stateSelector);
  const navigate = useNavigate();

  const login = async ({ email, password }) => {
    try {
      setIsLoading(true);
      const response = await authService.login({ email, password });
      if (response) setLogin(response);
      navigate("/dashboard");
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      console.log("Error", err);
    }
  };

  const isLoggedIn = async () => {
    try {
      const response = await authService.isLoggedIn();
      console.log(response);
      if (!response) {
        return false;
      }
      setLogin(response);
      return true;
    } catch {
      console.log("not is logged in");
    }
  };

  return {
    isLoggedIn,
    login,
    isLoading,
  };
};
