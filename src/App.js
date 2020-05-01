import React from "react";
import "./App.css";
import Movie from "./hoc/Movie";
import CounterStx from "./hookx/CounterStx";
import CounterFnx from "./hookx/CounterFnx";
import Users from "./hookx/Users";

function App() {
  return (
    <React.Fragment>
      <Movie />
      <hr />
      <CounterFnx />
      <hr />
      <CounterStx />
      <hr />
      <Users />
    </React.Fragment>
  );
}

export default App;
