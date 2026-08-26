export const business = {
  name: "Love Letter Pizza & Chicken",
  tagline: "Korean Chicken & Pizza",
  city: "Chino Hills",
  address: {
    line1: "3277 Grand Ave #H",
    line2: "Chino Hills, CA 91709",
  },
  phone: "(909) 325-2077",
  phoneHref: "tel:+19093252077",
  email: null as string | null,
  orderUrl: "https://loveletterchinohills.com/products/items/MTI4Ng/NTU4",
  instagramUrl: "https://www.instagram.com/loveletterchinohills/",
  yelpUrl: "https://www.yelp.com/biz/love-letter-pizza-and-chicken-chino-hills-4",
  grubhubUrl:
    "https://www.grubhub.com/restaurant/love-letter-pizza-and-chicken-3277-grand-ave-chino-hills/7485680",
  mapsUrl: "https://maps.app.goo.gl/EmDf8LAYVsQ4GcDWA",
  mapEmbedSrc:
    "https://www.google.com/maps?q=Love+Letter+Pizza+%26+Chicken,+3277+Grand+Ave,+Chino+Hills,+CA+91709&output=embed",
  hours: [
    { day: "Monday", time: "11:00 AM – 10:00 PM" },
    { day: "Tuesday", time: "11:00 AM – 10:00 PM" },
    { day: "Wednesday", time: "11:00 AM – 10:00 PM" },
    { day: "Thursday", time: "11:00 AM – 10:00 PM" },
    { day: "Friday", time: "11:00 AM – 11:00 PM" },
    { day: "Saturday", time: "11:00 AM – 11:00 PM" },
    { day: "Sunday", time: "11:00 AM – 9:00 PM" },
  ],
  rating: {
    yelp: { score: 4.7, count: 1599 },
    grubhub: { score: 4.6, count: 41 },
  },
};

export type MenuItem = {
  name: string;
  price: string;
  description?: string;
};

export type MenuCategory = {
  id: string;
  title: string;
  note?: string;
  items: MenuItem[];
};

export const menu: MenuCategory[] = [
  {
    id: "starters",
    title: "Starters",
    items: [
      { name: "French Fries", price: "$7.49" },
      { name: "Cajun Fries", price: "$8.49" },
      { name: "Sweet Potato Fries", price: "$9.49" },
      { name: "Beef Bulgogi Cheese Fries", price: "$15.49" },
      { name: "Garlic Parmesan Cheese Tots", price: "$9.49" },
      { name: "Wedge Potato", price: "$8.49" },
      { name: "Corn Cheese", price: "$12.49" },
      { name: "Mozzarella Cheese Sticks", price: "$9.49" },
      { name: "Spicy Chicken Cheese", price: "$16.49" },
      { name: "Kimchi Chicken Pasta", price: "$17.49" },
      { name: "Korean Ramen", price: "$11.49" },
      { name: "Spicy Rice Cake", price: "$15.49" },
      { name: "Green Onion Salad", price: "$7.49" },
      { name: "Cabbage Corn Salad", price: "$4.49" },
      { name: "Pickled Radish (8oz)", price: "$3.49" },
    ],
  },
  {
    id: "pizza-10",
    title: '10" Pizza',
    items: [
      { name: "Cheese", price: "$17.99" },
      { name: "Pepperoni", price: "$20.99" },
      { name: "Garden", price: "$20.99" },
      { name: "BBQ Chicken", price: "$20.99" },
      { name: "Bulgogi", price: "$20.99" },
      { name: "Kimchi", price: "$20.99" },
      { name: "Kowaiian", price: "$20.99" },
      { name: "Sweet Potato", price: "$20.99" },
      { name: "Bulgogi Potato", price: "$21.99" },
      { name: "Supreme", price: "$21.99" },
      { name: "Carnivore", price: "$22.99" },
      { name: "Sweet Potato Gold", price: "$24.99", description: "Gold crust stuffed with sweet potato" },
    ],
  },
  {
    id: "pizza-12",
    title: '12" Pizza',
    items: [
      { name: "Cheese", price: "$20.99" },
      { name: "Pepperoni", price: "$23.99" },
      { name: "Garden", price: "$24.99" },
      { name: "BBQ Chicken", price: "$24.99" },
      { name: "Bulgogi", price: "$24.99" },
      { name: "Kimchi", price: "$24.99" },
      { name: "Kowaiian", price: "$24.99" },
      { name: "Sweet Potato", price: "$24.99" },
      { name: "Bulgogi Potato", price: "$25.99" },
      { name: "Supreme", price: "$25.99" },
      { name: "Carnivore", price: "$26.99" },
      { name: "Sweet Potato Gold", price: "$28.99", description: "Gold crust stuffed with sweet potato" },
    ],
  },
  {
    id: "chicken",
    title: "Chicken",
    note: "Sauces +$3: Buffalo Sriracha, Garlic Soy, Lemon Pepper, Medium Spicy, Spicy, Sweet N Mild, Sweet Chili",
    items: [
      { name: "Half Chicken", price: "$16.49" },
      { name: "Whole Chicken", price: "$29.99" },
      { name: "Half N Half Whole Chicken", price: "$29.99", description: "Two flavors, one whole chicken" },
      { name: "Popcorn Chicken", price: "$18.99" },
      { name: "Green Onion Popcorn Chicken", price: "$21.99" },
      { name: "Wings (8pc)", price: "$17.99" },
      { name: "Wings (12pc)", price: "$23.99" },
      { name: "Wings (18pc)", price: "$34.99" },
      { name: "Half N Half Wings (12pc)", price: "$23.99" },
      { name: "Half N Half Wings (18pc)", price: "$34.99" },
    ],
  },
  {
    id: "drinks",
    title: "Drinks",
    items: [
      { name: "Coke", price: "$4.00" },
      { name: "Diet Coke", price: "$4.00" },
      { name: "Dr Pepper", price: "$4.00" },
      { name: "Sprite", price: "$4.00" },
      { name: "Lemonade", price: "$4.00" },
      { name: "Fanta Orange", price: "$4.00" },
      { name: "Coke (2L)", price: "$7.00" },
      { name: "Diet Coke (2L)", price: "$7.00" },
      { name: "Sprite (2L)", price: "$7.00" },
    ],
  },
];

