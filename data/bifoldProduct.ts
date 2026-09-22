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
      "/assets/bifold/IMG-20251124-WA0003_b82sgl.webp",
      "/assets/bifold/IMG-20251124-WA0002_rksaex.webp",
    ],
    color: "Brown",
    price: 3400,
    discountedPrice: 200,
    reviews: generateReviews(14, "bifold"),
  },
  {
    id: 15,
    title: "Wax Pull Up Bi-Fold Mini Wallet",
    description:
      "Compact bi-fold mini wallet in 100% wax pull-up leather with 6 card slots and a cash compartment. Hand-stitched front-pocket bi-fold carry — lifetime leather warranty, cash on delivery across Pakistan.",
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
      "/assets/bifold/Gemini_Generated_Image_1e6qnh1e6qnh1e6q.webp",
      "/assets/bifold/Gemini_Generated_Image_v20n5ev20n5ev20n.webp",
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
      "/assets/bifold/poup1.webp",
      "/assets/bifold/poup1..webp",
      "/assets/bifold/poup.webp",
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
  {
    id: 17,
    title: "Burgundy Red Hand-Stitched Bifold",
    description:
      "Classic bifold in deep burgundy leather with bold red hand stitching, 4 card slots , cash compartments and rounded corners. Opens to dual card slots with dark leather accents and cash pockets on each side. Genuine leather, handcrafted finish, lifetime leather warranty.",
    image: [
      "/assets/bifold/burgundy-red-bifold-1.webp",
      "/assets/bifold/burgundy-red-bifold-2.webp",
    ],
    color: "Burgundy",
    price: 2999,
    discountedPrice: 0,
    reviews: generateReviews(17, "bifold"),
  },
  {
    id: 18,
    title: "Navy Pebble Grain Hand-Stitched Bifold",
    description:
      "Handcrafted bifold in deep navy pebble-grain leather with bold amber contrast stitching on the outer edges and tonal navy stitching on the card slots. Opens flat to a practical layout with multiple vertical card slots on each side, rear slip pockets for extras, and a full-length bill compartment across the top. Thick artisanal thread, raw-burnished edges, and a rugged everyday feel — genuine leather with lifetime leather warranty. Cash on delivery across Pakistan.",
    image: ["/assets/bifold/navy-pebble-bifold-1.webp"],
    color: "Navy",
    price: 3500,
    discountedPrice: 0,
    reviews: generateReviews(18, "bifold"),
  },
  {
    id: 19,
    title: "Crocodile Embossed Brown Bifold",
    description:
      "Compact bifold covered in rich chocolate-brown crocodile-embossed leather with a semi-gloss pull-up finish and golden-tan contrast perimeter stitching. Classic closed bifold profile with slightly rounded corners — bold exotic texture for a refined yet rugged look. Genuine leather, hand-finished edges, lifetime leather warranty. Cash on delivery across Pakistan.",
    image: ["/assets/bifold/croc-brown-bifold-1.webp"],
    color: "Brown",
    price: 3500,
    discountedPrice: 100,
    reviews: generateReviews(19, "bifold"),
  },
  {
    id: 20,
    title: "Cognac Snap Vertical Bifold Wallet",
    description:
      "Handcrafted vertical bifold in rich cognac pull-up leather with a secure silver snap tab closure. Opens to two card pockets with curved edges and oval thumb slides for quick card access, plus a slim layered build for cash and extras. Thick cream contrast stitching, burnished edges, and an embossed mark on the front — rustic crazy-horse character that ages beautifully. Genuine leather, pocket-friendly size, lifetime leather warranty. Cash on delivery across Pakistan.",
    image: [
      "/assets/bifold/cognac-snap-bifold-1.webp",
      "/assets/bifold/cognac-snap-bifold-2.webp",
      "/assets/bifold/cognac-snap-bifold-3.webp",
    ],
    color: "Cognac",
    price: 3200,
    discountedPrice: 150,
    reviews: generateReviews(20, "bifold"),
  },
  {
    id: 21,
    title: "Tobacco Vertical Hand-Stitched Bifold",
    description:
      "Handcrafted vertical bifold in warm tobacco-brown leather with thick cream contrast stitching and neatly burnished multi-layer edges. Opens to two large card pockets with rear slip compartments for bills or extras — a clean, rugged everyday layout that still feels slim in the pocket. Closed face shows a compact rectangular profile with soft rounded corners and a subtle embossed mark. Made from genuine leather that develops a richer patina with use, finished for lasting strength and backed by our lifetime leather warranty. Cash on delivery across Pakistan.",
    image: [
      "/assets/bifold/tobacco-vertical-bifold-1.webp",
      "/assets/bifold/tobacco-vertical-bifold-2.webp",
    ],
    color: "Tobacco Brown",
    price: 2999,
    discountedPrice: 0,
    reviews: generateReviews(21, "bifold"),
  },
  {
    id: 22,
    title: "Oxblood Hand-Stitched Bifold Wallet",
    description:
      "Artisan bifold in deep oxblood (burgundy) full-grain leather with a subtle pull-up sheen and matching red hand stitching throughout. Opens to six horizontal card slots — three on each side — plus rear slip pockets for folded notes or extra cards. Neatly beveled and burnished edges, a slim yet sturdy build, and a refined workshop finish that still feels rugged in the hand. Designed to age into a richer patina with daily use. Genuine leather, lifetime leather warranty, cash on delivery across Pakistan.",
    image: [
      "/assets/bifold/oxblood-bifold-1.webp",
      "/assets/bifold/oxblood-bifold-2.webp",
      "/assets/bifold/oxblood-bifold-3.webp",
    ],
    color: "Oxblood",
    price: 3450,
    discountedPrice: 300,
    reviews: generateReviews(22, "bifold"),
  },
  {
    id: 23,
    title: "Tan Yellow-Stitch Handcrafted Bifold",
    description:
      "Handcrafted bifold in warm tan camel-brown leather with bold golden-yellow contrast stitching along every edge and card pocket. Opens to four vertical card slots — two on each side — with rear slip pockets for extra cards or folded notes, plus a deep bill compartment that holds cash securely for daily use. Thick full-grain feel, burnished rounded corners, and a rugged workshop finish that still looks clean and premium. Built to soften and develop a personal patina over time. Genuine leather, lifetime leather warranty, cash on delivery across Pakistan.",
    image: [
      "/assets/bifold/tan-yellow-stitch-bifold-1.webp",
      "/assets/bifold/tan-yellow-stitch-bifold-2.webp",
    ],
    color: "Tan",
    price: 3700,
    discountedPrice: 0,
    reviews: generateReviews(23, "bifold"),
  },
  {
    id: 24,
    title: "Black Minimal Hand-Stitched Bifold",
    description:
      "Slim minimalist bifold in smooth matte black leather with thick tonal black hand stitching and neatly burnished edges. Opens to four overlapping card slots — two on each side — for everyday essentials without bulk, plus a clean folded profile for front-pocket carry. Quiet, refined exterior with no flashy hardware — just durable genuine leather built for daily use. Lifetime leather warranty. Cash on delivery across Pakistan.",
    image: [
      "/assets/bifold/black-minimal-bifold-1.webp",
      "/assets/bifold/black-minimal-bifold-2.webp",
    ],
    color: "Black",
    price: 3100,
    discountedPrice: 101,
    reviews: generateReviews(24, "bifold"),
  },
  {
    id: 25,
    title: "Cognac Curved-Slot Handcrafted Bifold",
    description:
      "Handcrafted bifold in warm cognac pull-up leather with thick tonal stitching and burnished edges. Opens to two card pockets with ergonomic curved cutouts for easy grip, plus a full-length cash compartment that holds notes without fuss. Closed it forms a slim sleeve with a soft U-notch for quick access — full-grain character that lightens and darkens with use into a personal patina. Built for everyday carry: rugged, refined, and made to last. Genuine leather, lifetime leather warranty, cash on delivery across Pakistan.",
    image: [
      "/assets/bifold/cognac-curved-bifold-1.webp",
      "/assets/bifold/cognac-curved-bifold-2.webp",
    ],
    color: "Cognac",
    price: 3300,
    discountedPrice: 0,
    reviews: generateReviews(25, "bifold"),
  },
  {
    id: 26,
    title: "Forest Green White-Stitch Handcrafted Bifold",
    description:
      "Handcrafted bifold in deep forest-green leather with thick off-white contrast saddle stitching and neatly burnished multi-layer edges. Opens to four vertical card slots — two on each side — plus a full-length cash compartment that holds notes without bulk. Closed it keeps a slim rectangular profile with rounded corners and a solid, durable build meant for daily pocket carry. Genuine leather, hand-stitched finish, lifetime leather warranty, cash on delivery across Pakistan.",
    image: [
      "/assets/bifold/forest-green-bifold-2.webp",
      "/assets/bifold/forest-green-bifold-1.webp",
    ],
    color: "Forest Green",
    price: 2999,
    discountedPrice: 0,
    reviews: generateReviews(26, "bifold"),
  },
  {
    id: 27,
    title: "Black Oxblood Red-Stitch Handcrafted Bifold",
    description:
      "Handcrafted bifold in charcoal-black pebbled leather with vivid red saddle stitching and a rich mahogany interior lining. Opens to multiple card slots on each side plus room for folded notes, with oxblood crocodile-embossed accents that catch the light on the face panels. Thick hand-stitched edges and a solid everyday build — genuine leather that ages with character. Lifetime leather warranty, cash on delivery across Pakistan.",
    image: [
      "/assets/bifold/black-oxblood-bifold-3.webp",
      "/assets/bifold/black-oxblood-bifold-1.webp",
      "/assets/bifold/black-oxblood-bifold-2.webp",
    ],
    color: "Black / Oxblood",
    price: 3999,
    discountedPrice: 0,
    reviews: generateReviews(27, "bifold"),
  },
  {
    id: 28,
    title: "Forest Croc Orange-Spine Handcrafted Bifold",
    description:
      "Handcrafted bifold in deep forest green with crocodile-embossed faces, pebbled leather panels, and a vivid orange-tan spine that cuts through the center. Thick cream saddle stitching runs every edge and pocket. Opens to slanted croc card pockets over green slots on each side — a bold, textured everyday carry with solid multi-layer construction. Genuine leather, hand-finished edges, lifetime leather warranty, cash on delivery across Pakistan.",
    image: [
      "/assets/bifold/forest-croc-bifold-1.webp",
      "/assets/bifold/forest-croc-bifold-3.webp",
      "/assets/bifold/forest-croc-bifold-2.webp",
    ],
    color: "Forest Green / Orange",
    price: 4200,
    discountedPrice: 0,
    reviews: generateReviews(28, "bifold"),
  },
  {
    id: 29,
    title: "Mahogany Cream-Stitch Handcrafted Bifold",
    description:
      "Handcrafted bifold in rich mahogany pull-up leather with natural grain, warm russet undertones, and thick cream contrast saddle stitching. Opens to stacked card slots with thumb-friendly cutouts on one side and a roomy vertical pocket on the other, plus space for folded notes behind the panels. Rounded burnished corners and a classic slim pocket profile — full-grain character that softens and darkens with everyday carry. Genuine leather, lifetime leather warranty, cash on delivery across Pakistan.",
    image: [
      "/assets/bifold/mahogany-cream-bifold-1.webp",
      "/assets/bifold/mahogany-cream-bifold-2.webp",
      "/assets/bifold/mahogany-cream-bifold-3.webp",
    ],
    color: "Mahogany",
    price: 3699,
    discountedPrice: 0,
    reviews: generateReviews(29, "bifold"),
  },
  {
    id: 30,
    title: "Chocolate Tan-Stitch Wave-Slot Bifold",
    description:
      "Handcrafted bifold in deep chocolate pull-up leather with thick orange-tan contrast saddle stitching and smoothly burnished rounded corners. Opens to six wave-edged card slots — three on each side — with slip pockets behind for receipts or extras, plus a full-length bill compartment. Raw suede-tone interior at the cash sleeve shows honest full-grain construction that softens and darkens into a personal patina. Rugged everyday carry, genuine leather, lifetime leather warranty, cash on delivery across Pakistan.",
    image: [
      "/assets/bifold/chocolate-tan-stitch-bifold-1.webp",
      "/assets/bifold/chocolate-tan-stitch-bifold-2.webp",
      "/assets/bifold/chocolate-tan-stitch-bifold-3.webp",
    ],
    color: "Chocolate Brown",
    price: 5999,
    discountedPrice: 0,
    reviews: generateReviews(30, "bifold"),
  },
  {
    id: 31,
    title: "Russet Cream-Stitch Slim Bifold",
    description:
      "Handcrafted slim bifold in rich russet-chestnut leather with a smooth matte finish and thick cream contrast saddle stitching. Opens to four curved card slots — two stacked on each side — for essentials without bulk. Closed it keeps a compact palm-size profile with rounded burnished corners and multi-layer edges built for daily pocket carry. Full-grain character that softens with use. Genuine leather, lifetime leather warranty, cash on delivery across Pakistan.",
    image: [
      "/assets/bifold/russet-cream-bifold-1.webp",
      "/assets/bifold/russet-cream-bifold-2.webp",
    ],
    color: "Russet",
    price: 3499,
    discountedPrice: 0,
    reviews: generateReviews(31, "bifold"),
  },
  {
    id: 32,
    title: "Burgundy Red-Stitch Quick-Access Bifold",
    description:
      "Handcrafted bifold in deep burgundy oxblood leather with matching vibrant red saddle stitching and smoothly burnished rounded corners. Front face carries an external quick-access card slot so your go-to card stays ready without opening the wallet. Inside: curved card pockets, a riveted ID window pocket, and a full bill compartment for everyday cash. Full-grain mottled character that ages into a richer patina — genuine leather, lifetime leather warranty, cash on delivery across Pakistan.",
    image: [
      "/assets/bifold/burgundy-red-stitch-bifold-3.webp",
      "/assets/bifold/burgundy-red-stitch-bifold-6.webp",
      "/assets/bifold/burgundy-red-stitch-bifold-4.webp",
      "/assets/bifold/burgundy-red-stitch-bifold-5.webp",
      "/assets/bifold/burgundy-red-stitch-bifold-1.webp",
      "/assets/bifold/burgundy-red-stitch-bifold-2.webp",
    ],
    color: "Burgundy",
    price: 5699,
    discountedPrice: 399,
    reviews: generateReviews(32, "bifold"),
  },
  {
    id: 33,
    title: "Honey Tan Slim Minimalist Bifold",
    description:
      "Handcrafted slim bifold in warm honey-tan pull-up leather with thick golden-cream contrast stitching and a clean, logo-free face. Opens to four curved card slots — two on each side — plus a soft suede-tone bill compartment for notes without bulk. Ultra-thin pocket profile with burnished edges that develop a personal patina over time. Genuine leather, artisanal finish, lifetime leather warranty, cash on delivery across Pakistan.",
    image: [
      "/assets/bifold/honey-tan-slim-bifold-4.webp",
      "/assets/bifold/honey-tan-slim-bifold-1.webp",
      "/assets/bifold/honey-tan-slim-bifold-3.webp",
      "/assets/bifold/honey-tan-slim-bifold-2.webp",
    ],
    color: "Honey Tan",
    price: 3199,
    discountedPrice: 0,
    reviews: generateReviews(33, "bifold"),
  },
  {
    id: 34,
    title: "Cognac Circle-Inlay Gold-Stitch Bifold",
    description:
      "Handcrafted vertical bifold in warm cognac leather with thick gold contrast saddle stitching and distinctive circular black leather inlays on each interior pocket. Opens to two slanted card slots with easy thumb access, plus an external quick-access pocket with a curved thumb notch on the face — slim enough for front-pocket carry with room for folded notes at the fold. Full-grain character that deepens into a personal patina. Genuine leather, lifetime leather warranty, cash on delivery across Pakistan.",
    image: [
      "/assets/bifold/cognac-circle-bifold-1.webp",
      "/assets/bifold/cognac-circle-bifold-2.webp",
      "/assets/bifold/cognac-circle-bifold-3.webp",
      "/assets/bifold/cognac-circle-bifold-4.webp",
    ],
    color: "Cognac",
    price: 3399,
    discountedPrice: 0,
    reviews: generateReviews(34, "bifold"),
  },
  {
    id: 35,
    title: "Matte Black Hand-Stitch Vertical Bifold",
    description:
      "Handcrafted vertical bifold in deep matte-black leather with matching black saddle stitching and smoothly burnished rounded corners. Opens to three stacked horizontal card slots on one side and a thumb-cut vertical pocket on the other for quick access — a slim monochrome everyday carry with room for folded notes behind the panels. Genuine leather that softens with use, lifetime leather warranty, cash on delivery across Pakistan.",
    image: [
      "/assets/bifold/matte-black-bifold-1.webp",
      "/assets/bifold/matte-black-bifold-2.webp",
      "/assets/bifold/matte-black-bifold-3.webp",
    ],
    color: "Matte Black",
    price: 3399,
    discountedPrice: 0,
    reviews: generateReviews(35, "bifold"),
  },
  {
    id: 36,
    title: "Matte Black Snap Flap Bifold",
    description:
      "Handcrafted vertical snap bifold in deep matte-black leather with matching black saddle stitching and a secure metal snap flap closure. Front face carries an external quick-access card pocket with a curved thumb notch so your go-to card stays ready without opening the wallet. Compact palm-size profile with burnished edges — slim enough for front-pocket carry with room for folded notes inside. Genuine leather, lifetime leather warranty, cash on delivery across Pakistan.",
    image: [
      "/assets/bifold/matte-black-snap-bifold-1.webp",
      "/assets/bifold/matte-black-snap-bifold-2.webp",
      "/assets/bifold/matte-black-snap-bifold-3.webp",
      "/assets/bifold/matte-black-snap-bifold-4.webp",
      "/assets/bifold/matte-black-snap-bifold-5.webp",
      "/assets/bifold/matte-black-snap-bifold-6.webp",
    ],
    color: "Matte Black",
    price: 1999,
    discountedPrice: 0,
    reviews: generateReviews(36, "bifold"),
  },
];

export default bifoldProducts;
