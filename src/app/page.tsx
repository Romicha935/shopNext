// src/app/page.tsx (HomePage)
import HomeCarousel from '@/components/shared/home/home-carousel'
import CardItem from '@/components/shared/home/home-card'
import ProductCarousel from '@/components/shared/product/productSlider'
import { data } from '@/lib/data'
import { getTodaysDeals } from '@/lib/db/product'


export default async function HomePage() {
  const todaysDeals = await getTodaysDeals()

  return (
    <div className='bg-gray-50 px-8'>
      <HomeCarousel items={data.carousels} />
      <CardItem cards={data.featureSections} />
      
      {todaysDeals.length === 0 ? (
        <p>No products found for Todays Deal</p>
      ) : (
        <ProductCarousel title="Today's Deals" products={todaysDeals} />
      )}

      <ProductCarousel
        title="Best Sellings"
        products={data.bestSellingProducts}
        hideDetails={true}
      />

      <ProductCarousel title="Related Products" products={data.relatedProducts} />
    </div>
  )
}
