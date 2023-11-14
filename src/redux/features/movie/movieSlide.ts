import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Movie } from 'models/movie';

type initialStateProps = {
	movies: Movie[];
	popularMovies: Movie[];
	trendingMovies: Movie[];
	currentPage: number;
};
const initialState: initialStateProps = {
	movies: [],
	trendingMovies: [],
	popularMovies: [],
	currentPage: 1,
};

const moviesSlice = createSlice({
	name: 'movies',
	initialState: initialState,
	reducers: {
		addMovies(state, action: PayloadAction<Movie[]>) {
			state.movies = [...state.movies, ...action.payload];
		},
		addTrendingMovies(state, action: PayloadAction<Movie[]>) {
			state.trendingMovies = [...state.trendingMovies, ...action.payload];
		},
		addPopularMovies(state, action: PayloadAction<Movie[]>) {
			state.popularMovies = action.payload;
		},
		setPage(state, action: PayloadAction<number>) {
			state.currentPage = action.payload;
		},
	},
});

export const moviesAction = moviesSlice.actions;
const moviesReducer = moviesSlice.reducer;
export default moviesReducer;
