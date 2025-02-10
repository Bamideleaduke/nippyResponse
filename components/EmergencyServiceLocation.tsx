import React from "react";
import { View, Text, StyleSheet } from "react-native";
import LocationSuggestion from "./LocationSuggestion";
import LocationDisplay from "./features/LocationDisplay";

const suggestionData = [
  {
    id: "01",
    title: "Oval Police station",
    phone: "08023456789",
    location: { lng: "3.36172", lat: "6.5075322" },
  },
  {
    id: "02",
    title: "Pentagon ambulance and medicals",
    phone: "08023456789",
    location: { lng: "3.36172", lat: "6.5075322" },
  },
  {
    id: "03",
    title: "Westgate fire station",
    phone: "08023456789",
    location: { lng: "3.36172", lat: "6.5075322" },
  },
];

const EmergencyServiceLocation = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.emergencyTitle}>Emergency services near you</Text>

      <LocationDisplay />

      <View style={styles.suggestionContainer}>
        {suggestionData.map((item) => {
          return (
            <LocationSuggestion key={item.id} text={item.title} {...item} />
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 36,
    marginHorizontal: 12,
  },
  suggestionContainer: {
    flexDirection: "column",
    gap: 14,
  },
  emergencyTitle: {
    fontWeight: 700,
    fontSize: 20,
    textAlign: "center",
    marginBottom: 30,
  },
});

export default EmergencyServiceLocation;
