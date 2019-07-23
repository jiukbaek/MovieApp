import React, { Component } from 'react';
import './Movie.css';

class Movie extends Component{
    render(){
        console.log(this.props);
        return(
            <div>
                <MoviePoster />
                <h1>hello this is a movie</h1>
            </div>
        );
    }
}

class MoviePoster extends Component{
    render(){
        return(
            <img src="https://www.edupang.com/data_board/2015/06/12/ccb5bed172bc7610fdabd151f33bc313.jpg" />
        );
    }
}

export default Movie;