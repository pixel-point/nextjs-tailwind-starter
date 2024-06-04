import Image from 'next/image';

import firstTestimonialIcon from './images/testimonial-1.svg';
import secondTestimonialIcon from './images/testimonial-2.svg';
import firstTestimonialAuthorPhoto from './images/testimonial-avatar-1.png';
import secondTestimonialAuthorPhoto from './images/testimonial-avatar-2.png';
import testimonialsBgImage from './images/testimonials-bg.png';
import TestimonialItem from './testimonial-item';

const testimonials = [
  {
    author: {
      name: 'John Smith',
      position: 'IT Director at Reflex',
      photo: firstTestimonialAuthorPhoto,
    },
    text: 'Thanks to DevOptima, our team can focus more on <span class="text-grey-100 font-medium">innovation</span> and less on operational challenges. Their <span class="text-grey-100 font-medium">cloud management solutions</span> are top-notch.',
    icon: firstTestimonialIcon,
  },
  {
    author: {
      name: 'Jane Doe',
      position: 'Tech Lead at Dribble',
      photo: secondTestimonialAuthorPhoto,
    },
    text: 'DevOptima has been a game-changer for us. With their support, we&apos;ve shifted our focus <span class="text-grey-100 font-medium">from operational hurdles to pushing boundaries in innovation</span>.',
    icon: secondTestimonialIcon,
  },
];

const Testimonials = () => (
  <section id="testimonials" className="h-[850px] relative">
    <div className="absolute w-full h-full pointer-events-none -z-[1]">
      <Image src={testimonialsBgImage} className="max-w-none" fill />
    </div>

    <div className="container h-full flex gap-x-[88px] items-center justify-center">
      {testimonials.map((item, index) => (
        <TestimonialItem
          key={`testimonial-item-${index}`}
          author={item.author}
          text={item.text}
          icon={item.icon}
        />
      ))}
    </div>
  </section>
);

export default Testimonials;
