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
    title: "Wax Pull Up Card Holder Mini Wallet",
    description:
      "Slim card-holder style mini wallet in 100% wax pull-up leather with 6 card slots and a cash compartment. Hand-stitched everyday carry under Card Holders — lifetime leather warranty, cash on delivery across Pakistan.",
    image: [
      "/assets/bifold/be6d3cbd-926e-42bd-83ed-e29497832a7a.webp",
      "/assets/bifold/1.webp",
    ],
    color: "Brown",
    price: 2600,
    discountedPrice: 200,
    reviews: generateReviews(15, "cardholder"),
  },
  {
    id: 16,
    title: "Snap Flap Distressed Card Holder",
    description:
      "Compact vertical card holder in distressed brown leather with golden contrast stitching and a gunmetal snap flap. Opens to a bright yellow lining and a thumb-notch card pocket for easy access and a cash compartment. Handcrafted genuine leather — slim everyday carry with lifetime leather warranty.",
    image: [
      "/assets/cardholder/snap-yellow-cardholder-1.webp",
      "/assets/cardholder/snap-yellow-cardholder-2.webp",
    ],
    color: "Brown / Yellow",
    price: 3500,
    discountedPrice: 0,
    reviews: generateReviews(16, "cardholder"),
  },
  {
    id: 17,
    title: "Burgundy Slim Pull-Up Card Holder",
    description:
      "Ultra-slim front-pocket card holder in rich burgundy pull-up leather with red contrast stitching. Multi-layer burnished edges, V-cut front pocket for quick card access, and a second rear slot. Genuine leather, minimalist everyday carry, lifetime leather warranty.",
    image: [
      "/assets/cardholder/burgundy-slim-cardholder-1.webp",
      "/assets/cardholder/burgundy-slim-cardholder-2.webp",
    ],
    color: "Burgundy",
    price: 2500,
    discountedPrice: 0,
    reviews: generateReviews(17, "cardholder"),
  },
  {
    id: 18,
    title: "Mustard Slim Wave-Slot Card Holder",
    description:
      "Handcrafted slim card holder in vibrant mustard-yellow leather with a soft natural grain and matching yellow hand stitching. Front face carries two tiered card slots with wave-curved tops for easy grip, plus a central cash sleeve that holds folded notes without bulk. Light suede-tone interior and dark burnished edges keep the profile clean and front-pocket ready. Genuine leather, minimalist everyday carry, lifetime leather warranty, cash on delivery across Pakistan.",
    image: [
      "/assets/cardholder/mustard-slim-cardholder-1.webp",
      "/assets/cardholder/mustard-slim-cardholder-2.webp",
    ],
    color: "Mustard",
    price: 2499,
    discountedPrice: 0,
    reviews: generateReviews(18, "cardholder"),
  },
  {
    id: 19,
    title: "Black Crocodile Embossed Card Holder",
    description:
      "Handcrafted slim bifold card holder in deep black leather with a bold crocodile-embossed scale texture and thick tonal hand stitching. Opens to four card slots — two on each side — with smooth leather slot edges and a soft matte center fold for a clean, organized carry. Burnished black edges and a compact pocket profile keep it sharp for everyday use. Genuine leather, artisanal finish, lifetime leather warranty, cash on delivery across Pakistan.",
    image: [
      "/assets/cardholder/black-croc-cardholder-1.webp",
      "/assets/cardholder/black-croc-cardholder-2.webp",
    ],
    color: "Black",
    price: 2200,
    discountedPrice: 0,
    reviews: generateReviews(19, "cardholder"),
  },
  {
    id: 20,
    title: "Black Oxblood Red-Stitch Card Holder",
    description:
      "Handcrafted slim bifold card holder in matte black pebbled leather with bold red contrast stitching. Opens to four card slots — two on each side — with oxblood crocodile-embossed accent faces on the top pockets for a sharp two-tone look. Compact pocket profile built for essentials without bulk. Genuine leather, hand-stitched finish, lifetime leather warranty, cash on delivery across Pakistan.",
    image: [
      "/assets/cardholder/black-oxblood-cardholder-1.webp",
      "/assets/cardholder/black-oxblood-cardholder-2.webp",
      "/assets/cardholder/black-oxblood-cardholder-3.webp",
    ],
    color: "Black / Oxblood",
    price: 3999,
    discountedPrice: 0,
    reviews: generateReviews(20, "cardholder"),
  },
  {
    id: 21,
    title: "Forest Croc Orange-Spine Card Holder",
    description:
      "Handcrafted slim bifold card holder in forest-green leather with crocodile-embossed slanted pockets, pebbled green panels, and a bright orange-tan center spine. Thick cream contrast stitching frames every edge and slot. Opens to dual-sided card pockets with easy-access angled croc faces — compact, textured, and built for everyday essentials. Genuine leather, artisanal finish, lifetime leather warranty, cash on delivery across Pakistan.",
    image: [
      "/assets/cardholder/forest-croc-cardholder-1.webp",
      "/assets/cardholder/forest-croc-cardholder-3.webp",
      "/assets/cardholder/forest-croc-cardholder-2.webp",
    ],
    color: "Forest Green / Orange",
    price: 4200,
    discountedPrice: 0,
    reviews: generateReviews(21, "cardholder"),
  },
  {
    id: 22,
    title: "Teal Tri-Color Diagonal Card Holder",
    description:
      "Handcrafted slim bifold card holder in teal pull-up leather with forest-green diagonal face pockets and warm mahogany inner slots. Thick emerald-green saddle stitching frames the clipped corners and every layer. Opens to four pockets — angled green over mahogany on each side — for cards and folded notes without bulk. Matte waxy finish with natural character marks, built for front-pocket everyday carry. Genuine leather, lifetime leather warranty, cash on delivery across Pakistan.",
    image: [
      "/assets/cardholder/teal-tri-color-cardholder-2.webp",
      "/assets/cardholder/teal-tri-color-cardholder-1.webp",
    ],
    color: "Teal / Green / Mahogany",
    price: 3499,
    discountedPrice: 0,
    reviews: generateReviews(22, "cardholder"),
  },
  {
    id: 23,
    title: "Honey Mustard Flap Card Holder",
    description:
      "Handcrafted slim card holder in warm honey-mustard pull-up leather with thick cream contrast stitching and a multi-layer build you can feel at the edges. Features a fold-over flap that tucks under a front strap for secure carry, a quick-access front card slot, and an interior compartment for cards or folded notes. Curved pocket edges and a rugged artisanal finish that lightens and darkens with use into a personal patina. Genuine leather, lifetime leather warranty, cash on delivery across Pakistan.",
    image: [
      "/assets/cardholder/honey-mustard-flap-cardholder-3.webp",
      "/assets/cardholder/honey-mustard-flap-cardholder-4.webp",
      "/assets/cardholder/honey-mustard-flap-cardholder-2.webp",
      "/assets/cardholder/honey-mustard-flap-cardholder-1.webp",
    ],
    color: "Honey Mustard",
    price: 2499,
    discountedPrice: 0,
    reviews: generateReviews(23, "cardholder"),
  },
  {
    id: 24,
    title: "Black Burgundy Cream-Stitch Card Holder",
    description:
      "Handcrafted slim bifold card holder in matte black leather with deep burgundy mottled face pockets and thick cream contrast saddle stitching. Oval thumb cutouts make cards easy to slide out; opens to dual burgundy slots with a central cash sleeve for folded notes. Burnished black edges, layered pocket options, and a compact pocket profile built for daily carry. Genuine leather, artisanal finish, lifetime leather warranty, cash on delivery across Pakistan.",
    image: [
      "/assets/cardholder/black-burgundy-cream-cardholder-1.webp",
      "/assets/cardholder/black-burgundy-cream-cardholder-2.webp",
      "/assets/cardholder/black-burgundy-cream-cardholder-4.webp",
      "/assets/cardholder/black-burgundy-cream-cardholder-3.webp",
      "/assets/cardholder/black-burgundy-cream-cardholder-5.webp",
    ],
    color: "Black / Burgundy",
    price: 4999,
    discountedPrice: 400,
    reviews: generateReviews(24, "cardholder"),
  },
  {
    id: 25,
    title: "Olive Cream-Stitch Slim Card Holder",
    description:
      "Handcrafted slim bifold card holder in earthy olive pull-up leather with a matte distressed finish and thick cream contrast stitching. Opens to two curved thumb-cut card slots — one on each side — for a clean minimalist carry. Burnished multi-layer edges and a compact pocket profile built for everyday essentials. Genuine leather that softens and darkens with use, lifetime leather warranty, cash on delivery across Pakistan.",
    image: [
      "/assets/cardholder/olive-cream-cardholder-1.webp",
      "/assets/cardholder/olive-cream-cardholder-3.webp",
      "/assets/cardholder/olive-cream-cardholder-4.webp",
      "/assets/cardholder/olive-cream-cardholder-2.webp",
    ],
    color: "Olive Green",
    price: 2199,
    discountedPrice: 0,
    reviews: generateReviews(25, "cardholder"),
  },
  {
    id: 26,
    title: "Cognac Strap-Flap Slim Card Holder",
    description:
      "Handcrafted slim vertical card holder in warm cognac tan leather with thick light-brown hand stitching and a fold-over flap that tucks behind a front strap — no snaps, just clean leather-on-leather security. Opens to a main rear compartment and a shorter front pocket for quick-access cards or folded notes. Ultra-thin front-pocket profile with burnished edges that develop a personal patina. Genuine leather, lifetime leather warranty, cash on delivery across Pakistan.",
    image: [
      "/assets/cardholder/cognac-flap-cardholder-3.webp",
      "/assets/cardholder/cognac-flap-cardholder-4.webp",
      "/assets/cardholder/cognac-flap-cardholder-2.webp",
      "/assets/cardholder/cognac-flap-cardholder-1.webp",
    ],
    color: "Cognac",
    price: 2899,
    discountedPrice: 299,
    reviews: generateReviews(26, "cardholder"),
  },
  {
    id: 27,
    title: "Olive Snap Distressed Card Holder",
    description:
      "Handcrafted folding card holder in distressed forest-olive crazy-horse leather with thick cream contrast saddle stitching and a secure silver-tone snap closure. Opens to three stacked horizontal card slots on one side and a roomy opposite pocket for extras or folded notes. Burnished multi-layer edges and a compact pocket profile with natural mottled character that lightens and darkens with use. Genuine leather, lifetime leather warranty, cash on delivery across Pakistan.",
    image: [
      "/assets/cardholder/olive-snap-cardholder-1.webp",
      "/assets/cardholder/olive-snap-cardholder-2.webp",
      "/assets/cardholder/olive-snap-cardholder-3.webp",
      "/assets/cardholder/olive-snap-cardholder-4.webp",
    ],
    color: "Olive Green",
    price: 3299,
    discountedPrice: 399,
    reviews: generateReviews(27, "cardholder"),
  },
  {
    id: 28,
    title: "Olive Diagonal Pocket Slim Card Holder",
    description:
      "Handcrafted slim bifold card holder in distressed olive pull-up leather with thick cream contrast stitching and neatly rounded corners. Opens to two vertical card slots with diagonal easy-access face pockets — one on each side — for essentials without bulk. Soft suede-tone center fold and a front-pocket slim profile that lightens and mottles into a personal patina. Genuine leather, lifetime leather warranty, cash on delivery across Pakistan.",
    image: [
      "/assets/cardholder/olive-diagonal-cardholder-1.webp",
      "/assets/cardholder/olive-diagonal-cardholder-4.webp",
      "/assets/cardholder/olive-diagonal-cardholder-3.webp",
      "/assets/cardholder/olive-diagonal-cardholder-2.webp",
    ],
    color: "Olive Green",
    price: 2099,
    discountedPrice: 0,
    reviews: generateReviews(28, "cardholder"),
  },
  {
    id: 29,
    title: "Rustic Brown Yellow-Stitch Snap Card Holder",
    description:
      "Handcrafted vertical bifold card holder in textured pebbled brown leather with thick yellow contrast saddle stitching and a secure antique-brass snap closure. Opens to two wave-curved card slots — one on each side — with slip pockets behind for extras or folded notes. Rugged grain character and a compact palm-size profile built for everyday carry. Genuine leather, lifetime leather warranty, cash on delivery across Pakistan.",
    image: [
      "/assets/cardholder/rustic-brown-snap-cardholder-1.webp",
      "/assets/cardholder/rustic-brown-snap-cardholder-2.webp",
    ],
    color: "Rustic Brown",
    price: 2999,
    discountedPrice: 0,
    reviews: generateReviews(29, "cardholder"),
  },
  {
    id: 30,
    title: "Navy Teal Pull-Up Slim Card Holder",
    description:
      "Handcrafted slim card holder in deep navy pull-up leather that flashes teal and cyan highlights when flexed. Thick tonal blue hand stitching, rounded corners, and a compact front-pocket profile. Features layered card slots with a rear compartment for folded notes, plus a clean strap-flap option that tucks for secure carry — each piece shows unique mottled character that ages into a personal patina. Genuine leather, lifetime leather warranty, cash on delivery across Pakistan.",
    image: [
      "/assets/cardholder/navy-teal-cardholder-5.webp",
      "/assets/cardholder/navy-teal-cardholder-2.webp",
      "/assets/cardholder/navy-teal-cardholder-6.webp",
      "/assets/cardholder/navy-teal-cardholder-3.webp",
      "/assets/cardholder/navy-teal-cardholder-4.webp",
      "/assets/cardholder/navy-teal-cardholder-1.webp",
    ],
    color: "Navy / Teal",
    price: 3299,
    discountedPrice: 0,
    reviews: generateReviews(30, "cardholder"),
  },
  {
    id: 31,
    title: "Burgundy Wave-Slot Red-Stitch Card Holder",
    description:
      "Handcrafted ultra-slim bifold card holder in deep burgundy oxblood leather with vibrant red contrast saddle stitching and a soft red suede-tone center fold. Opens to two wave-curved card slots — one on each side — for quick thumb access without bulk. Burnished multi-layer edges and a front-pocket profile built for everyday essentials. Genuine leather, lifetime leather warranty, cash on delivery across Pakistan.",
    image: [
      "/assets/cardholder/burgundy-wave-cardholder-3.webp",
      "/assets/cardholder/burgundy-wave-cardholder-4.webp",
      "/assets/cardholder/burgundy-wave-cardholder-2.webp",
      "/assets/cardholder/burgundy-wave-cardholder-1.webp",
    ],
    color: "Burgundy",
    price: 2999,
    discountedPrice: 0,
    reviews: generateReviews(31, "cardholder"),
  },
  {
    id: 32,
    title: "Chocolate Cream-Stitch Bifold Card Holder",
    description:
      "Handcrafted vertical bifold card holder in rich chocolate-brown leather with thick cream contrast saddle stitching and smoothly burnished rounded corners. Opens to three stacked horizontal card slots on one side and a thumb-cut vertical pocket on the other for quick access — slim enough for front-pocket carry with room for folded notes behind the panels. Genuine leather that develops a personal patina, lifetime leather warranty, cash on delivery across Pakistan.",
    image: [
      "/assets/cardholder/chocolate-cream-cardholder-3.webp",
      "/assets/cardholder/chocolate-cream-cardholder-4.webp",
      "/assets/cardholder/chocolate-cream-cardholder-1.webp",
      "/assets/cardholder/chocolate-cream-cardholder-2.webp",
    ],
    color: "Chocolate Brown",
    price: 2999,
    discountedPrice: 0,
    reviews: generateReviews(32, "cardholder"),
  },
  {
    id: 33,
    title: "Matte Black Hand-Stitch Bifold Card Holder",
    description:
      "Handcrafted vertical bifold card holder in deep matte-black leather with matching black saddle stitching and smoothly burnished rounded corners. Opens to three stacked horizontal card slots on one side and a thumb-cut vertical pocket on the other for quick access — a slim, monochrome everyday carry with room for folded notes behind the panels. Genuine leather that develops a personal patina, lifetime leather warranty, cash on delivery across Pakistan.",
    image: [
      "/assets/cardholder/matte-black-cardholder-1.webp",
      "/assets/cardholder/matte-black-cardholder-2.webp",
      "/assets/cardholder/matte-black-cardholder-3.webp",
    ],
    color: "Matte Black",
    price: 2999,
    discountedPrice: 0,
    reviews: generateReviews(33, "cardholder"),
  },
  {
    id: 34,
    title: "Chestnut & Black Wave-Slot Card Holder",
    description:
      "Handcrafted vertical bifold card holder in warm chestnut leather with cream contrast stitching — also available in sleek matte black with matching black stitch. Opens to curved wave-cut card slots for easy thumb access and a deep panel pocket for extras or folded notes. Dual-tone build with black-edged finish keeps a slim front-pocket profile without bulk. Genuine leather that develops a personal patina, lifetime leather warranty, cash on delivery across Pakistan.",
    image: [
      "/assets/cardholder/chestnut-black-wave-cardholder-1.webp",
      "/assets/cardholder/chestnut-black-wave-cardholder-2.webp",
    ],
    color: "Chestnut / Black",
    price: 1999,
    discountedPrice: 0,
    reviews: generateReviews(34, "cardholder"),
  },
  {
    id: 35,
    title: "Burgundy Red-Interior Snap Card Holder",
    description:
      "Handcrafted vertical snap card holder in deep burgundy oxblood leather with thick cream contrast saddle stitching and a vivid red suede-tone interior on the flap. Front face carries a diagonal quick-access card slot plus a secure triangular snap flap with antique brass hardware — slim enough for front-pocket carry with room for extras behind the panel. Genuine leather that develops a richer wine patina over time, lifetime leather warranty, cash on delivery across Pakistan.",
    image: [
      "/assets/cardholder/burgundy-snap-cardholder-1.webp",
      "/assets/cardholder/burgundy-snap-cardholder-2.webp",
      "/assets/cardholder/burgundy-snap-cardholder-3.webp",
      "/assets/cardholder/burgundy-snap-cardholder-4.webp",
      "/assets/cardholder/burgundy-snap-cardholder-5.webp",
    ],
    color: "Burgundy",
    price: 2799,
    discountedPrice: 0,
    reviews: generateReviews(35, "cardholder"),
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
