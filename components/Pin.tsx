import { Image, Pressable, StyleSheet } from "react-native";
import { Entypo } from "@expo/vector-icons";

import { Text, View } from "../components/Themed";
import { useEffect, useState } from "react";

const Pin = (props: { pin: { title: any; image: any } }) => {
  const { title, image } = props.pin;
  const [ratio, setRatio] = useState(0.5);

  useEffect(() => {
    Image.getSize(image, (width, height) => setRatio(width / height));
  }, []);
  return (
    <View style={styles.pin}>
      <View>
        <Image
          source={{
            uri: image,
          }}
          style={[styles.image, { aspectRatio: ratio }]}
        />
        <Pressable style={styles.likeButton}>
          <Entypo name="heart-outlined" size={18} color="black" />
        </Pressable>
      </View>
      <Text style={styles.title} numberOfLines={2}>
        {title}
      </Text>
    </View>
  );
};

export default Pin;

const styles = StyleSheet.create({
  pin: {
    width: "100%",
    padding: 4,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    margin: 5,
    lineHeight: 22,
    color: "#181818",
  },
  image: {
    width: "100%",
    borderRadius: 15,
  },
  likeButton: {
    position: "absolute",
    bottom: 10,
    right: 10,
    backgroundColor: "#d3cfd4",
    padding: 5,
    borderRadius: 50,
  },
});
