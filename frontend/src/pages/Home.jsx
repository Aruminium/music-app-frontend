import React from "react";
import { StyleSheet, Text, View , Button} from 'react-native';

const Home = ({ navigation }) => {
  console.log(navigation)
  return (
    <View style={styles.container}>
      <Text>Home画面です</Text>
      <Button title="Login" onPress={() =>
      navigation.navigate("Login")}/>
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