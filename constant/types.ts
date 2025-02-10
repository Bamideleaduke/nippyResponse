import { Ionicons } from "@expo/vector-icons";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type IoniconName = React.ComponentProps<typeof Ionicons>["name"];

export type RootStackParamList = {
  main: undefined;
  map: { lat: number; lng: number };
};

export type MapScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "map"
>;
