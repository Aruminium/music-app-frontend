import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";
import { Box, NativeBaseProvider,Center } from "native-base";
import Icon from "react-native-vector-icons/Ionicons";
import MusicInfo from "../../components/MusicInfo";
import SignedFooter from "../../components/SignedFooter";
import MusicInfoList from "../../components/MusicInfoList";
import AddMusic from "../../components/AddMusic"

const MyCalendar = ({ navigation }) => {
  const today = new Date();
  const halfYearAgo = new Date(today.getFullYear(), today.getMonth() - 6, 2);
  const halfYearAfter = new Date(today.getFullYear(), today.getMonth() + 6, 0);

  const [selectedDate, setSelectedDate] = useState(today.dateString);

  const datas = [
    {
      artistName: "米酢",
      albumName: "みかん",
      releaseDate: "2022-06-10",
      id: 1,
    },
    {
      artistName: "アイウエオ",
      albumName: "わわわわわ",
      releaseDate: "2022-06-28",
      id: 2,
    },
    {
      artistName: "検事",
      albumName: "ピーポーサイン",
      releaseDate: "2022-06-15",
      id: 3,
    },
    {
      artistName: "ジャイアン",
      albumName: "オレはジャイアン",
      releaseDate: "2022-06-04",
      id: 4,
    },
  ];


  // let _markedDates = {
  //   [selectedDate]: { selected: true, selectedColor: "#3F51B5"},
  // }

  // 初期は選択したら青くなる処理 -> useEffectでリリース日が赤くなる処理
  const [_markedDates, set_markedDates] = useState({
    [selectedDate]: { selected: true, selectedColor: "#3F51B5" },
  });

  // 試行錯誤のやつ【赤くなる処理と青くする処理を合体させようとした】
  // const [dateMarked, setDateMarked] = useState(() => {
  //   const releaseDates = datas.map((data) => data.releaseDate);
  //   // リリース日の配列をobjに変換
  //   const obj = { ...releaseDates };
  //   // const array = {...Object.entries(obj).map((arr) => {arr[1] , {marked: true}})}
  //   // .map((value) => key[0] = {[selectedDate]: { selected: true, selectedColor: "#3F51B5"}})

  //   Object.fromEntries(
  //     Object.entries(obj).map(function (value) {
  //       return [value[1], { marked: true, dotColor: "red" }];
  //     })
  //   );
  // });

  useEffect(() => {
    const releaseDates = datas.map((data) => data.releaseDate);
    // リリース日の配列をobjに変換
    const obj = { ...releaseDates };
    // const array = {...Object.entries(obj).map((arr) => {arr[1] , {marked: true}})}
    // .map((value) => key[0] = {[selectedDate]: { selected: true, selectedColor: "#3F51B5"}})

    const markedDates = Object.fromEntries(
      Object.entries(obj).map(function (value) {
        return [value[1], { marked: true, dotColor: "red" }];
      })
    );

    set_markedDates(markedDates);
  },[]);


  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <Calendar
          current={today.dateString}
          minDate={halfYearAgo.toISOString().toString()}
          maxDate={halfYearAfter.toISOString().toString()}
          onDayPress={(day) => {
            setSelectedDate(day.dateString);
            console.log(day);
          }}
          // onDayLongPress={(day) => {
          //   console.log("selected day", day);
          // }}

          monthFormat={today.getMonth > 9 ? "MM月" : "M月"}
          onMonthChange={(month) => {
            console.log("month changed", month);
          }}
          renderArrow={(direction) =>
            direction === "left" ? (
              <Icon name="arrow-back-circle-outline" size="300" color="#3F51B5" />
            ) : (
              <Icon
                name="arrow-forward-circle-outline"
                size="300"
                color="#3F51B5"
              />
            )
          }
          firstDay={7}
          enableSwipeMonths={true}
          onPressArrowLeft={(subtractMonth) => subtractMonth()}
          onPressArrowRight={(addMonth) => addMonth()}
          disableAllTouchEventsForDisabledDays={true}
          markedDates={_markedDates}
          theme={{
            "stylesheet.calendar.header": {
              dayTextAtIndex0: {
                // width:'15vw',
                color: "#EF5350",
              },
              dayTextAtIndex6: {
                // width:'15vw',
                color: "#5C6BC0",
              },
            },
          }}
        />
      

        <MusicInfoList
          datas={datas.filter((data) => data.releaseDate === selectedDate)}
        />
        <AddMusic navigation={navigation}/>
        <Center px="3" flex={2}>
        <SignedFooter navigation={navigation} />
        </Center>
      </View>
    </NativeBaseProvider>
  );
};

export default MyCalendar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:'100vw',
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
  }
})