import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";

export const VEG_COLOR = "#00CF21";
export const NON_VEG_COLOR = "#F7715D";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFE3",
  },

  scrollContent: {
    paddingBottom: scale(40),
  },

  heroImage: {
    height: scale(280),
    paddingHorizontal: scale(20),
    paddingTop: scale(20),
  },

  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  backButtonWrapper: {
    backgroundColor: "#FFFFFF",
    height: scale(48),
    width: scale(48),
    borderRadius: scale(24),
  },

  favoriteButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F7BC5D",
    height: scale(50),
    width: scale(50),
    borderRadius: scale(25),
    borderWidth: scale(1.5),
    borderColor: "#1F1500",
  },

  quantityContainer: {
    zIndex: 10,
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#F6F0D4",
    marginTop: scale(-25),
    height: scale(55),
    width: scale(130),
    borderRadius: scale(27.5),
    paddingHorizontal: scale(6),
  },

  quantityButton: {
    height: scale(34),
    width: scale(34),
    borderRadius: scale(17),
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
  },

  plusButton: {
    borderWidth: scale(1.5),
    borderColor: "#1F1500",
    backgroundColor: "#F7BC5D",
  },

  detailsContainer: {
    marginTop: scale(20),
  },

  titleRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },

  titleContainer: {
    flex: 1,
    marginRight: scale(12),
    paddingHorizontal: scale(10),
  },

  title: {
    marginBottom: scale(2),
    fontSize: scale(20),
    fontFamily: "poppins-medium",
    color: "#1F1500",
  },

  brand: {
    fontSize: scale(14),
    fontFamily: "poppins-regular",
    color: "#C2A26F",
  },

  foodTypeBadge: {
    alignItems: "center",
    justifyContent: "center",
    height: scale(38),
    borderRadius: scale(19),
    paddingHorizontal: scale(18),
    marginRight: scale(10),
  },

  foodTypeText: {
    fontSize: scale(12),
    fontFamily: "poppins-medium",
    color: "#FFFFFF",
  },

  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: scale(8),
    marginBottom: scale(18),
    paddingHorizontal: scale(10),
  },

  starsRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  ratingText: {
    marginLeft: scale(8),
    fontSize: scale(14),
    fontFamily: "poppins-regular",
    color: "#8A8A8A",
  },

  sectionContainer: {
    paddingHorizontal: scale(10),
  },

  description: {
    marginTop: scale(5),
    marginBottom: scale(18),
    fontSize: scale(14),
    lineHeight: scale(28),
    fontFamily: "poppins-regular",
    color: "#C2A26F",
  },

  ingredientsList: {
    paddingTop: scale(10),
    paddingHorizontal: scale(10),
  },

  ingredientItem: {
    marginRight: scale(18),
    alignItems: "center",
  },

  ingredientImageWrapper: {
    height: scale(72),
    width: scale(72),
    borderRadius: scale(36),
    backgroundColor: "#F6F0D4",
    alignItems: "center",
    justifyContent: "center",
  },

  ingredientImage: {
    height: scale(35),
    width: scale(35),
  },

  ingredientName: {
    marginTop: scale(8),
    fontSize: scale(12),
    fontFamily: "poppins-medium",
    color: "#1F1500",
  },

  bottomBar: {
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#F6F0D4",
    marginBottom: scale(20),
    height: scale(60),
    width: "85%",
    borderRadius: scale(30),
  },

  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: scale(20),
  },

  oldPrice: {
    marginTop: scale(5),
    fontSize: scale(14),
    fontFamily: "poppins-regular",
    color: "#757B7E",
    textDecorationLine: "line-through",
  },

  totalPrice: {
    marginLeft: scale(5),
    fontSize: scale(20),
    fontFamily: "poppins-medium",
    color: "#1F1500",
  },

  addToCartButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F7BC5D",
    height: scale(60),
    width: "50%",
    borderRadius: scale(30),
    borderWidth: scale(1.5),
    borderColor: "#1F1500",
  },

  addToCartText: {
    fontSize: scale(16),
    fontFamily: "poppins-medium",
    color: "#1F1500",
  },
});

export default styles;
