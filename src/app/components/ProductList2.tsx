import React from "react";
import Image from "next/image";

const products = [
  {
    id: 1,
    title: "Kabab Burger",
    category: "fixing",
    price: "200.00",
    imageUrl: "/images/fbh.png",
    bgColor: "bg-yellow-500",
  },

  {
    id: 2,
    title: "Chicken Patty Burger",
    category: "delights",
    price: "350.00",
    imageUrl: "/images/bg1.png",
    bgColor: "bg-orange-500",
  },

  {
    id: 3,
    title: "Beef Patty Burger",
    category: "fixing",
    price: "250.00",
    imageUrl: "/images/bh2.png",
    bgColor: "bg-yellow-500",
  },

  
];

export default function ProductList() {
  return (
    <div className="p-1 flex flex-wrap items-center justify-center mb-6">
      {products.map((product) => (
        <div
          key={product.id}
          className={`flex flex-col shrink-0 m-6 relative overflow-hidden ${product.bgColor} rounded-lg shadow-lg group max-w-sm h-[450px]`}
        >
          <svg
            className="absolute bottom-0 left-0 mb-8 scale-150 group-hover:scale-[1.65] transition-transform"
            viewBox="0 0 375 283"
            fill="none"
            style={{ opacity: 0.1 }}
          >
            <rect
              x="159.52"
              y="175"
              width="152"
              height="152"
              rx="8"
              transform="rotate(-45 159.52 175)"
              fill="white"
            />
            <rect
              y="107.48"
              width="152"
              height="152"
              rx="8"
              transform="rotate(-45 0 107.48)"
              fill="white"
            />
          </svg>

          {/* Image container */}
          <div className="relative flex items-center justify-center flex-grow">
           <Image
             className="relative object-contain h-60 w-80 group-hover:scale-110 transition-transform"
             src={product.imageUrl}
             alt={product.title}
             width={320}  
             height={240} 
           />
          </div>

          {/* Text container */}
          <div className="relative text-white px-6 pb-6 mt-6">
            <span className="block opacity-75 -mb-1">{product.category}</span>

            <div className="flex justify-between">
              <span className="block font-semibold text-xl">
                {product.title}
              </span>
              <span className="block bg-white rounded-full text-orange-900 text-xs font-bold px-3 py-2 leading-none items-center">
                {product.price}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
