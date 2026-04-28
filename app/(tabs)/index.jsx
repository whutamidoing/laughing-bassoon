import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Pressable,
  Image,
} from "react-native";
import PostCard from "../components/PostCard";
import { router } from "expo-router";
import { useState } from "react";

function PostForm() {
  const [focused, setFocused] = useState(null);
  return (
    <View style={postFormStyles.postForm}>
      <Image
        style={postFormStyles.profilePicture}
        source={require("../../assets/img/JVJ1mcx9ljQK35RatLqGxl2X.png")}
        placeholder={"banner"}
        contentFit="cover"
        transition={1000}
      ></Image>
      <View style={postFormStyles.actionPost}>
        <Text>What's on your mind</Text>
      </View>
      <Pressable
        onPress={() => {
          setFocused("Story");
          console.log(focused);
        }}
        style={[
          postFormStyles.actionStory,
          focused === "Story" ? styles.focused : null,
        ]}
      >
        <Text>+</Text>
      </Pressable>
    </View>
  );
}

export default function HomeScreen() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={bannerStyles.mainBannerContainer}>
          <Image
            style={bannerStyles.mainBanner}
            source={require("../../assets/img/Banner_Gif.jpg")}
            placeholder={"banner"}
            contentFit="cover"
            transition={1000}
          ></Image>
        </View>
        <PostForm />
        <View style={styles.feedContainer}>
          <PostCard
            post={{
              author: "John Doe",
              timestamp: "2hrs",
              content:
                "Fsdadskk ajwadsaj gawasda aodaojjajsjg adad ariaaadass dads",
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  page: {
    justifyContent: "center",
    alignItems: "center",
  },
  feedContainer: {
    display: "flex",
    backgroundColor: "#ebebeb",
    flexDirection: "column",
    paddingVertical: 14,
    gap: 12,
  },
  focused: {
    backgroundColor: "#0509124e",
  },
});
const postFormStyles = StyleSheet.create({
  postForm: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    padding: 14,
    backgroundColor: "#ffffff",
  },
  actionPost: {
    flex: 4,
    justifyContent: "center",
    padding: 12,
    height: "100%",
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 50,
  },
  actionStory: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 24,
    width: 24,
    padding: 5,
    borderWidth: 1,
    borderColor: "#000",
  },
  profilePicture: {
    width: 48,
    height: 48,
    borderRadius: "50%",
    backgroundColor: "#000",
  },
});

const bannerStyles = StyleSheet.create({
  mainBannerContainer: {
    backgroundColor: "#0000004d",
  },
  mainBanner: {
    width: "100%",
    aspectRatio: "4/3",
  },
});
