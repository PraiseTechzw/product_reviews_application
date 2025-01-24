"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, Filter } from "lucide-react"
import ProductCard from "../components/ProductCard"
import Modal from "../components/Modal"
import Pagination from "../components/Pagination"
import SearchBar from "../components/SearchBar"
import AdvancedFilters from "../components/AdvancedFilters"
import type { Product, Category, SearchFilters } from "../types/product"
import * as api from "../services/api"
import ErrorBoundary from "../components/ErrorBoundary"

export default function Home() {
  const [products, setProducts] = useState<Product[]>([])
  const [categories, setCategories] = useState<Category[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [searchTerm, setSearchTerm] = useState("")
  const [showFilters, setShowFilters] = useState(false)
  const [filters, setFilters] = useState<SearchFilters>({
    minPrice: 0,
    maxPrice: 1000,
    category: "",
    brand: "",
    color: "",
    size: "",
  })

  const productsPerPage = 8

  useEffect(() => {
    fetchInitialData()
  }, [])

  useEffect(() => {
    searchProducts()
  }, [searchTerm, filters])

  const fetchInitialData = async () => {
    try {
      setLoading(true)
      const [productsData, categoriesData] = await Promise.all([api.getProducts(), api.getCategories()])
      setProducts(productsData)
      setCategories(categoriesData)
    } catch (err) {
      setError("An error occurred while fetching initial data.")
    } finally {
      setLoading(false)
    }
  }

  const searchProducts = async () => {
    try {
      setLoading(true)
      const data = await api.searchProducts(searchTerm, filters)
      setProducts(data)
      setCurrentPage(1)
    } catch (err) {
      setError("An error occurred while searching for products.")
    } finally {
      setLoading(false)
    }
  }

  const openModal = async (product: Product) => {
    try {
      const fullProduct = await api.getProduct(product.id)
      setSelectedProduct(fullProduct)
    } catch (err) {
      setError("An error occurred while fetching product details.")
    }
  }

  const closeModal = () => {
    setSelectedProduct(null)
  }

  const handleSearch = (term: string) => {
    setSearchTerm(term)
  }

  const handleFilterChange = (newFilters: Partial<SearchFilters>) => {
    setFilters((prevFilters) => ({ ...prevFilters, ...newFilters }))
  }

  const toggleFilters = () => {
    setShowFilters(!showFilters)
  }

  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct)

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    )
  }

  if (error) {
    return <div className="flex justify-center items-center h-screen text-red-500">{error}</div>
  }

  return (
    <ErrorBoundary>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="w-full md:w-1/4">
            <motion.div
              initial={false}
              animate={{ height: showFilters ? "auto" : 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <AdvancedFilters categories={categories} filters={filters} onFilterChange={handleFilterChange} />
            </motion.div>
          </div>
          <div className="w-full md:w-3/4">
            <div className="flex items-center mb-4">
              <SearchBar onSearch={handleSearch} />
              <button
                onClick={toggleFilters}
                className="ml-4 p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
              >
                <Filter size={24} />
              </button>
            </div>
            <AnimatePresence>
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {currentProducts.map((product) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ProductCard product={product} openModal={openModal} />
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
            <Pagination
              productsPerPage={productsPerPage}
              totalProducts={products.length}
              paginate={paginate}
              currentPage={currentPage}
            />
          </div>
        </div>
        {selectedProduct && <Modal product={selectedProduct} closeModal={closeModal} />}
      </div>
    </ErrorBoundary>
  )
}

