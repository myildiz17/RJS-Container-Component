import React, { Component } from "react";
import "isomorphic-fetch";
import MovieReviews from "./MovieReviews";

const NYT_API_KEY = "1fewfmteBhnZV8FywKkuyAnQX2xrokCz";
const URL =
  "https://api.nytimes.com/svc/movies/v2/reviews/all.json?" +
  `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

class LatestMovieReviewsContainer extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
    };
  }
  componentDidMount() {
    fetch(URL)
      .then((res) => res.json())
      .then((movies) => {
        this.setState({
          movies: movies.results
        });
      });
  }

  renderMovies=()=>{
      return this.state.movies.map(movie=> <MovieReviews movie={movie}/>)
  }
  render() {
    return (
    <div className="latest-movie-reviews">
        <p style={{color: "red"}}>New Movies</p>
        {this.renderMovies()}
    </div>
    )
  }
}

export default LatestMovieReviewsContainer;
