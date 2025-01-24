export interface Product {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: {
    rate: number
    count: number
  }
  brand: string
  stock: number
  features: string[]
  colors: string[]
  sizes: string[]
}

export interface Category {
  id: number
  name: string
}

export interface SearchFilters {
  minPrice: number
  maxPrice: number
  category: string
  brand: string
  color: string
  size: string
}

