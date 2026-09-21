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

const longwalletProducts: Product[] = [
  {
    id: 1,
    title: "Leather Long Wallet",
    description:
      "Premium leather wallet with  and multiple card slots.Cash Comkpartment. Easy to carry. Elegent Look. Most Attractive Personality maker",
    image: [
      "/assets/longwallet/Gemini_Generated_Image_7pywpy7pywpy7pyw (1).webp",
      "/assets/longwallet/Gemini_Generated_Image_kq5az0kq5az0kq5a.webp",
    ],
    color: "Brown",
    price: 2700,
    discountedPrice: 300,
    reviews: generateReviews(1, "longwallet"),
  },
  {
    id: 2,
    title: "Attractive Leather Wallet",
    description:
      "Sleek design with quick-access card slot and cash compartment. Beautiful Look. Easy to Carry. 100% Leather. Best for use",
    image: [
      "/assets/longwallet/Gemini_Generated_Image_u1tyxfu1tyxfu1ty.webp",
      "/assets/longwallet/Gemini_Generated_Image_hllx88hllx88hllx.webp",
    ],
    color: "Black",
    price: 1500,
    discountedPrice: 50,
    reviews: generateReviews(2, "longwallet"),
  },
  {
    id: 3,
    title: "Original Leather Wallet",
    description:
      "Sleek design with quick-access card slot and cash compartment. Beautiful Look. Easy to Carry. 100% Leather. Best for use. Top to Bottom Lether ",
    image: [
      "/assets/longwallet/Gemini_Generated_Image_qp8oiqp8oiqp8oiq.webp",
      "/assets/longwallet/Gemini_Generated_Image_r2ddlgr2ddlgr2dd.webp",
    ],
    color: "Brown",
    price: 2900,
    discountedPrice: 300,
    reviews: generateReviews(3, "longwallet"),
  },
  {
    id: 4,
    title: "Brown Red Contrast Long Wallet",
    description:
      "Handcrafted long leather wallet in dark brown with bright red contrast stitching and a red suede-lined cash pocket. Features 8 card slots with curved access edges, dual full-length cash compartments for unfolded notes,mobile pocket and a secure antique-brass snap closure. Genuine leather, roomy traveler style, lifetime leather warranty.",
    image: [
      "/assets/longwallet/brown-red-long-wallet-1.webp",
      "/assets/longwallet/brown-red-long-wallet-2.webp",
      "/assets/longwallet/brown-red-long-wallet-3.webp",
    ],
    color: "Brown / Red",
    price: 6800,
    discountedPrice: 300,
    reviews: generateReviews(4, "longwallet"),
  },
  {
    id: 5,
    title: "Cognac Green Stitch Long Wallet",
    description:
      "Premium cognac-brown leather long wallet with bold forest-green hand stitching. Opens to a red leather spine, document pocket for passport or notebook, and card slots with a clean traveler layout. Genuine leather, handcrafted finish, lifetime leather warranty.",
    image: [
      "/assets/longwallet/cognac-green-long-wallet-1.webp",
      "/assets/longwallet/cognac-green-long-wallet-2.webp",
    ],
    color: "Cognac / Green",
    price: 6300,
    discountedPrice: 300,
    reviews: generateReviews(5, "longwallet"),
  },
  {
    id: 6,
    title: "Ochre Snap Pocket Handcrafted Long Wallet",
    description:
      "Handcrafted long wallet in rich ochre honey pull-up leather with a rustic crazy-horse finish that lightens and darkens into a personal patina. Thick gold contrast saddle stitching frames every edge and pocket. Opens to a secure brass-snap coin pouch, an ID window with oval thumb cutout, a full-length cash compartment for unfolded notes, and six horizontal card slots arranged for high-capacity everyday carry. Closed it keeps a slim vertical silhouette with burnished rounded corners — genuine leather, built for travelers and daily use, lifetime leather warranty, cash on delivery across Pakistan.",
    image: [
      "/assets/longwallet/ochre-snap-long-wallet-1.webp",
      "/assets/longwallet/ochre-snap-long-wallet-2.webp",
    ],
    color: "Ochre",
    price: 8000,
    discountedPrice: 0,
    reviews: generateReviews(6, "longwallet"),
  },
  {
    id: 7,
    title: "Burgundy Snap Pocket Handcrafted Long Wallet",
    description:
      "Handcrafted long wallet in deep burgundy wine leather with a soft pull-up finish and thick tonal red saddle stitching along every edge and pocket. Opens to a brass-snap coin pouch, a vertical ID/card slot with thumb cutout, three stacked horizontal card slots, and dual full-length cash compartments that hold unfolded notes without crowding. Closed it keeps a slim rectangular silhouette with burnished rounded corners and a clean minimal face — genuine leather that develops a richer patina with daily carry. Built for travelers and everyday use, lifetime leather warranty, cash on delivery across Pakistan.",
    image: [
      "/assets/longwallet/burgundy-snap-long-wallet-1.webp",
      "/assets/longwallet/burgundy-snap-long-wallet-2.webp",
    ],
    color: "Burgundy",
    price: 8000,
    discountedPrice: 0,
    reviews: generateReviews(7, "longwallet"),
  },
  {
    id: 8,
    title: "Black Crocodile Embossed Long Wallet",
    description:
      "Handcrafted long wallet in deep black leather with a bold crocodile-embossed exterior and smooth matte black interior panels. Thick tonal hand stitching frames the perimeter and every pocket. Opens to six horizontal card slots — three on each side — plus dual full-length cash and document compartments for unfolded notes. Premium textured face, clean burnished edges, and a solid traveler build meant to last. Genuine leather, lifetime leather warranty, cash on delivery across Pakistan.",
    image: [
      "/assets/longwallet/black-croc-long-wallet-2.webp",
      "/assets/longwallet/black-croc-long-wallet-1.webp",
    ],
    color: "Black",
    price: 7999,
    discountedPrice: 300,
    reviews: generateReviews(8, "longwallet"),
  },
  {
    id: 9,
    title: "Chocolate Dual-Snap Traveler Long Wallet",
    description:
      "Handcrafted long traveler wallet in deep chocolate crazy-horse leather with thick cream contrast stitching and an asymmetrical flap secured by dual antique-brass snaps. Opens to six tiered card slots — three on each side — with cognac-tan spine accents and full-length slip pockets for unfolded cash, phone, or documents. Includes a matching leather protective sleeve with diagonal opening. Burnished edges, personal emboss option shown, built for everyday and travel carry. Genuine leather, lifetime leather warranty, cash on delivery across Pakistan.",
    image: [
      "/assets/longwallet/chocolate-dual-snap-long-wallet-1.webp",
      "/assets/longwallet/chocolate-dual-snap-long-wallet-3.webp",
      "/assets/longwallet/chocolate-dual-snap-long-wallet-2.webp",
      "/assets/longwallet/chocolate-dual-snap-long-wallet-4.webp",
    ],
    color: "Chocolate Brown",
    price: 8999,
    discountedPrice: 0,
    reviews: generateReviews(9, "longwallet"),
  },
];
export default longwalletProducts;
