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

const cardholderProducts: Product[] = [
  // {
  //   id: 1,
  //   title: "Leather Stylish Card holder",
  //   description:
  //     "Card Compartment. Cash Compartment. 100% Leather. Top to Bottom Leather no cloth stuff is use",
  //   image: [
  //     "https://res.cloudinary.com/dkbyjjnw5/image/upload/v1750928596/5_afycef.webp",
  //     "https://res.cloudinary.com/dkbyjjnw5/image/upload/v1750928596/4_xjiwgb.webp",
  //   ],
  //   color: "Brown",
  //   price: 1600,
  //   discountedPrice: 200,
  //   reviews: generateReviews(1, "cardholder"),
  // },
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
    reviews: generateReviews(15, "cardholder"),
  },
  // {
  //   id: 2,
  //   title: "Slim Minimalist Card Holder",
  //   description:
  //     "Sleek design with quick-access card slot and cash compartment.",
  //   image: [
  //     "https://res.cloudinary.com/dkbyjjnw5/image/upload/v1750928600/8_ax7mpk.webp",
  //     "https://res.cloudinary.com/dkbyjjnw5/image/upload/v1750928601/9_s9fo7r.webp",
  //     "https://res.cloudinary.com/dkbyjjnw5/image/upload/v1750928598/7_zdqhkf.webp",
  //     "https://res.cloudinary.com/dkbyjjnw5/image/upload/v1750928597/6_qjkuae.webp",
  //   ],
  //   color: "Black",
  //   price: 1600,
  //   discountedPrice: 100,
  //   reviews: generateReviews(2, "cardholder"),
  // },
  // {
  //   id: 3,
  //   title: "Vintage Canvas Card Holder",
  //   description:
  //     "Durable Leather material with a retro aesthetic and sturdy stitching. Elegeant to Use. Quality Warranty Card slots. Cash Compartment. Id Compartment",
  //   image: [
  //     "https://res.cloudinary.com/dkbyjjnw5/image/upload/v1750938587/IMG_20250427_224034_727_zhyowp.jpg",
  //     "https://res.cloudinary.com/dkbyjjnw5/image/upload/v1750938586/IMG_20250427_224136_480_eoxan2.jpg",
  //     "https://res.cloudinary.com/dkbyjjnw5/image/upload/v1750938585/IMG_20250427_224217_387_fbkf7c.jpg",
  //   ],
  //   color: "Black",
  //   price: 1400,
  //   discountedPrice: 200,
  //   reviews: generateReviews(3, "cardholder"),
  // },
  // {
  //   id: 4,
  //   title: "Pop Up Cardholder",
  //   description:
  //     "Pop Up for Card. made of Leather. 1 zipper Comaprtment. Cash Compartment. Easy to Carry",
  //   image: [
  //     "https://res.cloudinary.com/dkbyjjnw5/image/upload/v1750928602/popup1.._wzxsh4.webp",
  //     "https://res.cloudinary.com/dkbyjjnw5/image/upload/v1750928605/poup1._e3ffzw.jpg",
  //     "https://res.cloudinary.com/dkbyjjnw5/image/upload/v1750928606/poup1_ywmdn6.jpg",
  //     "https://res.cloudinary.com/dkbyjjnw5/image/upload/v1750928604/poup_ep19or.jpg",
  //   ],
  //   color: "Navy",
  //   price: 2400,
  //   discountedPrice: 400,
  //   reviews: generateReviews(4, "cardholder"),
  // },
  // {
  //   id: 5,
  //   title: "Vintage Card Holder",
  //   description:
  //     "Card Slots.Easy to carry. Mini design. 100% Leather. No cloth stuff is used. Life time warranty of leather. Hand Made and Hand stiech. Luxiours design",
  //   image: [
  //     "https://res.cloudinary.com/dkbyjjnw5/image/upload/v1750928436/3_uyjrd7.webp",
  //     "https://res.cloudinary.com/dkbyjjnw5/image/upload/v1750928435/1_uctyg7.webp",
  //   ],
  //   color: "Brown",
  //   price: 3400,
  //   discountedPrice: 1000,
  //   reviews: generateReviews(5, "cardholder"),
  // },
  // {
  //   id: 6,
  //   title: "Bega Card Holder",
  //   description:
  //     "upto 6 Card Slots.Mini design. Easy to carry. 100% Leather. No cloth stuff is used. Life time warranty of leather. Hand Made and Hand stiech. Luxiours design",
  //   image: [
  //     "https://res.cloudinary.com/dkbyjjnw5/image/upload/v1750928436/3_uyjrd7.webp",
  //     "https://res.cloudinary.com/dkbyjjnw5/image/upload/v1750928435/1_uctyg7.webp",
  //   ],
  //   color: "Yellow",
  //   price: 3300,
  //   discountedPrice: 1000,
  //   reviews: generateReviews(6, "cardholder"),
  // },
];

export default cardholderProducts;
