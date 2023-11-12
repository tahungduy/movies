import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { movieDbServices } from "services/movieDbServices";
import MovieDetails from "./MovieDetails";

// Mock the movieDbServices.getMovieDetails function
jest.mock("services/movieDbServices", () => ({
  getMovieDetails: jest.fn().mockResolvedValue({
    id: 24242,
    backdrop_path: "/mRmRE4RknbL7qKALWQDz64hWKPa.jpg",
    overview: "Sample movie overview",
    poster_path: "/e7Jvsry47JJQruuezjU2X1Z6J77.jpg",
    name: "The Killer",
    vote_average: 7.4,
    genres: [
      { id: 80, name: "Crime" },
      { id: 53, name: "Thriller" },
    ],
    vote_count: 135,
    production_companies: [{ id: 178464, name: "Netflix" }],
  }),
}));

describe("MovieDetails", () => {
  it("renders movie details correctly", async () => {
    const { container } = render(
      <MemoryRouter initialEntries={["/movie/24242"]}>
        <Routes>
        <Route path="/movie/:id">
          <MovieDetails />
        </Route>
        </Routes>
      </MemoryRouter>
    );

    // Wait for the movie details to be fetched and rendered
    await screen.findByText("The Killer");

    // Assert that the movie details are rendered correctly
    expect(screen.getByText("The Killer")).toBeInTheDocument();
    expect(screen.getByText("Crime")).toBeInTheDocument();
    expect(screen.getByText("Thriller")).toBeInTheDocument();
    expect(screen.getByText("Vote average: 7.4")).toBeInTheDocument();
    expect(screen.getByText("Sample movie overview")).toBeInTheDocument();
    expect(screen.getByText("Produced by:")).toBeInTheDocument();
    expect(screen.getByText("Netflix")).toBeInTheDocument();
    expect(screen.getByAltText("")).toHaveAttribute(
      "src",
      "/e7Jvsry47JJQruuezjU2X1Z6J77.jpg"
    );

    // Assert that the movieDbServices.getMovieDetails function is called with the correct ID
    expect(movieDbServices.getMovieDetails).toHaveBeenCalledWith(24242);

    // Assert that the component renders without any console errors
    expect(console.error).not.toHaveBeenCalled();

    // Assert that the component matches the snapshot
    expect(container).toMatchSnapshot();
  });
});