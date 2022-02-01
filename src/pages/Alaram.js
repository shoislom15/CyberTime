import React from "react";
import Alarams from "../Data/dataAlarams";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

const Alaram = () => {
    const timeToFirst = "6 hours 45 minutes";
    const dateOfFirrst = "Monday, 25 Aug 03:30";

    const { dataAlarams, setDataAlarams } = React.useContext(Alarams);

    setDataAlarams([
        {
            time: "03:00",
            date: "",
            type: "repeatable",
            weekDays: ["Monday", "Friday",],
        },
        {
            time: "03:00",
            date: "",
            type: "once",
        },
    ]);

    console.log(dataAlarams);


    return (
        <div className="container text-center pt-5">
            <h5 className="text-gray">Upcomung alaram</h5>
            <h2 className="text-white">{timeToFirst}</h2>
            <h5 className="text-yellow">{dateOfFirrst}</h5>
            <ul className="mx-auto">
                <li className="rounded d-flex align-items-center justify-content-end fs-4 text-yellow px-2 py-3"><FontAwesomeIcon icon={faPlusCircle} /></li>
                {dataAlarams.map((obj, i) => {
                    console.log(obj.weekDays.indexOf("Monday"));
                    return <>
                        <li key={obj} className="rounded d-flex align-items-center justify-content-between text-white bg-gray px-md-5 px-2 py-3 mb-3">
                            <div className="left ps-1">
                                <h3 className="m-0">
                                    {obj.time}
                                    {console.log(obj.time)}
                                </h3>
                            </div>
                            <div className="right d-flex">
                                <div className="d-flex gap-1 me-2">
                                    <span className={`fw-5 ${obj.weekDays.includes("Sunday") && "text-yellow"}`} >S</span>
                                    <span className={`fw-5 ${obj.weekDays.includes("Monday") && "text-yellow"}`} >M</span>
                                    <span className={`fw-5 ${obj.weekDays.includes("Tuesday") && "text-yellow"}`} >T</span>
                                    <span className={`fw-5 ${obj.weekDays.includes("Wednesday") && "text-yellow"}`} >W</span>
                                    <span className={`fw-5 ${obj.weekDays.includes("Thursday") && "text-yellow"}`} >T</span>
                                    <span className={`fw-5 ${obj.weekDays.includes("Friday") && "text-yellow"}`} >F</span>
                                    <span className={`fw-5 ${obj.weekDays.includes("Saturday") && "text-yellow"}`} >S</span>
                                </div>
                                <button className="btn border-gray p-0">
                                    <div className="rounded-circle labelCircle activeLabel bg-danger"></div>
                                </button>
                            </div>
                        </li>
                    </>
                })}
            </ul>
        </div>
    );
}

export default Alaram;