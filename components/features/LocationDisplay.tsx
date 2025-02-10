import {
  useForegroundPermissions,
  PermissionStatus,
  getCurrentPositionAsync,
} from "expo-location";
import React, { useEffect, useState } from "react";
import { Alert, Text, Image, StyleSheet, View } from "react-native";
import { getAddress, getMapPreview } from "../../utils/location";
import { GlobalStyles } from "../../constant/Styles";

const LocationDisplay = () => {
  const [selectedLocation, setSelectedLocation] = useState<any>(null);
  const [address, setAddress] = useState<string | null>(null);
  const [locationPermissionInformation, requestPermission] =
    useForegroundPermissions();

  const VerifyPermission = async () => {
    if (!locationPermissionInformation) {
      const permissionResponse = await requestPermission();
      return permissionResponse;
    }
    if (
      locationPermissionInformation.status === PermissionStatus.UNDETERMINED
    ) {
      const permissionResponse = await requestPermission();
      return permissionResponse.granted;
    }
    if (locationPermissionInformation.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Insufficient Permissions",
        "You need to grant location permissions to use this app"
      );
      return false;
    }
    return true;
  };

  const getUserLocation = async () => {
    const hasPermission = await VerifyPermission();
    if (!hasPermission) {
      return;
    }
    const location = await getCurrentPositionAsync();
    setSelectedLocation({
      lat: location.coords.latitude,
      lng: location.coords.longitude,
    });
  };
  useEffect(() => {
    getUserLocation();
  }, []);

  const fetchAddress = async () => {
    if (selectedLocation) {
      const address = await getAddress(
        selectedLocation.lat,
        selectedLocation.lng
      );
      setAddress(address);
    }
    return false;
  };

  useEffect(() => {
    fetchAddress();
  }, [selectedLocation]);

  let locationPreview = <Text>Unable to pickup user location</Text>;

  if (selectedLocation) {
    locationPreview = (
      <Image
        style={styles.image}
        source={{
          uri: getMapPreview(selectedLocation.lat, selectedLocation.lng),
        }}
      />
    );
  }
  return (
    <View>
      <View style={styles.mapPreview}>{locationPreview}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  mapPreview: {
    width: "100%",
    height: 200,
    marginVertical: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: GlobalStyles.colors.powderBlue,
    borderRadius: 4,
    color: GlobalStyles.colors.bgRed,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
export default LocationDisplay;
