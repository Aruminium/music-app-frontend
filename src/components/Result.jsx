import { FlatList, Alert, NativeBaseProvider, VStack, HStack, Text, Icon, Divider, Center, AspectRatio, Heading, Image, Box, Button} from "native-base";
import React, {useState, useEffect} from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MusicInfo from "../components/MusicInfo";
import {collection, addDoc, query, where, getDocs} from "firebase/firestore";
import { getAuth, onAuthStateChanged} from "firebase/auth";
import {db, auth} from "../../config";
import MusicInfoList from "./MusicInfoList";

const convertSubString = (string) => {
	const name = string;
	if(name.length > 45) {
		const splitName = name.substring(0, 45);
		return splitName + "...";
	}else{
		return name;
	}
}



const Result = ({ result }) => {
	// const [userItem, setUserItem] = useState([]);
	const [user, setUser] = useState("");
	const onClickAdd = async(userItem) => {
		let userCdData = [userItem.title, userItem.artistName, userItem.salesDate, userItem.mediumImageUrl];
    try {
      const docRef = await addDoc(collection(db, "users"), {
				userId: user,
				userCdData: userCdData
			});
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
	}
	useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
	}, []);
	return (
		<NativeBaseProvider>
				{result?.Items?.length >= 1?
				result.Items.map((item, index) => (
						<div key={index}>
							<MusicInfo artistName={item.Item.artistName} title={item.Item.title} releaseDate={item.Item.salesDate} imageUrl={item.Item.mediumImageUrl}/>
							<Button onPress={()=>{
								onClickAdd(item.Item)
								console.log(item.Item)
							}}>登録</Button>
						</div>
				)): null}
		</NativeBaseProvider>
	)
}

export default Result;