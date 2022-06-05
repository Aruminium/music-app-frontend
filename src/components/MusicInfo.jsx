import React from "react";
import { StyleSheet, Image, View, Text} from "react-native";
import {
  Center,
  VStack,
  HStack,
  NativeBaseProvider,
  Box,
  ZStack,
  Icon,
  Stack,
  Pressable,
  Spacer
} from "native-base";
// import { style } from "@mui/system";
import MusicInfoItem from "./MusicInfoItem";

const MusicInfo = ({
  // h = 180,
  artistName = "ArtistName",
  albumName = "AlbumName",
  releaseDate = "ReleaseDate",
  imageUrl = "https://placehold.jp/200x200.jpg",
}) => {
  return (
    // <NativeBaseProvider>
    //   <Center h={h}>
    //     <ZStack alignItems="center">
    //       {/*背景*/}
    //       <VStack space={0} alignItems="center">
    //         <Center w="80" h="32" bg="indigo.500" rounded="md" shadow={3} />
    //       </VStack>
    //       <HStack alignItems="center">
    //         {/* アルバム画像 */}
    //         <Box mt="4" mr="27" ml="39">
    //           <Image
    //             source={{ uri: imageUrl }}
    //             alt="jacket image"
    //             rounded="md"
    //             style={{ width: 100, height: 100 }}
    //           />
    //         </Box>
    //         {/*3つの長方形*/}
    //         <Box mb="5" mr="10">
    //           <VStack space={10} alignItems="center">
    //             <MusicInfoItem text={albumName} mr="100" ml="20"/>
    //             <MusicInfoItem text={artistName} mr="100" ml="20"/>
    //             <MusicInfoItem text={releaseDate} mr="100" ml="20"/>
    //           </VStack>
    //         </Box>
    //       </HStack>
    //     </ZStack>
    //   </Center>
    // </NativeBaseProvider>
    <Box>
      <Pressable
        onPress={() => console.log("You touched me")}
        _dark={{
          bg: "coolGray.800",
        }}
        _light={{
          bg: "indigo.500",
        }}
      >
        <Box pl="4" pr="5" py="2">
          <HStack alignItems="center" space={3}>
            <Image
              source={{ uri: imageUrl }}
              alt="jacket image"
              rounded="md"
              style={{ width: 100, height: 100 }}
            />
            <VStack space={2}>

              <MusicInfoItem text={artistName}/>
              <MusicInfoItem text={albumName}/>
              <MusicInfoItem text={releaseDate}/>
              
            </VStack>
            
          </HStack>
        </Box>
      </Pressable>
    </Box>
  );
};

export default MusicInfo;
