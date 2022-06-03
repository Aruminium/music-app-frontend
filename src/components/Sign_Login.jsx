import React, { useEffect, useState } from "react";
import {View, Text} from "react-native";
import {Form, Item, Input, FormControl, Stack, Box, NativeBaseProvider} from "native-base";
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "../../FirebaseConfig.js";

const Sign_Login = () => {
	const [userEmail, setUserEmail] = useState("");
	const [userPassword, setUserPassword] = useState("");

	// const handleSubmit = async (e) => {
	// 	e.preventDefault();

	// 	try {
	// 		await createUserWithEmailAndPassword(
	// 			auth,
	// 			userEmail,
	// 			userPassword
	// 		);
	// 	} catch(error) {
	// 		alert("正しく入力してください")
	// 	}
	// }

	// const [user, setUser] = useState("");
	// //ログインしているか判定
	// useEffect(() => {
	// 	onAuthStateChanged(auth, (currentUser) =>{
	// 		setUser(currentUser);
	// 	});
	// }, []);

  return (
		<NativeBaseProvider>
			<FormControl >
      	<Stack space={5}>
        	<Stack>
          	<FormControl.Label>Email</FormControl.Label>
						<Input variant="underlined" p={2} placeholder="Email"
							onChange={(e) => setUserEmail(e.target.value)}/>
        	</Stack>
        	<Stack>
          	<FormControl.Label>Password</FormControl.Label>
          	<Input variant="underlined" p={2} placeholder="Password"
							onChange={(e) => setUserPassword(e.target.value)}/>
        	</Stack>
      	</Stack>
    	</FormControl>
		</NativeBaseProvider>
	);
}

export default Sign_Login;