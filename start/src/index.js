import React from "react";
import  ReactDOM  from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./index.css"
import App from "./App"
import { ContextProvider } from './contexts/ContextProvider'
import 'react-alice-carousel/lib/alice-carousel.css';

ReactDOM.render(
  <ContextProvider>
      <BrowserRouter>
          <App />
      </BrowserRouter>
  </ContextProvider>, 
  document.getElementById("root"))


