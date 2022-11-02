import {ErrorMessage, Field, useField } from "formik";

export const InputField = ({label, ...rest}) => {
  const [field, meta] = useField(rest)
  return (
    <div className="mb-6">
      <Field
        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        {...field}
        {...rest}
      />
    <ErrorMessage name={field.name}>
      {(msg) => <div className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">{msg}</div>}
    </ErrorMessage>
    </div>
  );
};
