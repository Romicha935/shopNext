// // import { z } from 'zod'
// // import { formatNumberWithDecimal } from './utils'

// // // Common
// // const MongoId = z
// //   .string()
// //   .regex(/^[0-9a-fA-F]{24}$/, { message: 'Invalid MongoDB ID' })

// // const Price = (field: string) =>
// //   z.coerce
// //     .number()
// //     .refine(
// //       (value) => /^\d+(\.\d{2})?$/.test(formatNumberWithDecimal(value)),
// //       `${field} must have exactly two decimal places (e.g., 49.99)`
// //     )

// // export const ReviewInputSchema = z.object({
// //   product: MongoId,
// //   user: MongoId,
// //   isVerifiedPurchase: z.boolean(),
// //   title: z.string().min(1, 'Title is required'),
// //   comment: z.string().min(1, 'Comment is required'),
// //   rating: z.coerce
// //     .number()
// //     .int()
// //     .min(1, 'Rating must be at least 1')
// //     .max(5, 'Rating must be at most 5'),
// // })

// // export const ProductInputSchema = z.object({
// //   name: z.string().min(3, 'Name must be at least 3 characters'),
// //   slug: z.string().min(3, 'Slug must be at least 3 characters'),
// //   category: z.string().min(1, 'Category is required'),
// //   images: z.array(z.string()).min(1, 'Product must have at least one image'),
// //   brand: z.string().min(1, 'Brand is required'),
// //   description: z.string().min(1, 'Description is required'),
// //   isPublished: z.boolean(),
// //   price: Price('Price'),
// //   listPrice: Price('List price'),
// //   countInStock: z.coerce
// //     .number()
// //     .int()
// //     .nonnegative('count in stock must be a non-negative number'),
// //   tags: z.array(z.string()).default([]),
// //   sizes: z.array(z.string()).default([]),
// //   colors: z.array(z.string()).default([]),
// //   avgRating: z.coerce
// //     .number()
// //     .min(0, 'Average rating must be at least 0')
// //     .max(5, 'Average rating must be at most 5'),
// //   numReviews: z.coerce
// //     .number()
// //     .int()
// //     .nonnegative('Number of reviews must be a non-negative number'),
// //   ratingDistribution: z
// //     .array(z.object({ rating: z.number(), count: z.number() }))
// //     .max(5),
// //   reviews: z.array(ReviewInputSchema).default([]),
// //   numSales: z.coerce
// //     .number()
// //     .int()
// //     .nonnegative('Number of sales must be a non-negative number'),
// // })

// // export const ProductUpdateSchema = ProductInputSchema.extend({
// //   _id: z.string(),
// // })

// // // Order Item
// // export const OrderItemSchema = z.object({
// //   clientId: z.string().min(1, 'clientId is required'),
// //   product: z.string().min(1, 'Product is required'),
// //   name: z.string().min(1, 'Name is required'),
// //   slug: z.string().min(1, 'Slug is required'),
// //   category: z.string().min(1, 'Category is required'),
// //   quantity: z
// //     .number()
// //     .int()
// //     .nonnegative('Quantity must be a non-negative number'),
// //   countInStock: z
// //     .number()
// //     .int()
// //     .nonnegative('Quantity must be a non-negative number'),
// //   image: z.string().min(1, 'Image is required'),
// //   price: Price('Price'),
// //   size: z.string().optional(),
// //   color: z.string().optional(),
// // })
// // export const ShippingAddressSchema = z.object({
// //   fullName: z.string().min(1, 'Full name is required'),
// //   street: z.string().min(1, 'Address is required'),
// //   city: z.string().min(1, 'City is required'),
// //   postalCode: z.string().min(1, 'Postal code is required'),
// //   province: z.string().min(1, 'Province is required'),
// //   phone: z.string().min(1, 'Phone number is required'),
// //   country: z.string().min(1, 'Country is required'),
// // })

