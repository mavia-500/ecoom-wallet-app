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
];

// Deterministic seeded random number generator
function seededRandom(seed: number): number {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

export function generateReviews(productId: number, category: string): Review[] {
  const reviews: Review[] = [];
  const seed = productId * 1000 + category.length * 100;

  for (let i = 0; i < 100; i++) {
    const r1 = seededRandom(seed + i * 3);
    const r2 = seededRandom(seed + i * 3 + 1);
    const r3 = seededRandom(seed + i * 3 + 2);

    const usernameIndex = Math.floor(r1 * usernames.length);
    const commentIndex = Math.floor(r2 * walletComments.length);
    const rating = Math.floor(r3 * 3) + 3; // 3, 4, or 5

    // Generate a date within the last 12 months
    const daysAgo = Math.floor(seededRandom(seed + i * 7) * 365);
    const date = new Date(2026, 1, 15); // Current date
    date.setDate(date.getDate() - daysAgo);

    reviews.push({
      id: i + 1,
      username: usernames[usernameIndex] + (i > usernames.length ? String(Math.floor(i / usernames.length)) : ""),
      rating,
      comment: walletComments[commentIndex],
      date: date.toISOString().split("T")[0],
    });
  }

  return reviews;
}

export default generateReviews;
