import React from 'react';
import DoughnutChart from "../../Charts/DoughnutChart";
import PieChart from "../../Charts/PieChart";
import OdoMeter from "../../Charts/OdoMeterChart";

const CardSix = () => {
    return (
        <>
            <div className={"shadow-xl rounded-xl bg-white "}>
                <div className={" text-center "}>
                    Procurement
                </div>

                <div className={"flex flex-col gap-8 w-64 py-2"}>

                    <div className={"w-full"}>
                        <h1 className={" text-center"}>Purchase Order</h1>
                        <div className={"flex justify-center items-center"}>
                            <OdoMeter/>
                        </div>
                    </div>
                    <div>
                        <h1 className={"text-center"}>Purchase Request</h1>
                        <div className={"flex justify-center items-center"}>
                            <OdoMeter/>
                        </div>
                    </div>


                </div>


            </div>
        </>
    );
};

export default CardSix;
