import * as React from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Header } from 'react-native-elements';

export default class App extends React.Component() {
  render(){
    return (
      <View>

        <Header
          backgroundColor={'#000000'}
          centerComponent={{
            text: 'WriteStory',
            style: { color: '#fff', fontSize: 20 },
          }}
        />

        <TextInput placeholder={"Title"}/>
        <TextInput placeholder={"Author"}/>
        <TextInput placeholder={"Write the Story"} multiline={true}/>

        <TouchableOpacity onPress={}><Text>Submit</Text></TouchableOpacity>
      </View>
    );
  }
}