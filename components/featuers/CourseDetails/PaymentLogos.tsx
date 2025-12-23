import Image from "next/image";
import { memo } from "react";
import { CheckCircle2 } from "lucide-react";
export type PaymentType = "visa" | "mastercard" | "paypal";

export const VisaLogo = () => (
  <Image
    src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png"
    alt="Visa"
    objectFit="contain"
    width={40}
    height={24}
  />
);

export const MastercardLogo = () => (
  <Image
    src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
    alt="Mastercard"
    objectFit="contain"
    width={40}
    height={24}
  />
);

export const PaypalLogo = () => (
  <Image
    src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
    alt="PayPal"
    objectFit="contain"
    width={40}
    height={24}
  />
);

export const PaymentOption = memo(
  ({
    type,
    label,
    name,
    expiry,
    description,
    selected,
    onSelect,
  }: {
    type: PaymentType;
    label?: string;
    name?: string;
    expiry?: string;
    description?: string;
    selected: PaymentType;
    onSelect: (t: PaymentType) => void;
  }) => {
    const isActive = selected === type;

    return (
      <div
        onClick={() => onSelect(type)}
        className={`cursor-pointer p-4 rounded-lg border flex justify-between items-center transition ${
          isActive ? "border-green-500 bg-green-50" : "border-gray-200"
        }`}
      >
        <div className="flex gap-4">
          {type === "visa" && <VisaLogo />}
          {type === "mastercard" && <MastercardLogo />}
          {type === "paypal" && <PaypalLogo />}

          <div className="text-sm">
            {label && <p className="font-medium">{label}</p>}
            {name && <p className="text-gray-500">{name}</p>}
            {expiry && <p className="text-gray-400">{expiry}</p>}
            {description && (
              <p className="text-gray-500 max-w-xs">{description}</p>
            )}
          </div>
        </div>

        {isActive && <CheckCircle2 className="text-green-500" />}
      </div>
    );
  }
);
PaymentOption.displayName = "PaymentOption";
