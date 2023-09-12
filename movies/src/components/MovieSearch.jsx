import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import fruit from '../assets/PngItem_1381056 1.svg';
import site from '../assets/MV5BMTk3ODA4Mjc0NF5BMl5BcG5nXkFtZTgwNDc1MzQ2OTE@ 1.svg';
import styled from 'styled-components'

// Styles
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;
`;

const Title = styled.h2`
  margin: 0;
`;

const SeeMore = styled.span`
  margin-right: 10px;
  color: red;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 20px;
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


    const handleMovieClick = (movieId) => {
      navigate(`/movie/${movieId}`);
    };

    useEffect(() => {
      console.log('useEffect called');
        setLoading(true);
        setError(null);

        // Generated TMDB API key
        const apiKey = '3f37434b13abe76ffcb940b673bef6c5';

        // Fetched trending movies
        axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}&query=${search}`)
            .then((response) => {
              console.log(response.data.results)
                setMovies(response.data.results);
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
    }, [search]);

    console.log('loading:', loading);
    console.log('error:', error);
    console.log('movies:', movies);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <>
            <Container>
            <Title>Featured Movies</Title>
            <SeeMore>See more</SeeMore>
            </Container>
            <GridContainer>
                {movies.slice(0, 10).map(movie => (
                    <MovieCard key={movie.id} data-testid='movie-card' className="movie-card" onClick={() => handleMovieClick(movie.id)}>
                        <img data-testid='movie-poster' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="movie-poster" />
                        <h3 data-testid='movie-title' className="movie-title">{movie.title}</h3>
                        <p data-testid='movie-release-date' className="movie-release-date">{movie.release_date}</p>
                        <FlexContainer>
                            <ImageContainer>
                                <img src={site} alt="" />
                            </ImageContainer>
                            <ImageContainer>
                                <img src={fruit} alt="" />
                            </ImageContainer>
                        </FlexContainer>
                    </MovieCard>
                ))}
            </GridContainer>
        </>
    );
};

export default MovieSearch;
