import React from "react";
import {View, Text} from "react-native";
import {Form, Item, Input, FormControl, Stack, Box, NativeBaseProvider} from "native-base";

const Sign_Login = () => {
  return (
		<NativeBaseProvider>
			<FormControl>
      	<Stack space={5}>
        	<Stack>
          	<FormControl.Label>Username</FormControl.Label>
          	<Input variant="underlined" p={2} placeholder="Username" />
        	</Stack>
        	<Stack>
          	<FormControl.Label>Password</FormControl.Label>
          	<Input variant="underlined" p={2} placeholder="Password" />
        	</Stack>
      	</Stack>
    	</FormControl>
		</NativeBaseProvider>
	);
}

export default Sign_Login;