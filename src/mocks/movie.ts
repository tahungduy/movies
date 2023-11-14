import { GetMovieDetailResponse } from 'models/movie';

export const movieMockObject: GetMovieDetailResponse = {
	backdrop_path: '/r7DuyYJ0N3cD8bRKsR5Ygq2P7oa.jpg',
	genres: [
		{
			id: 12,
			name: 'Adventure',
		},
		{
			id: 28,
			name: 'Action',
		},
		{
			id: 18,
			name: 'Drama',
		},
	],
	id: 980489,
	original_language: 'en',
	original_title: 'Gran Turismo',
	overview:
		'The ultimate wish-fulfillment tale of a teenage Gran Turismo player whose gaming skills won him a series of Nissan competitions to become an actual professional racecar driver.',
	poster_path: '/51tqzRtKMMZEYUpSYkrUE7v9ehm.jpg',
	production_companies: [
		{
			id: 125281,
			logo_path: '/3hV8pyxzAJgEjiSYVv1WZ0ZYayp.png',
			name: 'PlayStation Productions',
			origin_country: 'US',
		},
		{
			id: 84792,
			logo_path: '/7Rfr3Zu6QnHpXW2VdSEzUminAQd.png',
			name: '2.0 Entertainment',
			origin_country: 'US',
		},
		{
			id: 5,
			logo_path: '/wrweLpBqRYcAM7kCSaHDJRxKGOP.png',
			name: 'Columbia Pictures',
			origin_country: 'US',
		},
	],
	spoken_languages: [
		{
			english_name: 'English',
			iso_639_1: 'en',
			name: 'English',
		},
	],
	title: 'Gran Turismo',
	vote_average: 8.005,
	vote_count: 1381,
};
