import { Form, Formik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";

import { InputField } from "../../../components";

const validation = Yup.object().shape({
  email: Yup.string()
    .email("Por favor digite un correo válido")
    .required("El correo es obligatorio"),
  password: Yup.string().required("La contraseña es obligatoria"),
});

export const LoginPage = () => {
  const initialValues = {
    email: "",
    password: "",
    rememberMe: false,
  };

  const handleLogin = (values) => {
    console.log({ ...values });
  };

  return (
    <section>
      <div className="w-full text-center mb-2">
        <h2 className="text-2xl">Iniciar sesión</h2>
      </div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleLogin}
        validationSchema={validation}
      >
        <Form>
          <InputField
            label="Correo Electronico"
            placeholder="Correo Electronico"
            name="email"
          />

          <InputField type="password" name="password" placeholder="********" />

          <div className="flex justify-between items-center mb-6">
            <div className="form-group form-check">
              <input
                type="checkbox"
                className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
              />
              <label
                className="form-check-label inline-block text-gray-800"
                htmlFor="exampleCheck2"
              >
                Recuerdame
              </label>
            </div>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="inline-block w-full px-7 py-3 mb-2 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Iniciar Sesión
            </button>
            <Link to="/auth/forgot-password" className="text-sm text-gray-800">
              ¿Olvidaste tu contraseña?
            </Link>

            <p className="text-sm font-semibold mt-2 pt-1 mb-0">
              ¿Todavía no tienes una cuenta?{"  "}
              <Link
                to="/auth/register"
                className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
              >
                Registrate
              </Link>
            </p>
          </div>
        </Form>
      </Formik>
    </section>
  );
};
