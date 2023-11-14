import { z } from 'zod';

export const CastSchema = z.object({
	cast_id: z.number(),
	name: z.string(),
	profile_path: z.string().optional().nullable(),
});

export const CreditsSchema = z.object({
	cast: z.array(CastSchema),
});

export const GenreSchema = z.object({
	id: z.number(),
	name: z.string(),
});

export const ProductionCompanySchema = z.object({
	id: z.number(),
	logo_path: z.string().optional().nullable(),
	name: z.string(),
	origin_country: z.string(),
});

export const SpokenLanguageSchema = z.object({
	english_name: z.string(),
	iso_639_1: z.string(),
	name: z.string(),
});

export const MovieSchema = z.object({
	id: z.number(),
	poster_path: z.string(),
	original_title: z.string(),
	title: z.string(),
	overview: z.string(),
	backdrop_path: z.string(),
	vote_average: z.number(),
	vote_count: z.number(),
});

export const MovieDetailSchema = MovieSchema.extend({
	credits: CreditsSchema.optional(),
	genres: z.array(GenreSchema),
	production_companies: z.array(ProductionCompanySchema),
	original_language: z.string(),
	spoken_languages: z.array(SpokenLanguageSchema),
});

export const ResPageMoviesSchema = z.object({
	results: z.array(MovieSchema),
	total_results: z.number(),
	page: z.number(),
	total_pages: z.number(),
});
