/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleMovies` variable below to gain access to an array of movies.

  Keep in mind that your functions must still have and use a parameter for accepting all movies.
*/
const exampleMovies = require("./movies");
// Do not change the line above.

/**
 * getAllMovieTitles()
 * -----------------------------
 * Returns all of titles from an array of movies. If the inputted `movies` array is empty, return `[]`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {string[]} An array of strings, which are movie titles.
 *
 * EXAMPLE:
 *  getAllMovieTitles(movies);
 *  //> [
      "Toy Story 4",
      "Inside Out",
      "Coco",
      "Incredibles 2",
      "Moana",
      "How to Train Your Dragon",
      "Paddington",
      "The Lion King",
      "Fantasia",
      "James and the Giant Peach",
    ];
 */
function getAllMovieTitles(movies) {
  // let movieTitles = [];

  // for(let movie of movies){
  //   movieTitles.push(movie.title)
  // }

  // return movieTitles;
  return movies.map(movie => movie.title)
}
/**
 * getHighestMetascore()
 * -----------------------------
 * Returns the highest `metascore` among all movies. If the inputted `movies` array is empty, return `0`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {number} The highest `metascore` of all movies.
 *
 * EXAMPLE:
 *  getHighestMetascore(movies);
 *  //> 96
 */
function getHighestMetascore(movies) {
  // let highMeta = 0;

  // for(let movie of movies){
  //   if(movie.metascore > highMeta){
  //     highMeta = Number(movie.metascore);
  //   }
  // }

  // return highMeta;

  let highestMetaScore = 0;
  movies.forEach(movie => {
    if(movie.metascore > highestMetaScore){
      highestMetaScore = Number(movie.metascore)
    }
  })

  return highestMetaScore;
}

/**
 * getAverageIMDBRating()
 * -----------------------------
 * Averages all of the IMDB ratings from all movies and returns it, as a number. If the inputted `movies` array is empty, return `0`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {number} The average IMDB rating across all movies.
 *
 * EXAMPLE:
 *  getAverageIMDBRating(movies);
 *  //> 7.76
 */
function getAverageIMDBRating(movies) {
  let totalMovieRatings = 0;
  let average = 0; 

  movies.forEach(movie => {
    totalMovieRatings += Number(movie.imdbRating);
    average = totalMovieRatings / movies.length;
  })

  return average;

  // if(movies.length === 0){
  //   return 0;
  // }

  // let avgSum = 0;

  // for(let movie of movies){
  //   avgSum += Number(movie.imdbRating);
  // }

  // return avgSum / movies.length;
}

/**
 * countByRating()
 * -----------------------------
 * Returns an object where the keys are movie ratings and the values are the number of movies in the array with that rating. If the inputted `movies` array is empty, return `{}`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {Object} An object where keys are movie ratings (e.g. "PG") and the values are how many movies in the array have that rating (e.g. 7).
 *
 * EXAMPLE:
 *  countByRating(movies);
 *  //> { G: 3, PG: 7 }
 */
function countByRating(movies) {
  let movieRatingObj = {};
  movies.forEach(movie => {
    movieRatingObj[movie.rated] = movieRatingObj[movie.rated] ? movieRatingObj[movie.rated] + 1 : 1})
    return movieRatingObj;


  // let movieObj = {};

  // for(let movie of movies){
  //   if(!movieObj[movie.rated]){
  //     movieObj[movie.rated] = 1;
  //   } else{
  //     movieObj[movie.rated] += 1;
  //   }
  // }

  // return movieObj;
}

/**
 * findById()
 * -----------------------------
 * Returns a movie object from an array of objects based on the ID. If the inputted `movies` array is empty or the ID does not match any movie, return `null`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {string} id - A unique `imdbID`.
 * @returns {Object|null} The movie object with the matching `imdbID`.
 *
 * EXAMPLE:
 *  findById(movies, "tt1979376");
 *  //> {
      // Toy Story 4
    };
 */
function findById(movies, id) {
  let movieFound = null;
  movies.forEach(movie => {
    if(movie.imdbID === id){
      movieFound = movie;
    }
  });

  return movieFound;

  // let filmObj = null;

  // for(let movie of movies){
  //   if(movie.imdbID === id){
  //     filmObj = movie;
  //   }
  // }

  // return filmObj;
}

/**
 * filterByGenre()
 * -----------------------------
 * Returns all movie objects with a matching genre. Case-insensitive. If the inputted `movies` array is empty or no movies match the inputted `genre`, return `[]`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {string} genre - The genre of a movie. (e.g. "Fantasy")
 * @returns {Object[]} An array of movies where at least one of the genres matches the `genre` inputted.
 *
 * EXAMPLE:
 *  filterByGenre(movies, "Mystery");
 *  //> [
      {
        // Coco
      }
    ]
 *
 * EXAMPLE:
 *  filterByGenre(movies, "Horror")
 *  //> []
 */
function filterByGenre(movies, genre) {
  return movies.filter(movie => movie.genre.toLowerCase().includes(genre.toLowerCase()))
  
  // let movieGenres = [];

  // for(let movie of movies){
  //   let movieStr = movie.genre.toLowerCase();

  //   if(movieStr.includes(genre.toLowerCase())){
  //     movieGenres.push(movie)
  //   }
  // }

  // return movieGenres;
}

/**
 * getAllMoviesReleasedAtOrBeforeYear()
 * -----------------------------
 * Returns all movie objects with a `released` year equal to or less than the given year.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {number} year - A year as a number. (e.g. 2000)
 * @returns {Object[]} An array of movies where the `released` year is equal to or less than the inputted year.
 *
 * EXAMPLE:
 *  getAllMoviesReleasedAtOrBeforeYear(movies, 2000);
 *  //> [
      {
        // The Lion King
      },
      {
        // Fantasia
      },
      {
        // James and the Giant Peach
      }
    ];
 */
function getAllMoviesReleasedAtOrBeforeYear(movies, year) {
  return movies.filter(movie => movie.released.slice(-4) <= year)
  
  // let movieReleaseYear = [];

  // for(let movie of movies){
  //   let releaseDate = movie.released.split(' ');
  //   let yearNum = Number(releaseDate[2])

  //   if(yearNum <= year){
  //     movieReleaseYear.push(movie)
  //   }
  // }

  // return movieReleaseYear;
}

/**
 * getBiggestBoxOfficeMovie()
 * -----------------------------
 * Returns the name of the movie with the highest `boxOffice` amount.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {string} The name of the movie that made the most money at the box office.
 *
 * EXAMPLE:
 *  getBiggestBoxOfficeMovie(movies);
 *  //> "Incredibles 2"
 */
function getBiggestBoxOfficeMovie(movies) {
  let biggest = 0;
  let biggestMovie = null;
  movies.forEach(movie => {
    let withoutCommas = Number(movie.boxOffice.replace(/,/g,'').slice(1));
    if(withoutCommas > biggest){
      biggest = withoutCommas;
      biggestMovie = movie.title;
    }
  })
  return biggestMovie;

  // let movieName = null; //should return `null` if there are no movies
  // let boxOfficeArr = []; //create an empty array to hold the boxOffice amounts as numbers
  // let movieTitles = []; //create an empty array to hold the titles that match the boxOffice amounts

  // //loop through the movies array to convert all boxOffice strings into numbers and push values into empty arrays
  // for(let i = 0; i < movies.length; i++){
  //   let boxOfficeNum = movies[i].boxOffice.replace('$', '');
  //   boxOfficeNum = Number(boxOfficeNum.replace(/,/g, ''));
  //   boxOfficeArr.push(boxOfficeNum);
  //   movieTitles.push(movies[i].title);
  // }

  // //create a temp var to hold to highest boxOffice amount so far
  // let highest = boxOfficeArr[0];

  // //loop through the boxOffice array to find the highest amount
  // for(let high of boxOfficeArr){
  //   if(high > highest){
  //     highest = high;
  //   }
  // }
  
  // //loop through the movitTitles array to match the index of the movie name to the index of the highest boxOffice amount
  // for(let i = 0; i < movieTitles.length; i++){
  //   if(movieTitles.indexOf(movieTitles[i]) === boxOfficeArr.indexOf(highest)){
  //     movieName = movieTitles[i];
  //   }
  // }

  // return movieName;
}

// Do not change anything below this line.
module.exports = {
  getAllMovieTitles,
  getHighestMetascore,
  getAverageIMDBRating,
  countByRating,
  findById,
  filterByGenre,
  getAllMoviesReleasedAtOrBeforeYear,
  getBiggestBoxOfficeMovie,
};
