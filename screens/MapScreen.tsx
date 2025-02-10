import React from "react";
import { Text, View, StyleSheet, Image, Platform } from "react-native";
import { GlobalStyles } from "../constant/Styles";
import { getMapPreview } from "../utils/location";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";

interface RouteParams {
  params?: {
    lat?: number;
    lng?: number;
  };
}

const MapScreen = ({ route }: { route: RouteParams }) => {
  const { lat, lng } = route.params || {};

  const region = {
    latitude: lat,
    longitude: lng,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  if (!MapView || !Marker) {
    return <Text>Loading map...</Text>;
  }

  return (
    <View style={styles.container}>
      <Text>Maps</Text>
      {Platform.OS === "web" && (
        <Image
          style={styles.image}
          source={{
            uri: getMapPreview(lat, lng),
          }}
        />
      )}

      {(Platform.OS === "ios" || Platform.OS === "android") &&
      MapView &&
      Marker ? (
        <MapView style={styles.map} initialRegion={region}>
          {lat && (
            <Marker
              // title="Selected Location"
              coordinate={{
                latitude: lat,
                longitude: lng,
              }}
            />
          )}
        </MapView>
      ) : (
        <Text>Loading Map...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  textColor: {
    color: GlobalStyles.colors.primaryRed,
  },
  image: {
    height: 400,
  },
});

export default MapScreen;
