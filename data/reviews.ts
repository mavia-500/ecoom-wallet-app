// Reviews generator for wallet products
// Copy this file to your Next.js project's data/ folder

export interface Review {
  id: number;
  username: string;
  rating: number;
  comment: string;
  date: string;
}

const usernames = [
  "AhmedKhan", "SaraAli", "HassanM", "FatimaZ", "OmarSyed", "AyeshaR", "BilalH",
  "MariamK", "UsmanT", "ZainabN", "TariqJ", "NadiaP", "ImranW", "SanaB", "KashifL",
  "HinaD", "FaisalQ", "RubinaS", "AsadM", "SumbulA", "WaqarH", "NishatK", "JunaidR",
  "ShaziaT", "NaveedF", "AmnaG", "RizwanE", "TahiraL", "KamranB", "SadiaW",
  "ZafarN", "NusratJ", "ArshadP", "GulnarD", "ShaheenQ", "AnwarS", "NaeemM",
  "ParveenA", "ManzoorH", "ShabnumK", "IjazR", "NaziaT", "AkramF", "RukhsanaG",
  "MustafaE", "SaimaL", "ZubairB", "KalsoomW", "HamidN", "FirdousJ",
  "WaleedP", "TehmenaD", "BasitQ", "ShaguftaS", "RehanM", "AmberA", "DanishH",
  "MehwishK", "TaimurR", "SadafT", "AtifF", "NashitaG", "FarhanE", "RabiaL",
  "ShahzadB", "UzmaN", "JavedW", "NazneenJ", "AamirP", "GhazalaD",
  "SohailQ", "TabassumS", "MoizM", "FarihaA", "ZeshanH", "MuneebaK",
  "AdnanR", "SurraiyaT", "OwaisF", "MariyamG", "HaiderE", "SaminaL",
  "FaizanB", "NidaW", "KhalidN", "ShaistaJ", "RafiP", "AfreenaD",
  "TanveerQ", "SobiaS", "AliRaza", "ZeeshanM", "BushraN", "HamzaK",
  "MaleehaR", "SaqibT", "NasreenF", "AbeerG", "WahabE", "ShireenL",
];

const walletComments = [
  "Amazing quality leather! The stitching is perfect and it feels premium.",
  "Great wallet, exactly as described. Very happy with the purchase.",
  "The leather quality is outstanding. Worth every rupee.",
  "Beautiful craftsmanship. My husband loves it!",
  "Very sturdy and well-made. Cards fit perfectly in the slots.",
  "Excellent product! The color is even better in person.",
  "Good quality for the price. Would recommend to friends.",
  "The leather smell is wonderful. Genuine quality product.",
  "Received it quickly and packaging was great. Love the wallet!",
  "Perfect gift for my brother. He absolutely loved it.",
  "Best wallet I've ever owned. The leather is so soft yet durable.",
  "Very impressed with the quality. Will order more for gifts.",
  "The card slots are well designed and easy to use.",
  "Stylish and functional. Gets compliments everywhere I go.",
  "Top notch leather quality. No complaints at all.",
  "Fast delivery and the wallet exceeded my expectations.",
  "Love the texture and feel of this wallet. Premium quality.",
  "Bought this as a gift and the recipient was thrilled.",
  "Solid construction with beautiful finish. Highly recommended!",
  "Great value for money. The leather will only get better with age.",
  "Superb craftsmanship! You can tell it's handmade with care.",
  "The wallet is compact yet holds everything I need.",
  "Very elegant design. Perfect for daily use.",
  "Ordered two - one for me and one as a gift. Both are perfect.",
  "The leather patina develops beautifully over time.",
  "Impressive quality. Much better than branded wallets at higher prices.",
  "Comfortable to carry in pocket. Not too bulky.",
  "The stitching detail is amazing. Clearly hand-done.",
  "Love the vintage look. Gets better with use.",
  "Perfect size and great leather quality. Five stars!",
  "Bought for my dad's birthday. He uses it every day now.",
  "The cash compartment is spacious. Very practical wallet.",
  "High quality leather that ages beautifully. Recommended!",
  "Great pocket-friendly size without compromising on slots.",
  "The color is rich and deep. Beautiful wallet.",
  "Very satisfied with this purchase. Will buy again.",
  "Best leather wallet in this price range. Period.",
  "Gifted to my colleague - he was so impressed!",
  "Durable and stylish. Everything I wanted in a wallet.",
  "The attention to detail is remarkable. Great product.",
  "Fits perfectly in my back pocket. Love the slim design.",
  "Outstanding customer service and product quality.",
  "My go-to wallet now. The leather quality is unmatched.",
  "Great product at a reasonable price. Very happy!",
  "The wallet has a nice weight to it. Feels premium.",
  "Excellent finish and build quality. No loose threads.",
  "Bought this 3 months ago and it still looks brand new.",
  "The hidden card slots are a great feature. Very useful.",
  "Perfect everyday wallet. Functional and beautiful.",
  "Would give 6 stars if I could. Absolutely love it!",
  "The leather is butter soft. Amazing quality!",
  "Received many compliments on this wallet. Great buy.",
  "Practical design with premium materials. Can't ask for more.",
  "One of the best purchases I've made. Truly handmade quality.",
  "The wallet looks even better after a few weeks of use.",
  "Gift-wrapped it for my friend's wedding. Perfect present!",
  "Compact, stylish and well-made. Ticks all the boxes.",
  "The card slots hold cards firmly. No falling out.",
  "Beautiful brown color that deepens over time.",
  "Reliable and long-lasting. My second purchase from here.",
  "The coin pocket is very handy. Well thought out design.",
  "Premium feel without the premium price tag. Great deal!",
  "Absolutely gorgeous wallet. The photos don't do it justice.",
  "My wife bought me this and I use it daily. Love it.",
  "The leather grain pattern is beautiful. Unique piece.",
  "Solid wallet with great storage capacity. Recommended.",
  "Pleasantly surprised by the quality. Exceeds expectations.",
  "Perfect for someone who appreciates genuine leather goods.",
  "The wallet arrived in beautiful packaging. Great unboxing experience.",
  "Minimal yet functional design. Exactly what I needed.",
  "After trying many wallets, this is the one I'll keep.",
  "The handmade quality really shows. Beautiful craftsmanship.",
  "Great daily driver wallet. Tough yet elegant.",
  "Bought the brown one first, now ordering in black too!",
  "The ID window is clear and well-placed. Smart design.",
  "You can feel the quality the moment you hold it.",
  "Best value leather wallet available. No question.",
  "My father has been using his for 6 months - still perfect.",
  "The double stitching ensures longevity. Smart construction.",
  "Classy wallet that makes a statement. Love it.",
  "Perfectly organized compartments. Everything has its place.",
  "The leather warranty gives great peace of mind.",
  "Ordered for corporate gifting. Everyone loved them!",
  "Slim profile that doesn't bulge in pants. Ideal design.",
  "The texture improves with use. Genuine leather at its finest.",
  "Quick shipping and excellent product. Will order again.",
  "My third wallet from here - they never disappoint!",
  "The snap closure works perfectly. Well engineered.",
  "Rich color and premium texture. Beautiful wallet.",
  "Cards slide in and out smoothly. Well-designed slots.",
  "Stylish enough for business meetings. Love the design.",
  "Hand stitched perfection. You can see the craftsmanship.",
  "The cash compartment is wider than most wallets. Very convenient.",
  "Bought as an anniversary gift. My wife was very happy!",
  "No chemical smell. Pure genuine leather quality.",
  "The zipper glides smoothly. High quality hardware.",
  "Perfect blend of style and functionality.",
  "Lightweight yet sturdy. The ideal everyday wallet.",
  "The embossed details are beautiful. Premium product.",
  "Can't believe this quality at this price point. Amazing!",
  "Nice wallet overall. Delivery took a bit longer than expected but worth the wait.",
  "Good product. Wish there was one more card slot, still happy with it.",
  "Looks exactly like the photos. Solid everyday carry.",
  "Slightly stiff at first but softened nicely after a week of use.",
  "Color is a shade darker than I imagined, still looks premium.",
  "Great for gifting. Packaging was neat and presentable.",
  "Used it daily for office — holds my cards and cash without bulk.",
  "Happy with the finish. Edges are clean and stitching is even.",
];

