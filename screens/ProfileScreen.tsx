import { Image, ScrollView, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

import pins from "../assets/data/pins";
import MasonryLayout from "../components/MasonryLayout";
import { Text, View } from "../components/Themed";

export default function ProfileScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.icons}>
        <Feather style={styles.icon} name="share" size={24} color="black" />
        <Entypo
          style={styles.icon}
          name="dots-three-horizontal"
          size={24}
          color="black"
        />
      </View>
      <View style={styles.profile}>
        <Image
          style={styles.profilePic}
          source={{
            uri: "https://static.photocdn.pt/images/articles/2019/08/07/images/articles/2019/07/31/linkedin_profile_picture_tips-1.jpg",
          }}
        />
        <Text style={styles.title}>Lokeswaran</Text>
        <Text style={styles.subTitle}>100 Followers | 200 Followings</Text>
      </View>
      <MasonryLayout pins={pins} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: "100%",
  },
  icons: {
    flexDirection: "row",
    alignSelf: "flex-end",
    padding: 10,
  },
  icon: {
    paddingHorizontal: 10,
  },
  profile: {
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    margin: 10,
    fontWeight: "600",
  },
  subTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#181818",
  },
  profilePic: {
    width: 200,
    aspectRatio: 1,
    borderRadius: 200,
  },
  pinContainer: {
    flexDirection: "row",
    padding: 10,
  },
});
