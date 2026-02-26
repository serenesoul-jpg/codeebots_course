"use client";

import Link from 'next/link';
import { Search, ShoppingCart, Menu, X, Sun, Moon } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Courses', href: '#' },
    { name: 'Community', href: '#' },
    { name: 'Support', href: '#' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/70 dark:bg-gray-900/80 border-b border-gray-100 dark:border-gray-800 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-2 group" onClick={() => setIsOpen(false)}>
               {/* Simple Logo Placeholder or SVG */}
               <div className="w-8 h-8 bg-codeebot-blue rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-md group-hover:scale-105 transition-transform">
                 C
               </div>
              <span className="text-xl font-bold tracking-tight text-gray-900 dark:text-white group-hover:text-codeebot-blue transition-colors">
                CodeeBot <span className="text-codeebot-blue">Learning</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-600 dark:text-gray-300 hover:text-codeebot-blue dark:hover:text-codeebot-blue px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ease-in-out"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Icons & Actions */}
          <div className="flex items-center space-x-2 sm:space-x-4 text-gray-600 dark:text-gray-300">
             {/* Theme Toggle */}
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors duration-300"
                aria-label="Toggle Theme"
              >
                {theme === 'dark' ? (
                  <Sun className="w-5 h-5 text-yellow-500 transition-transform hover:rotate-90" />
                ) : (
                  <Moon className="w-5 h-5 text-gray-600 transition-transform hover:-rotate-12" />
                )}
              </button>
            )}

            <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors duration-300 hidden sm:block" aria-label="Search">
              <Search className="w-5 h-5" />
            </button>
            
            <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors duration-300 relative" aria-label="Cart">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
            </button>
            
            <button className="hidden sm:block bg-codeebot-blue text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
              Login
            </button>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden absolute top-16 left-0 w-full bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 shadow-lg transition-all duration-300 ease-in-out origin-top ${
          isOpen ? 'opacity-100 scale-y-100 translate-y-0' : 'opacity-0 scale-y-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-2">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:text-codeebot-blue dark:hover:text-codeebot-blue hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <div className="pt-4 border-t border-gray-100 dark:border-gray-800 flex flex-col gap-3">
             <button className="flex items-center gap-2 px-3 py-2 text-gray-600 dark:text-gray-300">
                <Search className="w-5 h-5" />
                <span>Search</span>
             </button>
             <button className="w-full bg-codeebot-blue text-white px-5 py-3 rounded-xl text-base font-semibold hover:bg-blue-700 transition-colors shadow-md">
              Login / Sign Up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
