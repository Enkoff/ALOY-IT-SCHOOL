import FB from "../../../Fierbase/FB";
const BREAK_NAME = "Перерва";

const addCalendarData = (
  collectionGroupName,
  collectionDate,
  date,
  dayLessonsName = 'Основи програмування',
  teacher = 'Андрій Лось та Олег Єнько',
  lessonOneTime = "09:00-10:00",
  lessonOneName = "HTML",
  breakOneTime = "10:00-10:15",
  breakOneName = BREAK_NAME,
  lessonTwoTime = "10:15-11:15",
  lessonTwoName = "CSS",
  breakTwoTime = "11:15-11:30",
  breakTwoName = BREAK_NAME,
  lessonThreeTime = "11:30-12:30",
  lessonThreeName = "JS"
) => {
  const object = {
    calendarData: [
      {
        title: `1. ${dayLessonsName}`,
        date,
        className: ["day-lessons-name"],
      },
      {
        title: `2. ${teacher}`,
        date,
        className: ["teacher"],
      },
      {
        title: `3. ${lessonOneTime} ${lessonOneName}`,
        date,
        className: ["lesson"],
      },
      {
        title: `4. ${breakOneTime} ${breakOneName}`,
        date,
        className: ["break"],
      },
      {
        title: `5. ${lessonTwoTime} ${lessonTwoName}`,
        date,
        className: ["lesson"],
      },
      {
        title: `6. ${breakTwoTime} ${breakTwoName}`,
        date,
        className: ["break"],
      },
      {
        title: `7. ${lessonThreeTime} ${lessonThreeName}`,
        date,
        className: ["lesson"],
      },
    ],
  };

  FB.firestore()
    .collection("calendar")
    .doc(collectionGroupName)
    .collection(`${collectionDate}`)
    .doc(`${date}`)
    .set(object);
};

export default addCalendarData;
