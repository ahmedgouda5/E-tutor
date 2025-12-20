"use client";
import React, { use, useState, useCallback, memo } from "react";
import { Star, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

interface PaymentOptionProps {
  type: "visa" | "mastercard" | "paypal";
  selectedPayment: string;
  onSelect: (type: string) => void;
}

interface RowProps {
  label: string;
  value: string;
}

const COURSE_DATA = {
  title: "Complete Website Responsive Design",
  image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop",
  rating: 4.8,
  reviews: 451,
  students: 2847,
} as const;

const ORDER_SUMMARY = {
  originalPrice: "$75.00",
  discount: "-$0",
  tax: "$0",
  total: "$75.00 USD",
} as const;

const RecipientSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Enter a valid email"),
  giftNote: z.string().max(120, "Max 120 characters"),
});

type RecipientInputs = z.infer<typeof RecipientSchema>;

const GiftMessageSchema = z.object({
  message: z.string().max(500, "Max 500 characters"),
});

type GiftMessageInputs = z.infer<typeof GiftMessageSchema>;

export default function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  console.log(id);
  
  const router = useRouter();
  const [selectedPayment, setSelectedPayment] = useState("");

  const {
    register: registerRecipient,
    handleSubmit: handleSubmitRecipient,
    formState: { errors: errorsRecipient },
  } = useForm<RecipientInputs>({
    resolver: zodResolver(RecipientSchema),
  });

  const onSubmitRecipient = useCallback((data: RecipientInputs) => {
    console.log("Recipient data:", data);
  }, []);

  const {
    register: registerMessage,
    handleSubmit: handleSubmitMessage,
    formState: { errors: errorsMessage },
  } = useForm<GiftMessageInputs>({
    resolver: zodResolver(GiftMessageSchema),
  });

  const onSubmitMessage = useCallback((data: GiftMessageInputs) => {
    console.log("Gift message:", data);
  }, []);

  const handlePaymentSelect = useCallback((type: string) => {
    setSelectedPayment(type);
  }, []);



  const handleBuyNow = useCallback(() => {
    console.log(id);
    
    toast.success("Payment successful");
    router.push(`/ELearn/courses/${id}/gift/watch`);
  }, [id, router]);


  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-sm text-gray-500 mb-6">Home / Courses / Gift</div>

        <h1 className="text-3xl font-bold mb-8">Gift Course</h1>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardContent className="p-6 space-y-4">
                <h3 className="font-semibold text-lg">Recipient Information</h3>
                <form onSubmit={handleSubmitRecipient(onSubmitRecipient)} className="space-y-4">
                  <Input placeholder="Recipient's Name" {...registerRecipient("name")} />
                  {errorsRecipient.name && (
                    <p className="text-red-500 text-sm">{errorsRecipient.name.message}</p>
                  )}

                  <Input placeholder="Recipient's Email" {...registerRecipient("email")} />
                  {errorsRecipient.email && (
                    <p className="text-red-500 text-sm">{errorsRecipient.email.message}</p>
                  )}

                  <Input placeholder="Gift Note" {...registerRecipient("giftNote")} />
                  {errorsRecipient.giftNote && (
                    <p className="text-red-500 text-sm">{errorsRecipient.giftNote.message}</p>
                  )}

                  <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                    Save Recipient Info
                  </Button>
                </form>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 space-y-4">
                <h3 className="font-semibold text-lg">Gift Message</h3>
                <form onSubmit={handleSubmitMessage(onSubmitMessage)} className="space-y-3">
                  <textarea
                    {...registerMessage("message")}
                    className="w-full min-h-[120px] px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="Add your personal message (max 500 chars)"
                  />
                  {errorsMessage.message && (
                    <p className="text-red-500 text-sm">{errorsMessage.message.message}</p>
                  )}

                  <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                    Save Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 space-y-4">
                <h3 className="font-semibold text-lg">Payment Method</h3>
                <div className="space-y-3">
                  <PaymentOption type="visa" selectedPayment={selectedPayment} onSelect={handlePaymentSelect} />
                  <PaymentOption type="mastercard" selectedPayment={selectedPayment} onSelect={handlePaymentSelect} />
                  <PaymentOption type="paypal" selectedPayment={selectedPayment} onSelect={handlePaymentSelect} />
                </div>
                <button className="text-orange-500 text-sm mt-2">+ Add New Card</button>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardContent className="p-4 space-y-4">
                <div className="flex flex-col sm:flex-row lg:flex-col gap-4">
                  <Image
                    src={COURSE_DATA.image}
                    alt="Course"
                    width={400}
                    height={300}
                    priority
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 160px, 400px"
                    className="w-full sm:w-40 lg:w-full h-40 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h2 className="text-lg font-semibold mb-2">{COURSE_DATA.title}</h2>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-orange-400 text-orange-400" />
                        {COURSE_DATA.rating} ({COURSE_DATA.reviews} reviews)
                      </span>
                      <span>{COURSE_DATA.students.toLocaleString()} students</span>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold mt-4">Order Summary</h3>
                <div className="space-y-3 text-sm">
                  <Row label="Original Price" value={ORDER_SUMMARY.originalPrice} />
                  <Row label="Discount" value={ORDER_SUMMARY.discount} />
                  <Row label="Tax" value={ORDER_SUMMARY.tax} />
                </div>
                <div className="border-t my-4"></div>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold">Total</span>
                  <span className="text-2xl font-bold">{ORDER_SUMMARY.total}</span>
                </div>
                <Button onClick={handleBuyNow} className="w-full bg-orange-500 hover:bg-orange-600 text-white py-5 text-base font-medium">
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

const Row = memo<RowProps>(({ label, value }) => (
  <div className="flex justify-between text-sm">
    <span className="text-gray-600">{label}:</span>
    <span className="font-medium">{value}</span>
  </div>
));
Row.displayName = "Row";

const PaymentOption = memo<PaymentOptionProps>(({ type, selectedPayment, onSelect }) => {
  const isSelected = selectedPayment === type;
  
  return (
    <div
      onClick={() => onSelect(type)}
      className={`p-4 border-2 rounded-lg cursor-pointer flex items-center justify-between transition ${
        isSelected ? "border-green-500 bg-green-50" : "border-gray-200"
      }`}
    >
      <div className="flex items-center gap-3">
        {type === "visa" && <VisaLogo />}
        {type === "mastercard" && <MastercardLogo />}
        {type === "paypal" && <PaypalLogo />}
        <span className="text-sm text-gray-700">{type.toUpperCase()}</span>
      </div>
      {isSelected && <CheckCircle2 className="w-5 h-5 text-green-500" />}
    </div>
  );
});
PaymentOption.displayName = "PaymentOption";

const VisaLogo = memo(() => (
  <Image
    src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png"
    alt="Visa"
    width={48}
    height={32}
    className="object-contain"
    loading="lazy"
  />
));
VisaLogo.displayName = "VisaLogo";

const MastercardLogo = memo(() => (
  <Image
    src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
    alt="Mastercard"
    width={48}
    height={32}
    className="object-contain"
    loading="lazy"
  />
));
MastercardLogo.displayName = "MastercardLogo";

const PaypalLogo = memo(() => (
  <Image
    src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
    alt="PayPal"
    width={48}
    height={32}
    className="object-contain"
    loading="lazy"
  />
));
PaypalLogo.displayName = "PaypalLogo";
