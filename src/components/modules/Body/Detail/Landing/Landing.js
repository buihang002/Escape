import React from 'react';
import Section from '../Section/Section';
import FeaturedPosts from '../FeaturePost/FeaturePost';
import RecentPosts from '../RecentPost/RecentPost';
import Line from '../../Line/Line';
import styles from './Landing.module.css';

const Landing = () => {
  return (
    <div>
        <Line />
      <Section title='Featured Posts' >
        <FeaturedPosts />
      </Section>
      <Section title='Most Recent'>
        <RecentPosts />
      </Section>
    </div>
  );
};

export default Landing;
