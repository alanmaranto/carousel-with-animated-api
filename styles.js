import { StyleSheet, Dimensions } from "react-native";
const { width } = Dimensions.get("screen");

const imageW = width * 0.7;
const imageH = imageW * 1.54;

const styles = StyleSheet.create({
  carouselContainer: { flex: 1, backgroundColor: "#000" },
  imageContainer: {
    width,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 20,
  },
  image: {
    width: imageW,
    height: imageH,
    resizeMode: "cover",
    borderRadius: 16,
  },
});

export default styles;
