import { motion, AnimatePresence } from "framer-motion"
import type { Product } from "../types/product"
import { X, Star, ShoppingCart, Tag, Palette, Ruler } from "lucide-react"

interface ModalProps {
  product: Product
  closeModal: () => void
}

export default function Modal({ product, closeModal }: ModalProps) {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="bg-white rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", damping: 20, stiffness: 300 }}
        >
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-2xl font-bold text-gray-800">{product.title}</h2>
            <button onClick={closeModal} className="text-gray-500 hover:text-gray-700">
              <X size={24} />
            </button>
          </div>
          <img
            src={product.image || "/placeholder.svg"}
            alt={product.title}
            className="w-full h-64 object-contain mb-4"
          />
          <p className="text-gray-600 mb-4">{product.description}</p>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <h3 className="font-semibold text-gray-700 flex items-center">
                <Tag className="mr-2" size={16} />
                Price:
              </h3>
              <p className="text-2xl font-bold text-gray-800">${product.price.toFixed(2)}</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700">Category:</h3>
              <p className="text-gray-800 capitalize">{product.category}</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700">Brand:</h3>
              <p className="text-gray-800">{product.brand}</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700 flex items-center">
                <ShoppingCart className="mr-2" size={16} />
                In Stock:
              </h3>
              <p className="text-gray-800">{product.stock}</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700 flex items-center">
                <Star className="mr-2" size={16} />
                Rating:
              </h3>
              <div className="flex items-center">
                <span className="text-yellow-500 mr-1">★</span>
                <span>
                  {product.rating.rate.toFixed(1)} ({product.rating.count} reviews)
                </span>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <h3 className="font-semibold text-gray-700 mb-2">Features:</h3>
            <ul className="list-disc list-inside">
              {product.features.map((feature, index) => (
                <li key={index} className="text-gray-600">
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="mb-4">
            <h3 className="font-semibold text-gray-700 mb-2 flex items-center">
              <Palette className="mr-2" size={16} />
              Available Colors:
            </h3>
            <div className="flex flex-wrap gap-2">
              {product.colors.map((color, index) => (
                <span key={index} className="px-3 py-1 bg-gray-200 text-sm rounded-full">
                  {color}
                </span>
              ))}
            </div>
          </div>
          <div className="mb-4">
            <h3 className="font-semibold text-gray-700 mb-2 flex items-center">
              <Ruler className="mr-2" size={16} />
              Available Sizes:
            </h3>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((size, index) => (
                <span key={index} className="px-3 py-1 bg-gray-200 text-sm rounded-full">
                  {size}
                </span>
              ))}
            </div>
          </div>
          <button
            onClick={closeModal}
            className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors flex items-center justify-center"
          >
            <X className="mr-2" size={16} />
            Close
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

