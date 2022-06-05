import React from "react";
import { View, StyleSheet } from "react-native";
import { Center, NativeBaseProvider } from "native-base";
import MusicInfo from "../../components/MusicInfo";
import MusicInfoList from "../../components/MusicInfoList";
import SignedFooter from "../../components/SignedFooter";
import AddMusic from "../../components/AddMusic";

const MyPage = ({ navigation }) => {
  const datas = [
    {
      artistName: "米酢",
      albumName: "みかん",
      ReleaseDate: "2022-06-10",
      id: 1,
    },
    {
      artistName: "アイウエオ",
      albumName: "わわわわわ",
      ReleaseDate: "2022-06-28",
      id: 2,
    },
  ];

  return (
	<NativeBaseProvider>
    <View style={styles.container}>
      <MusicInfoList datas={datas} />
	  <Center px="3" flex={2}>
	  <AddMusic navigation={navigation}/>
      <SignedFooter navigation={navigation}/>
	  </Center>
    </View>
	</NativeBaseProvider>
  );
};

export default MyPage;

const styles = StyleSheet.create({
	container: {
	  flex: 1,
	  backgroundColor: '#fff',
	  alignItems: 'center',
	  justifyContent: 'center',
	},
  });