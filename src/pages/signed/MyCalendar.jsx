import React from "react";
import { View, Text} from "react-native";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";
import {Box} from 'native-base';

const MyCalendar = () => {

	const today = new Date()
  return (
      <Calendar
        current={today.toLocaleDateString()} 
        minDate={today.setMonth(today.getMonth + 6).toLocaleDateString} 
				maxDate={today.setMonth(today.getMonth - 6).toLocaleDateString} 
				onDayPress={day => {
					console.log('selected day', day);
				}}
				onDayLongPress={day => {
					console.log('selected day', day);
				}}
				monthFormat={'yyyy MM'}
				onMonthChange={month => {
					console.log('month changed', month);
				}}
				hideArrows={true}
				renderArrow={direction => <Arrow />}

				firstDay={0}
				
				enableSwipeMonths={true}

				// Handler which gets executed when press arrow icon left. It receive a callback can go back month
				onPressArrowLeft={subtractMonth => subtractMonth()}
				// Handler which gets executed when press arrow icon right. It receive a callback can go next month
				onPressArrowRight={addMonth => addMonth()}
				// Disable all touch events for disabled days. can be override with disableTouchEvent in markedDates
				disableAllTouchEventsForDisabledDays={true}
				// Replace default month and year title with custom one. the function receive a date as parameter
				renderHeader={date => {
					/*Return JSX*/
				}}
			
				// markedDates={{{today.toLocaleDateString}:{selected:true}}}
			/>
  );
};

export default MyCalendar;
