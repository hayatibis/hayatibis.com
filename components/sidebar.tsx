'use client';

import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { LayoutGroup, motion } from 'framer-motion';

import './sidebar.css'
import { useEffect } from 'react';

const navItems = {
  '/': {
    name: 'home',
  },
  '/about': {
    name: 'about',
  },
  '/blog': {
    name: 'blog',
  },
  '/guestbook': {
    name: 'guestbook',
  },
};


function Logo() {
  return (
    <Link aria-label="Hayati Ibis" href="/">
      <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 37" width="25" height="37" >
        <title>H</title>
        <defs>
          <image width="25" height="37" id="img1" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAlAQMAAACNn9D2AAAAAXNSR0IB2cksfwAAAANQTFRFAAAAp3o92gAAAAF0Uk5TAEDm2GYAAAAMSURBVHicY2AYogAAALkAAR+mUZEAAAAASUVORK5CYII="></image>
        </defs>
        <use id="Background" href="#img1" x="0" y="0"></use>
        <path id="H" className="s0 svg-elem-1" aria-label="H" d="m10.4 17.7q3.4 0 6.3 0 1.5-6.1 2.9-8.4 1-1.4 2-2 0.4-0.3 0.7-0.3 0.5 0 0.5 1.3 0 1.2-0.3 2.6-0.2 1.4-0.5 3.2-1 5.9-1.6 9.4-0.5 3.5-0.5 6.8 0 0.9-1.3 0.9-2 0-2.7-0.8-0.8-0.8-0.8-2.9 0-2 0.9-6.5-3.6-0.1-4.5-0.1h-1.3q-0.3 0-0.7 0-1.4 5.5-1.4 8.7 0 1.9-3.7 1.9-0.8 0-1-0.8-0.1-0.9-0.1-2.7 0-1.8 1.1-6.6-1.9 0.3-2.8 0.3-0.4 0-0.4-0.3 0-0.7 1-1.6 1.1-0.9 3.1-1.5 1.2-4.1 2.3-6.7-3.4 0.1-5 1.4-0.6 0.3-0.9 0.7-0.3 0.2-0.5 0.2-0.3 0-0.5-0.3-0.2-0.4-0.2-1.1 0-2.3 3.9-3.5 3.2-1 7.3-1h0.1q0.2 0 0.6 0.2 0.4 0.3 0.4 0.9 0 0.6-0.2 1.3-0.2 0.7-0.6 1-0.2 1.6-1.6 6.3z"></path>
      </svg>
    </Link>
  );
}

export default function Navbar() {
  let pathname = usePathname() || '/';
  if (pathname.includes('/blog/')) {
    pathname = '/blog';
  }

  useEffect(()=> {
    setInterval(() => {
      const svgElement = document.querySelector('svg');
      svgElement?.classList.add('active');
    }, 100)
  },[])

  return (
    <aside className="md:w-[150px] md:flex-shrink-0 -mx-4 md:mx-0 md:px-0 font-serif">
      <div className="lg:sticky lg:top-20">
        <div className="ml-2 md:ml-[12px] mb-2 px-4 md:px-0 md:mb-8 space-y-10 flex flex-col md:flex-row items-start ">
          <Logo />
        </div>
        <LayoutGroup>
          <nav
            className="flex flex-row md:flex-col items-start relative px-4 md:px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
            id="nav"
          >
            <div className="flex flex-row md:flex-col space-x-0 pr-10 mb-2 mt-2 md:mt-0">
              {Object.entries(navItems).map(([path, { name }]) => {
                const isActive = path === pathname;
                return (
                  <Link
                    key={path}
                    href={path}
                    className={clsx(
                      'transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle',
                      {
                        'text-neutral-500': !isActive,
                        'font-bold': isActive,
                      }
                    )}
                  >
                    <span className="relative py-[5px] px-[10px]">
                      {name}
                      {path === pathname ? (
                        <motion.div
                          className="absolute inset-0 bg-neutral-100 dark:bg-neutral-800 rounded-md z-[-1]"
                          layoutId="sidebar"
                          transition={{
                            type: 'spring',
                            stiffness: 350,
                            damping: 30,
                          }}
                        />
                      ) : null}
                    </span>
                  </Link>
                );
              })}
            </div>
          </nav>
        </LayoutGroup>
      </div>
    </aside>
  );
}
