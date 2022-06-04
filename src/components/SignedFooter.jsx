import React from "react";
import {Text} from "react-native";
import {Box, Center, HStack, NativeBaseProvider, Pressable} from "native-base"
import Icon from "react-native-vector-icons/FontAwesome"

const SignedFooter = () => {
	const [selected, setSelected] = React.useState(1);
	return (
		<NativeBaseProvider>
			{/*mt="full"で一番下に付く*/}
			<Box flex={1} mt="full" safeAreaTop width="100%" alignSelf="center">
				<Center flex={1}></Center>
				<HStack bg="indigo.600" alignItems="center" safeAreaBottom shadow={6}>
				<Pressable 	cursor="pointer" 
							opacity={selected === 0 ? 1 : 0.5} 
							py="3"
							flex={1} 
							onPress={() => {console.log("Homeへ"); setSelected(0);}}>
					<Center>
					<Icon name="home" size={30} color="#fff"/>
					<Text color="white" fontSize="12">
						Home
					</Text>
					</Center>
				</Pressable>
				<Pressable 	cursor="pointer" 
							opacity={selected === 1 ? 1 : 0.5}
							py="2" 
							flex={1} 
							onPress={() => {console.log("Calendarへ"); setSelected(1);}}>
					<Center>
					<Icon name="calendar" size={30} color="#fff"/>
					<Text color="white" fontSize="12">
						Calendar
					</Text>
					</Center>
				</Pressable>
				</HStack>
			</Box>
		</NativeBaseProvider>
	)
}

export default SignedFooter;