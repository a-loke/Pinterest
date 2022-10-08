import { Image, StyleSheet } from "react-native";
import Pin from "../components/Pin";

import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";

export default function HomeScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  return (
    <View style={styles.container}>
      <Pin
        pin={{
          title: "Title 1",
          image:
            "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/pinterest/0.jpeg",
        }}
      />
      <Pin
        pin={{
          title: "Title 2",
          image:
            "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/pinterest/1.jpeg",
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
});
