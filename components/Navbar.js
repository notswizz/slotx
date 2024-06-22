// components/Navbar.js
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-gray-800 text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link href="/" legacyBehavior>
            <a className="hover:text-gray-300">SlotX</a>
          </Link>
        </div>
        <div className="hidden md:flex space-x-6">
          <Link href="/casinos" legacyBehavior>
            <a className="hover:text-gray-300">Casino</a>
          </Link>
          <Link href="/slots" legacyBehavior>
            <a className="hover:text-gray-300">Slots</a>
          </Link>
          <Link href="/promotions" legacyBehavior>
            <a className="hover:text-gray-300">Promos</a>
          </Link>
          <Link href="/promotions" legacyBehavior>
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
        <div className="md:hidden bg-gray-700">
          <Link href="/casinos" legacyBehavior>
            <a className="block px-4 py-2 hover:bg-gray-600">Casinos</a>
          </Link>
          <Link href="/slots" legacyBehavior>
            <a className="block px-4 py-2 hover:bg-gray-600">Slots</a>
          </Link>
          <Link href="/promotions" legacyBehavior>
            <a className="block px-4 py-2 hover:bg-gray-600">Promos</a>
          </Link>
          <Link href="/promotions" legacyBehavior>
            <a className="block px-4 py-2 hover:bg-gray-600">News</a>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
