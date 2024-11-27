import { useState, useEffect } from 'react';
import logoimg from '../../src/assets/Screenshot 2024-11-27 120845.png';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (event.target && !(event.target as HTMLElement).closest('.header-section')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="flex items-center justify-between h-[65px] bg-black text-white px-4 underlined-bttom">
      <div className="">
        <img src={logoimg} alt="Logo" className="h-8" />
      </div>
      <div className=" hidden sm:block">
        <ul className="flex items-center justify-around gap-6">
        <li className="hover:text-gray-300 cursor-pointer">
  <Link to="/bank">Bank</Link>
</li>
          <li className="hover:text-gray-300 cursor-pointer">
  <Link to="/client">Client</Link>
</li>
          <li className="hover:text-gray-300 cursor-pointer">Office</li>
        </ul>
      </div>

      <div className="sm:hidden flex items-center">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      <div
        className={`sm:hidden absolute left-0 right-0 bg-black border border-blue-500 text-white p-4 transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'top-16' : 'top-[-1000px] '
        }`}
      >
        <ul className="flex flex-col items-center gap-4">
          <li className="hover:text-gray-300 cursor-pointer">Bank</li>
          <li className="hover:text-gray-300 cursor-pointer">Client</li>
          <li className="hover:text-gray-300 cursor-pointer">Office</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