// // // Order
// // export const OrderInputSchema = z.object({
// //   user: z.union([
// //     MongoId,
// //     z.object({
// //       name: z.string(),
// //       email: z.string().email(),
// //     }),
// //   ]),
// //   items: z
// //     .array(OrderItemSchema)
// //     .min(1, 'Order must contain at least one item'),
// //   shippingAddress: ShippingAddressSchema,
// //   paymentMethod: z.string().min(1, 'Payment method is required'),
// //   paymentResult: z
// //     .object({
// //       id: z.string(),
// //       status: z.string(),
// //       email_address: z.string(),
// //       pricePaid: z.string(),
// //     })
// //     .optional(),
// //   itemsPrice: Price('Items price'),
// //   shippingPrice: Price('Shipping price'),
// //   taxPrice: Price('Tax price'),
// //   totalPrice: Price('Total price'),
// //   expectedDeliveryDate: z
// //     .date()
// //     .refine(
// //       (value) => value > new Date(),
// //       'Expected delivery date must be in the future'
// //     ),
// //   isDelivered: z.boolean().default(false),
// //   deliveredAt: z.date().optional(),
// //   isPaid: z.boolean().default(false),
// //   paidAt: z.date().optional(),
// // })
// // // Cart

// // export const CartSchema = z.object({
// //   items: z
// //     .array(OrderItemSchema)
// //     .min(1, 'Order must contain at least one item'),
// //   itemsPrice: z.number(),
// //   taxPrice: z.optional(z.number()),
// //   shippingPrice: z.optional(z.number()),
// //   totalPrice: z.number(),
// //   paymentMethod: z.optional(z.string()),
// //   shippingAddress: z.optional(ShippingAddressSchema),
// //   deliveryDateIndex: z.optional(z.number()),
// //   expectedDeliveryDate: z.optional(z.date()),
// // })

// // // USER
// // const UserName = z
// //   .string()
// //   .min(2, { message: 'Username must be at least 2 characters' })
// //   .max(50, { message: 'Username must be at most 30 characters' })
// // const Email = z.string().min(1, 'Email is required').email('Email is invalid')
// // const Password = z.string().min(3, 'Password must be at least 3 characters')
// // const UserRole = z.string().min(1, 'role is required')

// // export const UserUpdateSchema = z.object({
// //   _id: MongoId,
// //   name: UserName,
// //   email: Email,
// //   role: UserRole,
// // })

// // export const UserInputSchema = z.object({
// //   name: UserName,
// //   email: Email,
// //   image: z.string().optional(),
// //   emailVerified: z.boolean(),
// //   role: UserRole,
// //   password: Password,
// //   paymentMethod: z.string().min(1, 'Payment method is required'),
// //   address: z.object({
// //     fullName: z.string().min(1, 'Full name is required'),
// //     street: z.string().min(1, 'Street is required'),
// //     city: z.string().min(1, 'City is required'),
// //     province: z.string().min(1, 'Province is required'),
// //     postalCode: z.string().min(1, 'Postal code is required'),
// //     country: z.string().min(1, 'Country is required'),
// //     phone: z.string().min(1, 'Phone number is required'),
// //   }),
// // })

// // export const UserSignInSchema = z.object({
// //   email: Email,
// //   password: Password,
// // })
// // export const UserSignUpSchema = UserSignInSchema.extend({
// //   name: UserName,
// //   confirmPassword: Password,
// // }).refine((data) => data.password === data.confirmPassword, {
// //   message: "Passwords don't match",
// //   path: ['confirmPassword'],
// // })
// // export const UserNameSchema = z.object({
// //   name: UserName,
// // })

// // // WEBPAGE
// // export const WebPageInputSchema = z.object({
// //   title: z.string().min(3, 'Title must be at least 3 characters'),
// //   slug: z.string().min(3, 'Slug must be at least 3 characters'),
// //   content: z.string().min(1, 'Content is required'),
// //   isPublished: z.boolean(),
// // })

// // export const WebPageUpdateSchema = WebPageInputSchema.extend({
// //   _id: z.string(),
// // })

// // // Setting

// // export const SiteLanguageSchema = z.object({
// //   name: z.string().min(1, 'Name is required'),
// //   code: z.string().min(1, 'Code is required'),
// // })
// // export const CarouselSchema = z.object({
// //   title: z.string().min(1, 'title is required'),
// //   url: z.string().min(1, 'url is required'),
// //   image: z.string().min(1, 'image is required'),
// //   buttonCaption: z.string().min(1, 'buttonCaption is required'),
// // })

