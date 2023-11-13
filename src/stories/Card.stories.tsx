import type { Meta, StoryObj } from '@storybook/react';
import Card from 'components/Card';
import { Movie } from 'types/movie';
import 'tailwindcss/tailwind.css';

const sampleMovie: Movie = {
  id: '1',
  name: 'Sample Movie',
  posterPath: '/gbOnTa2eTbCAznHiusxHI5oA78c.jpg',
  rating: 7.5,
  backdropPath: '/hb0BeFvZNx2zLGWwuwENOIVeK1U.jpg',
  description: '',
};

const meta: Meta<typeof Card> = {
  title: 'MovieComponent/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Card>;

export const CardStory: Story = {
  args: {
    movie: sampleMovie,
  },
};
