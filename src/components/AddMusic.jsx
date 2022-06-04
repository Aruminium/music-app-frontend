import React from "react";
import { StyleSheet } from "react-native";
import {Box, IconButton, NativeBaseProvider} from "native-base";
import Icon from "react-native-vector-icons/AntDesign";

const AddMusic = (navigation) => {
	return (
        <NativeBaseProvider>
        <Box style={styles.add} alignItems="center">
        <IconButton icon={<Icon name="pluscircle" size={100} color="#4F48E5"/>}
                    size={90}
                    borderRadius="full"
                    _hover={{bg: "indigo.600:alpha.20"}}
                    _pressed={{bg: "indigo.600:alpha.60"}}
                    onPress={() => navigation.navigate("Calendar")}/>
        </Box>
        </NativeBaseProvider>
	)
}

export default AddMusic;

const styles = StyleSheet.create({
    add: {
        position: "absolute",
        top: "50%",
        left: "85%"
    },
});