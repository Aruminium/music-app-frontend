import React from "react";
import { StyleSheet, Text, View , Button} from 'react-native';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Home画面です</Text>
      <Button title="Login" onPress={() =>
      navigation.navigate("Login")}/>
      <Button title="Signup" onPress={() => {navigation.navigate("Signup")}}/>
      <Button title="MyPage" onPress={() =>{navigation.navigate("MyPage")}}/> 
      <Button title="MyCalendar" onPress={() => navigation.navigate("MyCalendar")}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home;