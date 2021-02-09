import React, { Component } from "react";
import "isomorphic-fetch";
import MovieReviews from "./MovieReviews";

const NYT_API_KEY = "dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ";
const URL =
  "https://api.nytimes.com/svc/movies/v2/reviews/search.json?" +
  `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here

class SearchableMovieReviewsContainer extends Component {
  state = {
    movies: [],
  };
  handleForm = (e) => {
    e.preventDefault();
    const searchWord = e.target[0].value;

    fetch(
      `https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=${NYT_API_KEY}&query=${searchWord}`
    )
      .then((res) => res.json())
      .then((movie) => {
        this.setState({
          movies: movie.results,
        });
    });
  };

  renderMovies=()=>{
    return this.state.movies.map(movie=> <MovieReviews movie={movie}/>)
}
  render() {
    return (
      <div>
        <form onSubmit={this.handleForm}>
          <label>Search Movie</label>
          <input type="text" id="lname" name="lname" />
          <input type="submit" id="lname" name="lname" />
        </form>
        <p style={{color: "red"}}>Matching Reviews</p>
        {this.renderMovies()}
      </div>
    );
  }
}

export default SearchableMovieReviewsContainer;
