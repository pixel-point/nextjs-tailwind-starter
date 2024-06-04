'use client';

import Image from 'next/image';

import Form from './form';
import heroImage from './images/hero-img.webp';

const Hero = () => (
  <section className="container mx-auto mb-[200px]">
    <div className="flex space-x-10">
      <div className="flex-1 max-w-1/2 pt-[139px] flex flex-col space-y-9">
        <div className="flex flex-col space-y-7">
          <h1 className="font-secondary text-7xl text-gradient">
            Revolutionize <br /> your DevOps journey <br /> with DevOptima
          </h1>
          <p className="text-xl leading-normal">
            Empower teams to innovate faster through streamlined development, efficient automated
            workflows, and reliable scaling.
          </p>
        </div>

        <Form />
      </div>
      <div className="flex-1 max-w-1/2 pt-[91px] flex items-center justify-end">
        <div className="absolute -z-[1] w-[716px] h-[396px] rounded-full bg-[#141C48]/60 blur-[400px]" />

        <div className="max-w-[589px]">
          <Image
            src={heroImage}
            width={589}
            height={415}
            alt="Image with a code example"
            fetchPriority="high"
          />
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
