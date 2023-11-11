import { AxiosInstance } from "axios";
import buildClient from "./Api";
import { GetMovieResponse, MovieDetailResponse } from "types/movie";
class MovieDbServices {
  private readonly client: AxiosInstance;
  constructor(client: AxiosInstance) {
    this.client = client;
  }
  public getTrendingMovies = async (): Promise<GetMovieResponse> => {
    const response = await this.client.get<GetMovieResponse>(
      `trending/movie/day?language=en-US&api_key=${process.env.REACT_APP_API_KEY}`
    );
    return response?.data;
  };

  public getMovies = async (page: number): Promise<GetMovieResponse> => {
    const response = await this.client.get<GetMovieResponse>(
      `discover/movie?page=${page}&sort_by=popularity.desc&api_key=${process.env.REACT_APP_API_KEY}`
    );
    return response?.data;
  };

  public getMovieDetails = async (
    movieId: string
  ): Promise<MovieDetailResponse> => {
    const response = await this.client.get<MovieDetailResponse>(
      `movie/${movieId}?api_key=${process.env.REACT_APP_API_KEY}`
    );
    return response?.data;
  };
}

export const movieDbServices = new MovieDbServices(
  buildClient({
    baseURL: process.env.REACT_APP_BASE_URL,
  })
);