// // export const SiteCurrencySchema = z.object({
// //   name: z.string().min(1, 'Name is required'),
// //   code: z.string().min(1, 'Code is required'),
// //   convertRate: z.coerce.number().min(0, 'Convert rate must be at least 0'),
// //   symbol: z.string().min(1, 'Symbol is required'),
// // })

// // export const PaymentMethodSchema = z.object({
// //   name: z.string().min(1, 'Name is required'),
// //   commission: z.coerce.number().min(0, 'Commission must be at least 0'),
// // })

// // export const DeliveryDateSchema = z.object({
// //   name: z.string().min(1, 'Name is required'),
// //   daysToDeliver: z.number().min(0, 'Days to deliver must be at least 0'),
// //   shippingPrice: z.coerce.number().min(0, 'Shipping price must be at least 0'),
// //   freeShippingMinPrice: z.coerce
// //     .number()
// //     .min(0, 'Free shipping min amount must be at least 0'),
// // })

// // export const SettingInputSchema = z.object({
// //   // PROMPT: create fields
// //   // codeium, based on the mongoose schema for settings
// //   common: z.object({
// //     pageSize: z.coerce
// //       .number()
// //       .min(1, 'Page size must be at least 1')
// //       .default(9),
// //     isMaintenanceMode: z.boolean().default(false),
// //     freeShippingMinPrice: z.coerce
// //       .number()
// //       .min(0, 'Free shipping min price must be at least 0')
// //       .default(0),
// //     defaultTheme: z
// //       .string()
// //       .min(1, 'Default theme is required')
// //       .default('light'),
// //     defaultColor: z
// //       .string()
// //       .min(1, 'Default color is required')
// //       .default('gold'),
// //   }),
// //   site: z.object({
// //     name: z.string().min(1, 'Name is required'),
// //     logo: z.string().min(1, 'logo is required'),
// //     slogan: z.string().min(1, 'Slogan is required'),
// //     description: z.string().min(1, 'Description is required'),
// //     keywords: z.string().min(1, 'Keywords is required'),
// //     url: z.string().min(1, 'Url is required'),
// //     email: z.string().min(1, 'Email is required'),
// //     phone: z.string().min(1, 'Phone is required'),
// //     author: z.string().min(1, 'Author is required'),
// //     copyright: z.string().min(1, 'Copyright is required'),
// //     address: z.string().min(1, 'Address is required'),
// //   }),
// //   availableLanguages: z
// //     .array(SiteLanguageSchema)
// //     .min(1, 'At least one language is required'),

// //   carousels: z
// //     .array(CarouselSchema)
// //     .min(1, 'At least one language is required'),
// //   defaultLanguage: z.string().min(1, 'Language is required'),
// //   availableCurrencies: z
// //     .array(SiteCurrencySchema)
// //     .min(1, 'At least one currency is required'),
// //   defaultCurrency: z.string().min(1, 'Currency is required'),
// //   availablePaymentMethods: z
// //     .array(PaymentMethodSchema)
// //     .min(1, 'At least one payment method is required'),
// //   defaultPaymentMethod: z.string().min(1, 'Payment method is required'),
// //   availableDeliveryDates: z
// //     .array(DeliveryDateSchema)
// //     .min(1, 'At least one delivery date is required'),
// //   defaultDeliveryDate: z.string().min(1, 'Delivery date is required'),
// // })



































// [
//   {
    
//     "slug":"diamond-jewelry-set",
//     "name":"Luxury Diamond Jewelry Set",
//     "brand":"Elegancia",
//     "description":"Elegant diamond necklace and earrings set.",
//     "images":["/feacured/diamond1.jpg","/feacured/diamond2.jpg"],
//     "price":9600,
//     "listPrice":12000,
//     "avgRating":4.8,
//     "numReviews":123,
//     "ratingDistribution":{"5":90,"4":20,"3":10,"2":2,"1":1},
//     "category":"jewelry",
//     "tags":["featured","bestseller"],
//     "sizes":["Free"],
//     "colors":["Silver"],
//     "countInStock":10
// },
//   {
    
