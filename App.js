import React from "react";
import { View, StyleSheet } from "react-native";

import Logo from "./pages/logo";
import BottomNav from "./components/BottomNav";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.mainContent}>
        <Logo />
      </View>
      <BottomNav />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#121212",
  },
  mainContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
