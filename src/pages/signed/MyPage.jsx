import React from "react";
import { View, StyleSheet, Image } from "react-native";

import { Center, HStack, NativeBaseProvider } from "native-base";
import MusicInfoList from "../../components/MusicInfoList";
import SignedFooter from "../../components/SignedFooter";
import AddMusic from "../../components/AddMusic";
import MusicInfoTable from "../../components/MusicInfoTable";

const MyPage = ({ navigation }) => {
  const datas = [
    {
      artistName: "米酢",
      albumName: "みかん",
      releaseDate: "2022-06-10",
      id: 1,
    },
    {
      artistName: "アイウエオ",
      albumName: "わわわわわ",
      releaseDate: "2022-06-28",
      id: 2,
    },
    {
      artistName: "検事",
      albumName: "ピーポーサイン",
      releaseDate: "2022-06-15",
      id: 3,
    },
    {
      artistName: "ジャイアン",
      albumName: "オレはジャイアン",
      releaseDate: "2022-06-04",
      id: 4,
    },
    {
      artistName: "米酢",
      albumName: "みかん",
      releaseDate: "2022-06-10",
      id: 5,
    },
    {
      artistName: "アイウエオ",
      albumName: "わわわわわ",
      releaseDate: "2022-06-28",
      id: 6,
    },
    {
      artistName: "検事",
      albumName: "ピーポーサイン",
      releaseDate: "2022-06-15",
      id: 7,
    },
    {
      artistName: "ジャイアン",
      albumName: "オレはジャイアン",
      releaseDate: "2022-06-04",
      id: 8,
    },
  ];

  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <MusicInfoList datas={datas} />

        <AddMusic navigation={navigation} />

        <Center px="3" flex={2}>
          <SignedFooter navigation={navigation} />
        </Center>
      </View>
    </NativeBaseProvider>
  );
};

export default MyPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
