import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Header } from 'components';
import { Layout, Container } from 'layouts';

const About = center => (
  <Layout>
    <Helmet title={'Leftover About Page'} />
    <Header title="Leftover About Page">Leftover About Page</Header>
    <Container center={center}>
      <h3>
        This is a leftover About Page that I didn't feel like deleting. 🦥
      </h3>
      <h3>
        You can return to the <Link to="/">Homepage</Link>.
      </h3>
    </Container>
  </Layout>
);

export default About;

About.propTypes = {
  center: PropTypes.object,
};