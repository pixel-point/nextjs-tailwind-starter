/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx';
import NextLink from 'next/link';
import PropTypes from 'prop-types';
import React from 'react';

const styles = {
  transition: 'transition-colors duration-200',
  base: 'inline-flex gap-x-[10px] font-normal leading-none hover:font-medium',
  size: {
    base: 'text-base',
  },
  weight: {
    light: 'font-light leading-6',
  },
  theme: {
    white: 'text-white',
    grey: 'text-grey-200 hover:text-grey-100',
  },
};

const Link = ({
  className: additionalClassName = null,
  href = null,
  size = null,
  weight = null,
  theme = null,
  icon: Icon = null,
  children,
  ...props
}) => {
  const linkClassName = clsx(
    styles.transition,
    size && theme && styles.base,
    size && styles.size[size],
    theme && styles.theme[theme],
    weight && styles.weight[weight],
    additionalClassName
  );

  const iconElement = Icon ? <Icon width={16} height={16} aria-hidden="true" /> : null;

  /*
    Using next/link component only for internal navigation.
    https://github.com/vercel/next.js/blob/canary/errors/invalid-href-passed.md
  */
  if (href.toString().startsWith('/')) {
    return (
      <NextLink className={linkClassName} href={href} {...props}>
        {iconElement}
        {children}
      </NextLink>
    );
  }

  return (
    <a className={linkClassName} href={href.toString()} {...props}>
      {iconElement}
      {children}
    </a>
  );
};

Link.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string,
  size: PropTypes.oneOf(Object.keys(styles.size)),
  weight: PropTypes.oneOf(Object.keys(styles.weight)),
  theme: PropTypes.oneOf(Object.keys(styles.theme)),
  icon: PropTypes.elementType,
  children: PropTypes.node.isRequired,
};

export default Link;
