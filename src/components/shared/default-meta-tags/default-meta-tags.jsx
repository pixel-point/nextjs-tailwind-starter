import PropTypes from 'prop-types';
import React from 'react';

const defaultTitle = 'Pixel Point Next.js Tailwind Starter';
const defaultDescription = 'Checkout our starter';

const DefaultMetaTags = ({ title, description }) => {
  const ogTitle = title || defaultTitle;
  const ogDescription = description || defaultDescription;
  return (
    <>
      <title>{ogTitle}</title>
      <meta name="description" content={ogDescription} key="desc" />
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:image" content="https://example.com/images/cool-page.jpg" />
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <link rel="icon" href="/favicon.ico" />
    </>
  );
};

DefaultMetaTags.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

DefaultMetaTags.defaultProps = {
  title: null,
  description: null,
};

export default DefaultMetaTags;
