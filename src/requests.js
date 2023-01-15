const API_KEY = process.env.REACT_APP_api_key;

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-UScertification=PG-13&certification_country=US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_netetworks=213certification=PG-13&certification_country=US`,
    fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US&certification=PG-13&certification_country=US`,
    fetchFamilyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10751&certification=PG-13&certification_country=US`,
    fetchMusicMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10402&certification=PG-13&certification_country=US`,
	fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35&certification=PG-13&certification_country=US`,
	fetchDramaMovies: `/discover/movie?api_key=${API_KEY}&with_genres=18&certification=PG-13&certification_country=US`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749&certification=PG-13&certification_country=US`,
    fetchScienceFictionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=878&certification=PG-13&certification_country=US`,
	fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99&certification=PG-13&certification_country=US`,
}

export default requests;

//https://api.themoviedb.org/3/genre/movie/list?api_key=319ac0ad233f8c0675103436e6749ece&language=en-US
//https://api.themoviedb.org/3/certification/movie/list?api_key=319ac0ad233f8c0675103436e6749ece
