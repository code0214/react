import React from "react";
import ReactDOMClient from "react-dom/client";
import { HomePageHiFi } from "./screens/HomePageHiFi";
import App from './App';

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<App />);
