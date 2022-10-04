import React from 'react';

import ArrowIcon from 'icons/arrow.inline.svg';
import LayoutMain from 'layouts/layouts/layout-main';

const Home = () => (
  <LayoutMain>
    <div className="text-lg">
      Pixel Point Next.js Tailwind Starter <ArrowIcon className="ml-2 inline-flex w-5" />
    </div>
  </LayoutMain>
);

export default Home;
