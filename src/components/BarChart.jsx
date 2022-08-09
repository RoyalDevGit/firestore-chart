import React from "react";
import CanvasJSReact from "../assets/canvasjs.react";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export function BarChart(props) {
  const { data } = props;

  const responses = data[Object.keys(data)[6]];

  const options = {
    title: {
      text: "Basic Column Chart",
    },
    animationEnabled: true,
    data: [
      {
        // Change type to "doughnut", "line", "splineArea", etc.
        type: "column",
        dataPoints: responses
          ? Object.keys(responses).map((key) => {
              return {
                label: key,
                y: responses[key],
              };
            })
          : [],
      },
    ],
  };

  return (
    <div>
      <h1>React Column Chart</h1>
      <CanvasJSChart
        options={options}
        /* onRef={ref => this.chart = ref} */
      />
      {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
    </div>
  );
}

export default BarChart;
