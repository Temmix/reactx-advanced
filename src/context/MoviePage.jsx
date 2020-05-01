import React, { Component } from "react";
import MovieList from "./MovieList";

class MoviePage extends Component {
  render() {
    return (
      <div>
        <h5> Using context section </h5>
        <MovieList />
      </div>
    );
  }
}

export default MoviePage;
