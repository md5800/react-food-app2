import React from "react";
import ReactDOM  from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap-icons/font/bootstrap-icons.css";

import Header from "./components/Header";
import Body from "./components/Body";


const AppComponent = () =>{
return (
    <div className="app">
        <Header />
        <div className="bodywarpper">
          <Body />
        </div>
    </div>
);
};
const container = ReactDOM.createRoot(document.getElementById("root"));
container.render(<AppComponent/>);
