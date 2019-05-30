// import * as genresAPI from './fakeGenresService'

const movies = [
    {
        _id: "73213hiushdsak12321231h3iu1",
        title: "Terminator",
        genre: { _id: "73213hiushdsak12321231h3iu1", name: 'Action' },
        numberInStock: 6,
        dailyRentalRate: 2.5,
        publishDate: "2018-0103T19:04:25.809Z",
        liked: false
    },
    {
        _id: "73213hiushdsak12321231h3iu2",
        title: "Avantar",
        genre: { _id: "73213hiushdsak12321231h3iu2", name: 'Fiction' },
        numberInStock: 6,
        dailyRentalRate: 2.5,
        publishDate: "2018-0103T19:04:25.809Z",
        liked: false
    },
    {
        _id: "73213hiushdsak12321231h3iu3",
        title: "Die Hard",
        genre: { _id: "73213hiushdsak12321231h3iu3", name: 'Action' },
        numberInStock: 6,
        dailyRentalRate: 2.5,
        publishDate: "2018-0103T19:04:25.809Z",
        liked: false
    },
    {
        _id: "73213hiushdsak12321231h3iu4",
        title: "Arogant and Prejudice",
        genre: { _id: "73213hiushdsak12321231h3iu4", name: 'Art' },
        numberInStock: 6,
        dailyRentalRate: 2.5,
        publishDate: "2018-0103T19:04:25.809Z",
        liked: false
    },
    {
        _id: "73213hiushdsak12321231h3iu5",
        title: "Terminator",
        genre: { _id: "73213hiushdsak12321231h3iu5", name: 'Action' },
        numberInStock: 6,
        dailyRentalRate: 2.5,
        publishDate: "2018-0103T19:04:25.809Z",
        liked: false
    },
    {
        _id: "73213hiushdsak12321231h3iu6",
        title: "Terminator",
        genre: { _id: "73213hiushdsak12321231h3iu6", name: 'Action' },
        numberInStock: 6,
        dailyRentalRate: 2.5,
        publishDate: "2018-0103T19:04:25.809Z",
        liked: false
    },
    {
        _id: "73213hiushdsak12321231h3iu7",
        title: "Terminator",
        genre: { _id: "73213hiushdsak12321231h3iu7", name: 'Action' },
        numberInStock: 6,
        dailyRentalRate: 2.5,
        publishDate: "2018-0103T19:04:25.809Z",
        liked: false
    },
    {
        _id: "73213hiushdsak12321231h3iu8",
        title: "Terminator",
        genre: { _id: "73213hiushdsak12321231h3iu8", name: 'Action' },
        numberInStock: 6,
        dailyRentalRate: 2.5,
        publishDate: "2018-0103T19:04:25.809Z",
        liked: false
    },
    {
        _id: "73213hiushdsak12321231h3iu9",
        title: "Terminator",
        genre: { _id: "73213hiushdsak12321231h3iu9", name: 'Action' },
        numberInStock: 6,
        dailyRentalRate: 2.5,
        publishDate: "2018-0103T19:04:25.809Z",
        liked: false
    },
]

export function getMovieList() {
    return movies;
}

export function getMovie(id) {
    return movies.find(movie => movie._id === id);
}

export function likeMovie(id) {
    return new Promise((resolve, reject) => {
        movies.find(movie => {
            if(movie._id === id) {
                movie.liked = !movie.liked
            } 
        })
        resolve(movies)
    });
}