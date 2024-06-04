import Image from 'next/image';
import React from 'react';

import AutMastery from './images/automation-mastery.svg';
import CiCdIcon from './images/ci-cd-implementation.svg';
import DevOpsIcon from './images/devops-transform.svg';
import EffOperIcon from './images/efficient-operations.svg';

const features = [
  {
    title: 'DevOps transformation',
    description: 'Reshaping businesses with DevOps expertise.',
    icon: DevOpsIcon,
  },
  {
    title: 'Efficient operations',
    description: 'Streamline processes for productivity gains.',
    icon: EffOperIcon,
  },
  {
    title: 'CI/CD implementation',
    description: 'Seamless software delivery pipeline.',
    icon: CiCdIcon,
  },
  {
    title: 'Automation mastery',
    description: 'Unlock full automation potential.',
    icon: AutMastery,
  },
];

const Features = () => (
  <ul className="grid grid-cols-2 gap-x-20 gap-y-10 justify-start max-w-fit">
    {features.map((item, index) => (
      <li key={`feature-item-${index}`} className="max-w-[242px] min-h-[127px]">
        <div className="flex flex-col space-y-[14px]">
          <div className="relative self-start">
            <Image src={item.icon} width={36} height={36} alt={`${item.title} icon`} />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-[22px] bg-blue-200 blur-[40px] -z-[1]" />
          </div>

          <div className="flex flex-col space-y-2">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        </div>
      </li>
    ))}
  </ul>
);

export default Features;
