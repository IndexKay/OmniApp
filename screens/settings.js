import React, { useState } from 'react';
import {TouchableOpacity, StyleSheet,View, Text, Image} from 'react-native';


export default function SettingsScreen() {
  return (
    <View style={styles.center}>
      <Text style={styles.text}>Settings Screen</Text>
    </View>
  );
}


//----------- Styles ----------------//
const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212',
  },
  text: {
    color: 'white',
    fontSize: 18,
  },
});