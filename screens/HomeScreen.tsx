import { ScrollView, StyleSheet } from "react-native";
import pins from "../assets/data/pins";
import Pin from "../components/Pin";

import { View } from "../components/Themed";
import { RootTabScreenProps } from "../types";

export default function HomeScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={{ backgroundColor: "pink", flex: 1 }}>
          {pins
            .filter((_, index) => index % 2 === 0)
            .map((pin) => (
              <Pin pin={pin} key={pin.id} />
            ))}
        </View>
        <View style={{ backgroundColor: "green", flex: 1 }}>
          {pins
            .filter((_, index) => index % 2 !== 0)
            .map((pin) => (
              <Pin pin={pin} key={pin.id} />
            ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
  },
});
