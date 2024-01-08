//베스트 영화 api
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNzBhMGY5Y2VmOGE1ZmE3Yzg0ZGM3ZDUyMGEyMzkzNyIsInN1YiI6IjY1OWFlMmUzN2Q1NTA0MDVhYTgyZjlhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.swQ2nPfXhIbsVBDtSiBWbcfeMOUU6XM6opZdYWdpyOw'
  }
};

//url 
let url = "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";

let movielist;
// api 붙히기
function getMovielist() {
  fetch(url, options)
    .then(response => response.json())
    .then(data => {
      movielist = data["results"];
      showCard(movielist);
    })
}


// api 카드 붙히기
function searchMovie(val) {
	const filterMovies = movielist.filter((movies) => movies['title'].toLowerCase().includes(val.toLowerCase()));
	console.log(filterMovies);
	showCard(filterMovies);
}

