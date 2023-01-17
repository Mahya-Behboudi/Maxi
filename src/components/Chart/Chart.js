import React from "react";
import './Chart.css'
import ChartBar from "./ChartBar";
const Chart =(props)=>{
    //  datapoints is array_of_Object and max get the ARRAY 
    const dataPointValues = props.dataPoints.map(dataPoint =>dataPoint.value);  
    const totalMaximum = Math.max(...dataPointValues);
    return (
        <div className="chart">

            {props.dataPoints.map(dataPoints=><ChartBar key={dataPoints.label} value={dataPoints.value} maxValue={totalMaximum} label={dataPoints.label} />)}
        </div>
    ) ;
}
export default Chart;