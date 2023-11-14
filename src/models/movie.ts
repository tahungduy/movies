export interface Movie {
	id: number;
	name: string;
	rating: number;
	description: string;
	posterPath?: string;
	backdropPath?: string;
}

export interface Genre {
	id: number;
	name: string;
}

export interface ProductionCompany {
	id: number;
	logo_path?: string | null;
	name: string;
	origin_country: string;
}

export interface SpokenLanguage {
	english_name: string;
	iso_639_1: string;
	name: string;
}

export interface Actor {
	cast_id: number;
	name: string;
	profile_path?: string | null;
}

export interface Credits {
	cast: Actor[];
}

export interface MovieDetail extends Movie {
	genres: Genre[];
	productionCompanies: ProductionCompany[];
	spokenLanguages?: SpokenLanguage[];
	actors?: Actor[];
}

export type MovieResponse = {
	id: number;
	backdrop_path?: string;
	title: string;
	original_title: string;
	overview: string;
	poster_path?: string;
	vote_average: number;
	vote_count: number;
};

export interface GetMovieResponse {
	page: number;
	total_pages: number;
	total_results: number;
	results: MovieResponse[];
}
export interface GetMovieDetailResponse extends MovieResponse {
	genres: Genre[];
	credits?: Credits;
	production_companies: ProductionCompany[];
	original_language: string;
	spoken_languages: SpokenLanguage[];
}
