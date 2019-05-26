// import * as genresAPI from './fakeGenresService'

const movies = [
    {
        _id: "73213hiushdsak12321231h3iu1",
        title: "Terminator",
        genre: { _id: "73213hiushdsak12321231h3iu1", name: 'Action' },
        numberInStock: 6,
        dailyRentalRate: 2.5,
        publishDate: "2018-0103T19:04:25.809Z"
    },
    {
        _id: "73213hiushdsak12321231h3iu2",
        title: "Terminator",
        genre: { _id: "73213hiushdsak12321231h3iu2", name: 'Action' },
        numberInStock: 6,
        dailyRentalRate: 2.5,
        publishDate: "2018-0103T19:04:25.809Z"
    },
    {
        _id: "73213hiushdsak12321231h3iu3",
        title: "Terminator",
        genre: { _id: "73213hiushdsak12321231h3iu3", name: 'Action' },
        numberInStock: 6,
        dailyRentalRate: 2.5,
        publishDate: "2018-0103T19:04:25.809Z"
    },
    {
        _id: "73213hiushdsak12321231h3iu4",
        title: "Terminator",
        genre: { _id: "73213hiushdsak12321231h3iu4", name: 'Action' },
        numberInStock: 6,
        dailyRentalRate: 2.5,
        publishDate: "2018-0103T19:04:25.809Z"
    },
    {
        _id: "73213hiushdsak12321231h3iu5",
        title: "Terminator",
        genre: { _id: "73213hiushdsak12321231h3iu5", name: 'Action' },
        numberInStock: 6,
        dailyRentalRate: 2.5,
        publishDate: "2018-0103T19:04:25.809Z"
    }
]

export function getMovieList() {
    return movies;
}

export function getMovie(id) {
    return movies.find(movie => movie._id === id);
}