import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

import Link from 'components/shared/link';

const styles = {
  base: 'inline-flex items-center justify-center text-base font-semibold leading-none text-white rounded-[40px] outline-none transition-all duration-300',
  size: {
    base: 'px-9 py-4',
    small: 'px-9 py-[14px] border-none',
    icon: 'p-0 size-[44px] border-none rounded-full',
  },
  theme: {
    'primary-blue-outline':
      'bg-primary-blue/20 border border-primary-blue hover:bg-secondary-blue/50 hover:border-secondary-blue',
    'primary-blue-filled':
      'bg-primary-blue border border-primary-blue hover:bg-secondary-blue hover:border-secondary-blue',
    green: 'bg-primary-green',
    pink: 'bg-primary-pink',
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
