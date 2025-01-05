"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import ProductCard from "./ProductCard";
import { Product } from "@/app/types";
import Image from "next/image";

const Menu = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);
  const [showCart, setShowCart] = useState(false);
  const router = useRouter();

  // Fetch products and cart data
  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch("/api/products");
      const data: Product[] = await response.json();

      // Format product price to be a number if it's a string (e.g., "$10")
      data.forEach((product: Product) => {
        if (typeof product.price === "string") {
          product.price = parseFloat(product.price.replace("$", ""));
        }
      });

      console.log("Fetched Products:", data);
      setProducts(data);
    }

    fetchProducts();

    // Load saved cart from localStorage
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      const parsedCart = JSON.parse(savedCart);
      setCart(parsedCart);
      console.log("Loaded Cart from Local Storage:", parsedCart); // Log cart loaded from localStorage
    }
  }, []);

  // Function to add a product to the cart
  const addToCart = (product: Product) => {
    console.log("Adding to cart:", product);
    setCart((prevCart) => {
      const updatedCart = [...prevCart, product];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      console.log("Updated Cart:", updatedCart);
      return updatedCart;
    });
  };

  // Function to toggle cart visibility
  const toggleCart = () => {
    setShowCart((prev) => !prev);
  };

  // Function to go to checkout page
  const goToCheckout = () => {
    router.push("/checkout");
  };

  // Function to clear the cart
  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  // Function to calculate the total price
  const calculateTotal = () => {
    return cart.reduce((total, product) => {
      const price = typeof product.price === "string" ? parseFloat(product.price.replace("$", "")) : product.price;
      return total + price;
    }, 0);
  };

  return (
    <div className="relative p-10">
      <div className="absolute inset-0"     
      style={{
          backgroundImage: "url('/images/bg2.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 0,
          opacity: 0.1,
        }} >
      </div> 
      
      <div className="relative z-10">
        <div className="max-w-6xl mx-auto text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">Delicious Burgers In Our Menu</h1>
          <p className="text-xl text-white">Explore our mouthwatering burgers to order</p>
        </div>
      </div>
      
      {/* Product Cards Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-red-600">
        {products.map((product) => (
          <ProductCard
            key={product.id} // Unique key for each product
            {...product} // Spread the product properties to pass them as props
            onAddToCart={addToCart} // Pass the addToCart function
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto mt-8">
        <button
          onClick={toggleCart}
          className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-blue-800 transition duration-300 ease-in-out transform"
        >
          {showCart ? "Hide Cart" : "View Cart"} ({cart.length} items)
        </button>

        {showCart && (
          <div className="mt-6 bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-4xl font-bold mb-4 text-blue-600">Cart Items</h2>
            {cart.length > 0 ? (
              <div>
                <ul>
                  {cart.map((product) => (
                    <li key={product.id} className="flex items-center justify-center mb-6 transform transition-all duration-300 ease-in-out">
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={150}
                        height={200}
                        className="w-55 h-50 sm:w-30 inline-block transition-transform duration-300 ease-in-out transform text-black"
                      />
                      <span className="ml-4 text-lg font-medium text-slate-800">
                        {product.name} - ${product.price}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="flex justify-between items-center mt-6 text-black">
                  <span className="font-semibold text-xl">
                    Total: ${calculateTotal()}
                  </span>

                  <div>
                    <button
                      onClick={goToCheckout}
                      className="bg-green-600 py-3 px-8 rounded-lg text-lg shadow-md hover:bg-green-700 transition duration-300 ease-in-out text-white transform hover:scale-105"
                    >
                      Go to Checkout
                    </button>

                    <button
                      onClick={clearCart}
                      className="ml-4 bg-red-600 py-3 px-8 rounded-lg text-lg shadow-md hover:bg-red-700 transition duration-300 ease-in-out text-white transform hover:scale-105"
                    >
                      Clear Cart
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <p className="text-lg text-slate-600">Your cart is empty</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;

