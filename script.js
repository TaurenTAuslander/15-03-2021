/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/



// Код возьмите из предыдущего домашнего задания  test 

'use strict';
const numberOfFilms = +prompt('Сколько фильмов вы смотрели ?', '');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};




for (let i = 0; i < 2; i++) {
    const a = prompt('Вопрос про фильм', ''),
        b = prompt('Ответ про фильм', '');
    if (a != null && b != null && a != '' && b != '' && a.length < 10 && b.length < 10) {
        personalMovieDB.movies.a = b;
        console.log('done');
    }
    else {
        console.log('error');
        i--;
    }


}

switch (personalMovieDB.count) {
    case 1:
    case 2:
        console.log("Просмотрено довольно мало фильмов");
        break;
    case 11 || 12 || 13 || 14 || 15 || 16 || 17 || 18 || 19 || 20:
        console.log("Вы классический зритель");
        break;
    case 20:
    case 21:
        console.log("Вы киноман");
        break;
    default:
        console.log("errroorooror");
        break;
}


console.log(personalMovieDB);


