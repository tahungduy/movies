export interface Movie {
	id: string;
	name: string;
	rating: number;
	description: string;
	posterPath: string;
	backdropPath: string;
}

export interface MovieResponse {
	id: string;
	adult: boolean;
	backdrop_path: string;
	title: string;
	name: string;
	original_language: string;
	original_title: string;
	overview: string;
	poster_path: string;
	popularity: number;
	release_date: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
}

export interface GetMovieResponse {
	page: number;
	total_pages: number;
	total_results: number;
	results: MovieResponse[];
}

export interface Genre {
	id: string;
	name: string;
}

export interface ProductionCompany {
	id: string;
	logo_path: string | null;
	name: string;
	origin_country: string;
}

export interface ProductionCountry {
	iso_3166_1: string;
	name: string;
}

export interface SpokenLanguage {
	english_name: string;
	iso_639_1: string;
	name: string;
}

export interface Actor {
	cast_id: string;
	name: string;
	order: number;
	profile_path: string;
}

export interface Credits {
	cast: Actor[];
}

export interface MovieResponse {
	id: string;
	adult: boolean;
	backdrop_path: string;
	title: string;
	name: string;
	original_language: string;
	original_title: string;
	overview: string;
	poster_path: string;
	popularity: number;
	release_date: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
}

export interface GetMovieDetailResponse extends MovieResponse {
	budget: number;
	genres: Genre[];
	homepage: string | null;
	imdb_id: string;
	production_companies: ProductionCompany[];
	production_countries: ProductionCountry[];
	release_date: string;
	runtime: number;
	spoken_languages: SpokenLanguage[];
	status: string;
	tagline: string;
	credits?: Credits;
}

export interface MovieDetail extends Movie {
	budget?: number;
	genres: Genre[];
	homepage?: string | null;
	imdbId?: string;
	productionCompanies: ProductionCompany[];
	productionCountries?: ProductionCountry[];
	releaseDate?: string;
	runtime?: number;
	spokenLanguages?: SpokenLanguage[];
	status?: string;
	tagline?: string;
	voteCount: number;
	actors?: Actor[];
}
