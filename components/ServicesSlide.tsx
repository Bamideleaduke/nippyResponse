import React from "react";
import { View, Image, StyleSheet, Text, ScrollView } from "react-native";

const serviceData = [
  {
    id: "01",
    icon: require("../assets/services/ambulance.png"),
    title: "Ambulance",
  },
  {
    id: "02",
    icon: require("../assets/services/fireService.png"),
    title: "Fire",
  },
  {
    id: "03",
    icon: require("../assets/services/health.png"),
    title: "Medical",
  },
  {
    id: "04",
    icon: require("../assets/services/security.png"),
    title: "Security",
  },
  {
    id: "05",
    icon: require("../assets/services/psycology.png"),
    title: "psychology",
  },
  // { id: "06", icon: require("../assets/services/flood.svg"), title: "Flood" },
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
          const Icon = data.icon;
          return (
            <View key={data.id} style={styles.itemContainer}>
              <View style={[styles.logoContainer]}>
                {/* <Icon width={55} height={50} /> */}
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
    // flexDirection: "row",
    // justifyContent: "center",
    // alignItems: "center",
    // backgroundColor: GlobalStyles.colors.powderBlue,
    // width: 55,
    // height: 50,
    borderRadius: 8,
  },
  logoText: {
    // color: GlobalStyles.colors.primaryRed,
    fontWeight: "bold",
    marginTop: 8,
  },
  image: {
    width: 55,
    height: 50,
  },
});

export default ServicesSlide;