export type Review = {
  quote: string;
  name: string;
  location?: string;
  source: "Yelp" | "Grubhub";
};

export const reviews: Review[] = [
  {
    quote:
      "The pizza had hella melty cheese when you picked up a piece. I would definitely recommend trying the sweet potato gold pizza. The crust is stuffed with sweet potato filling. The sauce for the wings was well coated and delicious!",
    name: "SweetLolly360",
    location: "Costa Mesa, CA",
    source: "Yelp",
  },
  {
    quote:
      "We ordered a carnivore pizza and some wings via online order. Everything was spot on, from the pizza toppings, sauce, crust, cheese ratio, to the wing crisp and flavor. We will be back again for BIGGER pizza, MORE wings, and to try more off their menu.",
    name: "Raymond P.",
    location: "Diamond Bar, CA",
    source: "Yelp",
  },
  {
    quote:
      "Love Letter Chicken and Pizza has amazing food. The Korean style pizza and wing flavor options are excellent. And don't forget, the cheesy corn is over the top delicious.",
    name: "Greg F.",
    location: "Chino, CA",
    source: "Yelp",
  },
  {
    quote:
      "Good Korean pizza!! I LOVE THE POTATO CRUST. The popcorn chicken with green onion is pretty good as well.",
    name: "Yuyao S.",
    location: "Taipei, Taiwan",
    source: "Yelp",
  },
];

export type Reel = {
  src: string;
  caption: string;
};

/** Self-hosted copies of real Instagram reels, provided directly by the client. */
export const reels: Reel[] = [
  { src: "/videos/sweet-potato-pizza.mp4", caption: "Sweet potato pizza at its best 🍠🍕" },
  { src: "/videos/he-is-the-best.mp4", caption: "He's the best! 🥰" },
  { src: "/videos/we-love-our-community.mp4", caption: "And we love our community! 🌟❤️" },
  { src: "/videos/server-wrote-for-her.mp4", caption: "Guess what the server wrote for her 😉🍕" },
];

export const faqs = [
  {
    q: "What are you known for?",
    a: "Korean-style pizza with a sweet-potato-stuffed golden crust, and Korean fried chicken tossed in flavors like garlic soy, sweet chili, and spicy. Our Sweet Potato Gold Pizza is the most-ordered item on the menu.",
  },
  {
    q: "Do you offer delivery or takeout?",
    a: "Both. Order pickup or delivery directly from our website to skip third-party markups and fees, or find us on Grubhub. Dine-in seating is also available.",
  },
  {
    q: "Is there a vegetarian option?",
    a: "Our Garden pizza is topped with vegetables only. Ask about swapping proteins on any pizza or leaving meat off starters like the Corn Cheese or Mozzarella Cheese Sticks.",
  },
  {
    q: "Where are you located?",
    a: "3277 Grand Ave #H, Chino Hills, CA 91709 — across from the Shoppes at Chino Hills.",
  },
  {
    q: "Do you take reservations?",
    a: "We seat walk-ins on a first-come basis. For larger groups, call ahead at (909) 325-2077 and we'll do our best to accommodate you.",
  },
] as const;
