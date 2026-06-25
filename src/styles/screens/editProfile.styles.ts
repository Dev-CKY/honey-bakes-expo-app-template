import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  scrollView: {
    flex: 1,
    backgroundColor: "#FFFFE3",
  },

  scrollContent: {
    paddingBottom: scale(40),
  },

  contentContainer: {
    paddingHorizontal: scale(20),
    paddingTop: scale(20),
  },

  avatarSection: {
    alignItems: "center",
    marginTop: scale(25),
  },

  avatarWrapper: {
    position: "relative",
  },

  avatar: {
    height: scale(110),
    width: scale(110),
    borderRadius: scale(55),
  },

  editAvatarButton: {
    position: "absolute",
    bottom: 0,
    right: 0,
    height: scale(40),
    width: scale(40),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: scale(20),
    borderWidth: scale(1),
    borderColor: "#1F1500",
    backgroundColor: "#F7BC5D",
  },

  userName: {
    marginTop: scale(10),
    fontSize: scale(20),
    fontFamily: "kalnia-medium",
    color: "#1F1500",
  },

  userEmail: {
    fontSize: scale(14),
    fontFamily: "poppins-regular",
    color: "#C2A26F",
  },

  formContainer: {
    marginTop: scale(30),
    rowGap: scale(20),
  },

  genderRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  genderLabel: {
    width: scale(80),
    fontSize: scale(16),
    fontFamily: "poppins-regular",
    color: "#C2A26F",
  },

  genderButtonsContainer: {
    flex: 1,
    flexDirection: "row",
    columnGap: scale(10),
  },

  buttonContainer: {
    marginTop: scale(30),
    rowGap: scale(16),
  },

  saveButton: {
    height: scale(64),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: scale(32),
    borderWidth: scale(2),
    borderColor: "#1F1500",
    backgroundColor: "#F7BC5D",
  },

  saveButtonText: {
    fontSize: scale(20),
    fontFamily: "poppins-medium",
    color: "#1F1500",
  },

  discardButton: {
    height: scale(64),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: scale(32),
    borderWidth: scale(1),
    borderColor: "#1F1500",
    borderStyle: "dashed",
  },

  discardButtonText: {
    fontSize: scale(20),
    fontFamily: "poppins-medium",
    color: "#1F1500",
  },
});

export default styles;
