import { motion } from "framer-motion"
import type { Product } from "../types/product"
import { Star, ShoppingCart, Tag } from "lucide-react"

interface ProductCardProps {
  product: Product
  openModal: (product: Product) => void
}

export default function ProductCard({ product, openModal }: ProductCardProps) {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg overflow-hidden transition-shadow duration-300 hover:shadow-xl"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <img src={product.image || "/placeholder.svg"} alt={product.title} className="w-full h-48 object-contain p-4" />
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2 truncate">{product.title}</h2>
        <p className="text-gray-600 mb-2 flex items-center">
          <Tag className="mr-1" size={16} />
          ${product.price.toFixed(2)}
        </p>
        <div className="flex items-center mb-2">
          <Star className="text-yellow-500 mr-1" size={16} />
          <span>{product.rating.rate.toFixed(1)} ({product.rating.count} reviews)</span>
        </div>
        <p className="text-sm text-gray-500 mb-2 flex items-center">
          <ShoppingCart className="mr-1" size={16} />
          In Stock: {product.stock}
        </p>
        <div className="flex flex-wrap gap-1 mb-2">
          {product.colors.map((color, index) => (
            <span key={index} className="px-2 py-1 bg-gray-200 text-xs rounded-full">{color}</span>
          ))}
        </div>
        <button
          onClick={() => openModal(product)}
          className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors flex items-center justify-center"
        >
          <ShoppingCart className="mr-2" size={16} />
          View Details
        </button>
      </div>
  </motion.div>
  )
}

