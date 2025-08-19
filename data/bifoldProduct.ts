interface Product {
  id: number;
  title: string;
  description: string;
  image: string[];
  color: string;
  price: number;
  discountedPrice: number;
}

const bifoldProducts: Product[] = [
  {
    id: 1,
    title: "Premium Leather Wallet",
    description:
      "Premium leather wallet with 6 card slots and cash compartment 100% Leather. Leather Warranty. No Cloth Stuff is used. Hand Made.",
    image: [
      "https://res.cloudinary.com/dkbyjjnw5/image/upload/v1750928461/ssw_tmkrh7.webp",
      "https://res.cloudinary.com/dkbyjjnw5/image/upload/v1750928460/ss_zsaym0.webp",
    ],
    color: "Brown",
    price: 2000,
    discountedPrice: 200,
  },
  {
    id: 2,
    title: "Pop up leather wallet",
    description:
      "Carry 8-10 cards. 100% Leather. Popup for Cards. 1 cash compartment. Easy to Carry",
    image: [
      "https://res.cloudinary.com/dkbyjjnw5/image/upload/v1750928458/popup1.._izdmhi.webp",
      "https://res.cloudinary.com/dkbyjjnw5/image/upload/v1750928459/poup1._vthvbq.jpg",
      "https://res.cloudinary.com/dkbyjjnw5/image/upload/v1750928460/poup1_wxm0wo.jpg",
      "https://res.cloudinary.com/dkbyjjnw5/image/upload/v1750928458/poup_t5vxzz.jpg",
    ],
    color: "Brown",
    price: 2400,
    discountedPrice: 400,
  },
  {
    id: 3,
    title: "Vintage boook Wallet",
    description:
      " Book shape  Leather wallet  Cash Compartment 6 Card Slot ultra slim Easy to Carry 100% leather",
    image: [
      "https://res.cloudinary.com/dkbyjjnw5/image/upload/v1750928457/p2_09a8dc7a-ca8e-4820-8dec-6957cfe25c03_zbb60v.webp",
      "https://res.cloudinary.com/dkbyjjnw5/image/upload/v1750928456/p2_xnfdu4.webp",
    ],
    color: "Brown",
    price: 1800,
    discountedPrice: 300,
  },
  {
    id: 4,
    title: "Small size Leather wallet",
    description: "Compact cardholder with premium leather and embossed logo.",
    image:
     [ "https://res.cloudinary.com/dkbyjjnw5/image/upload/v1750928438/23cb_650431a7-5383-4804-ba2d-93df110d784a_rc3u1l.webp",'https://res.cloudinary.com/dkbyjjnw5/image/upload/v1750928462/WhatsAppImage2025-04-04at8.14.59AM_m4ewxi.jpg','https://res.cloudinary.com/dkbyjjnw5/image/upload/v1750928453/IMG_20250501_110750_495_puiivt.webp'],
    color: "Bronze",
    price: 1500,
    discountedPrice: 300,
  },
  {
    id: 5,
    title: "Stylish Wallet for Mens",
    description:
      "100 Leather. Best for Fashion. 4 Card Slots. Cash Compartment. Top to Bottom Leather",
    image:[ "https://res.cloudinary.com/dkbyjjnw5/image/upload/v1750928451/Gemini_Generated_Image_wm8m9uwm8m9uwm8m_ijdmkm.webp",'https://res.cloudinary.com/dkbyjjnw5/image/upload/v1750928448/Gemini_Generated_Image_iidnjsiidnjsiidn_cmg431.webp','https://res.cloudinary.com/dkbyjjnw5/image/upload/v1750928447/Gemini_Generated_Image_fw73kjfw73kjfw73_rxl4w4.webp'],
    color: "Black",
    price: 2400,
    discountedPrice: 200,
  },
  {
    id: 6,
    title: "Bifold Leather Wallet",
    description: "Top to bottom leather.4 card slots. Cash compartement. 100% leather",
    image:[ "https://res.cloudinary.com/dkbyjjnw5/image/upload/v1750928450/Gemini_Generated_Image_r5kr1sr5kr1sr5kr_anbtu6.webp",'https://res.cloudinary.com/dkbyjjnw5/image/upload/v1750928444/Gemini_Generated_Image_9nq09i9nq09i9nq0_qsg6j4.webp','https://res.cloudinary.com/dkbyjjnw5/image/upload/v1750928443/Gemini_Generated_Image_7yufu37yufu37yuf_khmuz6.webp','https://res.cloudinary.com/dkbyjjnw5/image/upload/v1750928446/Gemini_Generated_Image_f7wsqgf7wsqgf7ws_zv0he8.webp'],
    color: "Brown",
    price: 2500,
    discountedPrice: 300,
  },
  {
    id: 7,
    title: "Turkish Leather Wallet",
    description:
      "Color code leather Wallet.10 Card Slot. 2 Cash Compartment. 100% Leather and warranty of leather",
    image:["https://res.cloudinary.com/dkbyjjnw5/image/upload/v1750928449/Gemini_Generated_Image_pezkzqpezkzqpezk_diu59h.webp",'https://res.cloudinary.com/dkbyjjnw5/image/upload/v1750928450/Gemini_Generated_Image_ql6mqpql6mqpql6m_cabcen.webp','https://res.cloudinary.com/dkbyjjnw5/image/upload/v1750928447/Gemini_Generated_Image_homqjhomqjhomqjh_bfnwzl.webp','https://res.cloudinary.com/dkbyjjnw5/image/upload/v1750928445/Gemini_Generated_Image_bsd0ezbsd0ezbsd0_dofvit.webp'],
    color: "Black",
    price: 2200,
    discountedPrice: 300,
  },
  {
    id: 8,
    title: "Laxioury Leather Wallet",
    description: "Top to Bottom leather. 6 Card slot. Give Ellegant Look. Cash Compartment. Easy to carry",
    image: ["https://res.cloudinary.com/dkbyjjnw5/image/upload/v1750928439/bf3_cnp14o.webp",'https://res.cloudinary.com/dkbyjjnw5/image/upload/v1750928440/bf3_2b11838a-4b1a-4d59-9b8c-2819f26c3eb1_iq9pec.webp','https://res.cloudinary.com/dkbyjjnw5/image/upload/v1750928441/bf3_734e2e5b-141e-4be1-99be-df56ac41bcdf_vvw5nu.webp','https://res.cloudinary.com/dkbyjjnw5/image/upload/v1750928442/bf3_a2d0ef28-3a16-4348-8c00-3153fc741c50_bc9bmk.webp'],
    color: "Brown",
    price: 3200,
    discountedPrice: 300,
  },
  {
    id: 9,
    title: "Mini Leather Wallet",
    description: "8 Card slots. 2 Cash Compartments. Small in size. 100% Lether. Best For use.Easy to carry. Small in size",
    image: ["https://res.cloudinary.com/dkbyjjnw5/image/upload/v1750928439/44_ortyb1.webp"],
    color: "Tan",
    price: 1700,
    discountedPrice: 300,
  },
  {
    id: 10,
    title: "Premium Wallet for Men",
    description:
      "Card Slots. Window Compartment. Cash Compartment. Cow Leather. 100%",
    image: ["https://res.cloudinary.com/dkbyjjnw5/image/upload/v1750928436/3_uyjrd7.webp",'https://res.cloudinary.com/dkbyjjnw5/image/upload/v1750928435/1_uctyg7.webp'],
    color: "Blue",
    price: 1400,
    discountedPrice: 200,
  },
];

export default bifoldProducts;
