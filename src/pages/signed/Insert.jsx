import axios from "axios";
import React, { useEffect, useState } from "react";
import {Input, FormControl, Stack, Box, NativeBaseProvider, Button, Spinner} from "native-base";
import useFetchData from "../../utils/API";
import ItemSearch from "../../components/ItemSearch";
import Result from "../../components/Result";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../config";

const Insert = () => {
	const [user, setUser] = useState("");
	const {error, setError, fetching, result, handleSubmit} = useFetchData();
	const [value, setValue] = useState({
		freeWord: '',
	});

	const handleFreeWord = (e) => {
		setError({
			freeWord: false,
		});
		console.log(e.target.value)
		setValue({ [e.target.name]: e.target.value });
	};
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, [])
	return (
		<>
			{/* {!user? (navigation.navigate("Login")):( */}
				<NativeBaseProvider>
					<ItemSearch
						value={value}
						error={error}
						handleFreeWord={handleFreeWord}
						handleSubmit={handleSubmit}
					/>
					{fetching? (
						<Box>
							<Spinner />
						</Box>
					): (
						<Result result={result} />
					)}
				</NativeBaseProvider>
			{/* )} */}
		</>
	)
}

export default Insert;