import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";
import { Box, NativeBaseProvider } from "native-base";
import Icon from "react-native-vector-icons/Ionicons";
import MusicInfo from "../../components/MusicInfo";
import SignedFooter from "../../components/SignedFooter";
import MusicInfoList from "../../components/MusicInfoList";

const MyCalendar = ({navigation}) => {
  const today = new Date();
  const halfYearAgo = new Date(today.getFullYear(), today.getMonth() - 6, 2);
  const halfYearAfter = new Date(today.getFullYear(), today.getMonth() + 6, 0);

  const [selectedDate, setSelectedDate] = useState(today.dateString);
  const _markedDates = {
    [selectedDate]: { selected: true, selectedColor: "#3F51B5" },
  };

  const datas = [
    {
      artistName: "米酢",
      albumName: "みかん",
      ReleaseDate: "2022-06-10",
      id: 1,
    },
    {
      artistName: "アイウエオ",
      albumName: "わわわわわ",
      ReleaseDate: "2022-06-28",
      id: 2,
    },
    {
      artistName: "検事",
      albumName: "ピーポーサイン",
      ReleaseDate: "2022-06-15",
      id: 3,
    },
  ];

  return (
    <NativeBaseProvider>
      <Calendar
        current={today.dateString}
        minDate={halfYearAgo.toISOString().toString()}
        maxDate={halfYearAfter.toISOString().toString()}
        onDayPress={(day) => {
          setSelectedDate(day.dateString);
          // todo : MusicInfoListに渡す引数を変える処理
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
              color: "#EF5350",
            },
            dayTextAtIndex6: {
              color: "#5C6BC0",
            },
          },
        }}
      />

      <MusicInfoList datas={datas.filter((data)=> data.ReleaseDate === selectedDate)} />
      <SignedFooter navigation={navigation}/>
    </NativeBaseProvider>
  );
};

export default MyCalendar;
