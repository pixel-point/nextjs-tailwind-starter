
// components
import About from 'components/pages/home/about';
import Hero from 'components/pages/home/hero';
import Services from 'components/pages/home/services';
import Testimonials from 'components/pages/home/testimonials';
import getMetadata from 'utils/get-metadata';

const Home = () => (
    <>
      <Hero />
      <About />
      <Services />
      <Testimonials />
    </>
  );

export default Home;

export async function generateMetadata() {
  return getMetadata({
    title: 'DevOptima - Streamlined Development and Automated Workflows',
    description:
      "Boost innovation with DevOptima's streamlined development, efficient automated workflows, and reliable scaling. Empower your team to achieve more, faster.",
    pathname: '/',
  });
}
