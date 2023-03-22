import axios from 'axios';

const KEY = '2ee3138b7264f5045a82f30264daff8e';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export async function getTrendingMovies() {
  const { data } = await axios.get(`trending/all/day?api_key=${KEY}`);
  return data;
}
export async function getSearchMovies(query) {
  const { data } = await axios.get(
    `/search/movie?api_key=${KEY}&query=${query}&page=1`
  );

  return data;
}

export async function getMovieDetails(movie_id) {
  const { data } = await axios.get(`movie/${movie_id}?api_key=${KEY}`);
  return data;
}
export async function getMovieCredits(movie_id) {
  const { data } = await axios.get(`movie/${movie_id}/credits?api_key=${KEY}`);
  console.log(data);
  return data;
}
export async function getMovieReviews(movie_id) {
  const { data } = await axios.get(`movie/${movie_id}/reviews?api_key=${KEY}`);
  return data;
}
