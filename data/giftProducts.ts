import { generateReviews, Review } from "./reviews";

interface Product {
  id: number;
  title: string;
  description: string;
  image: string[];
  /** Optional product video path(s) under /public (lazy-loaded only after tap play). */
  video?: string | string[];
  color: string;
  price: number;
  discountedPrice: number;
  stock: number;
  reviews: Review[];
}

const giftProducts: Product[] = [
  {
    id: 2,
    title: "Gift For Specail Ones ",
    description:
      "Premium leather wallet one Long Wallet, One medium Wallet, One Card Holde, One Key Chain and multiple card slots. Key Chain in laether. Best For your Loved ones.Unforgetabble for your loved Ones",
    image: [
      "/assets/gifts/IMG_20250501_115818_987.webp",
      "/assets/gifts/IMG_20250501_115800_747.webp",
      "/assets/gifts/IMG_20250501_115709_050.webp",
    ],
    color: "Black",
    price: 5000,
    discountedPrice: 500,
    stock: 24,
    reviews: generateReviews(2, "gift"),
  },
  {
    id: 3,
    title: "Chocolate Leather Triple Gift Set",
    description:
      "Handcrafted three-piece gift set in rich chocolate-brown leather with thick cream contrast saddle stitching, presented in a charcoal gift box lined with plush red velvet. Includes a full vertical travel wallet with card slots, bill compartment, zip pocket and dual snap closures; a matching slim bifold with six card slots; and a leather key fob with metal ring ready to gift for birthdays, anniversaries, or corporate giving. Genuine leather that develops a personal patina, lifetime leather warranty, cash on delivery across Pakistan.",
    image: [
      "/assets/gifts/chocolate-gift-set-1.webp",
      "/assets/gifts/chocolate-gift-set-2.webp",
      "/assets/gifts/chocolate-gift-set-3.webp",
      "/assets/gifts/chocolate-gift-set-4.webp",
    ],
    video: [
      "/assets/gifts/chocolate-triple-gift-set.mp4",
      "/assets/gifts/chocolate-triple-gift-set-2.mp4",
    ],
    color: "Chocolate Brown",
    price: 9999,
    discountedPrice: 0,
    stock: 15,
    reviews: generateReviews(3, "gift"),
  },
];

export default giftProducts;
