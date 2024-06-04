import clsx from 'clsx';
import PropTypes from 'prop-types';

import Link from 'components/shared/link';

const LinksList = ({ column, className: additionalClassName = null }) => (
  <div className={clsx('flex flex-col space-y-4', additionalClassName)}>
    <p className="text-white font-medium">{column.title}</p>
    <ul className="flex flex-col space-y-3">
      {column.items.map((link, index) => (
        <li key={`${column.title.toLowerCase()}-link-${index}`}>
          <Link href={link.href} size="base" theme="grey" icon={link.icon}>
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

LinksList.propTypes = {
  className: PropTypes.string,
  column: PropTypes.shape({
    title: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        href: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default LinksList;
