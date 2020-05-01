import React, { useState, useEffect } from "react";
import useDocumentTitle from "./useDocumentTitle";

const CounterFnx = props => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  // using Custom Hooks for reusability
  useDocumentTitle(`${name} has been clicked ${count} times!`);

  //   useEffect(() => {
  //  // componentDidMount, componentDidUpdate
  //     document.title = `${name} has been clicked ${count} times!`;
  //     // this is for componentWillUnmount
  //     return () => {
  //       console.log("clean up");
  //     };
  //   }, [name, count]);

  return (
    <div>
      <React.Fragment>
        <h5>Using functional style </h5>
        <input type="text" onChange={e => setName(e.target.value)} />
        <div>
          {name} has clicked {count} times!
          <button onClick={() => setCount(count + 1)}>Increase</button>{" "}
        </div>
      </React.Fragment>
    </div>
  );
};

export default CounterFnx;
