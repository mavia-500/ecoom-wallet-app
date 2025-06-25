interface Product {
    id: number;
    title: string;
    description: string;
    image: string;
    color: string;
    price: number;
    discountedPrice: number;
  }
  
  const longwalletProducts: Product[] = [
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
    
  ];
  
  export default longwalletProducts;