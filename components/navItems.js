import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const NavItem = ({ icon, label, active }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.iconContainer}>{icon}</View>
      <Text style={[styles.label, active && styles.activeLabel]}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    gap: 3,
  },
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    color: "#5CDFE5",
    fontSize: 11,
    fontWeight: "600",
  },
  activeLabel: {
    color: "#5CDFE5",
  },
});

export default NavItem;
