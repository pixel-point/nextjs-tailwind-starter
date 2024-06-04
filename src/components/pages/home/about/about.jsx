import Image from 'next/image';

import Features from './features';
import aboutImg from './images/about-img.webp';

const About = () => (
  <section id="about" className="container mb-[152px]">
    <div className="min-h-[619px] flex items-center space-x-[86px]">
      <div className="max-w-[630px] flex justify-end">
        <Image
          src={aboutImg}
          alt="Repository statistic example"
          width={1000}
          height={619}
          className="max-w-none"
        />
      </div>

      <div className="max-w-[630px] flex flex-col space-y-14">
        <div className="flex flex-col space-y-5">
          <h2>What is DevOptima?</h2>
          <p className="description">
            At DevOptima, we are a team of passionate DevOps experts committed to transforming the
            way businesses approach software development and operations.
          </p>
        </div>

        <Features />
      </div>
    </div>
  </section>
);

export default About;
