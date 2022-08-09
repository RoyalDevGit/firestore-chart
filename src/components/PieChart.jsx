import React from "react";
import CanvasJSReact from "../assets/canvasjs.react";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export function PieChart(props) {
  const { data } = props;

  const responses = data[Object.keys(data)[6]];

  const options = {
    exportEnabled: true,
    animationEnabled: true,
    title: {
      text: "Website Traffic Sources",
    },
    data: [
      {
        type: "pie",
        startAngle: 75,
        toolTipContent: "<b>{label}</b>: {y}%",
        showInLegend: "true",
        legendText: "{label}",
        indexLabelFontSize: 16,
        indexLabel: "{label} - {y}%",
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
      <h1>React Pie Chart</h1>
      <CanvasJSChart
        options={options}
        /* onRef={ref => this.chart = ref} */
      />
      {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
    </div>
  );
}

export default PieChart;
