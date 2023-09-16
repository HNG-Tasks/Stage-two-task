import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
import { TailSpin } from "react-loader-spinner";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 70vh;
`;

const MovieInfo = styled.div`
  position: relative;
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  width: 100%;
  text-align: left;

  @media (max-width: 360px) {
    margin-bottom: 10px;
  }

  h2 {
    font-size: 24px;
    margin-bottom: 10px;
  }

  p {
    font-size: 18px;
    line-height: 1.5;
    margin: 6px 0;
  }

  @media (max-width: 360px) {
    p {
      font-size: 16px;
    }
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  background-color: #007bff;
  color: white;
  padding: 10px 15px;
  border-radius: 5px;
  display: inline-block;
  margin: 0 0 5px 15px;

  @media (max-width: 360px) {
    margin-top: 10px;
  }
`;

const IconWrapper = styled.span`
  margin-right: 8px;
  text-align: center;
`;

const MovieDetails = () => {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    setError(null);

    const apiKey = "3f37434b13abe76ffcb940b673bef6c5";

    axios
      .get(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`)
      .then((response) => {
        setMovie(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="loader-container">
        {" "}
        <TailSpin
          padding="40"
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

  if (error || !movie) {
    return <div>Error: {error ? error.message : "Movie not found"}</div>;
  }

  // Convert release_date to a string
  const releaseDate = new Date(movie.release_date).toDateString();


  return (
    <>
      <Container>
        <MovieInfo>
          <h2> <span data-testid="movie-title"></span>{movie.title}</h2>
          <p> <span data-testid="movie-release-date"></span>
            <span
              style={{ fontSize: "18px", fontWeight: "bold", color: "#e2254f" }}
            >
              Release Date:
            </span>{" "}
            {releaseDate}
          </p>
          <p> <span data-testid="movie-runtime"></span>
            <span
              style={{ fontSize: "18px", fontWeight: "bold", color: "#e2254f" }}
            >
              Runtime (Minutes):
            </span>{" "}
            {movie.runtime.toDateString}
          </p>
          <p> <span data-testid="movie-overview"></span>
            <span
              style={{ fontSize: "18px", fontWeight: "bold", color: "#e2254f" }}
            >
              Overview:
            </span>{" "}
            {movie.overview}
          </p>
        </MovieInfo>
      </Container>

      <div>
        <StyledLink to="/">
          <IconWrapper>
            <AiOutlineArrowLeft />
          </IconWrapper>
          Movie Search
        </StyledLink>
      </div>
    </>
  );
};

export default MovieDetails;
