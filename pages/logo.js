import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const Logo = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/user-icon.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.version}>v 0.01</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    gap: 19,
  },
  logo: {
    width: 160,
    height: 160,
  },
  version: {
    color: "#424343",
    fontSize: 17,
    fontWeight: "600",
    lineHeight: 22,
  },
});

export default Logo;
