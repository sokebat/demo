import { CreditCard, Gift, Shield, Truck } from "lucide-react";

export const ServiceData = [
  {
    id: 1,
    title: "Secured Payments",
    description:
      "Secure payment options to ensure that your transactions are protected and your personal information is kept safe.",
    icon: <CreditCard size={35} />,
  },
  {
    id: 2,
    title: "High Quality Materials",
    description:
      "We use only the finest materials in our products, ensuring that they are long-lasting and of the highest quality.",
    icon: <Shield size={35} />,
  },

  {
    id: 3,
    title: "Free Delivery Worldwide",
    description:
      "Enjoy free worldwide delivery on all orders, no matter where you are located.",
    icon: <Truck size={35} />,
  },
  {
    id: 4,
    title: "Send Gifts Easily",
    description:
      "Want to surprise someone special? Our site makes it easy to send a gift to your loved ones with just a few clicks.",
    icon: <Gift size={35} />,
  },
];
