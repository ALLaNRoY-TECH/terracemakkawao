export interface MenuItem {
  name: string;
  price: string;
  description?: string;
  isPopular?: boolean;
  image?: string;
}

export interface MenuCategory {
  category: string;
  items: MenuItem[];
}

export const fullMenu: MenuCategory[] = [
  {
    category: "Starters & Bites",
    items: [
      { name: "XXX Fries", price: "190" },
      { name: "Peri Peri Fries", price: "180", isPopular: true },
      { name: "Funny Potato Wedges", price: "170" },
      { name: "Chicken Fingers", price: "170" },
      { name: "Cheese Yum Nuggets", price: "190" },
      { name: "Chicken 65", price: "290" },
      { name: "Gobi Manchurian Dry", price: "260" },
      { name: "Paneer Chilly Dry", price: "399" },
      { name: "Dragon Chicken", price: "389", isPopular: true },
      { name: "Honey Chilly Chicken", price: "399" },
      { name: "Crispy Beef", price: "440" },
      { name: "Golden Prawns", price: "430" },
    ],
  },
  {
    category: "Burgers, Wraps & Sandwiches",
    items: [
      { name: "Zinger Burger", price: "299", isPopular: true },
      { name: "Mega Zinger Burger", price: "379" },
      { name: "Beef Burger", price: "389" },
      { name: "Jumbo Burger", price: "310" },
      { name: "Zinger Wrap", price: "229" },
      { name: "American Spicy Wrap", price: "249" },
      { name: "Franky Chicken", price: "199" },
      { name: "Mexican Club Sandwich", price: "279" },
      { name: "Chicken Steak Sandwich", price: "320" },
    ],
  },
  {
    category: "Soups & Salads",
    items: [
      { name: "Hot N Sour Chicken", price: "190" },
      { name: "Manchow Chicken", price: "230" },
      { name: "Cream Of Chicken", price: "249" },
      { name: "Seafood Soup", price: "220" },
      { name: "Grilled Chicken Salad", price: "290" },
      { name: "Caesar Salad Chicken", price: "299", isPopular: true },
      { name: "Russian Salad Veg", price: "249" },
    ],
  },
  {
    category: "Steaks & Continental",
    items: [
      { name: "Chicken Steak", price: "489", isPopular: true, description: "Served with vegetables and sauce", image: "/images/steak.jpg" },
      { name: "Chicken Saslik Steak", price: "510" },
      { name: "Tenderloin Steak", price: "499" },
      { name: "Cordon Bleu", price: "495" },
      { name: "Creamy Cordon Blu", price: "540" },
      { name: "Stuffed Chicken", price: "499" },
      { name: "Sizzler", price: "489" },
      { name: "Grilled Prawns", price: "489" },
    ],
  },
  {
    category: "Pasta & Noodles",
    items: [
      { name: "Cheesy Pasta Chicken", price: "350" },
      { name: "Creamy Pasta Chicken", price: "349" },
      { name: "Penne Arrabbiata Chicken", price: "359" },
      { name: "Mixed Noodles Schezwan", price: "310" },
      { name: "Chicken Noodles", price: "260" },
      { name: "Thai Noodles (Chicken)", price: "320" },
      { name: "Chicken Dragon Noodles", price: "349", isPopular: true },
    ],
  },
  {
    category: "Rice & Biriyani",
    items: [
      { name: "Mixed Fried Rice Schezwan", price: "299" },
      { name: "Chicken Fried Rice", price: "260" },
      { name: "Thai Fried Rice (Chicken)", price: "320" },
      { name: "Singapore Fried Rice", price: "299" },
      { name: "Chicken Dragon Fried Rice", price: "349", isPopular: true, image: "/images/gravy-rice.jpg" },
      { name: "Chicken Biriyani", price: "230" },
      { name: "Beef Biriyani", price: "250" },
    ],
  },
  {
    category: "Indian & BBQ",
    items: [
      { name: "Spicy Max Leg BBQ", price: "230", image: "/images/bbq-leg.jpg" },
      { name: "Spicy Max Breast BBQ", price: "260", image: "/images/bbq-fries.jpg" },
      { name: "Peri Shock Leg BBQ", price: "230", isPopular: true },
      { name: "Chicken Butter Masala", price: "369" },
      { name: "Chicken Kadai", price: "350" },
      { name: "Beef Masala", price: "250" },
      { name: "Paneer Butter Masala", price: "340" },
      { name: "Butter Naan", price: "45" },
      { name: "Garlic Naan", price: "49" },
    ],
  },
  {
    category: "Chinese Curries",
    items: [
      { name: "Chilly Chicken", price: "279" },
      { name: "Garlic Chicken", price: "299" },
      { name: "Chicken Manchurian", price: "349" },
      { name: "Beef Chilly", price: "289" },
      { name: "Beef Manchurian", price: "299" },
      { name: "Paneer Chilly", price: "280" },
      { name: "Mushroom Kadai", price: "290" },
    ],
  },
  {
    category: "Smoothies & Shakes",
    items: [
      { name: "Watermelon Wonk", price: "189" },
      { name: "Orange Punch", price: "189" },
      { name: "Tropical Splash", price: "199", isPopular: true },
      { name: "Lotus Biscoff Shake", price: "289", isPopular: true },
      { name: "Ferrero Crunch Shake", price: "269" },
      { name: "Snickers Mountain Shake", price: "199" },
      { name: "Classic Cold Coffee", price: "169" },
      { name: "Coffee Nutella Mix", price: "199" },
    ],
  },
  {
    category: "Mocktails & Chillers",
    items: [
      { name: "Mint Mojito", price: "139", isPopular: true },
      { name: "Blue Curacao", price: "139" },
      { name: "Watermelon Mojito", price: "139" },
      { name: "Passion Fruit Mojito", price: "139" },
      { name: "Green Apple Slush", price: "139" },
      { name: "Lime Sweet Chiller", price: "109" },
      { name: "Orange Power Detox", price: "199" },
      { name: "Cucumber Cooler", price: "199" },
    ],
  },
  {
    category: "Desserts & Ice Cream",
    items: [
      { name: "Sizzling Brownie", price: "200", isPopular: true },
      { name: "Arabic Falooda", price: "200" },
      { name: "Fried Ice Cream", price: "150" },
      { name: "Choco Nutella Satisfactor", price: "239" },
      { name: "Pizza Di Mango", price: "249" },
      { name: "Fruity Cream", price: "249" },
      { name: "Tamar Pistak", price: "220" },
    ],
  },
];
