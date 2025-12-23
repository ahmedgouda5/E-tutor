"use client";

import React, { memo, useCallback, useState, use } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PaymentOption } from "@/components/featuers/CourseDetails/PaymentLogos";

type PaymentType = "visa" | "mastercard" | "paypal";

const COURSES = [
  {
    id: 1,
    title: "Graphic Design Masterclass - Learn GREAT Design",
    author: "Courtney Henry",
    price: 13,
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=300&h=200&fit=crop",
  },
  {
    id: 2,
    title: "Learn Python Programming Masterclass",
    author: "Marvin McKinney",
    price: 89,
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=300&h=200&fit=crop",
  },
  {
    id: 3,
    title: "Instagram Marketing 2021: Complete Guide",
    author: "Jacob Jones",
    price: 32,
    oldPrice: 62,
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=300&h=200&fit=crop",
  },
];

export default function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const router = useRouter();
  const [selectedPayment, setSelectedPayment] = useState<PaymentType>("visa");

  const handleBuyNow = useCallback(() => {
    toast.success("Payment successful 🎉");
    router.push(`/ELearn/courses/${id}/gift/watch`);
  }, [id, router]);

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
        <nav className="flex items-center gap-2 my-4 justify-center">
           <h1 className="text-3xl font-bold">Checkout</h1> 
        </nav>
      <div className="max-w-6xl mx-auto space-y-6 py-4">
        <h4 className="text-3xl font-bold">Payment Method</h4>
        <div className="grid lg:grid-cols-4 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardContent className="p-6 space-y-4">
                <PaymentOption
                  type="visa"
                  label="4855 **** **** ****"
                  name="Vako Shvili"
                  expiry="04/24"
                  selected={selectedPayment}
                  onSelect={setSelectedPayment}
                />

                <PaymentOption
                  type="mastercard"
                  label="5795 **** **** ****"
                  name="Vako Shvili"
                  expiry="04/24"
                  selected={selectedPayment}
                  onSelect={setSelectedPayment}
                />

                <PaymentOption
                  type="paypal"
                  description="You will be redirected to the PayPal site after reviewing your order."
                  selected={selectedPayment}
                  onSelect={setSelectedPayment}
                />
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center justify-between border border-green-500 rounded-lg p-4">
                  <span className="font-medium">New Payment Card</span>
                  <CheckCircle2 className="text-green-500" />
                </div>

                <Input placeholder="Name on card" />
                <Input placeholder="Card Number" />

                <div className="grid grid-cols-2 gap-4">
                  <Input placeholder="MM / YY" />
                  <Input placeholder="CVC" />
                </div>

                <label className="flex items-center gap-2 text-sm text-gray-600">
                  <input type="checkbox" className="accent-orange-500" />
                  Remember this card, save it on my card list
                </label>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardContent className="p-4 space-y-4">
                <h3 className="font-semibold">Courses 03</h3>

                {COURSES.map((course) => (
                  <div key={course.id} className="flex gap-3">
                    <Image
                      src={course.image}
                      alt={course.title}
                      width={80}
                      height={60}
                      className="rounded object-cover"
                    />
                    <div className="flex-1 text-sm">
                      <p className="text-gray-500">
                        Course by: {course.author}
                      </p>
                      <p className="font-medium leading-snug">
                        {course.title}
                      </p>
                      <div className="flex gap-2 items-center">
                        <span className="text-orange-500 font-semibold">
                          ${course.price.toFixed(2)}
                        </span>
                        {course.oldPrice && (
                          <span className="line-through text-gray-400">
                            ${course.oldPrice.toFixed(2)}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4 space-y-4">
                <h3 className="font-semibold">Order Summary</h3>

                <Row label="Subtotal" value="$61.97 USD" />
                <Row label="Coupon Discount" value="8%" />

                <div className="border-t pt-3 flex justify-between font-bold text-lg">
                  <span>Total:</span>
                  <span>$75.00 USD</span>
                </div>

                <Button
                  onClick={handleBuyNow}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white py-6 text-base"
                >
                  Complete Payment
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

const Row = memo(({ label, value }: { label: string; value: string }) => (
  <div className="flex justify-between text-sm text-gray-600">
    <span>{label}</span>
    <span className="font-medium text-gray-900">{value}</span>
  </div>
));
Row.displayName = "Row";

