import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import fruit from "../assets/PngItem_1381056 1.svg";
import site from "../assets/MV5BMTk3ODA4Mjc0NF5BMl5BcG5nXkFtZTgwNDc1MzQ2OTE@ 1.svg";
import { TailSpin } from "react-loader-spinner";
import { FcLike } from "react-icons/fc";
import { MdOutlineFavoriteBorder } from "react-icons/md"
import styled from "styled-components";

// Styles
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;

  @media (max-width: 360px) {
    margin-top: 20px;
  }
`;

const Title = styled.h3`
  font-size: 22px;
  margin-left: 10px;

  @media (max-width: 360px) {
    font-size: 18px;
  }
`;

const SeeMore = styled.span`
  margin-right: 10px;
  color: red;
  cursor: pointer;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 20px;

  @media (max-width: 360px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 10px;
  }
`;

const MovieCard = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  padding: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  img {
    max-width: 100%;
    height: auto;
  }

  h3 {
    font-size: 16px;
    margin: 8px 0 4px;
  }

  p {
    font-size: 14px;
    color: #555;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ImageContainer = styled.div`
  padding: 10px;
`;

const MovieSearch = ({ search }) => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleMovieClick = (movieId) => {
    navigate(`/movie/${movieId}`);
  };

  useEffect(() => {
    setLoading(true);
    setError(null);

    // Generated TMDB API key
    const apiKey = "3f37434b13abe76ffcb940b673bef6c5";

    // Fetched trending movies
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${search}`
      )
      .then((response) => {
        console.log(response.data.results);
        setMovies(response.data.results);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [search]);

  if (loading) {
    return (
      <div className="loader-container">
        <TailSpin
          margin="100"
          height="160"
          width="400"
          color="#e11d48"
          ariaLabel="tail-spin-loading"
          radius="1"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (movies.length === 0) {
    return <div>No movies found with the title "{search}"</div>;
  }

  return (
    <>
      <Container>
        <Title>Featured Movies</Title>
        <SeeMore>See more</SeeMore>
      </Container>
      <GridContainer>
        {movies.slice(0, 10).map((movie) => (
          <MovieCard
            key={movie.id}
            data-testid="movie-card"
            className="movie-card"
            onClick={() => handleMovieClick(movie.id)}
            onMouseEnter={() => setIsFavorite(true)}
            onMouseLeave={() => setIsFavorite(false)}
          >
          {isFavorite ? <FcLike/> : <MdOutlineFavoriteBorder/>}
            <img
              data-testid="movie-poster"
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="movie-poster"
            />
            <h3 data-testid="movie-title" className="movie-title">
              {movie.title}
            </h3>
            <p data-testid="movie-release-date" className="movie-release-date">
              {movie.release_date}
            </p>
            <FlexContainer>
              <ImageContainer>
                <img src={site} alt="site" />
                <p>{movie.vote_average}</p>
              </ImageContainer>
              <ImageContainer>
                <img src={fruit} alt="tomato" />
                <p>{movie.vote_count}</p>
              </ImageContainer>
            </FlexContainer>
          </MovieCard>
        ))}
      </GridContainer>
    </>
  );
};

export default MovieSearch;
