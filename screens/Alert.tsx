import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import NotificationCard from "../components/alerts/NotificationCard";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const alertData = [
  {
    id: "01",
    title: "High winds expected",
    content:
      "A strong wind advisory is in effect for your area. Please take the following precautions. Take cautionary methods to keep you and your family safe",
    date: "Oct 9, 2024",
    time: "10:15 pm",
  },
  {
    id: "02",
    title: "High winds expected",
    content:
      "A strong wind advisory is in effect for your area. Please take the following precautions. Take cautionary methods to keep you and your family safe",
    date: "Oct 9, 2024",
    time: "10:15 pm",
  },
  {
    id: "03",
    title: "High winds expected",
    content:
      "A strong wind advisory is in effect for your area. Please take the following precautions. Take cautionary methods to keep you and your family safe",
    date: "Oct 9, 2024",
    time: "10:15 pm",
  },
  {
    id: "04",
    title: "High winds expected",
    content:
      "A strong wind advisory is in effect for your area. Please take the following precautions. Take cautionary methods to keep you and your family safe",
    date: "Oct 9, 2024",
    time: "10:15 pm",
  },
  {
    id: "05",
    title: "High winds expected",
    content:
      "A strong wind advisory is in effect for your area. Please take the following precautions. Take cautionary methods to keep you and your family safe",
    date: "Oct 9, 2024",
    time: "10:15 pm",
  },
  {
    id: "06",
    title: "High winds expected",
    content:
      "A strong wind advisory is in effect for your area. Please take the following precautions. Take cautionary methods to keep you and your family safe",
    date: "Oct 9, 2024",
    time: "10:15 pm",
  },
  {
    id: "07",
    title: "High winds expected",
    content:
      "A strong wind advisory is in effect for your area. Please take the following precautions. Take cautionary methods to keep you and your family safe",
    date: "Oct 9, 2024",
    time: "10:15 pm",
  },
];

const Alert = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <FontAwesome name="bell" size={24} color="black" />
        <Text style={styles.title}>Alerts</Text>
      </View>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        <View style={styles.notificationContainer}>
          {alertData.map((item) => {
            return <NotificationCard key={item.id} data={item} />;
          })}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
    marginBottom: 36,
    flex: 1,
  },
  scroll: {
    flex: 1,
  },
  notificationContainer: {
    flexDirection: "column",
    gap: 12,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginVertical: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default Alert;
