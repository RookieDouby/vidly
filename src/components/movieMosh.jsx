import React, { Component } from 'react';
import Like from './common/like'
import Pagination from './common/pagination'
import  { getMovieList,likeMovie } from '../services/fakeMovieService'
import paginate from '../utils/paginate'

class Movies extends Component {
    state = { 
        movies: getMovieList(),
        pageSize: 4,
        currentPage: 1
    }

    handleClick = (movie) => {
        console.log(movie)
        const movies = this.state.movies.filter(m => m._id !== movie._id)
        this.setState({movies})
    }

    handleLike = (movie) => {
        likeMovie(movie._id).then((movies) => {
            this.setState({
                movies
            })
        })
    }

    handlePageChange = page => {
        console.log(page)
        this.setState({ currentPage: page })
    }

    render() { 
        const {length: count} = this.state.movies;
        const { pageSize, currentPage, movies: allMovies } = this.state;
        
        const movies = paginate(allMovies, currentPage, pageSize);

        if(count === 0) return <p>There are no movies in the database.</p>
        return ( 
            <React.Fragment>
                <p>There is { count } movies in the database.</p>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Genre</th>
                            <th>Stock</th>
                            <th>Rate</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {movies.map(movie => 
                            (
                                <tr key={movie._id}>
                                    <td>{movie.title}</td>
                                    <td>{movie.genre.name}</td>
                                    <td>{movie.numberInStock}</td>
                                    <td>{movie.dailyRentalRate}</td>
                                    <td><Like onLike={this.handleLike} movie={movie} /></td>
                                    <td><button onClick={() => this.handleClick(movie)} className="btn btn-danger btn-sm">Delete</button></td>
                                </tr>
                            )
                        )}
                    </tbody>
                </table>
                <Pagination itemsCount={count} pageSize={pageSize} onPageChange={this.handlePageChange} currentPage={currentPage} />
            </React.Fragment>  
        );
    }
}
 
export default Movies;