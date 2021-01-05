import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import Headroom from 'react-headroom';
import logo from '../../static/logo/header-logo.png';

const StyledLink = styled(Link)`
  display: flex;
  font-weight: 700;
  align-items: center;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  font-family: ${props => props.theme.fontFamily.body};
  font-weight: 500;
  font-size: 1.1rem;
  align-items: center;
  a {
    color: ${props => props.theme.colors.white.base};
    margin-left: 2rem;
    transition: all ${props => props.theme.transitions.default.duration};
    &:hover {
      color: #440B11;
    }
  }
`;

const NavBar = () => (
  <Headroom calcHeightOnResize disableInlineStyles>
    <StyledLink to="/">
      <img src={logo} alt="Minimalist Portrait" width="100" height="100"/>
    </StyledLink>
    <Nav>
      <Link to="/">Home</Link>
      <Link to="/about-me">About</Link>
      <Link to="/education">Education</Link>
      <Link to="/work-experience">Work Experience</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/extra-curriculars">Activities</Link>
      <Link to="/interests">Interests</Link>
    </Nav>
    
  </Headroom>
);

export default NavBar;
