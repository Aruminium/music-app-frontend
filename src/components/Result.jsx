import { NativeBaseProvider, VStack, HStack, Text, Icon, Divider, Center, AspectRatio, Heading, Image, Box, Button} from "native-base";
import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MusicInfo from "../components/MusicInfo";

const convertSubString = (string) => {
	const name = string;
	if(name.length > 45) {
		const splitName = name.substring(0, 45);
		return splitName + "...";
	}else{
		return name;
	}
}

const Stack = createNativeStackNavigator();

const Result = ({ result }) => {
	console.log(result)
	return (
			<NativeBaseProvider>
					{result?.Items?.length >= 1?
					result.Items.map((item, index) => (
						<div key={index}>
							<MusicInfo artistName={item.Item.artistName} albumName={item.Item.title} releaseDate={item.Item.salesDate} imageUrl={item.Item.mediumImageUrl}/>
						</div>
						// console.log(item.Item)
						// <Image key={index} source={{uri: item.Item.mediumImageUrl}} alt="CDImage" size={"xl"}/>
					)): null}
			</NativeBaseProvider>
	)
}

export default Result;