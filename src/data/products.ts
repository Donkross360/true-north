import { Product, Category, Brand } from '../types';

export const brands: Brand[] = [
  { id: '1', name: 'Apple', slug: 'apple', isActive: true, sortOrder: 1 },
  { id: '2', name: 'Samsung', slug: 'samsung', isActive: true, sortOrder: 2 },
  { id: '3', name: 'Tecno', slug: 'tecno', isActive: true, sortOrder: 3 },
  { id: '4', name: 'Infinix', slug: 'infinix', isActive: true, sortOrder: 4 },
  { id: '5', name: 'Xiaomi', slug: 'xiaomi', isActive: true, sortOrder: 5 },
  { id: '6', name: 'Oraimo', slug: 'oraimo', isActive: true, sortOrder: 6 },
  { id: '7', name: 'Anker', slug: 'anker', isActive: true, sortOrder: 7 },
];

export const categories: Category[] = [
  { id: '1', name: 'Phones', slug: 'phones', isActive: true, sortOrder: 1 },
  { id: '2', name: 'Accessories', slug: 'accessories', isActive: true, sortOrder: 2 },
  { id: '3', name: 'Audio', slug: 'audio', isActive: true, sortOrder: 3 },
  { id: '4', name: 'Power', slug: 'power', isActive: true, sortOrder: 4 },
  { id: '5', name: 'Wearables', slug: 'wearables', isActive: true, sortOrder: 5 },
  { id: '6', name: 'Cases & Protection', slug: 'cases-protection', parentId: '2', isActive: true, sortOrder: 6 },
  { id: '7', name: 'Chargers & Cables', slug: 'chargers-cables', parentId: '2', isActive: true, sortOrder: 7 },
];

