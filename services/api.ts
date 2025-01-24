import axios from "axios"
import type { Product, Category, SearchFilters } from "../types/product"

const API_BASE_URL = "https://fakestoreapi.com"

const api = axios.create({
  baseURL: API_BASE_URL,
})

export const getProducts = async (): Promise<Product[]> => {
  const response = await api.get<Product[]>("/products")
  return enhanceProducts(response.data)
}

export const getProduct = async (id: number): Promise<Product> => {
  const response = await api.get<Product>(`/products/${id}`)
  return enhanceProduct(response.data)
}

export const getCategories = async (): Promise<Category[]> => {
  const response = await api.get<string[]>("/products/categories")
  return response.data.map((name, index) => ({ id: index + 1, name }))
}

export const getProductsByCategory = async (category: string): Promise<Product[]> => {
  const response = await api.get<Product[]>(`/products/category/${category}`)
  return enhanceProducts(response.data)
}

export const searchProducts = async (query: string, filters: SearchFilters): Promise<Product[]> => {
  const allProducts = await getProducts()
  return allProducts.filter(
    (product) =>
      (product.title.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase())) &&
      product.price >= filters.minPrice &&
      product.price <= filters.maxPrice &&
      (filters.category === "" || product.category === filters.category) &&
      (filters.brand === "" || product.brand === filters.brand) &&
      (filters.color === "" || product.colors.includes(filters.color)) &&
      (filters.size === "" || product.sizes.includes(filters.size)),
  )
}

const enhanceProducts = (products: Product[]): Product[] => {
  return products.map(enhanceProduct)
}

const enhanceProduct = (product: Product): Product => {
  return {
    ...product,
    brand: getBrand(product.title),
    stock: Math.floor(Math.random() * 100),
    features: generateFeatures(),
    colors: generateColors(),
    sizes: generateSizes(),
  }
}

const getBrand = (title: string): string => {
  const brands = ["Nike", "Adidas", "Puma", "Reebok", "Under Armour", "New Balance"]
  return brands[Math.floor(Math.random() * brands.length)]
}

const generateFeatures = (): string[] => {
  const allFeatures = [
    "Water-resistant",
    "Breathable",
    "Lightweight",
    "Durable",
    "Quick-drying",
    "UV protection",
    "Moisture-wicking",
    "Odor-resistant",
    "Stretchy",
    "Eco-friendly",
  ]
  return allFeatures.sort(() => 0.5 - Math.random()).slice(0, 3)
}

const generateColors = (): string[] => {
  const allColors = ["Red", "Blue", "Green", "Black", "White", "Yellow", "Purple", "Orange"]
  return allColors.sort(() => 0.5 - Math.random()).slice(0, 3)
}

const generateSizes = (): string[] => {
  const allSizes = ["XS", "S", "M", "L", "XL", "XXL"]
  return allSizes.sort(() => 0.5 - Math.random()).slice(0, 4)
}

