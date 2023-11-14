import { AxiosInstance } from 'axios';
import buildClient from './Api';
import { GetMovieResponse, GetMovieDetailResponse } from 'models/movie';
import { MovieDetailSchema, ResPageMoviesSchema } from 'models/schema';
class MovieDbServices {
	private readonly client: AxiosInstance;
	constructor(client: AxiosInstance) {
		this.client = client;
	}
	public getTrendingMovies = async (): Promise<GetMovieResponse> => {
		const response = await this.client.get<GetMovieResponse>(`trending/movie/day?language=en-US`);
		const newRes = ResPageMoviesSchema.safeParse(response.data);
		if (!newRes.success) throw Error('Somthing went wrong.');
		return newRes?.data;
	};

	public getMovies = async (page: number): Promise<GetMovieResponse> => {
		const response = await this.client.get<GetMovieResponse>(`discover/movie?page=${page}&sort_by=popularity.desc`);
		const newRes = ResPageMoviesSchema.safeParse(response.data);
		if (!newRes.success) throw Error('Somthing went wrong.');
		return newRes?.data;
	};

	public getMovieDetails = async (movieId: string): Promise<GetMovieDetailResponse> => {
		const response = await this.client.get<GetMovieDetailResponse>(
			`movie/${movieId}?append_to_response=videos,credits`
		);
		const newRes = MovieDetailSchema.safeParse(response.data);
		if (!newRes.success) throw Error('Somthing went wrong.');
		return newRes?.data;
	};
}

export const movieDbServices = new MovieDbServices(
	buildClient({
		baseURL: process.env.REACT_APP_BASE_URL,
	})
);
