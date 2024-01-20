import React from 'react';
import ContentLoader from 'react-content-loader';

import '../../styles/colors.scss';

export const UserCardLoader = () => (
  <div data-cy="user-card-loader">
    <ContentLoader
      speed={4}
      viewBox='0 0 300 200'
      height={200}
      width={300}
      backgroundColor='#3F4251'
      foregroundColor='#fff'
    >
      <circle cx='10' cy='20' r='8' />
      <rect x='25' y='15' rx='5' ry='5' width='220' height='10' />
      <circle cx='10' cy='50' r='8' />
      <rect x='25' y='45' rx='5' ry='5' width='220' height='10' />
      <circle cx='10' cy='80' r='8' />
      <rect x='25' y='75' rx='5' ry='5' width='220' height='10' />
      <circle cx='10' cy='110' r='8' />
      <rect x='25' y='105' rx='5' ry='5' width='220' height='10' />
    </ContentLoader>
  </div>
);
