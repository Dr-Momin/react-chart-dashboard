import React from 'react';
import Sidebar from "./Sidebar.jsx";
import Topbar from "./Topbar";
import Divider from "./Divider";
import CardOne from "./Cards/CardOne.jsx";
import CardTwo from "./Cards/CardTwo.jsx";
import CardThree from "./Cards/CardThree.jsx";
import CardFour from "./Cards/CardFour.jsx";
import CardFive from "./Cards/CardFive.jsx";
import CardSix from "./Cards/CardSix.jsx";
import CardSeven from "./Cards/CardSeven.jsx"


const Dashboard = () => {
    return (
        <div className={"flex "}>

            <div className={"w-[15%] bg-indigo-600"}>
                <Sidebar />
            </div>

            <div className={" flex flex-col w-[85%] bg-gray-100"}>
                <Topbar/>
                <Divider/>

                <main className={"flex justify-between gap-3 m-4 w-[95%] "}>
                    <div className={"flex flex-col w-[50%]  gap-4 "}>
                        <CardOne/>
                        <CardTwo/>
                        <CardThree/>

                    </div>

                    <div className={"flex flex-col w-[50%] gap-8"}>
                        <CardFour/>
                        <CardFive/>

                        <div className={"flex gap-4"}>
                            <CardSix/>
                            <CardSeven/>
                        </div>
                    </div>


                </main>




            </div>


        </div>
    );
};

export default Dashboard;
