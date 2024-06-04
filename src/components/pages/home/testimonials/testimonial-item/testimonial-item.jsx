import Image from 'next/image';
import PropTypes from 'prop-types';

import IconBlured from 'components/shared/icon-blured';

const TestimonialItem = ({ author, text, icon }) => (
  <div className="grow max-w-[522px] flex flex-col">
    {icon && (
      <IconBlured size="large" src={icon} alt="Testimonial decorative icon" className="mb-5" />
    )}

    <p
      className="text-grey-200 text-2xl leading-normal -tracking-[0.01em] mb-8"
      dangerouslySetInnerHTML={{ __html: text }}
    />

    <div className="flex items-start space-x-3">
      <div className="flex items-center justify-center rounded-full size-11 leading-none overflow-hidden">
        <Image src={author.photo} alt={`${author.name} photo`} size={44} />
      </div>

      <div className="flex flex-col space-y-[2px]">
        <p className="text-lg text-white leading-tight">{author.name}</p>
        <p className="text-grey-200 text-[15px] leading-tight">{author.position}</p>
      </div>
    </div>
  </div>
);

TestimonialItem.propTypes = {
  author: {
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
  },
  text: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

export default TestimonialItem;