//     "slug":"gold-plated-face-mask",
//     "name":"Traditional Gold-Plated Face Mask",
//     "brand":"Nokshi Beauty",
//     "description":"Luxurious gold-infused face mask set.",
//     "images":["/feacured/goldmaks1.jpg","/feacured/goldmaks2.jpg"],
//     "price":2200,
//     "listPrice":2800,
//     "avgRating":4.4,
//     "numReviews":75,
//     "ratingDistribution":{"5":40,"4":20,"3":10,"2":3,"1":2},
//     "category":"beauty",
//     "tags":["featured","offer"],
//     "sizes":["Standard"],
//     "colors":["Gold"],
//     "countInStock":20
// },
//   {
    
//     "slug":"cosmetic-necklace-set",
//     "name":"Cosmetic Style Necklace Set",
//     "brand":"FashionZone",
//     "description":"Trendy costume necklace set.",
//     "images":["/feacured/cusmetic-nekles-1.jpg","/feacured/cusmetic-nekles-2.jpg"],
//     "price":1299,
//     "listPrice":1600,
//     "avgRating":4.3,
//     "numReviews":78,
//     "ratingDistribution":{"5":35,"4":25,"3":10,"2":5,"1":3},
//     "category":"jewelry",
//     "tags":["discount","popular"],
//     "sizes":["Free"],
//     "colors":["Gold","Silver"],
//     "countInStock":15
// },
//   {
    
//     "slug":"diamond-glow-serum",
//     "name":"Diamond Glow Face Serum",
//     "brand":"Shonar Bangla Beauty",
//     "description":"Brightening serum with diamond-like shine.",
//     "images":["/feacured/diamond-serum-1.png","/feacured/diamond-serum-2.jpg"],
//     "price":4500,
//     "listPrice":5200,
//     "avgRating":4.7,
//     "numReviews":65,
//     "ratingDistribution":{"5":45,"4":15,"3":3,"2":1,"1":1},
//     "category":"beauty",
//     "tags":["featured","glow","offer"],
//     "sizes":["Standard"],
//     "colors":["White"],
//     "countInStock":9
// },
//   {
    
//     "slug":"colorful-bangles-set",
//     "name":"Colorful Bangles Set",
//     "brand":"Shaadimela",
//     "description":"All-in-one wedding bridal jewelry set.",
//     "images":["/feacured/bangleset-1.jpg","/feacured/bangleset-2.jpg"],
//     "price":8999,
//     "listPrice":11000,
//     "avgRating":4.9,
//     "numReviews":210,
//     "ratingDistribution":{"5":180,"4":20,"3":5,"2":3,"1":2},
//     "category":"jewelry",
//     "tags":["featured","bridal"],
//     "sizes":["Free"],
//     "colors":["Red","Green"],
//     "countInStock":5
// },
//   {
    
//     "slug":"pearl-skin-care-set",
//     "name":"Classic Pearl Skin Care Set",
//     "brand":"PearlLuxe",
//     "description":"Skincare combo with pearl essence.",
//     "images":["/feacured/skincare-set-1.jpg","/feacured/skincare-set-2.jpg"],
//     "price":3500,
//     "listPrice":4200,
//     "avgRating":4.6,
//     "numReviews":88,
//     "ratingDistribution":{"5":50,"4":25,"3":10,"2":2,"1":1},
//     "category":"beauty",
//     "tags":["featured","combo"],
//     "sizes":["Standard"],
//     "colors":["White"],
//     "countInStock":12
// },
//   {
    
//     "slug":"banarasi-silk-saree",
//     "name":"Branded Banarasi Silk Saree",
//     "brand":"Sundori Sarees",
//     "description":"Premium Banarasi silk saree.",
//     "images":["/feacured/pure-banarasi-silk-sarees-1.jpg","/feacured/banarasi-saree-2.jpg"],
//     "price":7225,
//     "listPrice":8500,
//     "avgRating":4.6,
//     "numReviews":98,
//     "ratingDistribution":{"5":70,"4":20,"3":5,"2":2,"1":1},
//     "category":"saree",
//     "tags":["featured","ethnic"],
//     "sizes":["Free"],
//     "colors":["Red","Gold"],
//     "countInStock":15
// },
//   {
   
