import React, { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import listPlugin from '@fullcalendar/list';
import FB from "../../../Fierbase/FB";
import './Schedule.css';
import add from './addCalendarData';

const Schedule = (props) => {
  const [calendarData, setCalendarData] = useState([]);

  useEffect(() => {
      add('A1','2021','2021-07-12')
    const getCalendarData = async () => {
      let newArray = [];
      const calendarData = await FB.firestore()
        .collection("calendar")
        .doc("A1")
        .collection("2021")
        .get();

      calendarData.docs.forEach((el) => {
        newArray.push(...el.data().calendarData);
      });

      setCalendarData(newArray);
    };

    getCalendarData();
  }, []);

  return (
    <div className='calendarContainer'>
      <FullCalendar
        locale="uk"
        height="550px"
        headerToolbar={{
            right: 'today prev,next',
            center: 'title',
            left: 'dayGridMonth,listWeek'
        }}
        dayMaxEvents={true}
        plugins={[dayGridPlugin,listPlugin]}
        events={calendarData}
      />
    </div>
  );
};

export default Schedule;
