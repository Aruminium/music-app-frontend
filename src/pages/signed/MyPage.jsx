import React from "react";
import { View } from "react-native";
import MusicInfo from "../../components/MusicInfo";
import MusicInfoList from "../../components/MusicInfoList";
import SignedFooter from "../../components/SignedFooter";

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
    <View>
      <MusicInfoList datas={datas} />
      <SignedFooter navigation={navigation}/>
    </View>
  );
};

export default MyPage;