//     "slug":"designer-georgette-saree",
//     "name":"Designer Georgette Saree",
//     "brand":"Ethnic Wear",
//     "description":"Lightweight georgette saree with embroidery.",
//     "images":["/feacured/georgette-saree-1.jpg","/feacured/georgette-saree-2.jpg"],
//     "price":5500,
//     "listPrice":7000,
//     "avgRating":4.5,
//     "numReviews":76,
//     "ratingDistribution":{"5":50,"4":15,"3":8,"2":2,"1":1},
//     "category":"saree",
//     "tags":["festive","featured"],
//     "sizes":["Free"],
//     "colors":["Blue","Green"],
//     "countInStock":12
// },
//   {
    
//     "slug":"chiffon-party-saree",
//     "name":"Chiffon Party Saree",
//     "brand":"Glam Sarees",
//     "description":"Elegant chiffon saree for evening parties.",
//     "images":["/feacured/sippon-saree-1.jpg","/feacured/ciffon-saree-2.jpg"],
//     "price":4800,
//     "listPrice":6000,
//     "avgRating":4.4,
//     "numReviews":60,
//     "ratingDistribution":{"5":40,"4":15,"3":3,"2":1,"1":1},
//     "category":"saree",
//     "tags":["party","featured"],
//     "sizes":["Free"],
//     "colors":["Pink"],
//     "countInStock":18
// },
//   {
    
//     "slug":"western-casual-dress",
//     "name":"Western Casual Dress",
//     "brand":"StyleUp",
//     "description":"Chic western wear dress with floral prints.",
//     "images":["/feacured/western-1.jpg","/feacured/western-2.jpg"],
//     "price":1890,
//     "listPrice":2400,
//     "avgRating":4.5,
//     "numReviews":81,
//     "ratingDistribution":{"5":50,"4":20,"3":8,"2":2,"1":1},
//     "category":"fashion",
//     "tags":["featured","casual"],
//     "sizes":["S","M","L"],
//     "colors":["Blue","Yellow"],
//     "countInStock":18
// },
//   {
    
//     "slug":"summer-floral-dress",
//     "name":"Summer Floral Dress",
//     "brand":"Fashionista",
//     "description":"Light summer dress with vibrant floral design.",
//     "images":["/feacured/western-summer-1.jpg","/feacured/westurn-summer-2.jpg"],
//     "price":1700,
//     "listPrice":2100,
//     "avgRating":4.4,
//     "numReviews":65,
//     "ratingDistribution":{"5":40,"4":15,"3":5,"2":3,"1":2},
//     "category":"fashion",
//     "tags":["featured","summer"],
//     "sizes":["S","M","L"],
//     "colors":["Yellow","Pink"],
//     "countInStock":20
// },
//   {
    
//     "slug":"gold-plated-bracelet",
//     "name":"Gold Plated Bracelet",
//     "brand":"Shine Luxe",
//     "description":"Trendy gold plated bracelet.",
//     "images":["/feacured/gold-breslate-1.jpg","/feacured/gold-breslate-2.jpg"],
//     "price":899,
//     "listPrice":1200,
//     "avgRating":4.3,
//     "numReviews":64,
//     "ratingDistribution":{"5":40,"4":15,"3":5,"2":2,"1":2},
//     "category":"jewelry",
//     "tags":["featured","trendy"],
//     "sizes":["Free"],
//     "colors":["Gold"],
//     "countInStock":20
// },
//   {
    
//     "slug":"organic-skincare-pack",
//     "name":"Organic Skincare Essentials",
//     "brand":"Glow Naturals",
//     "description":"Complete skincare combo.",
//     "images":["/feacured/organic-skincare-1.jpg","/feacured/organic-skincare-2.png"],
//     "price":1450,
//     "listPrice":1800,
//     "avgRating":4.4,
//     "numReviews":75,
//     "ratingDistribution":{"5":45,"4":20,"3":5,"2":3,"1":2},
//     "category":"beauty",
//     "tags":["featured","natural"],
//     "sizes":["Standard"],
//     "colors":["White"],
//     "countInStock":25
// },
//   {
    
