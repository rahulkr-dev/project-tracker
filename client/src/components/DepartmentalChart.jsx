import ApexCharts from "apexcharts";

import React, { useEffect, useRef } from "react";
import Chart from "react-apexcharts";

const DepartmentalChart = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    // Prepare data for chart
    const departments = data?.map((item) => item._id).map((item)=>item.toUpperCase().slice(0,3)) ;
    const totalProjects = data?.map((item) => item.total);
    const closedProjects = data?.map((item) => item.closed);

    // Create the chart options
    const options = {
      chart: {
        type: "bar",
        height: 350,
        toolbar: {
          show: false,
        },
      },
      
      series: [
        {
          name: "Total Projects",
          data: totalProjects,
        },
        {
          name: "Closed Projects",
          data: closedProjects,
        },
      ],
      xaxis: {
        categories: departments,
        labels: {
          style: {
            colors: "black",
            fontSize: ".8rem",
            fontWeight:"bold"
          },
        },
      },
      yaxis: {
        // title: {
        //   text: "$ (thousands)",
        //   style: {
        //     color: "black",
        //   },
        // },
        labels: {
          style: {
            colors: "black",
            fontSize: "1rem",
            fontWeight:"500"
          },
        },
      },
      colors: ["#4286f4", "#00a74f"], // Blue and Green colors for Total and Closed projects respectively
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "35%",
          endingShape: "rounded",
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 4,
        colors: ["transparent"],
      },
      fill: {
        opacity: 1,
      },
      grid: {
        borderColor: "black",
        yaxis: {
          lines: {
            show: false,
          },
        },
        xaxis: {
          lines: {
            show: false,
          },
        },
      },
      legend: {
        labels: {
          colors: "black",
        },
        show: true,
        position: "bottom",
      },
    };

    // Create the chart instance
    const chartInstance = new ApexCharts(chartRef.current, options);

    // Render the chart
    chartInstance.render();

    // Cleanup function
    return () => {
      chartInstance.destroy();
    };
  }, [data]);

  return <div className="chart-container" ref={chartRef} />;
};

export default DepartmentalChart;
