import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import { GlobalStyles } from "../../constant/Styles";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const NippyLogo = () => {
  return (
    <View style={styles.imageContainer}>
      <View style={[styles.logoContainer]}>
        {/* <Text>
          Nippy <Text style={styles.logoText}>Response</Text>
        </Text> */}
        <Image
          source={require("../../assets/images/nippy-response-logo.svg")}
          style={styles.image}
        />
        <View>
          <FontAwesome name="user-circle" size={24} color="black" />
        </View>
        {/* <ShuriLogo width={imageSize} height={imageSize} /> */}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  imageContainer: {
    marginHorizontal: 20,
    marginTop: 24,
  },
  logoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // marginBottom: 20,
  },
  logoText: { color: GlobalStyles.colors.primaryRed, fontWeight: "bold" },
  image: {
    // width: 20,
    height: 20,
  },
});

export default NippyLogo;
