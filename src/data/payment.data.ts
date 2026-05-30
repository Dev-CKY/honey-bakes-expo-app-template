export interface PaymentMethod {
  id: number;
  title: string;
  icon: any;
}

export const PAYMENT_METHODS: PaymentMethod[] = [
  {
    id: 1,
    title: "Master card",
    icon: require("@/src/assets/images/custom/icons/card.png"),
  },
  {
    id: 2,
    title: "PayPal",
    icon: require("@/src/assets/images/custom/icons/paypal.png"),
  },
  {
    id: 3,
    title: "COD",
    icon: require("@/src/assets/images/custom/icons/cod.png"),
  },
];
