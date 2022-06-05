import React from "react";
import MusicInfo from "./MusicInfo";
import { ListItem, Box, ScrollView, Heading, FlatList, Pressable, HStack, VStack} from "native-base";
import { Image } from "react-native";
import MusicInfoItem from "./MusicInfoItem";

const MusicInfoList = ({datas, text = "hoge"}) => {
  return (
    <Box
      _dark={{
        bg: "coolGray.800",
      }}
      _light={{
        bg: "indigo.600",
      }}
      flex="1"
      safeAreaTop
      maxW="400px"
      w="100%"
      // もっと縦長にしたい
    >
      <Heading p="4" pb="3" size="lg" color="white" bold>
        {text}
      </Heading>
      <FlatList
        data={datas}
        renderItem={
          ({item}) =>
          <MusicInfo
            artistName={item[0]}
            title={item[1]}
            releaseDate={item[2]}
            imageUrl={item[3]}
          />
        }
          keyExtractor={datas.id}
        ></FlatList>
    </Box>
  );
};

export default MusicInfoList;
