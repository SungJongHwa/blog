import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
// import Header from "./pages/component/Header";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <RecoilRoot>
      {/* <Header /> */}
      <App />
    </RecoilRoot>
  </BrowserRouter>
);
