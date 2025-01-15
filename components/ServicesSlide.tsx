import React from "react";
import { View, Image, StyleSheet, Text, ScrollView } from "react-native";
import { GlobalStyles } from "../constant/Styles";

const serviceData = [
  {
    id: "01",
    icon: require("../assets/services/accident.svg"),
    title: "Accident",
  },
  { id: "02", icon: require("../assets/services/fire.svg"), title: "Fire" },
  {
    id: "03",
    icon: require("../assets/services/medical.svg"),
    title: "Medical",
  },
  { id: "04", icon: require("../assets/services/crime.svg"), title: "Crime" },
  { id: "05", icon: require("../assets/services/rape.svg"), title: "Rape" },
  { id: "06", icon: require("../assets/services/flood.svg"), title: "Flood" },
];

const ServicesSlide = () => {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 16, marginHorizontal: 10 }}
      >
        {serviceData.map((data) => {
          return (
            <View key={data.id} style={styles.itemContainer}>
              <View style={[styles.logoContainer]}>
                <Image source={data.icon} style={styles.image} />
              </View>
              <Text style={styles.logoText}>{data.title}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flexDirection: "row",
    // gap: 20,
    // flex: 1,
  },
  itemContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  logoContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: GlobalStyles.colors.powderBlue,
    width: 55,
    height: 50,
    borderRadius: 8,
  },
  logoText: {
    // color: GlobalStyles.colors.primaryRed,
    fontWeight: "bold",
    marginTop: 8,
  },
  image: {
    // width: 20,
    height: 20,
  },
});

export default ServicesSlide;
