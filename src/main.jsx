import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { ApolloProvider } from "@apollo/client";
import App from "./App";
import "./index.css";
import { store } from "./app/store";
import { apolloClient } from "./app/graphql";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ApolloProvider client={apolloClient}>
        <App />
      </ApolloProvider>
    </Provider>
  </React.StrictMode>
);
