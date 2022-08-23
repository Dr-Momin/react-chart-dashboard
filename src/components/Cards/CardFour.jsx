import React from 'react';
import DoughnutChart from "../../Charts/DoughnutChart";
import img2 from '../../assets/img2.jpg';

const CardFour = () => {
    return (
        <>
            <div className={" shadow-xl rounded-xl bg-white "}>
                <div className={" text-center "}>
                    Schedule
                </div>

                <div className={"flex gap-1 "}>
                    <div className={"flex flex-col w-96"}>

                        <div className={"flex gap-1 "}>
                            <h1 className={" text-center w-full "}>Start Date</h1>
                            <h1 className={" text-center w-full"}>End Date</h1>
                        </div>
                        <div className={"flex  justify-around text-sm py-4"}>
                            <h1 >17 March 2021</h1>
                            <h1>19 Feb 2023</h1>
                        </div>

                        <div className={"flex gap-1 "}>
                            <h1 className={" text-center w-full "}>Start Date</h1>
                            <h1 className={"text-center w-full"}>End Date</h1>
                        </div>
                        <div className={"flex  justify-around text-sm py-4"}>
                            <h1 >17 March 2021</h1>
                            <h1>19 Feb 2023</h1>
                        </div>


                        <div>
                            <h1 className={" text-center"}>Project Image</h1>
                            <div className={"flex justify-center"}>
                                <DoughnutChart/>
                            </div>
                        </div>

                    </div>

                    <div className={"flex flex-col pr-2"}>
                        <h1 className={" text-center"}>Project Time Data</h1>
                        <div className={"w-52 self-end"}>
                            <img src={img2} alt=""/>
                        </div>
                    </div>


                </div>

            </div>
        </>
    );
};

export default CardFour;
