import React from 'react';

const CardFive = () => {
    return (
        <>
            <div className={"shadow-xl rounded-xl bg-white"}>
                <div className={" text-center py-1"}>
                    Main Power
                </div>

                <div className={"flex gap-1"}>
                    <div className={"flex flex-col w-full"}>
                        <h1 className={" text-center py-2"}>Staff</h1>
                        <p className={"text-center"}>252</p>
                    </div>

                    <div className={"flex flex-col w-full"}>
                        <h1 className={"text-center py-2"}>Technicians</h1>
                        <p className={"text-center"}>253</p>
                    </div>


                </div>

            </div>
        </>
    );
};

export default CardFive;
