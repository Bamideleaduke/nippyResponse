import React from "react";
import { Pressable, View, StyleSheet, Text } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { GlobalStyles } from "../constant/Styles";

interface LocationSuggestionProps {
  text: string;
}

const LocationSuggestion = ({ text }: LocationSuggestionProps) => {
  return (
    <Pressable style={styles.container}>
      <View>
        <View style={styles.content}>
          <Text style={styles.contentText}>{text}</Text>
          <View style={styles.icon}>
            <Pressable>
              <FontAwesome
                name="phone"
                size={24}
                color={GlobalStyles.colors.textGrey}
              />
            </Pressable>
            <Pressable>
              <Entypo
                name="location-pin"
                size={24}
                color={GlobalStyles.colors.textGrey}
              />
            </Pressable>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 13,
    borderRadius: 8,
    backgroundColor: GlobalStyles.colors.powderBlue,
  },
  icon: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  content: {
    color: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 6,
  },
  contentText: {
    color: GlobalStyles.colors.textGrey,
    fontSize: 16,
    fontWeight: 600,
  },
});

export default LocationSuggestion;
