import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { Center, NativeBaseProvider } from "native-base";
import MusicInfo from "../../components/MusicInfo";
import MusicInfoList from "../../components/MusicInfoList";
import SignedFooter from "../../components/SignedFooter";
import AddMusic from "../../components/AddMusic";
import {auth, db} from "../../../config";
import {collection, getDocs, query, where} from "firebase/firestore";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";

const MyPage = ({ navigation }) => {
  const [user, setUser] = useState("");
  const datas= [
    {
      userId: "hoge",
      userCdData: [
        "米酢",
        "みかん",
        "2022-06-10",
        "https://placehold.jp/200x200.jpg",
      ]
    },
    {
      artistName: "米酢",
      albumName: "みかん",
      releaseDate: "2022-06-10",
      id: 5,
    },
    {
      artistName: "アイウエオ",
      albumName: "わわわわわ",
      releaseDate: "2022-06-28",
      id: 6,
    },
    {
      artistName: "検事",
      albumName: "ピーポーサイン",
      releaseDate: "2022-06-15",
      id: 7,
    },
    {
      artistName: "ジャイアン",
      albumName: "オレはジャイアン",
      releaseDate: "2022-06-04",
      id: 8,
    },
  ];
  const data2 = datas.map(elm =>
    elm.userCdData)
  // useEffect(async()=>{
  //   try{
  //     const q = query(collection(db, "users"), where("userId", "==", user));
  //     const querySnapshot = await getDocs(q);
  //     querySnapshot.forEach((doc) => {
  //       console.log(doc.data());
  //     });
  //     setDatas(querySnapshot)
  //   } catch(e){
  //     console.log(e);
  //   }
  // },[]);
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, [])
  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <MusicInfoList datas={datas} />

        <AddMusic navigation={navigation} />


        <Center px="3" flex={2}>
          <SignedFooter navigation={navigation} />
        </Center>
      </View>
    </NativeBaseProvider>
  );
};

export default MyPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    justifyContent: "center",
  },
});
