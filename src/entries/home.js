import React from "react";
import { render } from "react-dom";
import Home from "../pages/containers/home";
import "typeface-roboto";

/* console.log("This is a test!!!") */

const app = document.getElementById("home-container");

//ReactDom.render(que voy a renderizar, donde lo voy a renderizar);

render(<Home />, app);
