import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import type { Category, SearchFilters } from "../types/product"
import { Sliders, Tag, Palette, Ruler } from "lucide-react"

interface AdvancedFiltersProps {
  categories: Category[]
  filters: SearchFilters
  onFilterChange: (filters: Partial<SearchFilters>) => void
}

export default function AdvancedFilters({ categories, filters, onFilterChange }: AdvancedFiltersProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    onFilterChange({ [name]: value })
  }

  return (
    <motion.div
      className="bg-white p-4 rounded-lg shadow-md"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="text-lg font-semibold mb-4 flex items-center">
        <Sliders className="mr-2" size={20} />
        Filters
      </h2>
      <div className="space-y-4">
        <div>
          <label htmlFor="minPrice" className="block text-sm font-medium text-gray-700">
            Min Price
          </label>
          <input
            type="number"
            id="minPrice"
            name="minPrice"
            value={filters.minPrice}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
        </div>
        <div>
          <label htmlFor="maxPrice" className="block text-sm font-medium text-gray-700">
            Max Price
          </label>
          <input
            type="number"
            id="maxPrice"
            name="maxPrice"
            value={filters.maxPrice}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
        </div>
        <div>
          <label htmlFor="category" className="block text-sm font-medium text-gray-700">
            Category
          </label>
          <select
            id="category"
            name="category"
            value={filters.category}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          >
            <option value="">All Categories</option>
            {categories.map((category) => (
              <option key={category.id} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="brand" className="block text-sm font-medium text-gray-700 flex items-center">
            <Tag className="mr-2" size={16} />
            Brand
          </label>
          <input
            type="text"
            id="brand"
            name="brand"
            value={filters.brand}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
        </div>
        <div>
          <label htmlFor="color" className="block text-sm font-medium text-gray-700 flex items-center">
            <Palette className="mr-2" size={16} />
            Color
          </label>
          <input
            type="text"
            id="color"
            name="color"
            value={filters.color}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
        </div>
        <div>
          <label htmlFor="size" className="block text-sm font-medium text-gray-700 flex items-center">
            <Ruler className="mr-2" size={16} />
            Size
          </label>
          <input
            type="text"
            id="size"
            name="size"
            value={filters.size}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
        </div>
      </div>
    </motion.div>
  )
}

