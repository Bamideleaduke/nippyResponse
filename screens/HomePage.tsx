import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import ServicesSlide from "../components/ServicesSlide";
import { GlobalStyles } from "../constant/Styles";
import EmergencyContactService from "../components/EmergencyContactService";
import EmergencyServiceLocation from "../components/EmergencyServiceLocation";

const HomePage = () => {
  return (
    <ScrollView>
      <View style={styles.headerTitleContainer}>
        <Text style={styles.headerSubTitle}>Good morning,</Text>
        <Text style={styles.headerTitle}>What’s your emergency?</Text>
      </View>
      <ServicesSlide />
      <EmergencyContactService />
      <EmergencyServiceLocation />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {},
  headerTitleContainer: { marginVertical: 36, marginHorizontal: 12 },
  headerTitle: {
    fontSize: 30,
    fontWeight: "bold",
  },
  headerSubTitle: {
    fontSize: 24,
    color: GlobalStyles.colors.textGrey,
    fontWeight: "600",
  },
});

export default HomePage;
