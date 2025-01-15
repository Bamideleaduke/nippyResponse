import React from "react";
import { Text, View, Image, StyleSheet, Pressable } from "react-native";
import { GlobalStyles } from "../../constant/Styles";

interface ButtonProps {
  style?: any;
  text: string;
  bg: "fill" | "outline";
  icon: React.ReactNode;
}

const CustomButton = ({ bg, style, text, icon }: ButtonProps) => {
  const backgroundColor =
    bg === "fill"
      ? GlobalStyles.colors.primaryRed
      : GlobalStyles.colors.primaryRedBg;

  const borderColor =
    bg === "outline"
      ? GlobalStyles.colors.primaryRed
      : GlobalStyles.colors.primaryRedBg;

  const textColor =
    bg === "outline"
      ? GlobalStyles.colors.primaryRed
      : GlobalStyles.colors.white;

  return (
    <Pressable
      style={[
        styles.container,
        { backgroundColor, borderColor: borderColor },
        style,
      ]}
    >
      <View>
        <View style={styles.content}>
          <Text style={[styles.contentText, { color: textColor }]}>{text}</Text>
          <View>{icon}</View>
          {/* <Image
            source={require("../../assets/services/accident.svg")}
            style={styles.icon}
          /> */}
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingVertical: 13,
    borderRadius: 8,
    borderWidth: 2,
  },
  icon: {
    width: 15,
    height: 15,
  },
  content: {
    color: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
  },
  contentText: {
    // color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default CustomButton;
