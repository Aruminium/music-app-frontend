import React from "react";
import { StyleSheet, Image, View, Text } from "react-native";
import {
  Center,
  VStack,
  HStack,
  NativeBaseProvider,
  Box,
  ZStack,
  Icon,
  Stack,
} from "native-base";
import { style } from "@mui/system";
import MusicInfoItem from "./MusicInfoItem";

const MusicInfo = () => {
  return (
    <NativeBaseProvider>
      <Center h="96">
        <ZStack alignItems="center">
          {/*背景*/}
          <VStack space={0} alignItems="center">
            <Center w="80" h="32" bg="indigo.500" rounded="md" shadow={3} />
          </VStack>
          <HStack alignItems="center">
            {/* アルバム画像 */}
            <Box mt="4" mr="27" ml="39">
              <Image
                source={{ uri: "https://placehold.jp/200x200.jpg" }}
                alt="jacket image"
                rounded="md"
                style={{ width: 100, height: 100 }}
              />
            </Box>
            {/*3つの長方形*/}
            <Box mb="5" mr="10">
              <VStack space={10} alignItems="center">
                <MusicInfoItem text={"AlbumName"} mr="100" ml="20"/>
                <MusicInfoItem text={"ArtistName"} mr="100" ml="20"/>
                <MusicInfoItem text={"ReleaseDate"} mr="100" ml="20"/>
              </VStack>
            </Box>
          </HStack>
        </ZStack>
      </Center>
    </NativeBaseProvider>
  );
};

export default MusicInfo;
