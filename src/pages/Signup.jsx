import React, {Component, createContext, useEffect, useState} from "react";
import {View, Text} from "react-native";
import {Input, FormControl, Stack, Box, NativeBaseProvider, Button} from "native-base";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config";

const Signup = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [user, setUser] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(
        auth,
        userEmail,
        userPassword
      );
    } catch(error) {
      alert("正しく入力してください")
    }
  }
  /* ↓ログインしているかどうかを判定する */
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, [])
  return (
    <NativeBaseProvider>
      <FormControl >
        <Stack space={5}>
          <Stack>
            <FormControl.Label>Email</FormControl.Label>
            <Input variant="underlined" p={2} placeholder="Email"
              onChange={(e) => {
                setUserEmail(e.target.value);
              }}/>
          </Stack>
          <Stack>
            <FormControl.Label>Password</FormControl.Label>
            <Input variant="underlined" p={2} placeholder="Password"
              onChange={(e) => {
                setUserPassword(e.target.value);
              }}/>
          </Stack>
        </Stack>
      </FormControl>
      <Button onClick={handleSubmit}>サインアップ</Button>
    </NativeBaseProvider>
  );
}

export default Signup;
