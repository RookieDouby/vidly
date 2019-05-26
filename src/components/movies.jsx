import React, { Component } from 'react';
import { getMovieList } from '../services/fakeMovieService'

class MovieList extends Component {
    constructor() {
        super()
        this.state = {
            movieList: getMovieList()
        }
    }

    handleDeleteMovie = (id) => {
        console.log(id)
        this.state.movieList.forEach((movie, index) => {
            if(movie._id === id) {
                this.state.movieList.splice(index, 1)
            }  
        })
        // this.setState({
        //     movieList: this.state.movieList
        // })
        this.setState((state, props) => {
            return {
                movieList: state.movieList
            }
        })
    }

    renderMovieList() {
        if(this.state.movieList && this.state.movieList.length > 0) {
            return (<tbody>
                {
                    this.state.movieList.map(movie => {
                        return (
                            <tr key={movie._id}>
                                <td>{movie.title}</td>
                                <td>{movie.genre.name}</td>
                                <td>{movie.numberInStock}</td>
                                <td>{movie.dailyRentalRate}</td>
                                <td><button onClick={() => this.handleDeleteMovie(movie._id)} className="btn btn-danger btn-sm">Delete</button></td>
                            </tr>
                        )
                    })
                }
            </tbody>)    
        } 
    }

    render() {
        return (
            <main className="container">
                <p>Showing {this.state.movieList.length} movies in the database.</p>
                <div className="table-responsive">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Genre</th>
                                <th>Stock</th>
                                <th>Rate</th>
                                <th></th>
                            </tr>
                        </thead>
                        {this.renderMovieList()}
                    </table>
                </div>
            </main>
        )
    }
}

export default MovieList