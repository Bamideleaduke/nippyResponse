import React, { useEffect, useRef, useState } from "react";
import {
  createDrawerNavigator,
  DrawerNavigationProp,
} from "@react-navigation/drawer";
import { StatusBar } from "expo-status-bar";
import { Modal, StyleSheet, View, Text, Button } from "react-native";
import HomePage from "./screens/HomePage";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  DrawerActions,
  NavigationContainer,
  useNavigation,
} from "@react-navigation/native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import PoliceService from "./screens/services/PoliceService";
import Health from "./screens/services/Health";
import Ambulance from "./screens/services/Ambulance";
import Alert from "./screens/Alert";
import { Entypo, FontAwesome5 } from "@expo/vector-icons";
import { GlobalStyles } from "./constant/Styles";
import NippyLogo from "./components/shared/NippyLogo";

type RootStackParamList = {
  home: undefined;
  services: undefined;
  alerts: undefined;
};
// type BottomTabProps = BottomTabNavigationProp<RootStackParamList, "services">;

const Drawer = createDrawerNavigator();
const BottomTab = createBottomTabNavigator();

function MyDrawer() {
  // const navigation = useNavigation();
  // Toggle the drawer on every screen mount
  // useEffect(() => {
  //   navigation.dispatch(DrawerActions.toggleDrawer());
  // }, [navigation]);
  return (
    <Drawer.Navigator id={undefined}>
      <Drawer.Screen name="police" component={PoliceService} />
      <Drawer.Screen name="health" component={Health} />
      <Drawer.Screen name="ambulance" component={Ambulance} />
    </Drawer.Navigator>
  );
}
type DrawerNavigationProps = DrawerNavigationProp<
  RootStackParamList,
  "services"
>;

function MainTabs() {
  const navigation = useNavigation<DrawerNavigationProp<any>>();
  const [drawerOpened, setDrawerOpened] = useState(false);
  // const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    const unsubscribe = navigation.addListener("state", (e) => {
      const routes = e?.data?.state?.routes;
      const routeName = routes ? routes[e.data.state.index]?.name : null;

      if (routeName === "services" && !drawerOpened) {
        // Open the drawer only if it's not already opened
        navigation.dispatch(DrawerActions.openDrawer());
        setDrawerOpened(true); // Track the drawer state
      } else if (routeName !== "services" && drawerOpened) {
        // Close the drawer only if it's currently open
        navigation.dispatch(DrawerActions.closeDrawer());
        setDrawerOpened(false); // Track the drawer state
      }
    });

    return unsubscribe; // Cleanup listener
  }, [navigation, drawerOpened]); // Proper dependency array

  // const [drawerOpened, setDrawerOpened] = useState(false);

  // useEffect(() => {
  //   const unsubscribe = navigation.addListener("state", (e) => {
  //     // const routeName = e.data.state.routes[e.data.state.index]?.name;
  //     const routes = e?.data?.state?.routes;
  //     const routeName = routes ? routes[e.data.state.index]?.name : null;
  //     if (routeName === "services") {
  //       navigation.dispatch(DrawerActions.openDrawer());
  //       setDrawerOpened(true);
  //     } else {
  //       setDrawerOpened(false);
  //     }
  //   });

  //   return unsubscribe;
  // }, [navigation, drawerOpened]);

  return (
    <>
      {/* <Modal
        visible={isModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setIsModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>This is the Alert Modal</Text>
            <Button title="Close" onPress={() => setIsModalVisible(false)} />
          </View>
        </View>
      </Modal> */}
      <BottomTab.Navigator
        id={undefined}
        screenOptions={{
          // headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
          headerTintColor: "white",
          tabBarStyle: {
            // backgroundColor: GlobalStyles.colors.primary500,
          },
          tabBarActiveTintColor: GlobalStyles.colors.primaryRed,
          header: () => {
            return (
              <View style={styles.appHeaderStyles}>
                <NippyLogo />
              </View>
            );
          },
        }}
      >
        <BottomTab.Screen
          name="home"
          component={HomePage}
          options={{
            // headerShown: false,
            tabBarIcon: ({ color, size }) => {
              return <Entypo name="home" color={color} size={size} />;
            },
          }}
        />
        <BottomTab.Screen
          name="services"
          component={MyDrawer}
          // listeners={{
          //   tabPress: (e) => {
          //     // e.preventDefault(); // Prevent default navigation
          //     navigation.dispatch(DrawerActions.toggleDrawer());
          //   },
          // }}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5 name="hands" color={color} size={size} />
            ),
          }}
        />
        <BottomTab.Screen
          name="alerts"
          component={Alert}
          // listeners={{
          //   tabPress: (e) => {
          //     setIsModalVisible(true);
          //   },
          // }}
          options={{
            // headerShown: false,
            tabBarIcon: ({ color, size }) => {
              return <FontAwesome5 name="bell" color={color} size={size} />;
            },
          }}
        />
      </BottomTab.Navigator>
    </>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <MainTabs />
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  appHeaderStyles: {
    borderColor: GlobalStyles.colors.textGrey,
    borderBottomWidth: 1,
    paddingBottom: 12,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
  },
});
