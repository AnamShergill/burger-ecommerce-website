import { Product } from "@/app/types";
import React from 'react';
import Image from "next/image";

interface ProductCardProps extends Product {
  onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  image,
  onAddToCart
}) => {
  const formattedPrice = typeof price === 'string' ? parseFloat(price.replace('$', '')) : price;

  return (
    <div id="Menu" className="bg-gray-300 p-4 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out relative">
      <Image
        src={image}
        alt={name}
        width={500}
        height={350}
        className="w-full h-56 object-cover rounded-md mb-4 transform transition-all duration-300 ease-in-out hover:scale-105"
      />
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="text-lg text-slate-600 mb-4">${formattedPrice.toFixed(2)}</p>

      <button
        onClick={() => onAddToCart({ id, name, price: formattedPrice, image })}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg text-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out absolute bottom-4 left-1/2 transform -translate-x-1/2"
      >
        Add to Cart
      </button>
    </div>
  );
};
export default ProductCard;