// Code MovieReviews Here

import React from 'react'


const MovieReviews=({ movie })=>{
  return   <p className="review-list">{movie.byline}</p>
}

export default MovieReviews