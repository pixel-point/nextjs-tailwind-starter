import Link from 'components/shared/link';
import getMetadata from 'utils/get-metadata';

const Home = () => (
  <div>
    <h1>Pixel Point Next.js Tailwind Starter</h1>
    <Link to="about">About</Link>
  </div>
);

export const metadata = getMetadata({
  title: 'Home Page',
});

export default Home;
