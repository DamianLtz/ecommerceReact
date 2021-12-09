import React from "react";
import ReactDOM from "react-dom";
import "./sass/styles.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzUVWHGepsDN9r4Tw1K2yVEAEboHcunoo",
  authDomain: "ecommercereact-20d2f.firebaseapp.com",
  projectId: "ecommercereact-20d2f",
  storageBucket: "ecommercereact-20d2f.appspot.com",
  messagingSenderId: "137746285977",
  appId: "1:137746285977:web:aa338d518b277bba5f3f08",
};

initializeApp(firebaseConfig);

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
