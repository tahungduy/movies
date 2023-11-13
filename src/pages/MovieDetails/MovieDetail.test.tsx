import { render, screen } from '@testing-library/react';
import MovieDetails from './MovieDetails';
import { movieDbServices } from 'services/movieDbServices';
import { movieMockObject } from 'mocks/movie';

// Mock the useParams and movieDbServices
jest.mock('react-router', () => ({
  useParams: () => ({ id: '980489' }), // Mocking the ID
}));
// jest.spyOn(movieDbServices, 'getMovieDetails').mockResolvedValue(Promise.resolve(movieMockObject))

test('renders movie details correctly', async () => {
  jest.spyOn(movieDbServices, 'getMovieDetails').mockImplementation(jest.fn(() =>
  Promise.resolve(movieMockObject))
)
  render(<MovieDetails />);

  // Simulate waiting for movie details to load
  // Here we wait for the backdrop image to be available in the DOM
  await screen.findByText('Gran Turismo');

  // Assert that the movie details are rendered
  expect(screen.getByText('Gran Turismo')).toBeInTheDocument();

  // Assert that the mock service function was called
  expect(movieDbServices.getMovieDetails).toHaveBeenCalledWith('980489');
});