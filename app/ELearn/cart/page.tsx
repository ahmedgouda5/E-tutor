'use client';
import { ShoppingCart, Trash2, Plus, Minus, Tag } from 'lucide-react';
import { UseCartStore } from '@/store/CartStore';
import { ICourse } from '@/lib/data';
import Image from 'next/image';


const Cart = () => {
  const {cartItems, removeFromCart, updateQuantity, clearCart} = UseCartStore();
 

  const getPriceValue = (priceStr:string) => {
    return parseFloat(priceStr.replace('$', ''));
  };
  const getDiscountedPrice = (course:ICourse) => {
    const originalPrice = getPriceValue(course.price);
    const discountAmount = (originalPrice * course.discount) / 100;
    return originalPrice - discountAmount;
  }
  const subtotal = cartItems.reduce((sum, item) => {
    return sum + (getDiscountedPrice(item) * item.quantity);
  }, 0);

  const originalTotal = cartItems.reduce((sum, item) => {
    return sum + (getPriceValue(item.price) * item.quantity);
  }, 0);

  const totalSavings = originalTotal - subtotal;

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-card rounded-2xl shadow-lg p-6 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <ShoppingCart className="w-8 h-8 text-[#6366F1]" />
              <h1 className="text-3xl font-bold text-foreground">Shopping Cart</h1>
            </div>
          </div>
          <p className="text-muted-foreground mt-2">{cartItems.length} {cartItems.length === 1 ? 'course' : 'courses'} in cart</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-4">
            {cartItems.length === 0 ? (
              <div className="bg-card rounded-2xl shadow-lg p-12 text-center">
                <ShoppingCart className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Your cart is empty</h3>
                <p className="text-muted-foreground">Add some courses to get started!</p>
              </div>
            ) : (
              cartItems.map((item) => (
                <div key={item.id} className="bg-card rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="flex gap-6">
                    <div className="shrink-0">
                      <div className="w-40 h-24 bg-linear-to-br from-[#818CF8] to-[#6366F1] rounded-lg flex items-center justify-center">
                        <Image
                        src={item.image}
                        alt={item.title}
                        width={160}
                        height={96}
                        className="w-full h-full object-cover"
                      />
                      </div>
                    </div>

                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <span className="inline-block px-3 py-1 bg-[#EEF2FF] text-[#6366F1] text-xs font-medium rounded-full mb-2">
                            {item.category}
                          </span>
                          <h3 className="text-lg font-semibold text-foreground mb-1 line-clamp-2">
                            {item.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">by {item.instructorName}</p>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-500 hover:text-red-700 transition-colors p-2"
                          title="Remove from cart"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>

                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                        <div className="flex items-center gap-1">
                          <span className="text-[#6366F1]">★</span>
                          <span className="font-medium text-foreground">{item.rating}</span>
                        </div>
                        <span>•</span>
                        <span>{item.students} students</span>
                      </div>

                      {/* Price & Quantity */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-8 h-8 rounded-lg border-2 border-input hover:border-[#6366F1] flex items-center justify-center transition-colors"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="w-8 text-center font-semibold text-foreground">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8 rounded-lg border-2 border-input hover:border-[#6366F1] flex items-center justify-center transition-colors"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>

                        <div className="text-right">
                          <div className="flex items-center gap-2">
                            {item.discount > 0 && (
                              <span className="text-sm text-muted-foreground line-through">{item.price}</span>
                            )}
                            <span className="text-2xl font-bold text-[#6366F1]">
                              ${getDiscountedPrice(item).toFixed(2)}
                            </span>
                          </div>
                          {item.discount > 0 && (
                            <span className="inline-flex items-center gap-1 text-sm text-[#6366F1] font-medium">
                              <Tag className="w-3 h-3" />
                              {item.discount}% off
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="lg:col-span-1">
            <div className="bg-card rounded-2xl shadow-lg p-6  top-4">
              <h2 className="text-xl font-bold text-foreground mb-4">Order Summary</h2>
              
              <div className="space-y-3 mb-4">
                <div className="flex justify-between text-muted-foreground">
                  <span>Original Price:</span>
                  <span className="line-through">${originalTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-[#6366F1] font-medium">
                  <span>Discount Savings:</span>
                  <span>-${totalSavings.toFixed(2)}</span>
                </div>
                <div className="border-t pt-3 flex justify-between text-lg font-bold text-foreground">
                  <span>Total:</span>
                  <span className="text-[#6366F1]">${subtotal.toFixed(2)}</span>
                </div>
              </div>

              <button
                disabled={cartItems.length === 0}
                className="w-full py-3 bg-[#6366F1] text-white font-semibold rounded-xl hover:bg-[#4F46E5] transition-colors disabled:bg-muted disabled:text-muted-foreground disabled:cursor-not-allowed"
              >
                Checkout
              </button>

              <div className="mt-4 p-4 bg-[#EEF2FF] rounded-lg border border-[#C7D2FE]">
                <p className="text-sm text-[#4F46E5] font-medium">
                  🎉 You&apos;re saving ${totalSavings.toFixed(2)} on this order!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;