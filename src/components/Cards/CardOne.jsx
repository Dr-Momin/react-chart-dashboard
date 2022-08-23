import React from 'react';
import Table from "../Table.jsx";
import img1 from '../../assets/img1.jpg';

const CardOne = () => {
    return (
        <div className={" shadow-xl rounded-xl bg-white p-1"}>
            <div className={"bg-white text-center rounded-xl "}>
                Project Information
            </div>

            <div className={"flex justify-between"}>
                <div className={"flex flex-col"}>
                    <div className={"bg-white text-center"}>
                        Project Image
                    </div>
                    <div className={"w-80 pl-1"}>
                        <img src={img1} alt=""  />
                    </div>
                </div>

                <div>

                    <Table/>

                </div>

            </div>

        </div>
    );
};

export default CardOne;
