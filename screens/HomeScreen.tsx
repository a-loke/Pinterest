import { ScrollView, StyleSheet } from "react-native";
import pins from "../assets/data/pins";
import MasonryLayout from "../components/MasonryLayout";
import Pin from "../components/Pin";

import { View } from "../components/Themed";

export default function HomeScreen() {
  return <MasonryLayout pins={pins} />;
}
