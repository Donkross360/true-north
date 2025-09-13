// Core Types
export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  role: 'customer' | 'admin' | 'manager' | 'editor' | 'support';
  addresses: Address[];
  createdAt: string;
  isActive: boolean;
}

export interface Address {
  id: string;
  label: string;
  firstName: string;
  lastName: string;
  address1: string;
  address2?: string;
  city: string;
  state: string;
  lga: string;
  zipCode: string;
  phone: string;
  isDefault: boolean;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  shortDescription: string;
  brand: string;
  category: string;
  subcategory?: string;
  images: string[];
  price: number;
  salePrice?: number;
  sku: string;
  stock: number;
  isActive: boolean;
  isFeatured: boolean;
  specifications: Record<string, string>;
  variants: ProductVariant[];
  warranty: number; // months
  tags: string[];
  seoTitle?: string;
  seoDescription?: string;
  createdAt: string;
  updatedAt: string;
}

export interface ProductVariant {
  id: string;
  name: string;
  sku: string;
  price?: number;
  stock: number;
  attributes: Record<string, string>; // color: "Black", storage: "128GB"
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  image?: string;
  parentId?: string;
  isActive: boolean;
  sortOrder: number;
}

export interface Brand {
  id: string;
  name: string;
  slug: string;
  logo?: string;
  description?: string;
  isActive: boolean;
  sortOrder: number;
}

export interface CartItem {
  id: string;
  productId: string;
  variantId?: string;
  quantity: number;
  price: number;
  product: Product;
  selectedVariant?: ProductVariant;
}

export interface Order {
  id: string;
  orderNumber: string;
  customerId: string;
  status: 'pending' | 'paid' | 'processing' | 'shipped' | 'delivered' | 'cancelled' | 'refunded';
  paymentStatus: 'pending' | 'paid' | 'failed' | 'refunded';
  paymentMethod: 'paystack' | 'flutterwave' | 'bank_transfer' | 'cash_on_delivery';
  items: OrderItem[];
  shippingAddress: Address;
  billingAddress: Address;
  subtotal: number;
  shippingCost: number;
  taxAmount: number;
  discount: number;
  total: number;
  notes?: string;
  trackingNumber?: string;
  createdAt: string;
  updatedAt: string;
}

export interface OrderItem {
  id: string;
  productId: string;
  variantId?: string;
  quantity: number;
  price: number;
  product: Product;
  selectedVariant?: ProductVariant;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featuredImage?: string;
  authorId: string;
  categoryId: string;
  tags: string[];
  isPublished: boolean;
  publishedAt?: string;
  seoTitle?: string;
  seoDescription?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Review {
  id: string;
  productId: string;
  customerId: string;
  rating: number;
  title: string;
  content: string;
  isVerified: boolean;
  isApproved: boolean;
  createdAt: string;
  customer: Pick<User, 'firstName' | 'lastName'>;
}

export interface Coupon {
  id: string;
  code: string;
  type: 'percentage' | 'fixed';
  value: number;
  minOrderAmount?: number;
  maxDiscount?: number;
  usageLimit?: number;
  usedCount: number;
  startsAt?: string;
  expiresAt?: string;
  isActive: boolean;
}

export interface ShippingMethod {
  id: string;
  name: string;
  description: string;
  price: number;
  estimatedDays: string;
  zones: string[];
  isActive: boolean;
}

export interface NigerianState {
  id: string;
  name: string;
  lgas: string[];
}