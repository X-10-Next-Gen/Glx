import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Header = ({ companyName }: { companyName: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-black text-cyan-400 p-4 shadow-md flex justify-between items-center">
      <div className="text-2xl font-bold tracking-wide hover:text-purple-600 transition">
        <Link to="/">{companyName}</Link>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex">
        <ul className="flex space-x-6">
          <li>
            <Link to="/collections" className="hover:text-pink-500 transition">Collections</Link>
          </li>
          <li>
            <Link to="/shop" className="hover:text-pink-500 transition">Shop</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-pink-500 transition">About</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-pink-500 transition">Contact</Link>
          </li>
        </ul>
      </nav>

      {/* Sign In Button */}
      <div className="hidden md:block">
        <Link to="/signin">
          <button className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-cyan-400 transition duration-300">
            Sign In
          </button>
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="absolute top-16 left-0 w-full bg-black text-cyan-400 p-4 md:hidden">
          <ul className="flex flex-col space-y-4 text-center">
            <li>
              <Link to="/collections" className="hover:text-pink-500 transition" onClick={() => setIsOpen(false)}>Collections</Link>
            </li>
            <li>
              <Link to="/shop" className="hover:text-pink-500 transition" onClick={() => setIsOpen(false)}>Shop</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-pink-500 transition" onClick={() => setIsOpen(false)}>About</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-pink-500 transition" onClick={() => setIsOpen(false)}>Contact</Link>
            </li>
            <li>
              <Link to="/signin">
                <button className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-cyan-400 transition duration-300 w-full">
                  Sign In
                </button>
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
