import React from "react";
import { StyleSheet, Text, View , Button} from 'react-native';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apyKey: APIKEY,
  authDomain: AUTHDOMAIN,
  projectId: PROJECTID,
  storageBucket: STORAGEBUCKET,
  messagingSenderId: MESSAGINGSENDERID,
  appId: APPID,
  measurementId: MEASUREMENTID
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const Home = ({ navigation }) => {
  console.log(navigation)
  return (
    <View style={styles.container}>
      <Text>Home画面です</Text>
      <Button title="Login" onPress={() =>
      navigation.navigate("Login")}/>
      <Button title="Signup" onPress={() => {navigation.navigate("Signup")}}/>
      <Button title="MyPage" onPress={() =>{navigation.navigate("MyPage")}}/> 
      <Button title="Calendar" onPress={() => navigation.navigate("Calendar")}/>
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