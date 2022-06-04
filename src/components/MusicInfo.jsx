import React from "react";
import {StyleSheet, Image, View, Text} from "react-native";
import { Center, VStack, HStack, NativeBaseProvider, Box, ZStack} from "native-base";

const Login = () => {
	return (
		<NativeBaseProvider>
		<Center h="96">
		<ZStack alignItems="center">

			{/*背景*/}
			<VStack space={0} alignItems="center">
				<Center w="80" h="32" bg="indigo.500" rounded="md" shadow={3} />
			</VStack>
			
			{/*3つの長方形*/}
			<Box mt="2" ml="24">
			<VStack space={10} alignItems="center">
			
				<Box>
				<ZStack alignItems="center">
					<Center w="48" h="8" bg="indigo.300" rounded="md" shadow={3} />
					<Text style={styles.baseText}>AlbumName</Text>
					<Text>A</Text>
				</ZStack>
				</Box>

				<Box>
				<ZStack alignItems="center">
					<Center w="48" h="8" bg="indigo.300" rounded="md" shadow={3} />
					<Text>ArtistName</Text>
				</ZStack>
				</Box>

				<Box>
				<ZStack alignItems="center">
					<Center w="48" h="8" bg="indigo.300" rounded="md" shadow={3} />
					<Text>2020/00/00</Text>
				</ZStack>
				</Box>
				
			</VStack>
			</Box>

		</ZStack>
    	</Center>
		</NativeBaseProvider>
	)
}

//反映されない
const styles = StyleSheet.create({
	baseText: {
		fontFamily: 'Cochin',
		fontSize: '48',
		color: 'red'
	},
});

export default Login;