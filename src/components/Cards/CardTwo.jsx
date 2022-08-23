import React from 'react';
import Table from "../Table.jsx";
import PieChart from "../../Charts/PieChart";
import BarChart from "../../Charts/BarChart";

const CardTwo = () => {
    return (
        <>
            <div className={" shadow-xl rounded-lg bg-white rounded-xl"}>
                <div className={"bg-white text-center rounded-xl py-2"}>
                    Engineering Drawing
                </div>

                <div className={"flex gap-1"}>
                    <div className={"flex flex-col"}>
                        <div className={"bg-white text-center"}>
                            Planned and Actuals
                        </div>
                        <div>
                            <BarChart/>
                        </div>
                    </div>

                    <div className={"flex flex-col w-full "}>
                        <div className={"bg-white text-center"}>
                            Pending and Released
                        </div>
                        <div className={"flex justify-center "}>
                            <PieChart/>
                        </div>
                    </div>


                </div>

            </div>
        </>
    );
};

export default CardTwo;
