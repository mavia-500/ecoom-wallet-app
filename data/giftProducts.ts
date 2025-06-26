interface Product {
    id: number;
    title: string;
    description: string;
    image: string[];
    color: string;
    price: number;
    discountedPrice: number;
  }
  
  const giftProducts: Product[] = [
    {
      id: 1,
      title: "Gift Leather  Wallet & Key Chain",
      description: "Premium leather wallet  and multiple card slots. Key Chain in laether. Best For your Loved ones.Unforgetabble for your loved Ones",
      image: ["https://res.cloudinary.com/dkbyjjnw5/image/upload/v1750928655/11_sfbaik.webp",'https://res.cloudinary.com/dkbyjjnw5/image/upload/v1750928655/11_sfbaik.webp'],
      color: "Black",
      price: 2600,
      discountedPrice: 400,
    },
    {
      id: 2,
      title: "Gift For Specail Ones ",
      description: "Premium leather wallet one Long Wallet, One medium Wallet, One Card Holde, One Key Chain and multiple card slots. Key Chain in laether. Best For your Loved ones.Unforgetabble for your loved Ones",
      image: ["https://res.cloudinary.com/dkbyjjnw5/image/upload/v1750928655/IMG_20250501_115709_050_lkrrbf.webp",'https://res.cloudinary.com/dkbyjjnw5/image/upload/v1750928657/IMG_20250501_115800_747_y4q2my.webp','https://res.cloudinary.com/dkbyjjnw5/image/upload/v1750928661/IMG_20250501_115818_987_d5e1er.webp'],
      color: "Black",
      price: 5000,
      discountedPrice: 500,
    },
    
  ];
  
  export default giftProducts;