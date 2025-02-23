import React, { use, useState } from 'react';
import {TouchableOpacity, StyleSheet,View, Text, Image, ScrollView} from 'react-native';

import BrainIcon from '../assets/home/brain'
import ConnectionIcon from '../assets/home/connection'
import DatabaseIcon from '../assets/home/database'
import StatusIcon from '../assets/home/status';

import AutomationIcon from '../assets/home/automation';
import SecurityIcon from '../assets/home/security';
import ListIcon from '../assets/home/list';
import ProductivityIcon from '../assets/home/productivity';
import FitnessIcon from '../assets/home/fitness';
import HealthIcon from '../assets/home/health';
import CookIcon from '../assets/home/cook';
import PasswordsIcon from '../assets/home/passwords';
import NotesIcon from '../assets/home/notes';

import theme from '../theme';
const activeTheme = theme();

export default function HomeMainScreen() {
    const iconSize = 24;

    // Active = #5CDFE5 - Disconnected = #E5675C
    const [aiStatus, setAiStatus] = useState(activeTheme.mainColor)
    const [apiStatus, setApiStatus] = useState(activeTheme.mainColor)
    const [databaseStatus, setDatabaseStatus] = useState(activeTheme.mainColor)

    return (
      <View style={styles.center}>
        <Image
          source={require('../assets/user-icon.png')} // Replace with your image
          style={styles.logo}
        />

        <View style={styles.status}>
          <View style={styles.status.contanier}>
            <BrainIcon/>
            <StatusIcon fill={aiStatus}/>
          </View>
          <View style={styles.status.contanier}>
            <ConnectionIcon/>
            <StatusIcon fill={apiStatus}/>
          </View>
          <View style={styles.status.contanier}>
            <DatabaseIcon/>
            <StatusIcon fill={databaseStatus}/>
          </View>
        </View>

        <ScrollView style={styles.tabBarScrollview}>
          <View style={styles.tabBarButtons}>
            <View style={styles.tabFlexBox}>
              <TouchableOpacity style={styles.tab1}>
                <AutomationIcon style={styles.icon} width={iconSize} height={iconSize} />
                <Text style={styles.label}>Home Automation</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.tab1}>
                <SecurityIcon style={styles.icon} width={iconSize} height={iconSize} />
                <Text style={styles.label}>Security</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.tabFlexBox}>
              <TouchableOpacity style={styles.tab1}>
                <ListIcon style={styles.icon} width={iconSize} height={iconSize} />
                <Text style={styles.label}>To-Do List</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.tab1}>
                <ProductivityIcon style={styles.icon} width={iconSize} height={iconSize} />
                <Text style={styles.label}>Productivity Tracker</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.tabFlexBox}>
              <TouchableOpacity style={styles.tab1}>
                <FitnessIcon style={styles.icon} width={iconSize} height={iconSize} />
                <Text style={styles.label}>Fitness Tracker</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.tab1}>
                <HealthIcon style={styles.icon} width={iconSize} height={iconSize} />
                <Text style={styles.label}>Health</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.tabFlexBox}>
              <TouchableOpacity style={styles.tab1}>
                <CookIcon style={styles.icon} width={iconSize} height={iconSize} />
                <Text style={styles.label}>Cook Book</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.tab1}>
                <PasswordsIcon style={styles.icon} width={iconSize} height={iconSize} />
                <Text style={styles.label}>Passwords</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.tabFlexBox}>
              <TouchableOpacity style={styles.tab1}>
                <NotesIcon style={styles.icon} width={iconSize} height={iconSize} />
                <Text style={styles.label}>Notes</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>

      </View>
    );
  }


//----------- Styles ----------------//
const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: activeTheme.backgroundColor,
    gap: 36,
  },

  text: {
    color: activeTheme.textColor,
    fontSize: 18,
  },

  logo: {
    width: 70,
    height: 70,
  },
  //----------------------------
  status: {
    width: "100%",
    height: "auto",
    gap: 94,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: 'row',

    contanier: {
      alignItems: 'center',
      flexDirection: 'column',
      gap: 9,
    }

  },
  //----------------------------
  tabBarScrollview: {
    width: "100%",
    maxHeight: 430,
    marginBottom: 30,
  },
  tabBarButtons: {
    width: "100%",
    paddingHorizontal: 16,
    paddingVertical: 10,
    gap: 8,
    flex:1,
    alignSelf: "stretch",
    backgroundColor: 'none',
  },

  tabFlexBox: {
    flexDirection: 'row',
    alignSelf: "stretch",
    gap: 8
  },

  tab1: {
    borderRadius: 16,
    backgroundColor: activeTheme.secondaryColor,
    padding: 16,
    gap: 4,
    flex: 1
  },

  icon: {
    overflow: "hidden"
  },

  label: {
    fontSize: 13,
    fontWeight: "600",
    fontFamily: "Inter-SemiBold",
    color: activeTheme.mainColor,
    textAlign: "left"
  },
});