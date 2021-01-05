import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import prism from '../styles/prism';

const Wrapper = styled.div`
  ${prism};
  p{
    letter-spacing: -0.003em;
    --baseline-multiplier: 0.179;
    --x-height-multiplier: 0.35;
    font-size: 1.15rem;
    line-height: 2;
    code {
      padding: 0.2rem 0.5rem;
      margin: 0.5rem 0;
    }
  },
  li {
    letter-spacing: -0.003em;
    --baseline-multiplier: 0.179;
    --x-height-multiplier: 0.35;
    font-size: 1rem;
    padding: 0px 0px 0px 1rem; 
    line-height: 1.05rem;
    code {
      padding: 0.2rem 0.5rem;
      margin: 0.5rem 0rem;
    }
  }
  a:not(.gatsby-resp-image-link):not(.anchor) {
    color: black;
    box-shadow: inset 0 -2px 0 ${props => props.theme.colors.primary.dark};
    border-bottom: 1px solid ${props => props.theme.colors.primary.base};
    transition: ${props => props.theme.transitions.default.transition};
    text-decoration: none;
    &:hover,
    &:focus {
      background: ${props => props.theme.colors.primary.base};
      color: black;
    }
  }
  h1 {
    margin-top: 1rem;
  }
  h2 {
    margin-top: 1rem;
  }
  summary {
    outline: none;
    border: none;
    font-family: ${props => props.theme.fontFamily.heading};
    font-size: 1.4rem;
    color: #F33829;
    line-height: 1.5;
    &:hover,
    &:focus {
      color: #440B11;
    }
  }
  h4{
    font-family: ${props => props.theme.fontFamily.heading};
    font-size: 1.15rem;
    margin: 0px 0px 0px 0px;
    padding: 0px 0px 0px 1.5rem; 
    line-height: 1.5; 
  }
  h3{
    font-family: ${props => props.theme.fontFamily.heading};
    font-size: 1.25rem;
    margin: 0px 0px 0px 0px;
    padding: 0px 0px 0px 1.5rem; 
    line-height: 1.3; 
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    display: inline-block;
    position: relative;
    a {
      box-shadow: none;
      border-bottom: none;
      &:hover,
      &:focus {
        background: none;
      }
    }
    &:hover {
      .anchor svg {
        opacity: 0.8;
      }
    }
  }
`;

const Content = ({ input }) => (
  <Wrapper dangerouslySetInnerHTML={{ __html: input }} />
);

export default Content;

Content.propTypes = {
  input: PropTypes.any.isRequired,
};