// Deterministic seeded random number generator
function seededRandom(seed: number): number {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

const reviewCache = new Map<string, Review[]>();
const BASE_DATE_MS = Date.UTC(2026, 1, 15);
const DAY_MS = 86_400_000;

/** Pick a review count that varies by product (4–17), never a fixed 12 for all. */
function reviewCountForProduct(seed: number): number {
  // Weighted toward mid counts so popular items feel busier than niche ones
  const roll = seededRandom(seed + 91);
  if (roll < 0.12) return 4 + Math.floor(seededRandom(seed + 92) * 2); // 4–5
  if (roll < 0.35) return 6 + Math.floor(seededRandom(seed + 93) * 3); // 6–8
  if (roll < 0.7) return 9 + Math.floor(seededRandom(seed + 94) * 4); // 9–12
  if (roll < 0.9) return 13 + Math.floor(seededRandom(seed + 95) * 3); // 13–15
  return 16 + Math.floor(seededRandom(seed + 96) * 2); // 16–17
}

/** Mostly 4–5 stars, occasional 3 for realism. */
function ratingForReview(seed: number, index: number): number {
  const r = seededRandom(seed + index * 11 + 17);
  if (r < 0.08) return 3;
  if (r < 0.38) return 4;
  return 5;
}

export function generateReviews(productId: number, category: string): Review[] {
  const cacheKey = `${category}:${productId}`;
  const cached = reviewCache.get(cacheKey);
  if (cached) return cached;

  const seed =
    productId * 7919 +
    category.split("").reduce((sum, ch) => sum + ch.charCodeAt(0), 0) * 97;
  const count = reviewCountForProduct(seed);
  const reviews: Review[] = [];
  const usedUsernames = new Set<string>();
  const usedComments = new Set<number>();

  for (let i = 0; i < count; i++) {
    let usernameIndex = Math.floor(
      seededRandom(seed + i * 3) * usernames.length,
    );
    let username = usernames[usernameIndex];
    let attempts = 0;
    while (usedUsernames.has(username) && attempts < usernames.length) {
      usernameIndex = (usernameIndex + 1) % usernames.length;
      username = usernames[usernameIndex];
      attempts += 1;
    }
    usedUsernames.add(username);

    let commentIndex = Math.floor(
      seededRandom(seed + i * 3 + 1) * walletComments.length,
    );
    attempts = 0;
    while (usedComments.has(commentIndex) && attempts < walletComments.length) {
      commentIndex = (commentIndex + 1) % walletComments.length;
      attempts += 1;
    }
    usedComments.add(commentIndex);

    const rating = ratingForReview(seed, i);
    const daysAgo = Math.floor(seededRandom(seed + i * 7) * 320) + 3;
    const date = new Date(BASE_DATE_MS - daysAgo * DAY_MS);

    reviews.push({
      id: i + 1,
      username,
      rating,
      comment: walletComments[commentIndex],
      date: date.toISOString().split("T")[0],
    });
  }

  // Newest first — feels more natural on the product page
  reviews.sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));

  reviewCache.set(cacheKey, reviews);
  return reviews;
}

export default generateReviews;
