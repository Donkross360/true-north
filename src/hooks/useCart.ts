import { useState, useCallback, useEffect } from 'react';
import { CartItem, Product, ProductVariant } from '../types';
import toast from 'react-hot-toast';

const CART_STORAGE_KEY = 'truenorth-cart';

export const useCart = () => {
  const [items, setItems] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem(CART_STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const addItem = useCallback((product: Product, variant?: ProductVariant, quantity = 1) => {
    const existingItemId = `${product.id}-${variant?.id || 'default'}`;
    
    setItems(prevItems => {
      const existingItem = prevItems.find(item => 
        item.productId === product.id && item.variantId === variant?.id
      );

      if (existingItem) {
        toast.success(`Updated quantity for ${product.name}`);
        return prevItems.map(item =>
          item.productId === product.id && item.variantId === variant?.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      const newItem: CartItem = {
        id: existingItemId,
        productId: product.id,
        variantId: variant?.id,
        quantity,
        price: variant?.price || product.salePrice || product.price,
        product,
        selectedVariant: variant
      };

      toast.success(`Added ${product.name} to cart`);
      return [...prevItems, newItem];
    });
  }, []);

  const updateQuantity = useCallback((itemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(itemId);
      return;
    }

    setItems(prevItems =>
      prevItems.map(item =>
        item.id === itemId ? { ...item, quantity } : item
      )
    );
  }, []);

  const removeItem = useCallback((itemId: string) => {
    setItems(prevItems => {
      const item = prevItems.find(i => i.id === itemId);
      if (item) {
        toast.success(`Removed ${item.product.name} from cart`);
      }
      return prevItems.filter(i => i.id !== itemId);
    });
  }, []);

  const clearCart = useCallback(() => {
    setItems([]);
    toast.success('Cart cleared');
  }, []);

  const getItemCount = useCallback(() => {
    return items.reduce((total, item) => total + item.quantity, 0);
  }, [items]);

  const getSubtotal = useCallback(() => {
    return items.reduce((total, item) => total + (item.price * item.quantity), 0);
  }, [items]);

  const getTotal = useCallback((shippingCost = 0, taxAmount = 0, discount = 0) => {
    return getSubtotal() + shippingCost + taxAmount - discount;
  }, [getSubtotal]);

  return {
    items,
    addItem,
    updateQuantity,
    removeItem,
    clearCart,
    getItemCount,
    getSubtotal,
    getTotal
  };
};