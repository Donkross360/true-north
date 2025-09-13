import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart, Eye, Star } from 'lucide-react';
import { Product } from '../../types';
import { useCart } from '../../hooks/useCart';
import Badge from '../ui/Badge';
import Button from '../ui/Button';

interface ProductCardProps {
  product: Product;
  showCompare?: boolean;
  onQuickView?: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ 
  product, 
  showCompare = false, 
  onQuickView 
}) => {
  const { addItem } = useCart();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0
    }).format(price);
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem(product);
  };

  const handleQuickView = (e: React.MouseEvent) => {
    e.preventDefault();
    onQuickView?.(product);
  };

  const isOnSale = product.salePrice && product.salePrice < product.price;
  const discountPercentage = isOnSale 
    ? Math.round(((product.price - product.salePrice!) / product.price) * 100)
    : 0;

  return (
    <div className="group relative bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300">
      <Link to={`/product/${product.slug}`} className="block">
        {/* Image Container */}
        <div className="relative aspect-square overflow-hidden rounded-t-lg bg-gray-100">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          
          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {isOnSale && (
              <Badge variant="danger" size="sm">
                -{discountPercentage}%
              </Badge>
            )}
            {product.isFeatured && (
              <Badge variant="warning" size="sm">
                Featured
              </Badge>
            )}
            {product.stock <= 5 && product.stock > 0 && (
              <Badge variant="warning" size="sm">
                Low Stock
              </Badge>
            )}
            {product.stock === 0 && (
              <Badge variant="danger" size="sm">
                Out of Stock
              </Badge>
            )}
          </div>

          {/* Overlay Actions */}
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
          
          <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <button
              onClick={handleQuickView}
              className="p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors"
              title="Quick View"
            >
              <Eye size={18} className="text-gray-600" />
            </button>
            <button
              className="p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors"
              title="Add to Wishlist"
            >
              <Heart size={18} className="text-gray-600" />
            </button>
          </div>

          {/* Quick Add to Cart */}
          <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
            <Button
              onClick={handleAddToCart}
              disabled={product.stock === 0}
              fullWidth
              size="sm"
              icon={ShoppingCart}
            >
              {product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
            </Button>
          </div>
        </div>

        {/* Product Info */}
        <div className="p-4">
          <div className="mb-2">
            <p className="text-sm text-gray-500 font-medium">{product.brand}</p>
            <h3 className="font-semibold text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors">
              {product.name}
            </h3>
          </div>

          {/* Rating */}
          <div className="flex items-center mb-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  className={`${i < 4 ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                />
              ))}
            </div>
            <span className="ml-1 text-sm text-gray-500">(24)</span>
          </div>

          {/* Key Specs */}
          <div className="mb-3 text-sm text-gray-600">
            {product.specifications.Storage && (
              <span>{product.specifications.Storage}</span>
            )}
            {product.specifications.RAM && product.specifications.Storage && (
              <span> • {product.specifications.RAM}</span>
            )}
            {product.specifications.Capacity && (
              <span>{product.specifications.Capacity}</span>
            )}
          </div>

          {/* Price */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-lg font-bold text-gray-900">
                {formatPrice(product.salePrice || product.price)}
              </span>
              {isOnSale && (
                <span className="text-sm text-gray-500 line-through">
                  {formatPrice(product.price)}
                </span>
              )}
            </div>
            
            {product.warranty && (
              <Badge variant="info" size="sm">
                {product.warranty}mo warranty
              </Badge>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;