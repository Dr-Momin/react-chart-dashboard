import React from 'react';
import Table from "../Table.jsx";
import BarChart from "../../Charts/BarChart";
import PieChart from "../../Charts/PieChart";
import OdoMeter from "../../Charts/OdoMeterChart";

const CardThree = () => {
    return (
        <>
            <div className={" shadow-xl rounded-xl bg-white "}>
                <div className={"text-center py-2"}>
                    Business Plan
                </div>

                <div className={"flex gap-1"}>
                    <div className={"flex flex-col w-72"}>
                        <div className={" text-center"}>
                            Business Plan - 2022
                        </div>
                        <div className={"flex justify-center "}>
                            <OdoMeter/>

                        </div>
                    </div>

                    <div className={"flex flex-col w-full "}>
                        <div className={" text-center"}>
                            Business Plan, Actual and Forecast
                        </div>
                        <div className={"flex justify-center "}>
                            <BarChart/>
                        </div>
                    </div>


                </div>

            </div>
        </>
    );
};

export default CardThree;