//     "slug":"western-party-gown",
//     "name":"Western Party Gown",
//     "brand":"GlamWear",
//     "description":"Elegant western gown for parties.",
//     "images":["/feacured/western-party-gown-1.jpg","c/feacured/western-party-gown-2.jpg"],
//     "price":3200,
//     "listPrice":4000,
//     "avgRating":4.7,
//     "numReviews":80,
//     "ratingDistribution":{"5":60,"4":15,"3":3,"2":1,"1":1},
//     "category":"fashion",
//     "tags":["featured","party"],
//     "sizes":["S","M","L"],
//     "colors":["Red","Blue"],
//     "countInStock":10
// },
//   {
    
//     "slug":"pearl-necklace-set",
//     "name":"Elegant Pearl Necklace Set",
//     "brand":"PearlLuxe",
//     "description":"Classic pearl necklace and earrings set.",
//     "images":["/feacured/nekless-1.jpg","/feacured/nekless-2.jpg"],
//     "price":5600,
//     "listPrice":7000,
//     "avgRating":4.8,
//     "numReviews":95,
//     "ratingDistribution":{"5":70,"4":15,"3":5,"2":3,"1":2},
//     "category":"jewelry",
//     "tags":["featured","classic"],
//     "sizes":["Free"],
//     "colors":["White","Silver"],
//     "countInStock":12
// },
//   {
    
//     "slug":"designer-georgette-saree2",
//     "name":"Designer Georgette Saree Premium",
//     "brand":"SareeWorld",
//     "description":"Premium georgette saree with embroidery.",
//     "images":["/feacured/georgette-saree-2.jpg","/feacured/georgette-saree-1.jpg"],
//     "price":6800,
//     "listPrice":8000,
//     "avgRating":4.6,
//     "numReviews":78,
//     "ratingDistribution":{"5":55,"4":15,"3":5,"2":2,"1":1},
//     "category":"saree",
//     "tags":["featured","premium"],
//     "sizes":["Free"],
//     "colors":["Green","Blue"],
//     "countInStock":10
// },
//   {
    
//     "slug":"bridal-makeup-kit",
//     "name":"Bridal Makeup Kit",
//     "brand":"BeautyBox",
//     "description":"Complete bridal makeup kit.",
//     "images":["/feacured/bridal-mekup-1.jpg","/feacured/bridal-mekup-2.jpg"],
//     "price":4500,
//     "listPrice":5200,
//     "avgRating":4.7,
//     "numReviews":65,
//     "ratingDistribution":{"5":45,"4":15,"3":3,"2":1,"1":1},
//     "category":"beauty",
//     "tags":["featured","bridal"],
//     "sizes":["Standard"],
//     "colors":["Pink"],
//     "countInStock":15
// },
//   {
    
//     "slug":"ethnic-silk-saree",
//     "name":"Ethnic Silk Saree",
//     "brand":"Sundori Sarees",
//     "description":"Premium ethnic silk saree.",
//     "images":["/feacured/enthik-silk-saree.jpeg","/feacured/enthik-silk-saree-2.jpg"],
//     "price":7200,
//     "listPrice":8500,
//     "avgRating":4.6,
//     "numReviews":90,
//     "ratingDistribution":{"5":70,"4":15,"3":5,"2":0,"1":0},
//     "category":"saree",
//     "tags":["featured","ethnic"],
//     "sizes":["Free"],
//     "colors":["Red","Gold"],
//     "countInStock":12
//   },
//   {
    
//    "slug":"summer-party-dress",
//     "name":"Summer Party Dress",
//     "brand":"Fashionista",
//     "description":"Light summer dress for evening parties.",
//     "images":["/feacured/western-party-gown-2.jpg","/feacured/westurn-summer-1.jpg"],
//     "price":1900,
//     "listPrice":2300,
//     "avgRating":4.5,
//     "numReviews":65,
//     "ratingDistribution":{"5":45,"4":15,"3":5,"2":0,"1":0},
//     "category":"fashion",
//     "tags":["featured","summer"],
//     "sizes":["S","M","L"],
//     "colors":["Pink","Yellow"],
//     "countInStock":18
// },
//   {
    
