import Card from 'components/Card/Card';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Movie } from 'types/movie';

export default {
  title: 'Card',
  component: Card,
};

const sampleMovie: Movie = {
  id: "1",
  name: 'Sample Movie',
  posterPath: '/gbOnTa2eTbCAznHiusxHI5oA78c.jpg',
  rating: 7.5,
  backdropPath: '/hb0BeFvZNx2zLGWwuwENOIVeK1U.jpg',
  description: "",
};

export const DefaultCard = () => (
  <MemoryRouter>
    <Card movie={sampleMovie} />
  </MemoryRouter>
);

export const CardWithDifferentPosterPath = () => (
  <MemoryRouter>
    <Card movie={{ ...sampleMovie, posterPath: '/gbOnTa2eTbCAznHiusxHI5oA78c.jpg' }} />
  </MemoryRouter>
);

export const CardWithDifferentRating = () => (
  <MemoryRouter>
    <Card movie={{ ...sampleMovie, rating: 8.5 }} />
  </MemoryRouter>
);
