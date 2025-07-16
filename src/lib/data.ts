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
]

    
}