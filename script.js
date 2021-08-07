"use strict";

let numberOfFilms;

const personalMoviesDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMoviesDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
        while (personalMoviesDB.count == '' || personalMoviesDB.count == null || isNaN(personalMoviesDB.count)) {
            personalMoviesDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++){
            const a = prompt('Один из последних просмотренных фильмов? ', ''),
                  b = prompt('На сколько оцените его? ', '');
        
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMoviesDB.movies[a] = b;
                console.log('Done');
            } else {
                console.log('Error');
                i--;
            }    
        }
    },
    detectPersonalLevel: function() {
        if (personalMoviesDB.count < 10) {
            console.log("Просмотрено довольно мало фильмов"); 
        } else if (personalMoviesDB.count >= 10 && personalMoviesDB.count < 30) {
            console.log("Вы классический зритель");
        } else if (personalMoviesDB.count >= 30) {
            console.log("Вы киноман");
        } else {
            console.log("Ошибка!!");
        }
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMoviesDB);
        }
    },
    toggleVisibleMyDB: function(){
        if (personalMoviesDB.privat) {
            personalMoviesDB.privat = false;
        } else {
            personalMoviesDB.privat = true;
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i < 2; i++) {

            let genres = prompt(`Введите ваши любимые жанры через запятую`);
            if (genres === '' || genres === null) {
                    console.log('Вы ввели некорректные данные');
                    i--;
            } else {
                    personalMoviesDB.genres = genres.split(', ');
                    personalMoviesDB.genres.sort();
            }
        }
        personalMoviesDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`); 
        });
    }
};

