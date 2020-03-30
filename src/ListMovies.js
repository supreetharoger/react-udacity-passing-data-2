import React, { Component } from 'react'

class ListMovies extends Component {
  render() {
    return (
      <div>
      {Object.keys(this.props.movies).map(key => {
      	const movieID = this.props.movies[key].id;
        const usersByMovieList = {}
        let moviesList = this.props.profiles.filter((profile) => {
          if(parseInt(profile.favoriteMovieID) === movieID) {
          	if (usersByMovieList[movieID]) {
        	usersByMovieList[movieID].push(profile.userID);
      		} else {
        		usersByMovieList[movieID] = [profile.userID];
      		}}
          return parseInt(profile.favoriteMovieID) === movieID
        })
      	return (
      	<div key={movieID}>
      		<h2>{this.props.movies[key].name}</h2>
			<p>Liked by:</p>
			<ul>
        
		{!usersByMovieList[movieID] ? (<li>None of the current users liked this movie</li>) : (moviesList.map(data => (
                  <li key={data.userID}>{this.props.users[data.userID].name}</li>
           ))) }
			</ul>
		</div>
			);
})}
      </div>
    )
  }
}

export default ListMovies
