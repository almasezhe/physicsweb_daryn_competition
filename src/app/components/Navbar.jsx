"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Иконки для бургер-меню

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Логотип */}
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-blue-600 flex items-center">
              <span className="mr-2">⚛️</span> E-Physics
            </Link>
          </div>

          {/* Навигация */}
          <div className="hidden md:flex space-x-10 items-center">
            {["Objectives", "Tests", "Lessons",].map((item) => (
              <Link key={item} href={`/${item.toLowerCase().replace(" ", "-")}`} className="text-gray-700 hover:text-blue-600">
                {item}
              </Link>
            ))}
          </div>

          {/* Кнопка Login */}
          <div className="hidden md:flex items-center">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              Login
            </button>
          </div>

          {/* Бургер-меню (мобильная версия) */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 focus:outline-none">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Мобильное меню */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md py-2">
          {["Home", "Objectives", "Tests", "Lessons", "About us"].map((item) => (
            <Link key={item} href={`/${item.toLowerCase().replace(" ", "-")}`} className="block px-4 py-2 text-gray-700 hover:bg-gray-200">
              {item}
            </Link>
          ))}
          <button className="w-full text-left px-4 py-2 bg-blue-600 text-white hover:bg-blue-700">
            Login
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
