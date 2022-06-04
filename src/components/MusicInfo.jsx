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
} from "native-base";
import { style } from "@mui/system";

const MusicInfo = () => {
  return (
    <NativeBaseProvider>
      <Center h="96">
        <ZStack alignItems="center">
          {/*背景*/}
          <VStack space={0} alignItems="center">
            <Center w="80" h="32" bg="indigo.500" rounded="md" shadow={3} />
          </VStack>

          {/* アルバム画像 */}

          {/*3つの長方形*/}
          <Box mt="2" ml="24">
            <VStack space={10} alignItems="center">
              <Box>
                <ZStack alignItems="center">
                  <Center w="48" h="8" bg="indigo.300" rounded="md" shadow={3}>
                    <Text style={styles.baseText}>AlbumName</Text>
                  </Center>
                </ZStack>
              </Box>

              <Box>
                <ZStack alignItems="center">
                  <Center w="48" h="8" bg="indigo.300" rounded="md" shadow={3}>
                    <Text style={styles.baseText}>ArtistName</Text>
                  </Center>
                </ZStack>
              </Box>

              <Box>
                <ZStack alignItems="center">
                  <Center w="48" h="8" bg="indigo.300" rounded="md" shadow={3}>
                    <Text style={styles.baseText}>2020/00/00</Text>
                  </Center>
                </ZStack>
              </Box>
            </VStack>
          </Box>
        </ZStack>
      </Center>
    </NativeBaseProvider>
  );
};

//反映されない
const styles = StyleSheet.create({
  baseText: {
    fontFamily: "Cochin",
    fontSize: "48",
    color: "black",
  },
});

export default MusicInfo;
