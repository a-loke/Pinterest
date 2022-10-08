import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";

import pins from "../assets/data/pins";
import { StatusBar } from "expo-status-bar";
import { useNavigation, useRoute } from "@react-navigation/native";

const PinScreen = () => {
  const pin = pins[1];
  const [ratio, setRatio] = useState(0.5);
  const navigation = useNavigation();
  const route = useRoute();
  const title = route.params?.title;
  const image = route.params?.image;

  useEffect(() => {
    Image.getSize(pin.image, (width, height) => setRatio(width / height));
  }, []);

  const goBack = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView style={{ backgroundColor: "black" }}>
      <StatusBar style="light" />
      <View style={styles.container}>
        <Image
          source={{ uri: image }}
          style={[styles.image, { aspectRatio: ratio }]}
        />
        <Text style={styles.title}>{title}</Text>
        <Pressable onPress={goBack} style={styles.backButton}>
          <FontAwesome5 name="chevron-left" size={24} color="white" />
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default PinScreen;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "white",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  image: {
    width: "100%",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  title: {
    fontWeight: "600",
    textAlign: "center",
    fontSize: 24,
    lineHeight: 30,
    margin: 10,
    color: "#181818",
  },
  backButton: {
    position: "absolute",
    marginVertical: 15,
    marginHorizontal: 15,
  },
});
