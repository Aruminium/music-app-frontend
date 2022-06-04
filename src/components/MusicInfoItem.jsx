import React from "react";
import { Box, ZStack, Center, NativeBaseProvider } from "native-base";
import { Text, StyleSheet } from "react-native";

const MusicInfoItem = ({text,mr,ml}) => {
  return (
    <NativeBaseProvider>
      <Box mr={mr} ml={ml}>
        <ZStack alignItems="center">
          <Center w="48" h="8" bg="indigo.300" rounded="md" shadow={3}>
            <Text style={styles.baseText}>{text}</Text>
          </Center>
        </ZStack>
      </Box>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  baseText: {
    fontFamily: "Cochin",
    fontSize: "48",
    color: "black",
  },
});

export default MusicInfoItem;
