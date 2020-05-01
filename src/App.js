import React from "react";
import "./App.css";
import Movie from "./hoc/Movie";
import CounterStx from "./hookx/CounterStx";
import CounterFnx from "./hookx/CounterFnx";
import Users from "./hookx/Users";
import MoviePage from "./context/MoviePage";
import UserContext from "./context/userContext";
import CartContext from "./context/cartContext";
import Login from "./context/Login";

class App extends React.Component {
  handleLoggedIn = username => {
    console.log("Getting the user: " + username);
    const user = { name: "Temmix" };
    this.setState({ currentUser: user });
  };

  state = { currentUser: null };

  render() {
    return (
      <React.Fragment>
        <div style={{ margin: 15 + "px" }}>
          <Movie />
          <hr />
          <CounterFnx />
          <hr />
          <CounterStx />
          <hr />
          <Users />
          <hr />
          <CartContext.Provider value={{ cart: [] }}>
            <UserContext.Provider
              value={{
                currentUser: this.state.currentUser,
                onLoggedIn: this.handleLoggedIn
              }}
            >
              <div>
                <MoviePage />
                <Login />
              </div>
            </UserContext.Provider>
          </CartContext.Provider>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
