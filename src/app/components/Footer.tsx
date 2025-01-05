import React from "react";
import Image from "next/image"; // Importing Image component from Next.js

export default function Footer() {
  return (
    <div id="Footer" className="h-72 flex flex-col justify-center items-center">
      <footer className="text-white py-8">
        {/* Navigation Section */}
        <nav className="flex items-center justify-center space-x-10 mb-6">
          <a className="hover:text-cyan-500 text-amber-600" href="#">
            Home
          </a>
          <a className="hover:text-cyan-500 text-amber-600" href="#">
            About
          </a>
          <a className="hover:text-cyan-500 text-amber-600" href="#">
            Delivery
          </a>
          <a className="hover:text-cyan-500 text-amber-600" href="#">
            Contact
          </a>
        </nav>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mb-6">
          <a href="https://facebook.com" target="_blank" rel="nofollow noopener">
            <Image
              src="https://img.icons8.com/?size=100&id=118497&format=png&color=000000"
              alt="facebook logo"
              width={32}
              height={32}
              className="hover:scale-110 transition-transform"
            />
          </a>

          <a href="https://linkedin.com" target="_blank" rel="nofollow noopener">
            <Image
              src="https://img.icons8.com/?size=100&id=13930&format=png&color=000000"
              alt="linkedin logo"
              width={32}
              height={32}
              className="hover:scale-110 transition-transform"
            />
          </a>

          <a href="https://twitter.com" target="_blank" rel="nofollow noopener">
            <Image
              src="https://img.icons8.com/?size=100&id=13963&format=png&color=000000"
              alt="twitter logo"
              width={32}
              height={32}
              className="hover:scale-110 transition-transform"
            />
          </a>

          <a href="https://instagram.com" target="_blank" rel="nofollow noopener">
            <Image
              src="https://img.icons8.com/?size=100&id=32323&format=png&color=000000"
              alt="instagram logo"
              width={32}
              height={32}
              className="hover:scale-110 transition-transform"
            />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-center text-amber-600 font-medium">
          &copy; 2025 Burgru/Anam Shergill. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}
