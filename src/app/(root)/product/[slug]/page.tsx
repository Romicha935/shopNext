
// // import AddToCart from '@/components/shared/product/add-to-cart'
// import AddToCart from '@/components/shared/product/add-to-cart'
// import ProductGallery from '@/components/shared/product/product-gallery'
// import ProductPrice from '@/components/shared/product/product-price'
// import ReviewsSection from '@/components/shared/product/product-review'
// import ProductReview from '@/components/shared/product/product-review'
// import Rating from '@/components/shared/product/rating'
// import { Card, CardContent } from '@/components/ui/card'
// import { data } from '@/lib/data'
// import { generateId, getAllProducts, round2 } from '@/lib/utils'
// // import { getTranslations } from 'next-intl/server'
// import React from 'react'

// export default async function ProductDetailsPage  (props: {
//     params: Promise <{slug: string}> }) {

//         // const t = await getTranslations() 
//         const params = await props.params
//         const product = getAllProducts().find(p => p.slug === params.slug)

//         if(!product){
//             return <div className='text-center text-red-500 py-10'>Product not found</div>
//         }
//   return (
//     <div>
       
//         <div className='grid grid-cols-1 md:grid-cols-5'>
//             <div className='col-span-2'>
//               <ProductGallery images={product.images} />
//             </div>
//             <div className='flex flex-col w-full gap-2 md:p-5 col-span-2'>
//                 <div className='flex flex-col gap-2'>
//                   <p className='p-medium-16 rounded-full bg-gray-500/10 text-gray-500'>
//                     {product.brand} {product.category}
//                   </p>
//                    <h1 className='text-lg lg:text-xl font-bold'>{product.name}</h1>
//                    <Rating avgRating={product.avgRating} numReviews={product.numReviews}    size={6} />

//                    <div className='flex flex-col gap-3 sm:flex-row sm:items-center'>
//                     <div className='flex gap-3'>
//                         <ProductPrice price={product.price} listPrice={product.listPrice}  isDeal={product.tags.includes('todays-deal')} forListing={false}/>
//                     </div>
//                    </div>
//                 </div>

//                 <div className='flex flex-col gap-2'>
//               <p className='p-bold-20 text-grey-600'>
//                 Description:
//               </p>
//               <p className='p-medium-16 lg:p-regular-18'>
//                 {product.description}
//               </p>
//             </div>
//             </div>

//             <Card>
//               <CardContent className='p-4 flex flex-col gap-4'>
//                <ProductPrice product={product.price}/>
//                <AddToCart product={product}/>
//                {/* {product.countInStock > 0 && product.countInStock <=3 && (
//                 <div className='text-destructive font-bold'>
//                   count : {  product.countInStock}
//                 </div>
//                )} */}

//                {/* {product.countInStock !== 0 ? (
//                 <div>Product count is stock</div>
//                ) : (
//                 <div>
//              Product out stock
//                 </div>
//                )}

//                {product.countInStock !== 0 && (
//                 <div className='flex justify-center items-center '>
//                   <AddToCart item={{
//                     clientId : generateId(),
//                     product:product._id,
//                     countInStock: product.countInStock,
//                     name:product.name,
//                     slug:product.slug,
//                     category: product.category,
//                     price: round2(product.price),
//                     quantity:1,
//                     images: product.images,
//                     color: product.colors[0]
//                   }}/>
//                 </div>
//                )} */}
//               </CardContent>
//             </Card>

//         </div>
//         <section>
//           <h1 className="text-2xl font-bold">Customers Review</h1>
//           <div className='flex gap-3 w-full'>
//            <Rating rating={product.rating} ratingDistribution={product.ratingDistribution}/>
//             <ReviewsSection reviews={product.reviews}/>
//           </div>
//         </section>
     
//     </div>
//   )
// }







import AddToCart from '@/components/shared/product/add-to-cart'
// import AddToCart from '@/components/shared/product/add-to-cart'
import ProductGallery from '@/components/shared/product/product-gallery'
import ProductPrice from '@/components/shared/product/product-price'
import ReviewsSection from '@/components/shared/product/product-review'
// import ProductReview from '@/components/shared/product/product-review'
import Rating from '@/components/shared/product/rating'
import { Card, CardContent } from '@/components/ui/card'
// import { data } from '@/lib/data'
import {  getAllProducts,  } from '@/lib/utils'
// import { getTranslations } from 'next-intl/server'
import React from 'react'


export default async function ProductDetailsPage  (props: {
    params: Promise <{slug: string}> }) {

        // const t = await getTranslations() 
        const params = await props.params
        const product = getAllProducts().find(p => p.slug === params.slug)
          console.log('Reviews:', product?.reviews)

        if(!product){
            return <div className='text-center text-red-500 py-10'>Product not found</div>
        }
        //const product = getAllProducts().find(p => p.slug === params.slug) as ProductType

  return (
    <div>
       
        <div className='grid  grid-cols-1 md:grid-cols-5'>
           <div className=' col-span-2'>
{Array.isArray(product.images) && product.images.length > 0 && (
  <ProductGallery images={product.images.filter(img => img && img.trim() !== '')} />
)}

</div>

            <div className='flex flex-col w-full gap-2 md:p-5 col-span-2'>
                <div className='flex flex-col pt-10 gap-2'>
                  <p className='p-medium-16 items-center px-8 py-2 rounded-full bg-gray-500/10 text-gray-500'>
                    {product.brand} {product.category}
                  </p>
                   <h1 className='text-lg lg:text-xl pt-10 font-bold'>{product.name}</h1>
                   <Rating rating={product.avgRating} numReviews={product.numReviews}    size={6} />

                   <div className='flex flex-col gap-3 sm:flex-row sm:items-center'>
                    <div className='flex gap-3'>
                        <ProductPrice price={product.price} listPrice={product.listPrice}  isDeal={product.tags.includes('todays-deal')} forListing={false}/>
                    </div>
                   </div>
                </div>

                <div className='flex flex-col gap-2'>
              <p className='p-bold-20 text-grey-600'>
                Description:
              </p>
              <p className='p-medium-16 lg:p-regular-18'>
                {product.description}
              </p>
            </div>
            </div>

            <Card>
              <CardContent className='p-4 flex flex-col gap-4'>
               <ProductPrice product={product.price}/>
               <AddToCart product={product}/>
               {/* {product.countInStock > 0 && product.countInStock <=3 && (
                <div className='text-destructive font-bold'>
                  count : {  product.countInStock}
                </div>
               )} */}

               {/* {product.countInStock !== 0 ? (
                <div>Product count is stock</div>
               ) : (
                <div>
             Product out stock
                </div>
               )}

               {product.countInStock !== 0 && (
                <div className='flex justify-center items-center '>
                  <AddToCart item={{
                    clientId : generateId(),
                    product:product._id,
                    countInStock: product.countInStock,
                    name:product.name,
                    slug:product.slug,
                    category: product.category,
                    price: round2(product.price),
                    quantity:1,
                    images: product.images,
                    color: product.colors[0]
                  }}/>
                </div>
               )} */}
              </CardContent>
            </Card>

        </div>
     
        <section className="w-full py-8">
  <ReviewsSection
    rating={product.avgRating}
    ratingDistribution={product.ratingDistribution}
    reviews={product.reviews}
  />
</section>

      
     
    </div>
  )
}
