import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  increaseCount() {
    this.setState({ count: this.state.count + 1 });
  }
  render() {
    return (
      <div className="App">
        <div>
          <button onClick={() => this.increaseCount()}>increase</button>
        </div>
        <h2>{this.state.count}</h2>
      </div>
    );
  }
}

let count = 0;
const rootElement = document.getElementById("root");
ReactDOM.render(<App count={count--} />, rootElement);
