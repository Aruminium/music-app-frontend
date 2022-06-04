import React from "react";
import { View } from "react-native";
import MusicInfo from "../../components/MusicInfo";
import MusicInfoList from "../../components/MusicInfoList";

const MyPage = () => {
  const datas = [
    {
      artistName: "米酢",
      albumName: "みかん",
      ReleaseDate: "2022-06-10",
      id: 1,
    },
    {
      artistName: "検事",
      albumName: "ピーポーサイン",
      ReleaseDate: "2022-06-10",
      id: 2,
    },
  ];

  return (
    <View>
      <MusicInfoList datas={datas} />
    </View>
  );
};

export default MyPage;
