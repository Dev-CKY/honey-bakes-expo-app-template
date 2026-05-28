import atTheRate from "../assets/icons/svg/atTheRate";
import call from "../assets/icons/svg/call";
import globe from "../assets/icons/svg/globe";
import headphone from "../assets/icons/svg/headphone";
import whatsapp from "../assets/icons/svg/whatsapp";

const CONTACT_ROUTES = [
  {
    id: 1,
    icon: headphone,
    routeName: "Customer Services",
    onPress: () => {},
  },
  {
    id: 2,
    icon: whatsapp,
    routeName: "WhatsApp",
    onPress: () => {},
  },
  {
    id: 3,
    icon: call,
    routeName: "Call Us",
    onPress: () => {},
  },
  {
    id: 4,
    icon: globe,
    routeName: "Website",
    onPress: () => {},
  },
  {
    id: 5,
    icon: atTheRate,
    routeName: "Gmail",
    onPress: () => {},
  },
];

export default CONTACT_ROUTES;
