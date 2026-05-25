// useOrderDetails.ts

export const useOrderDetails = () => {
  const orderSummary = [
    { label: "Items", value: 1 },
    { label: "Sub total", value: "$54.05" },
    { label: "Tax", value: "8%" },
    { label: "Payment status", value: "pending" },
    { label: "Payment method", value: "COD" },
  ];

  const getPaymentStatusStyle = (status: string) => {
    switch (status.toLowerCase()) {
      case "paid":
        return {
          backgroundColor: "#F7BC5D",
          textColor: "#FFFFFF",
        };

      case "pending":
        return {
          backgroundColor: "#F19D00",
          textColor: "#FFFFFF",
        };

      case "cancelled":
        return {
          backgroundColor: "#ff2200",
          textColor: "#FFFFFF",
        };

      default:
        return {
          backgroundColor: "#F7BC5D",
          textColor: "#1F1500",
        };
    }
  };

  return {
    orderSummary,
    getPaymentStatusStyle,
  };
};
