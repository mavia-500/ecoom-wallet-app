import { generateReviews, Review } from "./reviews";

interface Product {
  id: number;
  title: string;
  description: string;
  image: string[];
  color: string;
  price: number;
  discountedPrice: number;
  reviews: Review[];
}

const bifoldProducts: Product[] = [
  {
    id: 14,
    title: "Wax Pull Up Leather Wallet",
    description:
      "Premium leather wallet with 6 card slots 2 hidden slots and 2 cash compartment 100% wax pull up Leather.Life time Leather Warranty. No Cloth Stuff is used. Hand Made and hand stichthed.",
    image: [
      "/assets/bifold/IMG-20251124-WA0003_b82sgl.jpg",
      "/assets/bifold/IMG-20251124-WA0002_rksaex.jpg",
    ],
    color: "Brown",
    price: 3400,
    discountedPrice: 200,
    reviews: generateReviews(14, "bifold"),
  },
  {
    id: 15,
    title: "Wax Pull Up Leather Card Holder + Mini Wallet",
    description:
      "Premium leather wallet with 6 card slots  and  cash compartment 100% wax pull up Leather.Life time Leather Warranty. No Cloth Stuff is used. Hand Made and hand stichthed.",
    image: [
      "/assets/bifold/be6d3cbd-926e-42bd-83ed-e29497832a7a.webp",
      "/assets/bifold/1.webp",
    ],
    color: "Brown",
    price: 2600,
    discountedPrice: 200,
    reviews: generateReviews(15, "bifold"),
  },
  {
    id: 16,
    title: "Vegetable Leather  Wallet",
    description:
      "Premium leather wallet with 4 card slots, 2 hidden slots, 1 coin pocket  and 3 cash compartment 100%  Leather.Life time Leather Warranty. No Cloth Stuff is used. Hand Made and hand stichthed.",
    image: [
      "/assets/bifold/Gemini_Generated_Image_1e6qnh1e6qnh1e6q.png",
      "/assets/bifold/Gemini_Generated_Image_v20n5ev20n5ev20n.png",
      "/assets/bifold/4e2afded-fe05-4b77-9c2b-9e0558251f55.webp",
      "/assets/bifold/801a9156-3514-4844-9774-bb933ede67c0.webp",
      "/assets/bifold/de40d1cb-dec1-4c2b-ac74-6bfa58feceab.webp",
    ],
    color: "Choclate",
    price: 15000,
    discountedPrice: 1200,
    reviews: generateReviews(16, "bifold"),
  },
  {
    id: 1,
    title: "Premium Leather Wallet",
    description:
      "Premium leather wallet with 6 card slots and cash compartment 100% Leather. Leather Warranty. No Cloth Stuff is used. Hand Made.",
    image: [
       "/assets/bifold/ssw.webp",
       "/assets/bifold/ss.webp",
    ],
    color: "Brown",
    price: 2000,
    discountedPrice: 200,
    reviews: generateReviews(1, "bifold"),
  },
  {
    id: 2,
    title: "Pop up leather wallet",
    description:
      "Carry 8-10 cards. 100% Leather. Popup for Cards. 1 cash compartment. Easy to Carry",
    image: [
      "/assets/bifold/poup1.jpg",
      "/assets/bifold/poup1..jpg",
      "/assets/bifold/poup.jpg",
    ],
    color: "Brown",
    price: 2400,
    discountedPrice: 400,
    reviews: generateReviews(2, "bifold"),
  },
  {
    id: 3,
    title: "Vintage boook Wallet",
    description:
      " Book shape  Leather wallet  Cash Compartment 6 Card Slot ultra slim Easy to Carry 100% leather",
    image: [
     "/assets/bifold/p2.webp",
     "/assets/bifold/p2_09a8dc7a-ca8e-4820-8dec-6957cfe25c03.webp",
    ],
    color: "Brown",
    price: 1800,
    discountedPrice: 300,
    reviews: generateReviews(3, "bifold"),
  },
  // {
  //   id: 4,
  //   title: "Small size Leather wallet",
  //   description: "Compact cardholder with premium leather and embossed logo.",
  //   image: [
  //     "https://res.cloudinary.com/dkbyjjnw5/image/upload/v1750928438/23cb_650431a7-5383-4804-ba2d-93df110d784a_rc3u1l.webp",
  //     "https://res.cloudinary.com/dkbyjjnw5/image/upload/v1750928462/WhatsAppImage2025-04-04at8.14.59AM_m4ewxi.jpg",
  //     "https://res.cloudinary.com/dkbyjjnw5/image/upload/v1750928453/IMG_20250501_110750_495_puiivt.webp",
  //   ],
  //   color: "Bronze",
  //   price: 1500,
  //   discountedPrice: 300,
  //   reviews: generateReviews(4, "bifold"),
  // },
  {
    id: 5,
    title: "Stylish Wallet for Mens",
    description:
      "100 Leather. Best for Fashion. 4 Card Slots. Cash Compartment. Top to Bottom Leather",
    image: [
      "/assets/bifold/Gemini_Generated_Image_wm8m9uwm8m9uwm8m.webp",
      "/assets/bifold/Gemini_Generated_Image_fw73kjfw73kjfw73.webp",
      "/assets/bifold/Gemini_Generated_Image_iidnjsiidnjsiidn.webp",
    ],
    color: "Black",
    price: 2400,
    discountedPrice: 200,
    reviews: generateReviews(5, "bifold"),
  },
  {
    id: 6,
    title: "Bifold Leather Wallet",
    description:
      "Top to bottom leather.4 card slots. Cash compartement. 100% leather",
    image: [
      "/assets/bifold/Gemini_Generated_Image_r5kr1sr5kr1sr5kr.webp",
      "/assets/bifold/Gemini_Generated_Image_9nq09i9nq09i9nq0.webp",
      "/assets/bifold/Gemini_Generated_Image_7yufu37yufu37yuf.webp",
    ],
    color: "Brown",
    price: 2500,
    discountedPrice: 300,
    reviews: generateReviews(6, "bifold"),
  },
  {
    id: 7,
    title: "Turkish Leather Wallet",
    description:
      "Color code leather Wallet.10 Card Slot. 2 Cash Compartment. 100% Leather and warranty of leather",
    image: [
      "/assets/bifold/Gemini_Generated_Image_pezkzqpezkzqpezk.webp",
      "/assets/bifold/Gemini_Generated_Image_ql6mqpql6mqpql6m.webp",
      "/assets/bifold/Gemini_Generated_Image_bsd0ezbsd0ezbsd0.webp",
    ],
    color: "Black",
    price: 2200,
    discountedPrice: 300,
    reviews: generateReviews(7, "bifold"),
  },
  {
    id: 8,
    title: "Laxioury Leather Wallet",
    description:
      "Top to Bottom leather. 8 Card slot. Give Ellegant Look.2 Cash Compartment. Easy to carry. Life time waranty of leather",
    image: [
      "/assets/bifold/bf3.webp",
      "/assets/bifold/bf3_2b11838a-4b1a-4d59-9b8c-2819f26c3eb1.webp",
      "/assets/bifold/bf3_734e2e5b-141e-4be1-99be-df56ac41bcdf.webp",
    ],
    color: "Brown",
    price: 3200,
    discountedPrice: 300,
    reviews: generateReviews(8, "bifold"),
  },
  {
    id: 9,
    title: "Mini Leather Wallet",
    description:
      "8 Card slots. 2 Cash Compartments. Small in size. 100% Lether. Best For use.Easy to carry. Small in size",
    image: [
      "/assets/bifold/44.webp",
    ],
    color: "Tan",
    price: 1700,
    discountedPrice: 300,
    reviews: generateReviews(9, "bifold"),
  },
  {
    id: 10,
    title: "Premium Wallet for Men",
    description:
      "Card Slots. Window Compartment. Cash Compartment. Cow Leather. 100%",
    image: [
     "/assets/bifold/3.webp",
     "/assets/bifold/as.webp",
    ],
    color: "Blue",
    price: 1400,
    discountedPrice: 200,
    reviews: generateReviews(10, "bifold"),
  },
  {
    id: 11,
    title: "juela Leather Wallet",
    description:
      " 6Card Slots.1 Cash Compartment. 100% Leather. No cloth stuff is used. Life time warranty of leather. Hand Made and Hand stiech. Luxiours design",
    image: [
      "/assets/bifold/07acc062-2120-4e55-8854-41cb0a163adc.webp",
      "/assets/bifold/9e50f398-10ad-4083-a26a-94fc14726910.webp",
      "/assets/bifold/9b810b00-8887-45c5-a9f8-e88d9cf33861.webp",
    ],
    color: "Redish Brown",
    price: 3500,
    discountedPrice: 1000,
    reviews: generateReviews(11, "bifold"),
  },
  {
    id: 12,
    title: "Bega Card Holder",
    description:
      "upto 6 Card Slots.Mini design. Easy to carry. 100% Leather. No cloth stuff is used. Life time warranty of leather. Hand Made and Hand stiech. Luxiours design",
    image: [
      "/assets/bifold/d86553c2-2eb8-4264-9bfb-2ab6de5153f4.webp",
      "/assets/bifold/73f06b37-41d0-418e-b46d-11a2bf1a8c30 (1).webp",
    ],
    color: "Yellow",
    price: 3300,
    discountedPrice: 1000,
    reviews: generateReviews(12, "bifold"),
  },
  {
    id: 13,
    title: "Vintage Card Holder",
    description:
      "Card Slots.Easy to carry. Mini design. 100% Leather. No cloth stuff is used. Life time warranty of leather. Hand Made and Hand stiech. Luxiours design",
    image: [
      "/assets/bifold/0aa396d6-29d1-4ccd-b1bd-a048f3b02f47.webp",
      "/assets/bifold/34862dc3-ea5c-4c92-8bed-10bdaae47f0a.webp",
      "/assets/bifold/c69281e3-18df-4ec0-b5af-957fd4a91680.webp",
      "/assets/bifold/941dd2c8-799c-4ee7-81ab-d2719ced0331.webp",
    ],
    color: "Brown",
    price: 3400,
    discountedPrice: 1000,
    reviews: generateReviews(13, "bifold"),
  },
];

export default bifoldProducts;
