interface Product {
    id: number;
    title: string;
    description: string;
    image: string;
    color: string;
    price: number;
    discountedPrice: number;
  }
  
  const cardholderProducts: Product[] = [
    {
      id: 1,
      title: "Leather Bifold Wallet",
      description: "Premium leather wallet with RFID protection and multiple card slots.",
      image: "https://images.unsplash.com/photo-1618378533603-83d7a4b4b136",
      color: "Brown",
      price: 49.99,
      discountedPrice: 39.99,
    },
    {
      id: 2,
      title: "Slim Minimalist Wallet",
      description: "Sleek design with quick-access card slot and cash compartment.",
      image: "https://images.unsplash.com/photo-1594631252845-006a4f2973e1",
      color: "Black",
      price: 34.99,
      discountedPrice: 29.99,
    },
    {
      id: 3,
      title: "Vintage Canvas Wallet",
      description: "Durable canvas material with a retro aesthetic and sturdy stitching.",
      image: "https://images.unsplash.com/photo-1605733513597-a8f834bd9081",
      color: "Green",
      price: 44.99,
      discountedPrice: 34.99,
    },
    {
      id: 4,
      title: "Luxury Leather Cardholder",
      description: "Compact cardholder with premium leather and embossed logo.",
      image: "https://images.unsplash.com/photo-1625731464208-90f0d2f9b864",
      color: "Navy",
      price: 29.99,
      discountedPrice: 24.99,
    },
    {
      id: 5,
      title: "RFID Travel Wallet",
      description: "Spacious wallet for travel with passport slot and RFID protection.",
      image: "https://images.unsplash.com/photo-1605733160314-4d4f4b08f8a0",
      color: "Gray",
      price: 59.99,
      discountedPrice: 49.99,
    },
    
  ];
  
  export default cardholderProducts;