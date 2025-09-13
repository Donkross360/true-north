import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Truck, CreditCard, Clock, Star, MessageCircle, Phone } from 'lucide-react';
import { products, brands } from '../data/products';
import ProductCard from '../components/product/ProductCard';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const HomePage: React.FC = () => {
  const featuredProducts = products.filter(p => p.isFeatured).slice(0, 8);
  const newArrivals = products.slice(0, 4);
  const bestSellers = products.slice(2, 6);

  const categories = [
    { name: 'Phones', slug: 'phones', image: 'https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg', count: '200+' },
    { name: 'Accessories', slug: 'accessories', image: 'https://images.pexels.com/photos/4316693/pexels-photo-4316693.jpeg', count: '150+' },
    { name: 'Audio', slug: 'audio', image: 'https://images.pexels.com/photos/8534088/pexels-photo-8534088.jpeg', count: '80+' },
    { name: 'Power', slug: 'power', image: 'https://images.pexels.com/photos/4316693/pexels-photo-4316693.jpeg', count: '50+' },
    { name: 'Wearables', slug: 'wearables', image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg', count: '30+' }
  ];

  const trustBadges = [
    { icon: Shield, title: '100% Genuine', subtitle: 'Authentic products only' },
    { icon: Shield, title: '12-Month Warranty', subtitle: 'Comprehensive coverage' },
    { icon: CreditCard, title: 'Secure Payments', subtitle: 'Paystack & Flutterwave' },
    { icon: Truck, title: 'Fast Delivery', subtitle: 'Same-day in Lagos' }
  ];

  const testimonials = [
    {
      name: 'Adebayo Johnson',
      location: 'Victoria Island, Lagos',
      rating: 5,
      text: 'Excellent service! Got my iPhone 15 the next day and it\'s completely authentic. Great pricing too!',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?w=150'
    },
    {
      name: 'Fatima Abdullah',
      location: 'Ikeja, Lagos',
      rating: 5,
      text: 'Best place for phone accessories in Lagos. Fast delivery and genuine products. Highly recommend!',
      avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?w=150'
    },
    {
      name: 'Charles Okafor',
      location: 'Lekki, Lagos',
      rating: 5,
      text: 'Been buying from Truenorth for 2 years. Never had any issues. Great customer service and warranty support.',
      avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?w=150'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Genuine Phones.
                <br />
                <span className="bg-gradient-to-r from-cyan-400 to-orange-400 bg-clip-text text-transparent">
                  Fast Delivery.
                </span>
                <br />
                Better Prices.
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                From flagship devices to everyday essentials—Truenorth keeps you connected with authentic products, fair pricing, and reliable support.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link to="/shop">
                  <Button size="lg" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700">
                    Shop Phones
                  </Button>
                </Link>
                <a
                  href="https://wa.me/2348031234567?text=Hi, I'm interested in your products"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="lg" icon={MessageCircle} className="border-white text-white hover:bg-white hover:text-blue-900">
                    Chat on WhatsApp
                  </Button>
                </a>
              </div>

              <div className="flex items-center space-x-8 text-sm">
                <div className="flex items-center">
                  <Shield size={16} className="mr-2 text-cyan-400" />
                  <span>100% Original</span>
                </div>
                <div className="flex items-center">
                  <Shield size={16} className="mr-2 text-cyan-400" />
                  <span>Warranty Included</span>
                </div>
                <div className="flex items-center">
                  <Truck size={16} className="mr-2 text-cyan-400" />
                  <span>Lagos Same-Day</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img
                    src="https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg"
                    alt="iPhone"
                    className="w-full h-48 object-cover rounded-lg shadow-xl"
                  />
                  <img
                    src="https://images.pexels.com/photos/8534088/pexels-photo-8534088.jpeg"
                    alt="Accessories"
                    className="w-full h-32 object-cover rounded-lg shadow-xl"
                  />
                </div>
                <div className="space-y-4 pt-8">
                  <img
                    src="https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg"
                    alt="Samsung"
                    className="w-full h-32 object-cover rounded-lg shadow-xl"
                  />
                  <img
                    src="https://images.pexels.com/photos/4316693/pexels-photo-4316693.jpeg"
                    alt="Power Bank"
                    className="w-full h-48 object-cover rounded-lg shadow-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {trustBadges.map((badge, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                    <badge.icon size={32} className="text-blue-600" />
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{badge.title}</h3>
                <p className="text-sm text-gray-600">{badge.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Shop by Category</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our wide range of phones and tech accessories from top brands
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {categories.map((category) => (
              <Link
                key={category.slug}
                to={`/shop/${category.slug}`}
                className="group block bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="aspect-square overflow-hidden rounded-t-lg">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-sm text-gray-600">{category.count} products</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Products</h2>
              <p className="text-gray-600">Handpicked products just for you</p>
            </div>
            <Link to="/shop">
              <Button variant="outline" icon={ArrowRight} iconPosition="right">
                View All
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* New Arrivals & Best Sellers */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* New Arrivals */}
            <div>
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900">New Arrivals</h3>
                <Link to="/shop?filter=new" className="text-blue-600 hover:text-blue-700 font-medium">
                  View All →
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {newArrivals.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>

            {/* Best Sellers */}
            <div>
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900">Best Sellers</h3>
                <Link to="/shop?filter=popular" className="text-blue-600 hover:text-blue-700 font-medium">
                  View All →
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {bestSellers.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Partners */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Trusted Brands</h2>
            <p className="text-gray-600">We partner with the world's leading tech brands</p>
          </div>
          
          <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-8 items-center">
            {brands.map((brand) => (
              <Link
                key={brand.id}
                to={`/shop?brand=${brand.slug}`}
                className="group flex justify-center items-center h-16 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <span className="text-lg font-semibold text-gray-700 group-hover:text-blue-600 transition-colors">
                  {brand.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-gray-600">Trusted by thousands of satisfied customers across Nigeria</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                </div>
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                <p className="text-sm text-gray-500">{testimonial.location}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Store Info & Contact */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* About */}
            <div>
              <h3 className="text-xl font-bold mb-4">Why Choose Truenorth?</h3>
              <p className="text-blue-100 mb-6">
                Based in Ikeja, Lagos, we source directly from authorized distributors so you get 
                authentic devices, fair pricing, and reliable after-sales support.
              </p>
              <ul className="space-y-2 text-blue-100">
                <li>✓ 100% Genuine Products</li>
                <li>✓ 12-Month Comprehensive Warranty</li>
                <li>✓ Free Lagos Same-Day Delivery</li>
                <li>✓ Expert Technical Support</li>
              </ul>
            </div>

            {/* Store Info */}
            <div>
              <h3 className="text-xl font-bold mb-4">Visit Our Store</h3>
              <div className="space-y-4 text-blue-100">
                <div>
                  <p className="font-medium">Address</p>
                  <p>Dapson Street, Ikeja, Lagos, Nigeria</p>
                </div>
                <div>
                  <p className="font-medium">Business Hours</p>
                  <p>Mon - Sat: 9:00 AM - 7:00 PM</p>
                  <p>Sunday: 12:00 PM - 5:00 PM</p>
                </div>
                <div>
                  <p className="font-medium">Contact</p>
                  <p>Phone: +234 803 123 4567</p>
                  <p>Email: hello@truenorth.ng</p>
                </div>
              </div>
            </div>

            {/* Quick Contact */}
            <div>
              <h3 className="text-xl font-bold mb-4">Get In Touch</h3>
              <div className="space-y-4">
                <a
                  href="tel:+2348031234567"
                  className="flex items-center p-4 bg-blue-800 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Phone size={24} className="mr-3" />
                  <div>
                    <p className="font-medium">Call Us Now</p>
                    <p className="text-sm text-blue-200">+234 803 123 4567</p>
                  </div>
                </a>
                
                <a
                  href="https://wa.me/2348031234567?text=Hi, I need help with a product"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-green-600 rounded-lg hover:bg-green-500 transition-colors"
                >
                  <MessageCircle size={24} className="mr-3" />
                  <div>
                    <p className="font-medium">WhatsApp Support</p>
                    <p className="text-sm text-green-200">Quick responses guaranteed</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;