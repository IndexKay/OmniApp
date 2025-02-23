import React, { useState } from 'react';
import {TouchableOpacity, StyleSheet,View, Text, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeMainScreen from './screens/home';
import ChatScreen from './screens/AI/chat';
import SettingsScreen from './screens/settings';
import HomeIcon from './assets/navbar/home.svg';
import ChatIcon from './assets/navbar/chat.svg';
import SettingsIcon from './assets/navbar/settings.svg';

import app from './app.json'

import theme from './theme';
const activeTheme = theme();

//
// Welcome Screen - shows an image that must be tapped to “unlock” the nav
//
function WelcomeScreen({ navigation, setWelcomeComplete }) {
  return (
    <View style={styles.center}>
      <TouchableOpacity
        onPress={() => {
          // Unlock navigation and go to HomeMain
          setWelcomeComplete(true);
          navigation.replace('HomeMain');
        }}
      >
        <Image
          source={require('./assets/user-icon.png')} // Replace with your image
          style={styles.image}
        />
      </TouchableOpacity>
      <Text style={styles.version}>v{app.expo.version}</Text>
    </View>
  );
}

//
// Home Stack Navigator: Welcome and HomeMain
//
const HomeStack = createNativeStackNavigator();

function HomeStackScreen({ setWelcomeComplete }) {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="Welcome">
        {(props) => (
          <WelcomeScreen {...props} setWelcomeComplete={setWelcomeComplete} />
        )}
      </HomeStack.Screen>
      <HomeStack.Screen name="HomeMain" component={HomeMainScreen} />
    </HomeStack.Navigator>
  );
}



const Tab = createBottomTabNavigator();

export default function App() {
  
  const [welcomeComplete, setWelcomeComplete] = useState(false);

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          // Displaying the nav button SVGS
          tabBarIcon: ({ color, size }) => {
            let IconComponent;
            let fill;
            if (route.name === "Home") {
              IconComponent = HomeIcon;
              fill = color;
            } else if (route.name === "Chat") {
              IconComponent = ChatIcon;
              fill = "none";
            } else if (route.name === "Settings") {
              IconComponent = SettingsIcon;
              fill = color;
            }
            return (
              <IconComponent width={size} height={size} stroke={color} fill={fill} />
            );
          },

          // Override the tab button so that if logo is not clicked, nav buttons do nothing
          tabBarButton: (props) => {
            return (
              <TouchableOpacity
                {...props}
                onPress={() => {
                  if (welcomeComplete) {
                    props.onPress();
                  } else {
                    console.log('Locked: Press the welcome image first!');
                  }
                }}
              />
            );
          },
          // While locked, force both active and inactive to a soild color
          tabBarActiveTintColor: welcomeComplete ? activeTheme.textColor : activeTheme.mainColor,
          tabBarInactiveTintColor: welcomeComplete ? activeTheme.accentColor : activeTheme.mainColor,
          tabBarStyle: { 
            backgroundColor: activeTheme.backgroundColor, 
            borderColor: activeTheme.backgroundColor, 
            fontSize: 11, 
            fontWeight: "600", 
            paddingVertical: 8,
            paddingHorizontal: 30
          },
          headerShown: false,
        })}
      >
        <Tab.Screen name="Home">
          {() => <HomeStackScreen setWelcomeComplete={setWelcomeComplete} />}
        </Tab.Screen>
        <Tab.Screen name="Chat" component={ChatScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


//----------- Styles ----------------//
const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: activeTheme.backgroundColor,
    gap: 19,
  },
  image: {
    width: 160,
    height: 160,
    borderRadius: 10,
  },
  version: {
    color: activeTheme.accentColor,
    fontSize: 17,
    fontWeight: "600",
    lineHeight: 22,
  },
});
