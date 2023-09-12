// Header.js
import React, { useState } from 'react';
import logo from '../assets/tv.svg';
import Menu from '../assets/Menu.svg';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 98vw;
  padding: 10px 0;
  background-color: #333; /* Add your desired background color here */
  color: white; /* Add your desired text color here */
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
`;

const Title = styled.span`
  font-size: 18px; /* Adjust the font size as needed */
`;

const LogoImage = styled.img`
  width: 30px; /* Adjust the width as needed */
  height: 30px; /* Adjust the height as needed */
  margin-right: 10px; /* Add spacing between the logo and text */
`;

const FormWrapper = styled.form`
  display: flex;
  align-items: center;
  width: 600px;
  margin: 0 20px; /* Add spacing around the form */
  position: relative;
`;

const Input = styled.input`
  flex-grow: 1;
  padding: 10px 20px;
  border: none;
  border-radius: 10px;
  outline: none;
  margin-right: 10px; /* Add spacing between the input and button */
`;

const Button = styled.button`
  padding: 10px 15px;
  background-color: #007bff; /* Add your desired button color here */
  color: white; /* Add your desired button text color here */
  border: none;
  border-radius: 25px;
  cursor: pointer;
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
`;

const SignInWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 25px;
`;



const Header = ({ handleSearch }) => {
    const [search, setSearch] = useState('');

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
            <LogoImage src={logo} alt=''/>
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
                <span style={{ marginRight: '10px' }}>Sign in</span>
                <img src={Menu} alt="" />
            </SignInWrapper>
        </HeaderWrapper>
    );
};

export default Header;
