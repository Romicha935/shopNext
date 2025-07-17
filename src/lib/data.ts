import { i18n } from "@/i18n-config";
import { toSlug } from "./utils";

 
export const data = {
   headerMenus: [
    {
      name: "Today's Deal",
      href: '/search?tag=todays-deal',
    },
    {
      name: 'New Arrivals',
      href: '/search?tag=new-arrival',
    },
    {
      name: 'Featured Products',
      href: '/search?tag=featured',
    },
    {
      name: 'Best Sellers',
      href: '/search?tag=best-seller',
    },
    {
      name: 'Browsing History',
      href: '/#browsing-history',
    },
    {
      name: 'Customer Service',
      href: '/page/customer-service',
    },
    {
      name: 'About Us',
      href: '/page/about-us',
    },
    {
      name: 'Help',
      href: '/page/help',
    },
  ],
   carousels: [
        {
          title: 'Glow Naturally with Herbal Skincare',
          buttonCaption: 'Shop Now',
          image: '/Images/banner1.png',
          url: '/search?category=Skincare',
        },
        {
          title: 'New Arrivals in Minimalist Jewellery',
          buttonCaption: 'Shop Now',
          image: '/Images/banner2.png',
          url: '/search?category=Jewellery',
        },
        {
          title: 'Elegant Sarees & Jewelry — Perfect Gifts',
          buttonCaption: 'See More',
          image: '/Images/banner3.png',
          url: '/search?category=saree',
        },
      ],

  featureSections : [
  {
    title: 'Categories to Explore',
    description: 'Browse by category',
    image: 'https://via.placeholder.com/400x250?text=Categories',
    slug: toSlug('Explore Categories'),
    items: [
      { name: 'Beauty', image: '/Images/beauty-category.jpg', href: '/search?category=beauty' },
      { name: 'Jewellery', image: '/Images/juwelery-category.jpeg', href: '/search?category=jewellery' },
      { name: 'Saree', image: '/Images/saree-category.jpeg', href: '/search?category=saree' },
      { name: 'Fashion', image: '/Images/fasion-category.jpeg', href: '/search?category=fashion' },
    ],
      link: {
      text: 'See More',
      href: '/search?type=categories',
    },
  },
  {
    title: 'Explore New Arrivals',
    description: 'Latest in beauty and fashion',
    image: 'https://via.placeholder.com/400x250?text=New+Arrivals',
    slug: toSlug('New Arrivals'),
    items: [
      { name: 'Lipstick', image: '/Images/lipstick-arivals.jpeg', href: '/search?tag=new&category=beauty' },
      { name: 'Earrings', image: '/Images/earrings-arivals.jpeg', href: '/search?tag=new&category=jewellery' },
      { name: 'Silk Saree', image: '/Images/silksaree-arivals.jpeg', href: '/search?tag=new&category=saree' },
      { name: 'Trendy Kurti', image: '/Images/trendykurti-arivals.jpeg', href: '/search?tag=new&category=fashion' },
    ],
        link: {
      text: 'View All',
      href: '/search?tag=new-arrival',
    },

  },
  {
    title: 'Discover Best Sellers',
    description: 'Top trending items',
    image: 'https://via.placeholder.com/400x250?text=Best+Sellers',
    slug: toSlug('Best Sellers'),
    items: [
      { name: 'Face Cream', image: '/Images/facecream-Bsellers.jpg', href: '/search?tag=best&category=beauty' },
      { name: 'Gold Necklace', image: '/Images/goldnekles-Bsellers.jpeg', href: '/search?tag=best&category=jewellery' },
      { name: 'Cotton Saree', image: '/Images/kottonsaree-Bsellers.jpeg', href: '/search?tag=best&category=saree' },
      { name: 'Casual Top', image: '/Images/casualtop-bsellers.jpg', href: '/search?tag=best&category=fashion' },
    ],
        link: {
      text: 'View All',
      href: '/search?tag=best-seller',
    },

  },
  {
    title: 'Featured Products',
    description: 'Editor\'s picks for you',
    image: 'https://via.placeholder.com/400x250?text=Featured+Products',
    slug: toSlug('Featured Products'),
    items: [
      { name: 'Compact Powder', image: '/Images/compactpowder-features.jpg', href: '/search?tag=featured&category=beauty' },
      { name: 'Bracelet', image: '/Images/breslate-features.jpg', href: '/search?tag=featured&category=jewellery' },
      { name: 'Designer Saree', image: '/Images/designersaree-features.jpg', href: '/search?tag=featured&category=saree' },
      { name: 'Party Dress', image: '/Images/partydress-features.jpg', href: '/search?tag=featured&category=fashion' },
    ],
     link: {
      text: 'Shop Now',
      href: '/search?tag=featured',
    },
  },
],

  todaysDeals : [
  {
    _id: '1',
    slug: 'diamond-jewelry-set',
    name: 'Luxury Diamond Jewelry Set',
    brand: 'Elegancia',
    description: 'Elegant diamond necklace and earrings set with fine craftsmanship, perfect for weddings and celebrations.',
    images: ['/images/jewelry1.jpg', '/images/jewelry2.jpg'],
    price: 9600,
    listPrice: 12000,
    avgRating: 4.8,
    numReviews: 123,
    category: 'jewelry',
    tags: ['todays-deal'],
    sizes: ['Free'],
    colors: ['Silver'],
    countInStock: 10,
  },
  {
    _id: '2',
    slug: 'banarasi-silk-saree',
    name: 'Branded Banarasi Silk Saree',
    brand: 'Sundori Sarees',
    description: 'Premium Banarasi silk saree with golden zari work — a timeless ethnic fashion piece.',
    images: ['/images/saree1.jpg', '/images/saree2.jpg'],
    price: 7225,
    listPrice: 8500,
    avgRating: 4.6,
    numReviews: 98,
    category: 'saree',
    tags: ['todays-deal'],
    sizes: ['Free'],
    colors: ['Red'],
    countInStock: 15,
  },
  {
    _id: '3',
    slug: 'organic-skincare-pack',
    name: 'Organic Skincare Essentials',
    brand: 'Glow Naturals',
    description: 'A complete skincare combo including face wash, toner, and night cream — made with organic ingredients.',
    images: ['/images/beauty1.jpg', '/images/beauty2.jpg'],
    price: 1450,
    listPrice: 1800,
    avgRating: 4.4,
    numReviews: 75,
    category: 'beauty',
    tags: ['todays-deal'],
    sizes: ['Standard'],
    colors: ['N/A'],
    countInStock: 25,
  },
  {
    _id: '4',
    slug: 'gold-plated-bracelet',
    name: 'Gold Plated Bracelet',
    brand: 'Shine Luxe',
    description: 'Trendy gold plated bracelet for women with modern design, perfect for everyday wear or gifting.',
    images: ['/images/bracelet1.jpg', '/images/bracelet2.jpg'],
    price: 899,
    listPrice: 1200,
    avgRating: 4.3,
    numReviews: 64,
    category: 'jewelry',
    tags: ['todays-deal'],
    sizes: ['Free'],
    colors: ['Gold'],
    countInStock: 20,
  },
  {
    _id: '5',
    slug: 'western-casual-dress',
    name: 'Western Casual Dress',
    brand: 'StyleUp',
    description: 'Chic western wear dress with floral prints — comfortable and stylish for casual outings.',
    images: ['/images/western1.jpg', '/images/western2.jpg'],
    price: 1890,
    listPrice: 2400,
    avgRating: 4.5,
    numReviews: 81,
    category: 'fashion',
    tags: ['todays-deal'],
    sizes: ['S', 'M', 'L'],
    colors: ['Blue'],
    countInStock: 18,
  },
],


  settings: [
    {
      common: {
        freeShippingMinPrice: 35,
        isMaintenanceMode: false,
        defaultTheme: 'Light',
        defaultColor: 'Gold',
        pageSize: 9,
      },
      site: {
        name: 'ShopNext',
        description:
          'ShopNext is a sample Ecommerce website built with Next.js, Tailwind CSS, and MongoDB.',
        keywords: 'Next Ecommerce, Next.js, Tailwind CSS, MongoDB',
        url: 'https://next-mongo-ecommerce-final.vercel.app',
        logo: '/icons/logo.svg',
        slogan: 'Spend less, enjoy more.',
        author: 'Next Ecommerce',
        copyright: '2000-2024, Next-Ecommerce.com, Inc. or its affiliates',
        email: 'admin@example.com',
        address: '123, Main Street, Anytown, CA, Zip 12345',
        phone: '+1 (123) 456-7890',
      },
      carousels: [
        {
          title: 'Most Popular Shoes For Sale',
          buttonCaption: 'Shop Now',
          image: '/images/banner3.jpg',
          url: '/search?category=Shoes',
        },
        {
          title: 'Best Sellers in T-Shirts',
          buttonCaption: 'Shop Now',
          image: '/images/banner1.jpg',
          url: '/search?category=T-Shirts',
        },
        {
          title: 'Best Deals on Wrist Watches',
          buttonCaption: 'See More',
          image: '/images/banner2.jpg',
          url: '/search?category=Wrist Watches',
        },
      ],
      availableLanguages: i18n.locales.map((locale) => ({
        code: locale.code,
        name: locale.name,
      })),
      defaultLanguage: 'en-US',
      availableCurrencies: [
        {
          name: 'United States Dollar',
          code: 'USD',
          symbol: '$',
          convertRate: 1,
        },
        { name: 'Euro', code: 'EUR', symbol: '€', convertRate: 0.96 },
        { name: 'UAE Dirham', code: 'AED', symbol: 'AED', convertRate: 3.67 },
      ],
      defaultCurrency: 'USD',
      availablePaymentMethods: [
        { name: 'PayPal', commission: 0 },
        { name: 'Stripe', commission: 0 },
        { name: 'Cash On Delivery', commission: 0 },
      ],
      defaultPaymentMethod: 'PayPal',
      availableDeliveryDates: [
        {
          name: 'Tomorrow',
          daysToDeliver: 1,
          shippingPrice: 12.9,
          freeShippingMinPrice: 0,
        },
        {
          name: 'Next 3 Days',
          daysToDeliver: 3,
          shippingPrice: 6.9,
          freeShippingMinPrice: 0,
        },
        {
          name: 'Next 5 Days',
          daysToDeliver: 5,
          shippingPrice: 4.9,
          freeShippingMinPrice: 35,
        },
      ],
      defaultDeliveryDate: 'Next 5 Days',
    },
  ],

  
}