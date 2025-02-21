import React from "react";
import { View, StyleSheet } from "react-native";
import NavItem from "./navItems";

import HomeIcon from '../assets/navbar/home.svg';
import ChatIcon from '../assets/navbar/chat.svg';
import SettingsIcon from '../assets/navbar/settings.svg';

const BottomNav = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <NavItem icon={<HomeIcon />} label="Home" active />
        <NavItem icon={<ChatIcon />} label="AI Chat" />
        <NavItem icon={<SettingsIcon />} label="Settings" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    backgroundColor: "#121212",
  },
  content: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 55,
    marginBottom: 8,
  },
});

export default BottomNav;
