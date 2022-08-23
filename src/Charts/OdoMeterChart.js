import React from "react";
import { Doughnut } from "react-chartjs-2";
import GaugeChart from 'react-gauge-chart'


const OdoMeter = () => {

    return (
        <div className={"w-52 pt-8"}>
            {/*<GaugeChart id="gauge-chart1" />*/}
            <GaugeChart id="gauge-chart2"
                        colors={["#36a2ebb3"]}
                        nrOfLevels={1}
                        percent={0.86}
                        needleColor="#ff6384b3"
            />
        </div>
    );
};

export default OdoMeter;


const data = {
    // labels: ["Red", "Green", "Yellow"],
    datasets: [
        {
            data: [500, 500, 500],
            backgroundColor: ["red", "#FFCE56", "lightgreen"],
            hoverBackgroundColor: ["red", "#FFCE56", "lightgreen"]
        }
    ],
    options: {
        rotation: 1 * Math.PI,
        circumference: 1 * Math.PI,
        legend: {
            display: false
        },
        tooltip: {
            enabled: false
        },
        cutoutPercentage: 70
    }
};

