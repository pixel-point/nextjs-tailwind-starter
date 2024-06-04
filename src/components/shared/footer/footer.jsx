import Image from 'next/image';

import Link from 'components/shared/link';
import logo from 'svgs/logo.svg';

import Cta from './cta';
import DiscourseIcon from './images/discourse.inline.svg';
import GitHubIcon from './images/github.inline.svg';
import LinkedinIcon from './images/linkedin.inline.svg';
import TwitterIcon from './images/twitter.inline.svg';
import LinksList from './links-list';

const footerData = [
  {
    title: 'Resources',
    items: [
      {
        name: 'Docs',
        href: '#',
      },
      {
        name: 'Release notes',
        href: '#',
      },
      {
        name: 'Security',
        href: '#',
      },
    ],
  },
  {
    title: 'Community',
    items: [
      {
        name: 'Twitter',
        href: '#',
        icon: TwitterIcon,
      },
      {
        name: 'LinkedIn',
        href: '#',
        icon: LinkedinIcon,
      },
      {
        name: 'GitHub',
        href: '#',
        icon: GitHubIcon,
      },
      {
        name: 'Discourse',
        href: '#',
        icon: DiscourseIcon,
      },
    ],
  },
  {
    title: 'Legal',
    items: [
      {
        name: 'Privacy policy',
        href: '#',
      },
      {
        name: 'Terms of service',
        href: '#',
      },
    ],
  },
];

const Footer = () => (
  <footer className="pt-8 px-safe pb-safe">
    <Cta />

    <div className="bg-black border-t border-t-blue-400 py-12">
      <div className="container">
        <div className="flex items-start justify-between mb-[6px]">
          <Link href="/">
            <Image src={logo} width={144} height={40} alt="DevOptima logo" priority />
          </Link>

          <div className="flex space-x-44">
            {footerData.map((column, index) => (
              <LinksList key={`footer-link-col-${index}`} column={column} />
            ))}
          </div>
        </div>

        <p className="text-sm">Devoptima {new Date().getFullYear()} © All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
