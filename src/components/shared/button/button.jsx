import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

import Link from 'components/shared/link';

// Example of the code — https://user-images.githubusercontent.com/20713191/144215307-35538500-b9f0-486d-abed-1a14825bb75c.png
const styles = {
  // FIXME: Add base styles
  base: 'inline-flex items-center justify-center px-9 py-4 text-base font-semibold leading-none text-white rounded-[40px]',
  // FIXME: Add sizes. Better to write down all sizes and go from higher to lower, e.g. "xl", "lg", "md", "sm", "xs"
  //       The name of the size cannot be lower than the font size that being used, e.g. "sm" size cannot have font-size "xs"
  //       Check out an example by a link above for better understanding
  size: {},
  // FIXME: Add themes. Better to name the theme using this pattern: "${color-name}-${theme-type}", e.g. "black-filled"
  //       If there is no dividing between theme types, then feel free to use just color names, e.g. "black"
  //       Check out an example by a link above for better understanding
  theme: {
    'primary-blue-outline':
      'bg-primary-blue/20 border border-primary-blue hover:bg-secondary-blue/50 hover:border-secondary-blue transition-all duration-300',
    'primary-blue-filled':
      'bg-primary-blue border border-primary-blue hover:bg-secondary-blue hover:border-secondary-blue',
  },
};

const Button = ({ className, to, size, theme, children, ...otherProps }) => {
  const Tag = to ? Link : 'button';

  return (
    <Tag
      className={clsx(styles.base, styles.size[size], styles.theme[theme], className)}
      to={to}
      {...otherProps}
    >
      {children}
    </Tag>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  to: PropTypes.string,
  size: PropTypes.oneOf(Object.keys(styles.size)).isRequired,
  theme: PropTypes.oneOf(Object.keys(styles.theme)).isRequired,
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  className: null,
  to: null,
};

export default Button;
