// Header.js
import React, { useState } from "react";
import logo from "../assets/tv.svg";
import Menu from "../assets/Menu.svg";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 98vw;
  padding: 15px 0;
  background-color: #333;
  color: white;

  @media (max-width: 360px) {
    flex-direction: column;
    align-items: center;
    padding: 15px 0;
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;

  @media (max-width: 360px) {
    margin-left: 0;
    margin-bottom: 20px;
  }
`;

const Title = styled.span`
  font-size: 20px;
`;

const LogoImage = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
  cursor: pointer;

  @media (max-width: 360px) {
    width: 40px;
    height: 40px;
  }
`;

const FormWrapper = styled.form`
  display: flex;
  align-items: center;
  width: 600px;
  margin: 0 20px;
  position: relative;

  @media (max-width: 360px) {
    width: 80%;
    margin: 0;
  }
`;

const Input = styled.input`
  flex-grow: 1;
  padding: 10px 20px;
  border: none;
  border-radius: 10px;
  outline: none;
  margin-right: 10px;

  @media (max-width: 360px) {
    padding: 15px;
    font-size: 16px;
  }
`;

const Button = styled.button`
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;

  @media (max-width: 360px) {
    padding: 12px 18px;
  }
`;

const SignInWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 25px;

  img {
    cursor: pointer;
  }

  @media (max-width: 360px) {
    margin-right: 0;
    margin-top: 20px;
  }
`;

const Header = ({ handleSearch }) => {
  const [search, setSearch] = useState("");

  const handleSearchMovies = (event) => {
    setSearch(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch(search);
  };

  return (
    <HeaderWrapper>
      <LogoWrapper>
        <LogoImage src={logo} alt="logo" />
        <Title>Movie Box</Title>
      </LogoWrapper>
      <FormWrapper onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="What do you want to watch?"
          value={search}
          onChange={handleSearchMovies}
        />
        <Button type="submit">Search</Button>
      </FormWrapper>
      <SignInWrapper>
        <span style={{ marginRight: "10px" }}>Sign in</span>
        <img src={Menu} alt="sign in" />
      </SignInWrapper>
    </HeaderWrapper>
  );
};

export default Header;
