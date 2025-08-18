"use client"
import { useSearchParams } from "next/navigation"

export default function SearchPage() {
  const searchParams = useSearchParams()  // searchParams can be null
  const tag = searchParams?.get("tag") ?? ""  // optional chaining + default value

  return (
    <div>
      <h1>Products tagged: {tag}</h1>
    </div>
  )
}
