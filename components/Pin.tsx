import { Image, StyleSheet } from "react-native";

import { Text, View } from "../components/Themed";
const Pin = (props: { pin: { title: any; image: any } }) => {
  const { title, image } = props.pin;
  return (
    <View style={styles.pin}>
      <Image
        source={{
          uri: image,
        }}
        style={styles.image}
      />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Pin;

const styles = StyleSheet.create({
  pin: {
    width: "100%",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 10,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 25,
  },
});
