import React from 'react';
import ReactDOM from 'react-dom';
import Tabs from "./tabs";
import Clock from "./clock";
import Weather from "./weather";

document.addEventListener("DOMContentLoaded", () => {
  const tabRoot = document.getElementById("tabRoot");
  ReactDOM.render(<Tabs tab={[{title: "one", content: "hello"},{title: "two", content: "goodbye"},{title: "three", content: "hello again"}]}/>, tabRoot);
  const clockRoot = document.getElementById("clockRoot");
  ReactDOM.render(<Clock/>, clockRoot);
  const weatherRoot = document.getElementById("weatherRoot");
  ReactDOM.render(<Weather/>, weatherRoot);
});
