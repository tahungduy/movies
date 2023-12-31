import { RootState } from 'redux/store';

export const selectTrendingMovies = (state: RootState) => state.movies.trendingMovies;

export const selectMovies = (state: RootState) => state.movies.movies;

export const selectCurrentPage = (state: RootState) => state.movies.currentPage;

export const selectPopularMovies = (state: RootState) => state.movies.popularMovies;
