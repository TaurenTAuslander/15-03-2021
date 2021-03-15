'use strict';
const numberOfFilms = +prompt('Ile filmow ?','')
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('what are your doing',''),
        b = prompt('wynik',''),
        c = prompt('what are your doing2',''),
        d = prompt('wynik2','');

        personalMovieDB.movies.a = b;
        personalMovieDB.movies.c = d;

        console.log(personalMovieDB);


        