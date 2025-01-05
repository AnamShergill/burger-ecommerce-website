import { FaHamburger, FaBolt, FaCartPlus } from "react-icons/fa";
import { BsFillSearchHeartFill } from "react-icons/bs";
import Image from "next/image";

export default function HeroWithNavbar() {
  return (
    <header className="bg-gradient-to-r from-black to-red-950 text-white relative">
      {/* Navbar */}
      <div className="grid xl:grid-cols-1 grid-cols-1">
        <div className="p-5">
          <div className="py-3 px-3 rounded-xl border w-full bg-gradient-to-r from-black to-red-950">
            <div className="flex justify-between items-center">
              {/* Logo Section */}
              <div className="flex justify-center items-center gap-4">
                <FaHamburger className="w-6 h-6 text-yellow-400 hover:text-orange-400" />
                <span className="text-xl font-bold text-yellow-400">
                  Burgru
                </span>
              </div>

              {/* Navigation Links */}
              <ul className="hidden md:flex space-x-6">
                <li>
                  <a href="/" className="text-white hover:text-yellow-400">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#Menu" className="text-white hover:text-yellow-400">
                    Menu
                  </a>
                </li>
                <li>
                  <a href="#Footer" className="text-white hover:text-yellow-400">
                    Contact Us
                  </a>
                </li>
              </ul>

              {/* Right Section: Search, Order Info, Cart, User Avatar */}
              <div className="flex justify-center items-center gap-3">
                {/* Search Input */}
                <div
                  style={{ position: "relative" }}
                  className="hidden lg:block"
                >
                  <input
                    className="rounded-3xl py-3 px-3 outline-none text-xs w-[250px] sm:w-[350px] pr-10"
                    placeholder="What are you looking for?"
                    type="text"
                  />
                  <BsFillSearchHeartFill className="w-5 h-5 text-red-400 absolute right-3 top-1/2 transform -translate-y-1/2" />
                </div>

                {/* Order Now Text */}
                <FaBolt className="w-5 h-5 text-amber-500 hidden lg:block" />
                <p className="text-white text-sm hidden lg:block">
                  Order now and get it within{" "}
                  <span className="text-amber-500">15 minutes!</span>
                </p>

                {/* Cart Icon */}
                <FaCartPlus className="w-8 h-8 text-cyan-800 rounded-full ring-2 p-1 relative hover:text-amber-400" />

                {/* User Avatar */}
                <Image
                  className="inline-block w-8 h-8 rounded-full ring-2 ring-sky-400 hover:bg-amber-400"
                  src="/images/image.png"
                  alt="user avatar"
                  width={32} 
                  height={32} 
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-6 py-12 min-h-screen flex flex-col md:flex-row items-center">
        {/* Text Section */}
        <div className="max-w-lg text-center md:text-left pl-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Are you <span className="text-yellow-400">HUNGRY?</span>
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Treat yourself a{" "}
            <span className="text-yellow-400 font-bold">JUICY BURGER</span>
          </p>
          <a
            href="#Menu"
            className="inline-block px-6 py-3 text-lg font-bold text-yellow-400 bg-transparent border-2 border-yellow-400 rounded hover:bg-yellow-400 hover:text-black transition"
          >
            Full Menu
          </a>
        </div>

        {/* Image Section */}
        <div className="relative mt-10 md:mt-0 md:ml-10 w-full md:w-[500px] lg:w-[700px] xl:w-[900px]">
  <Image
    src="/images/bh2.png"
    alt="Juicy Burger"
    width={700} 
    height={500} 
    className="rounded-lg transform translate-x-0 md:translate-x-10 mx-auto w-full h-auto"
  />
</div>

      </div>
    </header>
  );
}
