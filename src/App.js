import React, { Component } from "react";
import NameList from "./components/NameList";
class App extends Component {
  render() {
    return (
      <div className="App">
        <NameList />

        <input type="test" name="name" />
      </div>
    );
  }
}
export default App;
