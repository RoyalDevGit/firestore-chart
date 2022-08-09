import { getDoc, doc } from "firebase/firestore/lite";
import db from "../firebase";
import React, { useEffect, useState } from "react";
import mockData from "../data";
import PieChart from "./PieChart";
import BarChart from "./BarChart";

const Questions = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    setData(fetchApi().data);
    getAggregation(mockData);
  }, []);

  // fetch data from firestore
  const fetchApi = async () => {
    // assume that the target collection is `assignments`
    const result = await getDoc(doc(db, "assignments", "assignmentId"));
    return result;
  };
  // aggregate data and obtain totalResponse and individual response
  const getAggregation = (data) => {
    if (data.Completed) {
      const temp = Object.assign(data);
      temp.Completed.forEach((response) => {
        const key = Object.keys(response.content)[0];
        if (temp[key]) {
          temp[key].total++;
          if (temp[key][response.completedBy]) {
            temp[key][response.completedBy]++;
          } else {
            temp[key][response.completedBy] = 1;
          }
        } else {
          temp[key] = { total: 1 };
          temp[key][response.completedBy] = 1;
        }
      });
      setData(temp);
      console.log(Object.keys(data).length);
    }
    console.log(data);
  };

  return (
    <>
      <BarChart data={data} />
      <PieChart data={data} />
    </>
  );
};

export default Questions;