export const products: Product[] = [
  {
    id: '1',
    name: 'iPhone 15 Pro Max',
    slug: 'iphone-15-pro-max',
    description: 'The most advanced iPhone ever with titanium design, A17 Pro chip, and pro camera system.',
    shortDescription: 'Premium iPhone with titanium design and advanced camera system',
    brand: 'Apple',
    category: 'Phones',
    images: [
      'https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg',
      'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg'
    ],
    price: 1850000,
    sku: 'IPH15PM256',
    stock: 15,
    isActive: true,
    isFeatured: true,
    specifications: {
      'Display': '6.7" Super Retina XDR',
      'Chip': 'A17 Pro',
      'Storage': '256GB',
      'Camera': 'Pro camera system with 48MP',
      'Battery': 'Up to 29 hours video playback',
      'OS': 'iOS 17'
    },
    variants: [
      { id: '1a', name: '256GB Natural Titanium', sku: 'IPH15PM256NT', stock: 5, attributes: { color: 'Natural Titanium', storage: '256GB' } },
      { id: '1b', name: '256GB Blue Titanium', sku: 'IPH15PM256BT', stock: 10, attributes: { color: 'Blue Titanium', storage: '256GB' } }
    ],
    warranty: 12,
    tags: ['premium', 'flagship', 'pro'],
    createdAt: '2024-01-15T00:00:00Z',
    updatedAt: '2024-01-15T00:00:00Z'
  },
  {
    id: '2',
    name: 'Samsung Galaxy S24 Ultra',
    slug: 'samsung-galaxy-s24-ultra',
    description: 'Ultimate Samsung flagship with S Pen, 200MP camera, and AI-powered features.',
    shortDescription: 'Samsung\'s most powerful phone with S Pen and 200MP camera',
    brand: 'Samsung',
    category: 'Phones',
    images: [
      'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg',
      'https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg'
    ],
    price: 1650000,
    sku: 'SGS24U256',
    stock: 12,
    isActive: true,
    isFeatured: true,
    specifications: {
      'Display': '6.8" Dynamic AMOLED 2X',
      'Chip': 'Snapdragon 8 Gen 3',
      'Storage': '256GB',
      'RAM': '12GB',
      'Camera': '200MP + 50MP + 12MP + 10MP',
      'Battery': '5000mAh',
      'OS': 'Android 14'
    },
    variants: [
      { id: '2a', name: '256GB Titanium Gray', sku: 'SGS24U256TG', stock: 6, attributes: { color: 'Titanium Gray', storage: '256GB' } },
      { id: '2b', name: '256GB Titanium Black', sku: 'SGS24U256TB', stock: 6, attributes: { color: 'Titanium Black', storage: '256GB' } }
    ],
    warranty: 12,
    tags: ['flagship', 's-pen', 'camera'],
    createdAt: '2024-01-10T00:00:00Z',
    updatedAt: '2024-01-10T00:00:00Z'
  },
  {
    id: '3',
    name: 'Tecno Camon 30 Pro',
    slug: 'tecno-camon-30-pro',
    description: 'Advanced camera phone with 108MP main sensor and powerful performance for photography enthusiasts.',
    shortDescription: 'Camera-focused smartphone with 108MP sensor',
    brand: 'Tecno',
    category: 'Phones',
    images: [
      'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg'
    ],
    price: 285000,
    sku: 'TC30P256',
    stock: 25,
    isActive: true,
    isFeatured: false,
    specifications: {
      'Display': '6.78" AMOLED',
      'Chip': 'Dimensity 8050',
      'Storage': '256GB',
      'RAM': '12GB',
      'Camera': '108MP + 2MP + 2MP',
      'Battery': '5000mAh',
      'OS': 'HiOS 14'
    },
    variants: [
      { id: '3a', name: '256GB Iceland Basaltic Dark', sku: 'TC30P256IBD', stock: 15, attributes: { color: 'Iceland Basaltic Dark', storage: '256GB' } },
      { id: '3b', name: '256GB Predawn Gold', sku: 'TC30P256PG', stock: 10, attributes: { color: 'Predawn Gold', storage: '256GB' } }
    ],
    warranty: 12,
    tags: ['camera', 'midrange', 'photography'],
    createdAt: '2024-01-08T00:00:00Z',
    updatedAt: '2024-01-08T00:00:00Z'
  },
  {
    id: '4',
    name: 'AirPods Pro (3rd Generation)',
    slug: 'airpods-pro-3rd-generation',
    description: 'Premium wireless earbuds with adaptive audio, personalized spatial audio, and conversation awareness.',
    shortDescription: 'Premium wireless earbuds with adaptive audio',
    brand: 'Apple',
    category: 'Audio',
    images: [
      'https://images.pexels.com/photos/8534088/pexels-photo-8534088.jpeg'
    ],
    price: 385000,
    sku: 'APP3G',
    stock: 30,
    isActive: true,
    isFeatured: true,
    specifications: {
      'Chip': 'H2',
      'Features': 'Adaptive Audio, Active Noise Cancellation',
      'Battery': 'Up to 6 hours (30 hours with case)',
      'Connectivity': 'Bluetooth 5.3',
      'Water Resistance': 'IPX4',
      'Case': 'MagSafe & Wireless Charging'
    },
    variants: [],
    warranty: 12,
    tags: ['wireless', 'premium', 'noise-cancellation'],
    createdAt: '2024-01-12T00:00:00Z',
    updatedAt: '2024-01-12T00:00:00Z'
  },
  {
    id: '5',
    name: 'Anker PowerCore 20000mAh',
    slug: 'anker-powercore-20000mah',
    description: 'High-capacity portable charger with fast charging technology and multiple device support.',
    shortDescription: 'High-capacity 20000mAh portable charger',
    brand: 'Anker',
    category: 'Power',
    images: [
      'https://images.pexels.com/photos/4316693/pexels-photo-4316693.jpeg'
    ],
    price: 45000,
    sku: 'ANK20K',
    stock: 50,
    isActive: true,
    isFeatured: false,
    specifications: {
      'Capacity': '20000mAh',
      'Ports': '2x USB-A, 1x USB-C',
      'Input': '18W USB-C',
      'Output': '22.5W USB-A, 20W USB-C',
      'Weight': '343g',
      'Safety': 'MultiProtect Safety System'
    },
    variants: [
      { id: '5a', name: 'Black', sku: 'ANK20KBK', stock: 30, attributes: { color: 'Black' } },
      { id: '5b', name: 'White', sku: 'ANK20KWH', stock: 20, attributes: { color: 'White' } }
    ],
    warranty: 18,
    tags: ['portable', 'fast-charging', 'reliable'],
    createdAt: '2024-01-05T00:00:00Z',
    updatedAt: '2024-01-05T00:00:00Z'
  },
  {
    id: '6',
    name: 'Galaxy Buds3 Pro',
    slug: 'galaxy-buds3-pro',
    description: 'Samsung\'s flagship wireless earbuds with 360 audio, adaptive noise cancellation, and seamless Galaxy integration.',
    shortDescription: 'Samsung\'s premium wireless earbuds with 360 audio',
    brand: 'Samsung',
    category: 'Audio',
    images: [
      'https://images.pexels.com/photos/8534088/pexels-photo-8534088.jpeg'
    ],
    price: 245000,
    sku: 'GB3P',
    stock: 20,
    isActive: true,
    isFeatured: false,
    specifications: {
      'Features': '360 Audio, Adaptive Noise Cancellation',
      'Battery': 'Up to 7 hours (30 hours with case)',
      'Connectivity': 'Bluetooth 5.4',
      'Water Resistance': 'IPX7',
      'Controls': 'Touch & Voice Commands',
      'Case': 'Wireless Charging'
    },
    variants: [
      { id: '6a', name: 'Silver', sku: 'GB3PSV', stock: 12, attributes: { color: 'Silver' } },
      { id: '6b', name: 'White', sku: 'GB3PWH', stock: 8, attributes: { color: 'White' } }
    ],
    warranty: 12,
    tags: ['wireless', '360-audio', 'samsung'],
    createdAt: '2024-01-14T00:00:00Z',
    updatedAt: '2024-01-14T00:00:00Z'
  }
];