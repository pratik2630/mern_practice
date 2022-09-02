import React from "react";
import  ReactDOM  from "react-dom/client";
import "./index.css";
import {Mern}from "./myapp.js"
const root = ReactDOM.createRoot(document.getElementById("root"))



root.render(
  <>
  <Mern name="Pratik" like="5" email="pratik@gmail.com" /> 
  {/* react props */}
  <Mern name="Rohit" like="10" email="rohit@gmail.com" /> 
  
  </>
)