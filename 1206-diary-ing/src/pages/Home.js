import React, { useState, useContext, useEffect } from "react";
import { DiaryStateContext } from "../App";
import { getMonthRangeByDate } from "../util";
import DiaryList from "../component/DiaryList";
import Button from "../component/Button";
import Header from "../component/Header";

const Home = () => {
  // const moveMonth = (date, moveMonth) => {
  //   const curTimestamp = date.getTime();
  //   const curMonth = date.getMonth();

  //   const resDate = new Date(curTimestamp);
  //   resDate.setMonth(curMonth + moveMonth);
  //   return resDate;
  // };

  // const dateA = new Date("2022-12-06");
  // console.log(dateA);

  // const dateB = moveMonth(dateA, 1);
  // console.log(dateB);

  // const dateC = moveMonth(dateA, -1);
  // console.log(dateC);

  // const dateArray = [
  //   new Date("2000-10-1"),
  //   new Date("2000-10-31"),
  //   new Date("2023-11-1"),
  //   new Date("2003-9-30"),
  //   new Date("2320-10-1"),
  // ];

  // const filterThisMonth = (pivotDate, deteArray) => {
  //   const year = pivotDate.getFullYear();
  //   const month = pivotDate.getMonth();

  //   const startDay = new Date(year, month, 1, 0, 0, 0);
  //   const endDay = new Date(year, month + 1, 0, 23, 59, 59);

  //   const resArr = dateArray.filter(
  //     (it) =>
  //       startDay.getTime() <= it.getTime() && it.getTime() <= endDay.getTime()
  //   );

  //   return resArr;
  // };

  // const today01 = new Date("2023-10-10/00:00:00");
  // const filteredArray = filterThisMonth(today01, dateArray);
  // console.log(filteredArray);

  const data = useContext(DiaryStateContext);
  const [filteredData, setFilteredData] = useState([]);
  const today = new Date();
  const [pivotDate, setPivotDate] = useState(today);
  useEffect(() => {
    if (data.length >= 1) {
      const { beginTimeStamp, endTimeStamp } = getMonthRangeByDate(pivotDate);
      setFilteredData(
        data.filter(
          (it) => beginTimeStamp <= it.date && it.date <= endTimeStamp
        )
      );
    } else {
      setFilteredData([]);
    }
  }, [data, pivotDate]);
  const pivotYear = pivotDate.getFullYear();
  const pivotMonth = pivotDate.getMonth() + 1;
  const headerTitle = `${pivotYear}년 ${pivotMonth}월`;
  const onIncreaseMonth = () => {
    setPivotDate(new Date(pivotYear, pivotMonth));
  };
  const onDecreaseMonth = () => {
    setPivotDate(new Date(pivotYear, pivotMonth - 2));
  };
  return (
    <div>
      <Header
        leftChild={<Button text={"<"} onClick={onDecreaseMonth} />}
        title={headerTitle}
        rightChild={<Button text={">"} onClick={onIncreaseMonth} />}
      />
      <DiaryList data={filteredData} />
    </div>
  );
};

export default Home;
