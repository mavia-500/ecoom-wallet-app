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
      "https://res.cloudinary.com/dkbyjjnw5/image/upload/v1764310852/IMG-20251124-WA0003_b82sgl.jpg",
      "https://res.cloudinary.com/dkbyjjnw5/image/upload/v1764310853/IMG-20251124-WA0002_rksaex.jpg",
      "https://res.cloudinary.com/dkbyjjnw5/image/upload/v1764321825/9dadd315-268b-407c-8fde-adb6f3b37f3d_xdyqxb.jpg",
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
      "https://res.cloudinary.com/dkbyjjnw5/image/upload/v1764321858/be6d3cbd-926e-42bd-83ed-e29497832a7a_iofgmm.jpg",
      "https://res.cloudinary.com/dkbyjjnw5/image/upload/v1764321855/24449cbb-9b0d-4c60-b048-75b320e12391_bdkzph.jpg",
      "https://res.cloudinary.com/dkbyjjnw5/image/upload/v1764321856/1_ymontc.jpg",
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
      "https://res.cloudinary.com/dkbyjjnw5/image/upload/v1764322799/4e2afded-fe05-4b77-9c2b-9e0558251f55_srlsfs.jpg",
      "https://res.cloudinary.com/dkbyjjnw5/image/upload/v1764322800/Gemini_Generated_Image_v20n5ev20n5ev20n_uxjdgb.png",
      "https://res.cloudinary.com/dkbyjjnw5/image/upload/v1764322800/801a9156-3514-4844-9774-bb933ede67c0_dua4fo.jpg",
      "https://res.cloudinary.com/dkbyjjnw5/image/upload/v1764322875/Gemini_Generated_Image_1e6qnh1e6qnh1e6q_v1e9uj.png",
      "https://res.cloudinary.com/dkbyjjnw5/image/upload/v1764322885/a695f8b1-4ddd-431e-8db9-dae602a0ce06_tzt6sd.jpg",
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
      "https://res.cloudinary.com/dkbyjjnw5/image/upload/v1750928461/ssw_tmkrh7.webp",
      "https://res.cloudinary.com/dkbyjjnw5/image/upload/v1750928460/ss_zsaym0.webp",
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
      "https://res.cloudinary.com/dkbyjjnw5/image/upload/v1750928458/popup1.._izdmhi.webp",
      "https://res.cloudinary.com/dkbyjjnw5/image/upload/v1750928459/poup1._vthvbq.jpg",
      "https://res.cloudinary.com/dkbyjjnw5/image/upload/v1750928460/poup1_wxm0wo.jpg",
      "https://res.cloudinary.com/dkbyjjnw5/image/upload/v1750928458/poup_t5vxzz.jpg",
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
      "https://res.cloudinary.com/dkbyjjnw5/image/upload/v1750928457/p2_09a8dc7a-ca8e-4820-8dec-6957cfe25c03_zbb60v.webp",
      "https://res.cloudinary.com/dkbyjjnw5/image/upload/v1750928456/p2_xnfdu4.webp",
    ],
    color: "Brown",
    price: 1800,
    discountedPrice: 300,
    reviews: generateReviews(3, "bifold"),
  },
  {
    id: 4,
    title: "Small size Leather wallet",
    description: "Compact cardholder with premium leather and embossed logo.",
    image: [
      "https://res.cloudinary.com/dkbyjjnw5/image/upload/v1750928438/23cb_650431a7-5383-4804-ba2d-93df110d784a_rc3u1l.webp",
      "https://res.cloudinary.com/dkbyjjnw5/image/upload/v1750928462/WhatsAppImage2025-04-04at8.14.59AM_m4ewxi.jpg",
      "https://res.cloudinary.com/dkbyjjnw5/image/upload/v1750928453/IMG_20250501_110750_495_puiivt.webp",
    ],
    color: "Bronze",
    price: 1500,
    discountedPrice: 300,
    reviews: generateReviews(4, "bifold"),
  },
  {
    id: 5,
    title: "Stylish Wallet for Mens",
    description:
      "100 Leather. Best for Fashion. 4 Card Slots. Cash Compartment. Top to Bottom Leather",
    image: [
      "https://res.cloudinary.com/dkbyjjnw5/image/upload/v1750928451/Gemini_Generated_Image_wm8m9uwm8m9uwm8m_ijdmkm.webp",
      "https://res.cloudinary.com/dkbyjjnw5/image/upload/v1750928448/Gemini_Generated_Image_iidnjsiidnjsiidn_cmg431.webp",
      "https://res.cloudinary.com/dkbyjjnw5/image/upload/v1750928447/Gemini_Generated_Image_fw73kjfw73kjfw73_rxl4w4.webp",
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
      "https://res.cloudinary.com/dkbyjjnw5/image/upload/v1750928450/Gemini_Generated_Image_r5kr1sr5kr1sr5kr_anbtu6.webp",
      "https://res.cloudinary.com/dkbyjjnw5/image/upload/v1750928444/Gemini_Generated_Image_9nq09i9nq09i9nq0_qsg6j4.webp",
      "https://res.cloudinary.com/dkbyjjnw5/image/upload/v1750928443/Gemini_Generated_Image_7yufu37yufu37yuf_khmuz6.webp",
      "https://res.cloudinary.com/dkbyjjnw5/image/upload/v1750928446/Gemini_Generated_Image_f7wsqgf7wsqgf7ws_zv0he8.webp",
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
      "https://res.cloudinary.com/dkbyjjnw5/image/upload/v1750928449/Gemini_Generated_Image_pezkzqpezkzqpezk_diu59h.webp",
      "https://res.cloudinary.com/dkbyjjnw5/image/upload/v1750928450/Gemini_Generated_Image_ql6mqpql6mqpql6m_cabcen.webp",
      "https://res.cloudinary.com/dkbyjjnw5/image/upload/v1750928447/Gemini_Generated_Image_homqjhomqjhomqjh_bfnwzl.webp",
      "https://res.cloudinary.com/dkbyjjnw5/image/upload/v1750928445/Gemini_Generated_Image_bsd0ezbsd0ezbsd0_dofvit.webp",
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
      "https://res.cloudinary.com/dkbyjjnw5/image/upload/v1750928439/bf3_cnp14o.webp",
      "https://res.cloudinary.com/dkbyjjnw5/image/upload/v1750928440/bf3_2b11838a-4b1a-4d59-9b8c-2819f26c3eb1_iq9pec.webp",
      "https://res.cloudinary.com/dkbyjjnw5/image/upload/v1750928441/bf3_734e2e5b-141e-4be1-99be-df56ac41bcdf_vvw5nu.webp",
      "https://res.cloudinary.com/dkbyjjnw5/image/upload/v1750928442/bf3_a2d0ef28-3a16-4348-8c00-3153fc741c50_bc9bmk.webp",
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
      "https://res.cloudinary.com/dkbyjjnw5/image/upload/v1750928439/44_ortyb1.webp",
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
      "https://res.cloudinary.com/dkbyjjnw5/image/upload/v1750928436/3_uyjrd7.webp",
      "https://res.cloudinary.com/dkbyjjnw5/image/upload/v1750928435/1_uctyg7.webp",
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
      "https://res.cloudinary.com/dkbyjjnw5/image/upload/v1760172230/07acc062-2120-4e55-8854-41cb0a163adc_dh97vh.jpg",
      "https://res.cloudinary.com/dkbyjjnw5/image/upload/v1760172230/9e50f398-10ad-4083-a26a-94fc14726910_nz9ebw.jpg",
      "https://res.cloudinary.com/dkbyjjnw5/image/upload/v1760172231/9b810b00-8887-45c5-a9f8-e88d9cf33861_qwenem.jpg",
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
      "https://res.cloudinary.com/dkbyjjnw5/image/upload/v1760172232/90137ead-53e7-4b69-926c-884a9611d606_ijlqxy.jpg",
      "https://res.cloudinary.com/dkbyjjnw5/image/upload/v1760172233/d86553c2-2eb8-4264-9bfb-2ab6de5153f4_g4lep3.jpg",
      "https://res.cloudinary.com/dkbyjjnw5/image/upload/v1760172233/bdef3678-871e-45e7-a0d2-4801f98c2a33_am89l0.jpg",
      "https://res.cloudinary.com/dkbyjjnw5/image/upload/v1760172232/73f06b37-41d0-418e-b46d-11a2bf1a8c30_1_wbzzl3.jpg",
      "https://res.cloudinary.com/dkbyjjnw5/image/upload/v1760172235/474a3771-29f2-4fb2-bcee-447c09aac370_uaoslm.jpg",
      "https://res.cloudinary.com/dkbyjjnw5/image/upload/v1760172254/Unconfirmed_211698_xsdf4n.heic",
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
      "https://res.cloudinary.com/dkbyjjnw5/image/upload/v1760172234/34862dc3-ea5c-4c92-8bed-10bdaae47f0a_jwv1iq.jpg",
      "https://res.cloudinary.com/dkbyjjnw5/image/upload/v1760172233/941dd2c8-799c-4ee7-81ab-d2719ced0331_fcmdzx.jpg",
      "https://res.cloudinary.com/dkbyjjnw5/image/upload/v1760172235/c69281e3-18df-4ec0-b5af-957fd4a91680_rm8neb.jpg",
      "https://res.cloudinary.com/dkbyjjnw5/image/upload/v1760172233/0aa396d6-29d1-4ccd-b1bd-a048f3b02f47_meunft.jpg",
      "https://res.cloudinary.com/dkbyjjnw5/image/upload/v1760172234/8395ebbb-fb6f-40cc-b6cb-af864be5d667_qibjyy.jpg",
    ],
    color: "Brown",
    price: 3400,
    discountedPrice: 1000,
    reviews: generateReviews(13, "bifold"),
  },
];

export default bifoldProducts;
