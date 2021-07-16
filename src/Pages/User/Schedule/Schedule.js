import React, { useEffect } from "react";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import listPlugin from '@fullcalendar/list';

import { useDispatch, useSelector } from "react-redux";
import { getClalendarData } from "../../../redux/userActions";
import './Schedule.css';

const Schedule = (props) => {
  const dispatch = useDispatch()
  const { role, calendar } = useSelector(state => state.userReducer);

  useEffect(() => {
    dispatch(getClalendarData(role))
  }, [dispatch, role]);

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
        events={calendar !== null && calendar}
      />
    </div>
  );
};

export default Schedule;
