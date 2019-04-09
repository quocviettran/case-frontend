import React, { Component } from "react";
import Register from "./container/Register/Register";
import logo from "./logo.svg";
import Properties from "./components/Properties/Properties";
import PropertiesCard from "./components/PropertiesCard/PropertiesCard";
import PropertieDetail from "./components/PropertyDetail/PropertyDetail";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <PropertieDetail />
      </div>
    );
  }
}

export default App;
