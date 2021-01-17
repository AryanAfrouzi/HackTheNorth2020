import React from "react";
import './App.css';
import GeeseMap from "./pages/GeeseMap/GeeseMap";

class App extends React.Component {
  state = {
    geese: [
        {
            lat: 43.4723,
            lng: -80.5449,
            date: "1"
        },
        {
          lat: 43.4727,
          lng: -80.5439,
          date: "2"
      }
    ]
  }

  render() {
    return (
      <div className="App">
        <GeeseMap geese={this.state.geese}/>
      </div>
    );
  }
}

export default App;
