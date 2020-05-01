import React, { Component } from "react";

class CounterStx extends Component {
  state = { count: 0 };

  increaseCount = () => this.setState({ count: this.state.count + 1 });

  render() {
    return (
      <React.Fragment>
        <h5>Using Class component </h5>
        <div>
          Counter: {this.state.count}{" "}
          <button onClick={this.increaseCount}>Increase</button>
        </div>
      </React.Fragment>
    );
  }
}

export default CounterStx;
