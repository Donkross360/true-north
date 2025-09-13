import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, Grid, List, SlidersHorizontal, X } from 'lucide-react';
import { products, brands, categories } from '../data/products';
import { Product } from '../types';
import ProductCard from '../components/product/ProductCard';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';

const ShopPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  
  // Filter states
  const [selectedBrands, setSelectedBrands] = useState<string[]>(
    searchParams.get('brand')?.split(',').filter(Boolean) || []
  );
  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    searchParams.get('category')?.split(',').filter(Boolean) || []
  );
  const [priceRange, setPriceRange] = useState({
    min: Number(searchParams.get('minPrice')) || 0,
    max: Number(searchParams.get('maxPrice')) || 2000000
  });
  const [sortBy, setSortBy] = useState(searchParams.get('sort') || 'relevance');
  const [inStockOnly, setInStockOnly] = useState(searchParams.get('inStock') === 'true');

  const query = searchParams.get('q') || '';

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let filtered = products.filter(product => {
      // Text search
      if (query) {
        const searchTerm = query.toLowerCase();
        if (!product.name.toLowerCase().includes(searchTerm) &&
            !product.brand.toLowerCase().includes(searchTerm) &&
            !product.description.toLowerCase().includes(searchTerm)) {
          return false;
        }
      }

      // Brand filter
      if (selectedBrands.length > 0 && !selectedBrands.includes(product.brand)) {
        return false;
      }

      // Category filter
      if (selectedCategories.length > 0 && !selectedCategories.includes(product.category)) {
        return false;
      }

      // Price filter
      const price = product.salePrice || product.price;
      if (price < priceRange.min || price > priceRange.max) {
        return false;
      }

      // Stock filter
      if (inStockOnly && product.stock === 0) {
        return false;
      }

      return product.isActive;
    });

    // Sort products
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => (a.salePrice || a.price) - (b.salePrice || b.price));
        break;
      case 'price-high':
        filtered.sort((a, b) => (b.salePrice || b.price) - (a.salePrice || a.price));
        break;
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'newest':
        filtered.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        break;
      case 'featured':
        filtered.sort((a, b) => Number(b.isFeatured) - Number(a.isFeatured));
        break;
      default:
        // Keep original order for relevance
        break;
    }

    return filtered;
  }, [query, selectedBrands, selectedCategories, priceRange, sortBy, inStockOnly]);

  const handleBrandChange = (brand: string, checked: boolean) => {
    const newBrands = checked 
      ? [...selectedBrands, brand]
      : selectedBrands.filter(b => b !== brand);
    setSelectedBrands(newBrands);
    
    const params = new URLSearchParams(searchParams);
    if (newBrands.length > 0) {
      params.set('brand', newBrands.join(','));
    } else {
      params.delete('brand');
    }
    setSearchParams(params);
  };

  const handleCategoryChange = (category: string, checked: boolean) => {
    const newCategories = checked 
      ? [...selectedCategories, category]
      : selectedCategories.filter(c => c !== category);
    setSelectedCategories(newCategories);
    
    const params = new URLSearchParams(searchParams);
    if (newCategories.length > 0) {
      params.set('category', newCategories.join(','));
    } else {
      params.delete('category');
    }
    setSearchParams(params);
  };

  const clearFilters = () => {
    setSelectedBrands([]);
    setSelectedCategories([]);
    setPriceRange({ min: 0, max: 2000000 });
    setInStockOnly(false);
    setSearchParams(new URLSearchParams());
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                {query ? `Search Results for "${query}"` : 'Shop'}
              </h1>
              <p className="text-gray-600 mt-2">
                {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} found
              </p>
            </div>

            <div className="flex items-center space-x-4">
              {/* View Mode Toggle */}
              <div className="hidden md:flex border border-gray-300 rounded-lg">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 ${viewMode === 'grid' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-50'}`}
                >
                  <Grid size={20} />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 ${viewMode === 'list' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-50'}`}
                >
                  <List size={20} />
                </button>
              </div>

              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="relevance">Sort by Relevance</option>
                <option value="featured">Featured First</option>
                <option value="newest">Newest First</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name A-Z</option>
              </select>

              {/* Mobile Filter Toggle */}
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden"
                icon={SlidersHorizontal}
              >
                Filters
              </Button>
            </div>
          </div>

          {/* Active Filters */}
          {(selectedBrands.length > 0 || selectedCategories.length > 0 || inStockOnly) && (
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <span className="text-sm text-gray-600">Active filters:</span>
              {selectedBrands.map(brand => (
                <Badge key={brand} className="cursor-pointer" onClick={() => handleBrandChange(brand, false)}>
                  {brand} <X size={14} className="ml-1" />
                </Badge>
              ))}
              {selectedCategories.map(category => (
                <Badge key={category} className="cursor-pointer" onClick={() => handleCategoryChange(category, false)}>
                  {category} <X size={14} className="ml-1" />
                </Badge>
              ))}
              {inStockOnly && (
                <Badge className="cursor-pointer" onClick={() => setInStockOnly(false)}>
                  In Stock Only <X size={14} className="ml-1" />
                </Badge>
              )}
              <Button variant="ghost" size="sm" onClick={clearFilters}>
                Clear All
              </Button>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className={`lg:block ${showFilters ? 'block' : 'hidden'} space-y-6`}>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold">Filters</h3>
                <Button variant="ghost" size="sm" onClick={clearFilters}>
                  Clear All
                </Button>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <h4 className="font-medium mb-4">Price Range</h4>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <input
                      type="number"
                      placeholder="Min"
                      value={priceRange.min || ''}
                      onChange={(e) => setPriceRange(prev => ({ ...prev, min: Number(e.target.value) || 0 }))}
                      className="flex-1 border border-gray-300 rounded px-3 py-1 text-sm"
                    />
                    <span className="text-gray-500">to</span>
                    <input
                      type="number"
                      placeholder="Max"
                      value={priceRange.max || ''}
                      onChange={(e) => setPriceRange(prev => ({ ...prev, max: Number(e.target.value) || 2000000 }))}
                      className="flex-1 border border-gray-300 rounded px-3 py-1 text-sm"
                    />
                  </div>
                  <div className="text-xs text-gray-500">
                    {formatPrice(priceRange.min)} - {formatPrice(priceRange.max)}
                  </div>
                </div>
              </div>

              {/* Brands */}
              <div className="mb-6">
                <h4 className="font-medium mb-4">Brands</h4>
                <div className="space-y-2 max-h-48 overflow-y-auto">
                  {brands.map(brand => (
                    <label key={brand.id} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={selectedBrands.includes(brand.name)}
                        onChange={(e) => handleBrandChange(brand.name, e.target.checked)}
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="ml-2 text-sm">{brand.name}</span>
                      <span className="ml-auto text-xs text-gray-500">
                        ({products.filter(p => p.brand === brand.name).length})
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Categories */}
              <div className="mb-6">
                <h4 className="font-medium mb-4">Categories</h4>
                <div className="space-y-2">
                  {categories.filter(c => !c.parentId).map(category => (
                    <label key={category.id} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(category.name)}
                        onChange={(e) => handleCategoryChange(category.name, e.target.checked)}
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="ml-2 text-sm">{category.name}</span>
                      <span className="ml-auto text-xs text-gray-500">
                        ({products.filter(p => p.category === category.name).length})
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <div>
                <h4 className="font-medium mb-4">Availability</h4>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={inStockOnly}
                    onChange={(e) => setInStockOnly(e.target.checked)}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-sm">In Stock Only</span>
                  <span className="ml-auto text-xs text-gray-500">
                    ({products.filter(p => p.stock > 0).length})
                  </span>
                </label>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <div className="text-gray-400 text-6xl mb-4">📱</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
                <p className="text-gray-600 mb-6">
                  Try adjusting your filters or search terms
                </p>
                <Button onClick={clearFilters}>Clear All Filters</Button>
              </div>
            ) : (
              <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 sm:grid-cols-2 xl:grid-cols-3' : 'grid-cols-1'}`}>
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}

            {/* Load More */}
            {filteredProducts.length > 0 && filteredProducts.length >= 20 && (
              <div className="text-center mt-12">
                <Button variant="outline" size="lg">
                  Load More Products
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;