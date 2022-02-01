import React from "react";

const Alarams = React.createContext({
    dataAlarams: [
        {
            time: "03:00",
            date: "",
            type: "repeatable",
            weekDays: [
                "Monday",
                "Friday",
            ],
            active: true,
        },
        {
            time: "03:00",
            date: "",
            type: "repeatable",
            weekDays: [
                "Monday",
                "Friday",
            ],
            active: true,
        },
        {
            time: "03:00",
            date: "",
            type: "repeatable",
            weekDays: [
                "Monday",
                "Friday",
            ],
            active: true,
        },
        {
            time: "03:00",
            date: "",
            type: "repeatable",
            weekDays: [
                "Monday",
                "Friday",
            ],
            active: false,
        },
        {
            time: "03:00",
            date: "",
            type: "repeatable",
            weekDays: [
                "Monday",
                "Friday",
            ],
            active: true,
        },
    ],

    setDataAlarams: () => { }
})

export default Alarams;