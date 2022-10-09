import {
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
} from "react-native";
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
  const width = useWindowDimensions().width;
  const numRows = Math.ceil(width / 300);

  return (
    <ScrollView>
      <View style={styles.container}>
        {Array.from(Array(numRows)).map((_, colIndex) => (
          <View style={styles.pin}>
            {pins
              .filter((_, index) => index % numRows === colIndex)
              .map((pin) => (
                <Pin pin={pin} key={pin.id} />
              ))}
          </View>
        ))}
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
