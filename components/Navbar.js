import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <div className="relative w-12 h-12 mr-3">
            <Image
              src="/logo.webp"
              alt="Casino Chronicles Logo"
              layout="fill"
              objectFit="cover"
              className="rounded-full border-2 border-white"
            />
          </div>
          <span className="text-2xl font-bold">Casino Chronicles</span>
        </div>
        <div className="hidden md:flex space-x-6">
          <Link href="/" legacyBehavior>
            <a className="hover:text-gray-300">Casino</a>
          </Link>
         
          <Link href="/news" legacyBehavior>
            <a className="hover:text-gray-300">News</a>
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-2xl focus:outline-none">
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-gray-800">
          <Link href="/" legacyBehavior>
            <a className="block px-4 py-2 hover:bg-gray-700">Casino</a>
          </Link>
         
          <Link href="/news" legacyBehavior>
            <a className="block px-4 py-2 hover:bg-gray-700">News</a>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
