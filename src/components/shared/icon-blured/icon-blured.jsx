import clsx from 'clsx';
import Image from 'next/image';
import PropTypes from 'prop-types';
import React from 'react';

const styles = {
  base: {
    wrapper: 'relative inline-flex items-center justify-center',
    decor: 'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-200 -z-[1]',
  },
  size: {
    large: 'size-16',
    small: 'size-9',
  },
  decor: {
    large: 'size-9 blur-[60px]',
    small: 'size-[22px] blur-2xl',
  },
};

const IconBlured = ({
  className: additionalClassName = null,
  size = 'small',
  src = '',
  alt = '',
  ...props
}) => {
  const iconBluredWrapperClassName = clsx(
    styles.base.wrapper,
    size && styles.size[size],
    additionalClassName
  );
  const iconBluredDecorClassName = clsx(styles.base.decor, size && styles.decor[size]);

  return (
    <div className={iconBluredWrapperClassName}>
      <Image
        src={src}
        width={size === 'small' ? 36 : 64}
        height={size === 'small' ? 36 : 64}
        alt={`${alt} icon`}
        {...props}
      />

      <div className={iconBluredDecorClassName} />
    </div>
  );
};

IconBlured.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  size: PropTypes.oneOf(Object.keys(styles.size)),
};

export default IconBlured;
