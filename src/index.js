import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "mobx-react";
import './index.css';
import 'react-toastify/dist/ReactToastify.css';
import App from "./Components/App";
import rootStore from "./stores";


ReactDOM.render(
  <React.StrictMode>
    <Provider rootStore={ rootStore }>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

