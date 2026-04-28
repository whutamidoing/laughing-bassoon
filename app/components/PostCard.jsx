import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function PostCard({ post }) {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Image
          style={styles.profilePicture}
          source={require("../../assets/img/JVJ1mcx9ljQK35RatLqGxl2X.png")}
          placeholder={"banner"}
          contentFit="cover"
          transition={1000}
        ></Image>
        <View>
          <Text style={styles.author}>{post.author}</Text>
          <Text style={styles.timestamp}>- {post.timestamp}</Text>
        </View>
        <View>
          <TouchableOpacity style={{ marginLeft: 12, marginBottom: 16 }}>
            <Text style={{ color: "#2a6aff", fontWeight: "bold" }}>Follow</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.content}>{post.content}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ffffff",
    padding: 16,
  },
  author: {
    fontWeight: "bold",
  },
  header: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
    gap: 12,
  },
  content: {
    marginBottom: 8,
  },
  profilePicture: {
    width: 48,
    height: 48,
    borderRadius: "50%",
    backgroundColor: "#000",
  },
});
