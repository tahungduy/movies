import { AxiosInstance } from 'axios';
import buildClient from './Api';
import { GetMovieResponse, GetMovieDetailResponse } from 'types/movie';
class MovieDbServices {
  private readonly client: AxiosInstance;
  constructor(client: AxiosInstance) {
    this.client = client;
  }
  public getTrendingMovies = async (): Promise<GetMovieResponse> => {
    const response = await this.client.get<GetMovieResponse>(`trending/movie/day?language=en-US`);
    return response?.data;
  };

  public getMovies = async (page: number): Promise<GetMovieResponse> => {
    const response = await this.client.get<GetMovieResponse>(`discover/movie?page=${page}&sort_by=popularity.desc`);
    return response?.data;
  };

  public getMovieDetails = async (movieId: string): Promise<any> => {
    const response = await this.client.get<GetMovieDetailResponse>(`movie/${movieId}`);
    return response?.data;
  };
}

export const movieDbServices = new MovieDbServices(
  buildClient({
    baseURL: process.env.REACT_APP_BASE_URL,
  })
);
