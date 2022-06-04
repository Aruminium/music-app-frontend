import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import {Button, NativeBaseProvider,Center} from "native-base";

const Home = ({ navigation }) => {
  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <Text>スマートな音楽ライフを</Text>
        <Button onPress={() =>navigation.navigate("Login")}>ログイン</Button>
        <Button onPress={() => {navigation.navigate("Signup")}}>サインアップ</Button>
        <Button onPress={() =>{navigation.navigate("MyPage")}}> マイページ</Button>
        <Button onPress={() => navigation.navigate("MyCalendar")}>カレンダー</Button>
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
  }
});

export default Home;