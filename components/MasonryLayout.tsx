import { ScrollView, StyleSheet } from "react-native";
import Pin from "../components/Pin";

import { View } from "../components/Themed";

interface IMasonryList {
  pins: {
    id: string;
    image: string;
    title: string;
  }[];
}
export default function MasonryLayout({ pins }: IMasonryList) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.pin}>
          {pins
            .filter((_, index) => index % 2 === 0)
            .map((pin) => (
              <Pin pin={pin} key={pin.id} />
            ))}
        </View>
        <View style={styles.pin}>
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
  pin: {
    flex: 1,
  },
});
