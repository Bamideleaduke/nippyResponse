import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../constant/Styles";
import CustomButton from "./shared/CustomButton";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Feather from "@expo/vector-icons/Feather";
import Entypo from "@expo/vector-icons/Entypo";
import ImagePicker from "./features/ImagePicker";

const EmergencyContactService = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.emergencyTitle}>Contact Emergency Service</Text>

      <View style={styles.btnGroup}>
        <CustomButton
          icon={<FontAwesome name="phone" size={24} color="white" />}
          text="Call"
          bg="fill"
        />
        {/* <CustomButton
          icon={
            <MaterialIcons
              name="message"
              size={24}
              color={GlobalStyles.colors.primaryRed}
            />
          }
          text="Send SOS Alert"
          bg="outline"
        /> */}
        <CustomButton
          icon={
            <MaterialIcons
              name="message"
              size={24}
              color={GlobalStyles.colors.primaryRed}
            />
          }
          text="Auto share voice record"
          bg="outline"
        />
        <ImagePicker />
        {/* <CustomButton
          icon={
            <Feather
              name="camera"
              size={24}
              color={GlobalStyles.colors.primaryRed}
            />
          }
          text="Auto share Picture"
          bg="outline"
        /> */}
        <CustomButton
          icon={
            <Entypo
              name="location-pin"
              size={24}
              color={GlobalStyles.colors.primaryRed}
            />
          }
          text="Share real-time location / 5mins"
          bg="outline"
        />
        {/* <CustomButton
          icon={null}
          text="ICE (Number to auto-dial in case of Emergency)"
          bg="outline"
        /> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  btnGroup: {
    flexDirection: "column",
    gap: 24,
    marginTop: 20,
  },
  container: {
    backgroundColor: GlobalStyles.colors.primaryRedBg,
    paddingHorizontal: 12,
    paddingVertical: 18,
    marginVertical: 36,
    marginHorizontal: 12,
    borderRadius: 8,
  },
  emergencyTitle: {
    fontWeight: 700,
    fontSize: 20,
    textAlign: "center",
  },
});
export default EmergencyContactService;
