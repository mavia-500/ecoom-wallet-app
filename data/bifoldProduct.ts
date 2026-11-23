import { generateReviews, Review } from "./reviews";

interface Product {
  id: number;
  title: string;
  description: string;
  image: string[];
  /** Optional SEO alt text for each gallery image. */
  imageAlts?: string[];
  /** Optional product video path under /public (lazy-loaded in image scroller). */
  video?: string;
  color: string;
  price: number;
  discountedPrice: number;
  stock: number;
  reviews: Review[];
}

const bifoldProducts: Product[] = [
  {
    id: 34,
    title: "Cognac Circle-Inlay Gold-Stitch Bifold",
    description:
      "This wallet is made of wax brown leather with a rich, natural look. Every piece is a little different, so yours is truly one of a kind. The stitching around the edges makes it strong and neat.\nIt has 4 card slots for your cards and 1 compartment for your cash, so everything has its own place. You can also pull a card out quickly through the small cut-out on the front, without opening the wallet.\nIt is thin, light and easy to carry every day. It also makes a great gift.\nMain features\n4 card slots\n1 cash compartment\nQuick card pull-out on the front\nSlim and light, fits in any pocket\nStrong stitching on the edges\nReal leather look that gets better with time",
    image: [
      "/assets/bifold/cognac-circle-bifold-1.webp",
      "/assets/bifold/cognac-circle-bifold-2.webp",
      "/assets/bifold/cognac-circle-bifold-3.webp",
      "/assets/bifold/cognac-circle-bifold-4.webp",
      "/assets/bifold/cognac-circle-bifold-5v2.webp",
    ],
    video: "/assets/bifold/cognac-circle-bifold-v2.mp4",
    color: "Cognac",
    price: 3399,
    discountedPrice: 0,
    stock: 22,
    reviews: generateReviews(34, "bifold"),
  },
  {
    id: 32,
    title: "NestiCraft Black Passport Holder",
    description:
      "This wallet is made of smooth black leather with a clean, simple look and looks good with any outfit. The stitching around the edges is neat and strong, and the snap buttons keep the wallet closed.\nIt has 6 card slots, so your cards stay in order and are easy to reach. It also has 1 cash compartment for your notes. Everything has its own place, and the wallet stays slim even when it is full.\nAbout the leather\nSmooth black leather with a rich, even color\nEdges are stitched and finished neatly\nLeather looks better with time, so it keeps its good look as you use it\nWipe with a soft, dry cloth to keep it clean, and keep it away from water\nMain features\n6 card slots\n1 cash compartment\n2 passport slots\nSnap button closing\nStrong stitching on the edges\nHandmade with care",
    image: [
      "/assets/bifold/burgundy-red-stitch-bifold-v2-1.webp",
      "/assets/bifold/burgundy-red-stitch-bifold-v2-2.webp",
      "/assets/bifold/burgundy-red-stitch-bifold-v2-3.webp",
      "/assets/bifold/burgundy-red-stitch-bifold-v2-4.webp",
      "/assets/bifold/burgundy-red-stitch-bifold-v2-5.webp",
      "/assets/bifold/burgundy-red-stitch-bifold-v2-6.webp",
    ],
    video: "/assets/bifold/burgundy-red-stitch-bifold-v2.mp4",
    color: "Black",
    price: 5699,
    discountedPrice: 399,
    stock: 14,
    reviews: generateReviews(32, "bifold"),
  },
  {
    id: 36,
    title: "Cognac Voyager: Leather Passport Wallet",
    description:
      "Carry your passport, cards and cash in one organised, hand-stitched wallet. The Wanderfold Leather Passport Wallet is made for travellers and everyday carry alike. It has a warm cognac tan finish with contrast stitching, and a secure snap closure keeps everything in place.\nEach pocket has a clear purpose, so you stop digging through bags and pockets at the airport, hotel desk or checkout counter.\nKey Features\n6 card slots for debit cards, credit cards, ID and membership cards\n2 passport slots for a passport, a second passport or travel documents\n1 cash compartment for banknotes and boarding passes\nSnap button closure to keep contents secure\nHand-stitched seams with contrast thread for strength and a classic look\nSlim bifold design that fits in a jacket, pocket or travel bag\nCognac tan finish that deepens and develops character with use",
    image: [
      "/assets/bifold/cognac-voyager-passport-1.webp",
      "/assets/bifold/cognac-voyager-passport-2.webp",
      "/assets/bifold/cognac-voyager-passport-3.webp",
      "/assets/bifold/cognac-voyager-passport-4.webp",
      "/assets/bifold/cognac-voyager-passport-5.webp",
    ],
    video: "/assets/bifold/cognac-voyager-passport.mp4",
    color: "Cognac",
    price: 6500,
    discountedPrice: 0,
    stock: 18,
    reviews: generateReviews(36, "bifold"),
  },
  {
    id: 33,
    title: "Honey Tan Slim Minimalist Bifold",
    description:
      "Handcrafted slim bifold in warm honey-tan pull-up leather with thick golden-cream contrast stitching and a clean, logo-free face. Opens to four curved card slots two on each side plus a soft suede-tone bill compartment for notes without bulk. Ultra-thin pocket profile with burnished edges that develop a personal patina over time. Genuine leather, artisanal finish, lifetime leather warranty, cash on delivery across Pakistan.",
    image: [
      "/assets/bifold/honey-tan-slim-bifold-4.webp",
      "/assets/bifold/honey-tan-slim-bifold-1.webp",
      "/assets/bifold/honey-tan-slim-bifold-3.webp",
      "/assets/bifold/honey-tan-slim-bifold-2.webp",
    ],
    video: "/assets/bifold/honey-tan-slim-urdu-captions.mp4",
    color: "Honey Tan",
    price: 3199,
    discountedPrice: 0,
    stock: 5,
    reviews: generateReviews(33, "bifold"),
  },
  {
    id: 35,
    title: "Handmade Leather Money Clip Wallet",
    description:
      "This handmade money clip wallet is cut and stitched by hand from premium pull-up leather. The surface shows natural tonal variation, and every piece has its own character. It will also develop a richer patina the longer you use it.\nThe metal spring clip grips your cash firmly. 4 card pockets, each with a thumb cutout, give quick one-handed access to your everyday cards. The edges are neatly burnished and sewn with bold yellow thread for a clean, durable finish.\nKey features\nHandmade from genuine leather\nStrong metal money clip that keeps cash secure\n4 card slots with thumb-slide cutouts\nContrast yellow hand stitching\nSlim front-pocket-friendly design\nNatural leather grain that ages beautifully\n\nPerfect for\nEveryday carry, gifts for men, birthdays, weddings and corporate gifting.\n\nCare tip\nKeep away from prolonged moisture and wipe with a soft dry cloth. Condition lightly now and then to maintain the leather’s glow.",
    image: [
      "/assets/bifold/handmade-money-clip-wallet-1.webp",
      "/assets/bifold/handmade-money-clip-wallet-2.webp",
    ],
    imageAlts: [
      "Handmade leather money clip wallet open, front angle",
      "Mustard leather card holder with metal clip, upright view",
      "Open slim leather wallet with yellow stitching, side angle",
      "Close-up of money clip and card slots",
      "Leather money clip wallet closed, back view",
      "Back detail of handcrafted leather wallet",
    ],
    video: "/assets/bifold/handmade-money-clip-wallet.mp4",
    color: "Mustard",
    price: 3800,
    discountedPrice: 1000,
    stock: 18,
    reviews: generateReviews(35, "bifold"),
  },
  {
    id: 14,
    title: "Wax Pull Up Leather Wallet",
    description:
      "This bifold is handmade from genuine wax pull-up leather. The leather has natural light and dark shades, so every wallet looks a little different. The more you use it, the richer and more personal the color becomes.\nInside you get 6 card slots, 2 hidden slots for extra cards or your CNIC, and 1 cash compartment for notes without making the wallet bulky. Thick cream stitching and smooth burnished edges give it a clean, finished look. It stays slim enough for everyday front or back pocket carry.\nNo cloth lining is used — only real leather from top to bottom. Each piece is cut and stitched by hand in our workshop.\nKey features\n100% genuine wax pull-up leather\n6 card slots + 2 hidden slots\n1 cash compartment for notes\nThick cream contrast stitching\nSlim, pocket-friendly bifold shape\nLeather that ages beautifully with use\nLifetime leather warranty\n\nPerfect for\nEveryday carry, office use, gifts for men, birthdays, and special occasions.\n\nCare tip\nKeep away from heavy water. Wipe with a soft dry cloth and condition lightly now and then to keep the leather soft and glowing.\nCash on delivery available across Pakistan.",
    image: [
      "/assets/bifold/wax-pull-up-leather-wallet-1.webp",
      "/assets/bifold/wax-pull-up-leather-wallet-2.webp",
      "/assets/bifold/wax-pull-up-leather-wallet-3.webp",
      "/assets/bifold/wax-pull-up-leather-wallet-4.webp",
    ],
    video: "/assets/bifold/wax-pull-up-leather-wallet.mp4",
    color: "Brown",
    price: 4500,
    discountedPrice: 1800,
    stock: 20,
    reviews: generateReviews(14, "bifold"),
  },
  {
    id: 15,
    title: "Wax Pull Up Bi-Fold Mini Wallet",
    description:
      "Compact bi-fold mini wallet in 100% wax pull-up leather with 6 card slots and a cash compartment. Hand-stitched front-pocket bi-fold carry lifetime leather warranty, cash on delivery across Pakistan.",
    image: [
      "/assets/bifold/wax-pull-up-bi-fold-mini-1.webp",
      "/assets/bifold/wax-pull-up-bi-fold-mini-2.webp",
      "/assets/bifold/wax-pull-up-bi-fold-mini-3.webp",
      "/assets/bifold/wax-pull-up-bi-fold-mini-4.webp",
    ],
    video: "/assets/bifold/wax-pull-up-bi-fold-mini.mp4",
    color: "Brown",
    price: 2600,
    discountedPrice: 200,
    stock: 11,
    reviews: generateReviews(15, "bifold"),
  },
  {
    id: 16,
    title: "Vegetable Leather  Wallet",
    description:
      "Premium leather wallet with 4 card slots, 2 hidden slots, 1 coin pocket  and 3 cash compartment 100%  Leather.Life time Leather Warranty. No Cloth Stuff is used. Hand Made and hand stichthed.",
    image: [
      "/assets/bifold/Gemini_Generated_Image_v20n5ev20n5ev20n.webp",
      "/assets/bifold/4e2afded-fe05-4b77-9c2b-9e0558251f55.webp",
      "/assets/bifold/801a9156-3514-4844-9774-bb933ede67c0.webp",
      "/assets/bifold/de40d1cb-dec1-4c2b-ac74-6bfa58feceab.webp",
      "/assets/bifold/Gemini_Generated_Image_1e6qnh1e6qnh1e6q.webp",
    ],
    video: "/assets/bifold/vegetable-leather-wallet.mp4",
    color: "Choclate",
    price: 15000,
    discountedPrice: 1200,
    stock: 28,
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
    stock: 7,
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
    stock: 24,
    reviews: generateReviews(2, "bifold"),
  },
  {
    id: 3,
    title: "Vintage book Wallet",
    description:
      " Book shape  Leather wallet  Cash Compartment 6 Card Slot ultra slim Easy to Carry 100% leather",
    image: [
     "/assets/bifold/p2.webp",
     "/assets/bifold/p2_09a8dc7a-ca8e-4820-8dec-6957cfe25c03.webp",
    ],
    color: "Brown",
    price: 1800,
    discountedPrice: 300,
    stock: 15,
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
    stock: 23,
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
    stock: 14,
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
    stock: 5,
    reviews: generateReviews(7, "bifold"),
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
    stock: 13,
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
    stock: 4,
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
    stock: 21,
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
    video: "/assets/bifold/bega-card-holder.mp4",
    color: "Yellow",
    price: 3300,
    discountedPrice: 1000,
    stock: 12,
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
    video: "/assets/bifold/vintage-card-holder.mp4",
    color: "Brown",
    price: 3400,
    discountedPrice: 1000,
    stock: 3,
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
    stock: 19,
    reviews: generateReviews(17, "bifold"),
  },
  {
    id: 18,
    title: "Crocodile Embossed Brown Bifold",
    description:
      "Compact bifold covered in rich chocolate-brown crocodile-embossed leather with a semi-gloss pull-up finish and golden-tan contrast perimeter stitching. Classic closed bifold profile with slightly rounded corners and bold exotic texture for a refined yet rugged look. Opens flat to multiple vertical card slots on each side, rear slip pockets for extras, and a full-length bill compartment. Thick artisanal hand stitching, burnished edges, genuine leather, lifetime leather warranty. Cash on delivery across Pakistan.",
    image: [
      "/assets/bifold/croc-brown-bifold-1.webp",
      "/assets/bifold/navy-pebble-bifold-1.webp",
    ],
    color: "Brown",
    price: 3500,
    discountedPrice: 100,
    stock: 37,
    reviews: generateReviews(18, "bifold"),
  },
  {
    id: 20,
    title: "Cognac Snap Vertical Bifold Wallet",
    description:
      "Handcrafted vertical bifold in rich cognac pull-up leather with a secure silver snap tab closure. Opens to two card pockets with curved edges and oval thumb slides for quick card access, plus a slim layered build for cash and extras. Thick cream contrast stitching, burnished edges, and an embossed mark on the front rustic crazy-horse character that ages beautifully. Genuine leather, pocket-friendly size, lifetime leather warranty. Cash on delivery across Pakistan.",
    image: [
      "/assets/bifold/cognac-snap-bifold-1.webp",
      "/assets/bifold/cognac-snap-bifold-2.webp",
      "/assets/bifold/cognac-snap-bifold-3.webp",
    ],
    video: "/assets/bifold/cognac-snap-bifold.mp4",
    color: "Cognac",
    price: 3200,
    discountedPrice: 150,
    stock: 18,
    reviews: generateReviews(20, "bifold"),
  },
  {
    id: 21,
    title: "Tobacco Vertical Hand-Stitched Bifold",
    description:
      "Handcrafted vertical bifold in warm tobacco-brown leather with thick cream contrast stitching and neatly burnished multi-layer edges. Opens to two large card pockets with rear slip compartments for bills or extras a clean, rugged everyday layout that still feels slim in the pocket. Closed face shows a compact rectangular profile with soft rounded corners and a subtle embossed mark. Made from genuine leather that develops a richer patina with use, finished for lasting strength and backed by our lifetime leather warranty. Cash on delivery across Pakistan.",
    image: [
      "/assets/bifold/tobacco-vertical-bifold-1.webp",
      "/assets/bifold/tobacco-vertical-bifold-2.webp",
    ],
    color: "Tobacco Brown",
    price: 2999,
    discountedPrice: 0,
    stock: 9,
    reviews: generateReviews(21, "bifold"),
  },
  {
    id: 22,
    title: "Oxblood Hand-Stitched Bifold Wallet",
    description:
      "Artisan bifold in deep oxblood (burgundy) full-grain leather with a subtle pull-up sheen and matching red hand stitching throughout. Opens to six horizontal card slots three on each side plus rear slip pockets for folded notes or extra cards. Neatly beveled and burnished edges, a slim yet sturdy build, and a refined workshop finish that still feels rugged in the hand. Designed to age into a richer patina with daily use. Genuine leather, lifetime leather warranty, cash on delivery across Pakistan.",
    image: [
      "/assets/bifold/oxblood-bifold-1.webp",
      "/assets/bifold/oxblood-bifold-2.webp",
      "/assets/bifold/oxblood-bifold-3.webp",
    ],
    color: "Oxblood",
    price: 3450,
    discountedPrice: 300,
    stock: 26,
    reviews: generateReviews(22, "bifold"),
  },
  {
    id: 23,
    title: "Tan Yellow-Stitch Handcrafted Bifold",
    description:
      "Handcrafted bifold in warm tan camel-brown leather with bold golden-yellow contrast stitching along every edge and card pocket. Opens to four vertical card slots two on each side with rear slip pockets for extra cards or folded notes, plus a deep bill compartment that holds cash securely for daily use. Thick full-grain feel, burnished rounded corners, and a rugged workshop finish that still looks clean and premium. Built to soften and develop a personal patina over time. Genuine leather, lifetime leather warranty, cash on delivery across Pakistan.",
    image: [
      "/assets/bifold/tan-yellow-stitch-bifold-1.webp",
      "/assets/bifold/tan-yellow-stitch-bifold-2.webp",
    ],
    video: "/assets/bifold/tan-yellow-stitch-bifold.mp4",
    color: "Tan",
    price: 3700,
    discountedPrice: 0,
    stock: 17,
    reviews: generateReviews(23, "bifold"),
  },
  {
    id: 24,
    title: "Black Minimal Hand-Stitched Bifold",
    description:
      "Slim minimalist bifold in smooth matte black leather with thick tonal black hand stitching and neatly burnished edges. Opens to four overlapping card slots two on each side for everyday essentials without bulk, plus a clean folded profile for front-pocket carry. Quiet, refined exterior with no flashy hardware just durable genuine leather built for daily use. Lifetime leather warranty. Cash on delivery across Pakistan.",
    image: [
      "/assets/bifold/black-minimal-bifold-1.webp",
      "/assets/bifold/black-minimal-bifold-2.webp",
    ],
    video: "/assets/bifold/black-minimal-bifold.mp4",
    color: "Black",
    price: 3100,
    discountedPrice: 101,
    stock: 8,
    reviews: generateReviews(24, "bifold"),
  },
  {
    id: 25,
    title: "Cognac Curved-Slot Handcrafted Bifold",
    description:
      "Handcrafted bifold in warm cognac pull-up leather with thick tonal stitching and burnished edges. Opens to two card pockets with ergonomic curved cutouts for easy grip, plus a full-length cash compartment that holds notes without fuss. Closed it forms a slim sleeve with a soft U-notch for quick access full-grain character that lightens and darkens with use into a personal patina. Built for everyday carry: rugged, refined, and made to last. Genuine leather, lifetime leather warranty, cash on delivery across Pakistan.",
    image: [
      "/assets/bifold/cognac-curved-bifold-1.webp",
      "/assets/bifold/cognac-curved-bifold-2.webp",
    ],
    color: "Cognac",
    price: 3300,
    discountedPrice: 0,
    stock: 25,
    reviews: generateReviews(25, "bifold"),
  },
  {
    id: 26,
    title: "Forest Green White-Stitch Handcrafted Bifold",
    description:
      "Handcrafted bifold in deep forest-green leather with thick off-white contrast saddle stitching and neatly burnished multi-layer edges. Opens to four vertical card slots two on each side plus a full-length cash compartment that holds notes without bulk. Closed it keeps a slim rectangular profile with rounded corners and a solid, durable build meant for daily pocket carry. Genuine leather, hand-stitched finish, lifetime leather warranty, cash on delivery across Pakistan.",
    image: [
      "/assets/bifold/forest-green-bifold-2.webp",
      "/assets/bifold/forest-green-bifold-1.webp",
    ],
    color: "Forest Green",
    price: 2999,
    discountedPrice: 0,
    stock: 16,
    reviews: generateReviews(26, "bifold"),
  },
  {
    id: 29,
    title: "Mahogany Cream-Stitch Handcrafted Bifold",
    description:
      "Handcrafted bifold in rich mahogany pull-up leather with natural grain, warm russet undertones, and thick cream contrast saddle stitching. Opens to stacked card slots with thumb-friendly cutouts on one side and a roomy vertical pocket on the other, plus space for folded notes behind the panels. Rounded burnished corners and a classic slim pocket profile full-grain character that softens and darkens with everyday carry. Genuine leather, lifetime leather warranty, cash on delivery across Pakistan.",
    image: [
      "/assets/bifold/mahogany-cream-bifold-1.webp",
      "/assets/bifold/mahogany-cream-bifold-2.webp",
      "/assets/bifold/mahogany-cream-bifold-3.webp",
    ],
    video: "/assets/bifold/mahogany-cream-bifold.mp4",
    color: "Mahogany",
    price: 3699,
    discountedPrice: 0,
    stock: 15,
    reviews: generateReviews(29, "bifold"),
  },
  {
    id: 30,
    title: "Chocolate Tan-Stitch Wave-Slot Bifold",
    description:
      "Handcrafted bifold in deep chocolate pull-up leather with thick orange-tan contrast saddle stitching and smoothly burnished rounded corners. Opens to six wave-edged card slots three on each side with slip pockets behind for receipts or extras, plus a full-length bill compartment. Raw suede-tone interior at the cash sleeve shows honest full-grain construction that softens and darkens into a personal patina. Rugged everyday carry, genuine leather, lifetime leather warranty, cash on delivery across Pakistan.",
    image: [
      "/assets/bifold/chocolate-tan-stitch-bifold-1.webp",
      "/assets/bifold/chocolate-tan-stitch-bifold-2.webp",
      "/assets/bifold/chocolate-tan-stitch-bifold-3.webp",
    ],
    video: "/assets/bifold/chocolate-tan-stitch-bifold.mp4",
    color: "Chocolate Brown",
    price: 5999,
    discountedPrice: 0,
    stock: 6,
    reviews: generateReviews(30, "bifold"),
  },
  {
    id: 31,
    title: "Russet Cream-Stitch Slim Bifold",
    description:
      "Handcrafted slim bifold in rich russet-chestnut leather with a smooth matte finish and thick cream contrast saddle stitching. Opens to four curved card slots two stacked on each side for essentials without bulk. Closed it keeps a compact palm-size profile with rounded burnished corners and multi-layer edges built for daily pocket carry. Full-grain character that softens with use. Genuine leather, lifetime leather warranty, cash on delivery across Pakistan.",
    image: [
      "/assets/bifold/russet-cream-bifold-1.webp",
      "/assets/bifold/russet-cream-bifold-2.webp",
    ],
    color: "Russet",
    price: 3499,
    discountedPrice: 0,
    stock: 23,
    reviews: generateReviews(31, "bifold"),
  },
];

export default bifoldProducts;
