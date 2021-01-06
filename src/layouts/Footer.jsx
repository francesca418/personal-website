import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

const StyledLink = styled(Link)`
  display: flex;
  font-weight: 700;
  align-items: center;
`;

const Wrapper = styled.footer`
  position: relative;
  padding-top: 2rem;
  bottom: 0;
  box-shadow: ${props => props.theme.shadow.footer};
  background: ${props => props.theme.gradient.leftToRight};
  font-family: ${props => props.theme.fontFamily.body};
  font-weight: 500;
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    padding-top: 7rem;
  }
`;

const Text = styled.div`
  margin: 0;
  padding-bottom: 2rem;
  text-align: center;
  color: ${props => props.theme.colors.white.light};
`;

const Footer = () => (
  
  <Wrapper>
    <Text>
      <span>
       Find me on <a href="https://www.facebook.com/profile.php?id=100006076810158" target="_blank">Facebook</a> | <a href="https://www.linkedin.com/in/francescammarini" target="_blank">LinkedIn</a> | <a href="https://github.com/francesca418" target="_blank">Github</a>
      <p>Made with <a href="https://www.gatsbyjs.com/" target="_blank">Gatsby</a></p>
      </span>
    </Text>
   
  </Wrapper>
);
export default Footer;
