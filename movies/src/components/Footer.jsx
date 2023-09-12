import React from 'react'
import { AiFillYoutube, AiOutlineTwitter, AiFillFacebook } from 'react-icons/ai';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #333333;
  color: white;
  padding: 15px;
  text-align: center;
  margin-top: 10px;
`;

const SocialIcons = styled.div`
  font-size: 24px;
  margin-bottom: 20px;

  svg {
    margin: 0 10px;
  }
`;

const FooterList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 20px 0;

  li {
    margin: 5px 0;
  }
`;

const CopyrightText = styled.p`
  font-size: 14px;
  margin: 10px 0;
`;

const Footer = () => {
  return (
    <FooterContainer>
    <SocialIcons>
      <AiFillYoutube />
      <AiOutlineTwitter />
      <AiFillFacebook />
    </SocialIcons>
    <FooterList>
      <li>Privacy & Policy</li>
      <li>Terms & Conditions</li>
    </FooterList>
    <CopyrightText>TMDB - Movie Discovery Website</CopyrightText>
    <CopyrightText>&copy; 2023 Created by Blessing Dawodu</CopyrightText>
  </FooterContainer>
);
};

export default Footer;