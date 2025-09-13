import React from 'react';
import { Link } from 'react-router-dom';
import { Minus, Plus, Trash2, ArrowRight, ShoppingBag } from 'lucide-react';
import { useCart } from '../hooks/useCart';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const CartPage: React.FC = () => {
  const { items, updateQuantity, removeItem, getSubtotal, getTotal } = useCart();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0
    }).format(price);
  };

  const shippingCost = 5000; // ₦5,000 shipping
  const vatRate = 0.075; // 7.5% VAT
  const subtotal = getSubtotal();
  const vatAmount = subtotal * vatRate;
  const freeShippingThreshold = 50000;
  const actualShippingCost = subtotal >= freeShippingThreshold ? 0 : shippingCost;
  const total = getTotal(actualShippingCost, vatAmount);

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="text-gray-400 text-8xl mb-8">🛒</div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Your Cart is Empty</h1>
          <p className="text-gray-600 mb-8">
            Looks like you haven't added any products to your cart yet. Start shopping to fill it up!
          </p>
          <Link to="/shop">
            <Button size="lg" icon={ShoppingBag}>
              Start Shopping
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <Card key={item.id} padding="none">
                <div className="p-6">
                  <div className="flex items-center space-x-4">
                    {/* Product Image */}
                    <Link to={`/product/${item.product.slug}`} className="flex-shrink-0">
                      <img
                        src={item.product.images[0]}
                        alt={item.product.name}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                    </Link>

                    {/* Product Info */}
                    <div className="flex-1 min-w-0">
                      <Link
                        to={`/product/${item.product.slug}`}
                        className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors"
                      >
                        {item.product.name}
                      </Link>
                      <p className="text-sm text-gray-500">{item.product.brand}</p>
                      
                      {item.selectedVariant && (
                        <div className="flex flex-wrap gap-2 mt-2">
                          {Object.entries(item.selectedVariant.attributes).map(([key, value]) => (
                            <span key={key} className="text-xs bg-gray-100 px-2 py-1 rounded">
                              {key}: {value}
                            </span>
                          ))}
                        </div>
                      )}

                      <div className="mt-2">
                        <span className="text-lg font-bold text-gray-900">
                          {formatPrice(item.price)}
                        </span>
                        {item.product.salePrice && item.product.salePrice < item.product.price && (
                          <span className="text-sm text-gray-500 line-through ml-2">
                            {formatPrice(item.product.price)}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center space-x-3">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                        disabled={item.quantity <= 1}
                      >
                        <Minus size={16} />
                      </button>
                      
                      <span className="w-8 text-center font-medium">{item.quantity}</span>
                      
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                        disabled={item.quantity >= item.product.stock}
                      >
                        <Plus size={16} />
                      </button>
                    </div>

                    {/* Remove Button */}
                    <button
                      onClick={() => removeItem(item.id)}
                      className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>

                  {/* Stock Warning */}
                  {item.product.stock < 5 && item.product.stock > 0 && (
                    <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                      <p className="text-sm text-yellow-800">
                        Only {item.product.stock} left in stock!
                      </p>
                    </div>
                  )}
                </div>
              </Card>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card>
              <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>

              <div className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span>Subtotal ({items.reduce((sum, item) => sum + item.quantity, 0)} items)</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>

                <div className="flex justify-between text-sm">
                  <span>Shipping</span>
                  <div className="text-right">
                    {actualShippingCost === 0 ? (
                      <span className="text-green-600 font-medium">FREE</span>
                    ) : (
                      <span>{formatPrice(actualShippingCost)}</span>
                    )}
                  </div>
                </div>

                <div className="flex justify-between text-sm">
                  <span>VAT (7.5%)</span>
                  <span>{formatPrice(vatAmount)}</span>
                </div>

                <div className="border-t pt-4">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span>{formatPrice(total)}</span>
                  </div>
                </div>

                {/* Free Shipping Progress */}
                {subtotal < freeShippingThreshold && (
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <div className="text-sm text-blue-800 mb-2">
                      Add {formatPrice(freeShippingThreshold - subtotal)} more for FREE shipping!
                    </div>
                    <div className="w-full bg-blue-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${Math.min((subtotal / freeShippingThreshold) * 100, 100)}%` }}
                      />
                    </div>
                  </div>
                )}

                <Link to="/checkout">
                  <Button size="lg" fullWidth icon={ArrowRight} iconPosition="right">
                    Proceed to Checkout
                  </Button>
                </Link>

                <Link to="/shop">
                  <Button variant="outline" size="lg" fullWidth>
                    Continue Shopping
                  </Button>
                </Link>
              </div>
            </Card>

            {/* Security Badges */}
            <Card className="mt-6">
              <h3 className="font-semibold text-gray-900 mb-4">Secure Shopping</h3>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  <span>Secure SSL encryption</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  <span>Paystack & Flutterwave protected</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  <span>Easy returns within 7 days</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;