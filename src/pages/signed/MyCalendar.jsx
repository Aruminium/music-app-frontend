import React, {useState} from "react";
import { View, Tex, StyleSheet } from "react-native";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";
import { Box, NativeBaseProvider } from "native-base";
import Icon from "react-native-vector-icons/Ionicons";

const MyCalendar = () => {
  const today = new Date();
	const halfYearAgo = new Date(today.getFullYear(), today.getMonth() - 6, 2)
	const halfYearAfter = new Date(today.getFullYear(), today.getMonth() + 6, 0)

	// 日付を選択したら、選択した日付の色を変えたい
	const [selectedDate, setSelectedDate] = useState();

	// 選択している日付を更新する関数
	const updateSelectedDate = (day) => {
		setSelectedDate(day);
	}

  return (
    <NativeBaseProvider>
      <Calendar
        current={today.dateString}
				minDate={halfYearAgo.toISOString().toString()}
        maxDate={halfYearAfter.toISOString().toString()}
        onDayPress={(day) => {
					updateSelectedDate(day)
					// todo : CardAresに渡す引数を変える処理
        }}

        // onDayLongPress={(day) => {
        //   console.log("selected day", day);
        // }}

        monthFormat={"yyyy MM"}
        onMonthChange={(month) => {
          console.log("month changed", month);
        }}
        renderArrow={(direction) =>
          direction === "left" ? <Icon name="arrow-back-outline" size="40" color="#2296F3"/> : <Icon name="arrow-forward-outline" size="40" color="#2296F3" />
        }
        firstDay={7}
        enableSwipeMonths={true}
        onPressArrowLeft={(subtractMonth) => subtractMonth()}
        onPressArrowRight={(addMonth) => addMonth()}
        disableAllTouchEventsForDisabledDays={true}
        markedDates={{
          "2022-06-04": { selected: true },
          "2022-06-30": { marked: true },
          "2022-06-04": { textColor: "blue" },
          "2022-06-05": { textColor: "red" },
					// 今選択されている日付に色をつけたい
					selectedDate : {selected: true, marked: true, selectedColor: 'blue'}
        }}
        theme={{
          "stylesheet.calendar.header": {
            dayTextAtIndex0: {
              color: "red",
            },
            dayTextAtIndex6: {
              color: "blue",
            },
          },
        }}
      />

      {/* <CardsArea/ cards={cards}> */}
    </NativeBaseProvider>
  );
};

export default MyCalendar;
