import React from "react";
import { ScrollView, Text, View, StyleSheet } from "react-native";
import EmergencyContactService from "../../components/EmergencyContactService";
import EmergencyServiceLocation from "../../components/EmergencyServiceLocation";
import { GlobalStyles } from "../../constant/Styles";

const PoliceService = () => {
  return (
    <ScrollView>
      <View style={styles.headerTitleContainer}>
        <Text style={styles.headerSubTitle}>Good Day,</Text>
        <Text style={styles.headerTitle}>
          Find the Nearest Ambulance Facility
        </Text>
      </View>
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

export default PoliceService;
