// import React from "react";
// import { Text, View, StyleSheet } from "react-native";
// import MapView, { Marker } from "react-native-maps";

// const MapScreen = ({ route }) => {
//   const { lat, lng } = route.params || {};
//   const region = {
//     latitude: lat,
//     longitude: lng,
//     latitudeDelta: 0.0922,
//     longitudeDelta: 0.0421,
//   };

//   return (
//     <View style={styles.container}>
//       <Text>Maps</Text>
//       <MapView style={styles.map} initialRegion={region}>
//         {lat && (
//           <Marker
//             coordinate={{
//               latitude: lat,
//               longitude: lng,
//             }}
//           />
//         )}
//       </MapView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   map: {
//     flex: 1,
//   },
// });

// export default MapScreen;
