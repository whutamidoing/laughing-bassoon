import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { useState } from "react";

export default function Header(props) {
  const [active, setActive] = useState(props.pageName);
  const [focused, setFocused] = useState(null);

  console.log(active);

  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>PathDev</Text>
      </View>
      <View style={styles.nav}>
        <Pressable
          onPress={() => {
            setFocused("Home");
          }}
          style={[
            styles.tabBtn,
            active === "Home" ? styles.active : null,
            focused === "Home" ? styles.focused : null,
          ]}
        >
          <Text style={styles.icons}>Home</Text>
        </Pressable>
        <Pressable
          onPress={() => {
            setFocused("Explore");
          }}
          style={[
            styles.tabBtn,
            active === "Explore" ? styles.active : null,
            focused === "Explore" ? styles.focused : null,
          ]}
        >
          <Text style={styles.icons}>Explore</Text>
        </Pressable>
        <Pressable
          onPress={() => {
            setFocused("Friends");
          }}
          style={[
            styles.tabBtn,
            active === "Friends" ? styles.active : null,
            focused === "Friends" ? styles.focused : null,
          ]}
        >
          <Text style={styles.icons}>Friends</Text>
        </Pressable>
        <Pressable
          onPress={() => {
            setFocused("Settings");
          }}
          style={[
            styles.tabBtn,
            active === "Settings" ? styles.active : null,
            focused === "Settings" ? styles.focused : null,
          ]}
        >
          <Text style={styles.icons}>Groups</Text>
        </Pressable>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  nav: {
    flex: 1,
    justifyContent: "space-evenly",
    flexDirection: "row",
    backgroundColor: "#181e47",
  },
  tabBtn: {
    flex: 1,
    justifyContent: "center",
    height: "100%",
  },
  icons: {
    fontFamily: "monospace, sans-serif",
    textAlign: "center",
    color: "#fff",
    paddingVertical: 12,
  },
  headingContainer: {
    backgroundColor: "#171260",
    padding: 14,
  },
  heading: {
    fontFamily: "monospace, sans-serif",
    color: "#fff",
    fontSize: 24,
  },
  active: {
    boxShadow: "inset 0px -6px 1px 0px #478dcf",
  },
  focused: {
    backgroundColor: "#ffffff4f",
  },
});
