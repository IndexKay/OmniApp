import React, { act, useState } from 'react';
import {TouchableOpacity, StyleSheet,View, Text, Image, ScrollView} from 'react-native';

import LeftIcon from '../../assets/chat/left';
import VoiceIcon from '../../assets/chat/voice';
import UserIcon from '../../assets/chat/user';
import CopyIcon from '../../assets/chat/copy';
import NoteIcon from '../../assets/chat/notes';
import VolumeIcon from '../../assets/chat/volume';

import theme from '../../theme';
const activeTheme = theme();

const testConvo = [
  {
    from: "user",
    response: "hgfhjksjbfksjbfksjfkjs s fisfio sif siof slkf slk fsf sdjf kljf nsij... "
  },
  {
    from: "assistant",
    thought: 'fhjksjbfksjbfksjfkjs s fisfio sif siof slkf slk fsf sdjf kljf ',
    response: "hgfhjksjbfksjbfksjfkjs s fisfio sif siof slkf slk fsf sdjf skfjsifs"
  },
  {
    from: "user",
    response: "hgfhjksjbfksjbfksjfkjs s fisfio sif siof slkf slk fsf sdjf kljf nsij... "
  },
  {
    from: "assistant",
    thought: 'fhjksjbfksjbfksjfkjs s fisfio sif siof slkf slk fsf sdjf kljf ',
    response: "hgfhjksjbfksjbfksjfkjs s fisfio sif siof slkf slk fsf sdjf skfjsifs"
  },
  {
    from: "user",
    response: "hgfhjksjbfksjbfksjfkjs s fisfio sif siof slkf slk fsf sdjf kljf nsij... "
  },
  {
    from: "assistant",
    thought: 'fhjksjbfksjbfksjfkjs s fisfio sif siof slkf slk fsf sdjf kljf ',
    response: "hgfhjksjbfksjbfksjfkjs s fisfio sif siof slkf slk fsf sdjf skfjsifs"
  },
]


export default function ChatScreen() {
  return (
    <View style={styles.center}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonContainer.button1}>
          <LeftIcon stroke={activeTheme.mainColor}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonContainer.button2}>
          <VoiceIcon stroke={activeTheme.mainColor}/>
        </TouchableOpacity>
      </View>
      <Text style={styles.timeStamp}>Today, 09:41 AM</Text>
      <ScrollView style={styles.chatBox}>
        {testConvo.length ? (
          <ScrollView style={styles.chatBox}>
            {testConvo.map((chat, index) => (
              chat.from === 'user' ? (
                <View style={styles.chatBox.userChat}>
                  <View>
                    <Text>{chat.response}</Text>
                    <UserIcon/>
                  </View>
                  <View>
                    <CopyIcon/>
                  </View>
                </View>
              ):(
                <View style={styles.chatBox.aiChat}>
                </View>
              )
            ))}
          </ScrollView>
        ):(
          <ScrollView style={styles.chatBox}></ScrollView>
        )}
      </ScrollView>
    </View>
  );
}


//----------- Styles ----------------//
const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: activeTheme.backgroundColor,
  },
  buttonContainer: {
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 0,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",

    button1: {
      backgroundColor: activeTheme.secondaryColor,
      borderRadius: 23,
      paddingHorizontal: 16,
      paddingVertical: 10,
    },
    button2: {
      backgroundColor: activeTheme.secondaryColor, 
      paddingHorizontal: 9,
      paddingVertical: 9,
      borderRadius: 23,
    }
  },

  timeStamp: {
    fontSize: 12,
    fontWeight: "600",
    fontFamily: "Inter-SemiBold",
    color: activeTheme.accentColor,
    textAlign: "left"
  },

  chatBox: {
    width: '100%',
    height: "100%",
    maxHeight: 492,

    userChat:{
      backgroundColor: activeTheme.backgroundColor,
      height: 'auto',
      width: '100%',
      flexDirection: 'column',

      content: {
        flexDirection: 'row',
        width: "100%",
        alignItems: 'flex-end'
      },
      options: {

      }
    },
    aiChat: {
      backgroundColor: activeTheme.secondaryColor,
      height: 'auto',
      width: '100%',
      flexDirection: 'column'
    }
  },


  userText: {
    color: activeTheme.textColor,
    fontSize: 18,
  },
  responseText: {
    color: activeTheme.textColor,
    fontSize: 18,
  },
  thoughtText: {
    color: activeTheme.accentColor,
    fontSize: 18,
  },
});