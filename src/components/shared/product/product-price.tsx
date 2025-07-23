"use client"
import React from 'react'

import { formatCurrency } from '@/lib/utils'
import { useAppSelector } from '@/redux/hooks'

const ProductPrice = ({
  price,
  className = '',
  listPrice = 0,
  isDeal = false,
  // forListing = true,
  plain = false,
}: {
  price: number
  className?: string
  listPrice?: number
  isDeal?: boolean
  forListing?: boolean
  plain?: boolean
}) => {
  const currency = useAppSelector((state) => state.setting.setting.currency)

  const displayPrice = formatCurrency(price, currency)
  const displayListPrice = listPrice > price ? formatCurrency(listPrice, currency) : null

  if (plain) {
    return <span className={className}>{displayPrice}</span>
  }

  return (
    <div className={`text-lg font-semibold ${className}`}>
      {displayListPrice && (
        <span className="line-through text-gray-400 mr-2">
          {displayListPrice}
        </span>
      )}
      <span className={isDeal ? 'text-red-500' : ''}>{displayPrice}</span>
    </div>
  )
}

export default ProductPrice
