import React from 'react';
import BarChart from "../../Charts/BarChart";
import DoughnutChart from "../../Charts/DoughnutChart";
import PieChart from "../../Charts/PieChart";

const CardSeven = () => {
    return (
        <>
            <div className={"shadow-xl rounded-xl bg-white"}>
                <div className={" text-center"}>
                    Critical Issues
                </div>

                <div className={"flex flex-col gap-8 w-60 py-2"}>

                        <div className={"w-full"}>
                            <h1 className={" text-center"}>Critical Issues Agening</h1>
                            <div className={"flex justify-center items-center"}>
                                <DoughnutChart/>
                            </div>
                        </div>
                        <div>
                            <h1 className={" text-center"}>Critical Issues</h1>
                            <div className={"flex justify-center items-center"}>
                                <PieChart/>
                            </div>
                        </div>


                </div>


            </div>
        </>
    );
};

export default CardSeven;
