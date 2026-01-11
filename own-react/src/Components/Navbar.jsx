import React from "react";

const Navbar = () => {
  return (
    <header className="bg-black text-white py-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold flex items-center gap-2">
          <span className="text-green-500">🌱</span> Web Makers
        </div>

        {/* Nav Links */}
        <nav className="hidden md:flex gap-8 font-semibold text-sm">
          <a href="#home" className="hover:text-pink-500 transition">Home</a>
          <a href="#about" className="hover:text-pink-500 transition">About Us</a>
          <a href="#services" className="hover:text-pink-500 transition">Our Services</a>
          <a href="#portfolio" className="hover:text-pink-500 transition">Portfolio</a>
          <a href="#pricing" className="hover:text-pink-500 transition">Pricing</a>
          <a href="#shop" className="hover:text-pink-500 transition">Shop</a>
          <a href="#contact" className="hover:text-pink-500 transition">Contact Us</a>
        </nav>

        {/* Contact Button */}
        <button className="bg-white text-black px-4 py-2 rounded-full font-semibold hover:bg-pink-500 hover:text-white transition">
          Contact us →
        </button>
      </div>
    </header>
  );
};

export default Navbar;
