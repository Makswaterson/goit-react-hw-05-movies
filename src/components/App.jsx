import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './Layout/Layout';
// import {lazy} from './react'
import Home from 'pages/Home';
import Movies from 'pages/Movies';
import MovieDetails from 'pages/MovieDetails';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        {/* <Route path="movies" element={<Movies />} /> */}
        <Route path="movies/:moviesId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          {/* <Route path="reviews" element={<Reviews />} /> */}
        </Route>
      </Route>
      <Route path="*" element={<Navigate to={'/'} replace />} />
    </Routes>
  );
};
