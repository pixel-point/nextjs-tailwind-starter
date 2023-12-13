/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx';
import NextLink from 'next/link';
import PropTypes from 'prop-types';
import React from 'react';

// Example of the code — https://user-images.githubusercontent.com/20713191/144221096-1939c382-4ab8-4d28-b0e6-7bbe3a8f8556.png
const styles = {
  transition: 'transition-colors duration-200',
  // FIXME: Add base styles
  base: '',
  // FIXME: Add sizes. Better to write down all sizes and go from higher to lower, e.g. "xl", "lg", "md", "sm", "xs"
  //       Check out an example by a link above for better understanding
  size: {},
  // FIXME: Add themes. Better to name the theme using this pattern: "${color-name}-${theme-type}", e.g. "black-filled"
  //       If there is no dividing between theme types, then feel free to use just color names, e.g. "black"
  //       Check out an example by a link above for better understanding
  theme: {},
};

const Link = ({
  className: additionalClassName = null,
  href = null,
  size = null,
  theme = null,
  children,
  ...props
}) => {
  const linkClassName = clsx(
    styles.transition,
    size && theme && styles.base,
    size && styles.size[size],
    theme && styles.theme[theme],
    additionalClassName
  );

  /*
    Using next/link component only for internal navigation.
    https://github.com/vercel/next.js/blob/canary/errors/invalid-href-passed.md
  */
  if (href.toString().startsWith('/')) {
    return (
      <NextLink className={linkClassName} href={href} {...props}>
        {children}
      </NextLink>
    );
  }

  return (
    <a className={linkClassName} href={href.toString()} {...props}>
      {children}
    </a>
  );
};

Link.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string,
  size: PropTypes.oneOf(Object.keys(styles.size)),
  theme: PropTypes.oneOf(Object.keys(styles.theme)),
  children: PropTypes.node.isRequired,
};

export default Link;
