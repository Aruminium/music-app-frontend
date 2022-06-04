import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import {Button, NativeBaseProvider,Center, HStack} from "native-base";

const Home = ({ navigation }) => {
  return (
    <NativeBaseProvider>
      
      <View style={styles.container}>
        <Text style={{textAlign:'center',fontSize:30}}>スマートミュージックライフ</Text>
        <Button onPress={() =>navigation.navigate("Login")}>ログイン</Button>
        <View style={styles.space} />
        <Button onPress={() => {navigation.navigate("Signup")}}>サインアップ</Button>
        <View style={styles.space} />
        <Button onPress={() =>{navigation.navigate("MyPage")}}> マイページ</Button>
        <View style={styles.space} />
        <Button onPress={() => navigation.navigate("MyCalendar")}>カレンダー</Button>
        <View style={styles.space} />
        <View style={styles.footer}><Text>©スパゲッティコーダーズ</Text></View>
       
      </View>
      
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer:{
    flex:1,
    backgroundColor: '#89c7de',
    color: '#fff',
    textAlign: 'center',
    padding: 20,

    position: 'absolute',
    bottom: 0 
  },
  space: {
    width: 20, // or whatever size you need
    height: 20,
  },
});

export default Home;