'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

import Button from 'components/shared/button';
import Burger from 'components/shared/header/burger';
import Link from 'components/shared/link';
import MobileMenu from 'components/shared/mobile-menu';
import logo from 'svgs/logo.svg';

import bgImage from './images/bg-pattern.webp';

const links = [
  {
    name: 'About us',
    href: '#about',
  },
  {
    name: 'Services',
    href: '#services',
  },
  {
    name: 'Why DevOptima',
    href: '#testimonials',
  },
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    }
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => setIsMobileMenuOpen((prevIsOpen) => !prevIsOpen);

  return (
    <>
      <header className="px-safe pt-safe">
        <div className="container flex h-20 items-center justify-between relative">
          <div className="absolute -z-[1] top-0 -left-[103px] flex-none flex justify-center overflow-hidden pointer-events-none">
            <div className="w-[2292px] flex-none flex justify-start">
              <Image
                src={bgImage}
                alt="Hero section background pattern contained grid images with blue dots"
                width={2292}
                height={763}
              />
            </div>
          </div>

          <div className="decorative-circle top-0 left-0 -translate-x-1/2 -translate-y-1/2" />

          <Link href="/">
            <Image src={logo} width={173} height={48} alt="DevOptima logo" priority />
          </Link>

          <nav className="flex items-center" aria-label="Global">
            <ul className="flex items-center space-x-12">
              {links.map((item, index) => (
                <li key={`header-link-${index}`} className="leading-none">
                  <Link href={item.href} size="base" theme="white">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            <Burger
              className="hidden md:block"
              isToggled={isMobileMenuOpen}
              onClick={toggleMobileMenu}
            />
          </nav>

          <Button size="base" theme="primary-blue-outline">
            Get started
          </Button>
        </div>
      </header>
      <MobileMenu isOpen={isMobileMenuOpen} onClick={toggleMobileMenu} />
    </>
  );
};

export default Header;
