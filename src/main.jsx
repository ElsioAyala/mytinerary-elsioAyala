import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { store } from "./redux/store.js";
import { Provider } from "react-redux";

import { GoogleOAuthProvider } from "@react-oauth/google";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <GoogleOAuthProvider clientId="253540461104-jqbcppnmk75nfe6j9dv18iu0e3a28k6g.apps.googleusercontent.com">
      <App />
    </GoogleOAuthProvider>
  </Provider>
);
