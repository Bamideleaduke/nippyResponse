import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../constant/Styles";

const NotificationCard = ({ data }: any) => {
  const { title, date, time, content } = data;
  return (
    <Pressable>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.content}>{content}</Text>
        <View style={styles.date}>
          <Text style={styles.dateText}>{date}</Text>
          <Text style={styles.dateText}>{time}</Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: GlobalStyles.colors.powderBlue,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 14,
  },
  title: {
    fontWeight: 700,
    fontSize: 16,
  },
  content: {
    fontSize: 14,
    lineHeight: 20,
    marginVertical: 14,
    color: GlobalStyles.colors.textGrey,
  },
  date: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  dateText: {
    fontSize: 14,
    color: GlobalStyles.colors.textGrey,
  },
});

export default NotificationCard;
