export default function handler(req, res) {
  const products = [
    {
      id: 1,
      name: "Classic Burger",
      price: "$220",
      image: "/images/p-1.jpg",
    },

    {
      id: 2,
      image: "/images/p-3.jpg",
      name: "Grilled Chicken Burger",
      price: "$305",
    },

    {
      id: 3,
      image: "/images/p3.jpg",
      name: "Spicy Deal of 3 Burgers",
      price: "$450",
    },

    {
      id: 4,
      image: "/images/p4.jpg",
      name: "Bacon Burger",
      price: "$229",
    },

    {
      id: 5,
      image: "/images/p5.jpg",
      name: "Chicken Burger",
      price: "$255",
    },

    {
      id: 6,
      image: "/images/p6.jpg",
      name: "Veggie Burger",
      price: "$170",
    },

    {
      id: 4,
      image: "/images/p3.jpeg",
      name: "Saucy Juicy Burger",
      price: "$198",
    },

    {
      id: 5,
      image: "/images/p2.jpeg",
      name: "Bacon,Egg Beef Burger",
      price: "$305",
    },

    {
      id: 6,
      image: "/images/p-2.jpg",
      name: "Sausage & Beef Burger",
      price: "$280",
    },
  ];

  res.status(200).json(products);
}
