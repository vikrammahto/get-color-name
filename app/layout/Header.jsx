import Link from 'next/link';
import React from 'react';

const Header = () => {
  const items = [
    {
      title: 'Palettes',
      slug: 'palettes',
    },
    {
      title: 'Gradients',
      slug: 'gradients',
    },
    {
      title: 'All Tools',
      slug: 'all-tools',
    },
  ];

  return (
    <header className="p-4 md:px-24 lg:px-8 border-b">
      <nav className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl flex items-center justify-between">
        <a href="." className="font-semibold text-xl">
          GetColorName
        </a>
        <ul className="flex gap-5 items-center">
          {items.map((item, index) => (
            <li key={index} className="hover:cursor-pointer">
              <Link href={item.slug}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