//     "slug":"classic-gold-earrings",
//     "name":"Classic Gold Earrings",
//     "brand":"Shine Luxe",
//     "description":"Elegant gold earrings for all occasions.",
//     "images":["/feacured/earring-1.jpg","/feacured/earring-2.jpg"],
//     "price":1200,
//     "listPrice":1500,
//     "avgRating":4.4,
//     "numReviews":50,
//     "ratingDistribution":{"5":30,"4":15,"3":3,"2":1,"1":1},
//     "category":"jewelry",
//     "tags":["featured","classic"],
//     "sizes":["Free"],
//     "colors":["Gold"],
//     "countInStock":25
// },
// ]








//  {
   
//     "slug": "diamond-jewelry-set",
//     "name": "Luxury Diamond Jewelry Set",
//     "brand": "Elegancia",
//     "description": "Elegant diamond necklace and earrings set with fine craftsmanship, perfect for weddings and celebrations.",
//     "images": ["/Images/todays-deal1.jpg", "/Images/todays-deal11.jpg"],
//     "price": 9600,
//     "listPrice": 12000,
//     "avgRating": 4.8,
//     "numReviews": 123,
//     "ratingDistribution": { "5": 60, "4": 25, "3": 10, "2": 3, "1": 2 },
//     "category": "jewelry",
//     "tags": ["todays-deal"],
//     "sizes": ["Free"],
//     "colors": ["Silver"],
//     "countInStock": 10
//   },
//   {
    
//     "slug": "banarasi-silk-saree",
//     "name": "Branded Banarasi Silk Saree",
//     "brand": "Sundori Sarees",
//     "description": "Premium Banarasi silk saree with golden zari work — a timeless ethnic fashion piece.",
//     "images": ["/Images/todays-deal2.jpeg", "/Images/today-deal22.jpeg"],
//     "price": 7225,
//     "listPrice": 8500,
//     "avgRating": 4.6,
//     "numReviews": 98,
//     "ratingDistribution": { "5": 60, "4": 25, "3": 10, "2": 3, "1": 2 },
//     "category": "saree",
//     "tags": ["todays-deal"],
//     "sizes": ["Free"],
//     "colors": ["Red"],
//     "countInStock": 15
//   },
//   {
    
//     "slug": "organic-skincare-pack",
//     "name": "Organic Skincare Essentials",
//     "brand": "Glow Naturals",
//     "description": "A complete skincare combo including face wash, toner, and night cream — made with organic ingredients.",
//     "images": ["/Images/todays-deal3.jpg", "/Images/today-deal32.jpeg"],
//     "price": 1450,
//     "listPrice": 1800,
//     "avgRating": 4.4,
//     "numReviews": 75,
//     "ratingDistribution": { "5": 60, "4": 25, "3": 10, "2": 3, "1": 2 },
//     "category": "beauty",
//     "tags": ["todays-deal"],
//     "sizes": ["Standard"],
//     "colors": ["N/A"],
//     "countInStock": 25
//   },
//   {
   
//     "slug": "gold-plated-bracelet",
//     "name": "Gold Plated Bracelet",
//     "brand": "Shine Luxe",
//     "description": "Trendy gold plated bracelet for women with modern design, perfect for everyday wear or gifting.",
//     "images": ["/Images/todays-deal4.jpg", "/Images/todays-deal-42.jpg"],
//     "price": 899,
//     "listPrice": 1200,
//     "avgRating": 4.3,
//     "numReviews": 64,
//     "ratingDistribution": { "5": 60, "4": 25, "3": 10, "2": 3, "1": 2 },
//     "category": "jewelry",
//     "tags": ["todays-deal"],
//     "sizes": ["Free"],
//     "colors": ["Gold"],
//     "countInStock": 20
//   },
//   {
    
//     "slug": "western-casual-dress",
//     "name": "Western Casual Dress",
//     "brand": "StyleUp",
//     "description": "Chic western wear dress with floral prints — comfortable and stylish for casual outings.",
//     "images": ["/Images/todays-deal5.jpg", "/Images/todays-deal-52.jpg"],
//     "price": 1890,
//     "listPrice": 2400,
//     "avgRating": 4.5,
//     "numReviews": 81,
//     "ratingDistribution": { "5": 60, "4": 25, "3": 10, "2": 3, "1": 2 },
//     "category": "fashion",
//     "tags": ["todays-deal"],
//     "sizes": ["S", "M", "L"],
//     "colors": ["Blue"],
//     "countInStock": 18
//   }

