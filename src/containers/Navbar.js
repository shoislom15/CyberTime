import NavbarWrapper from "./NavbarWrapper";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

const Navbar = ({ btns }) => {

    const params = useParams();

    const navigate = useNavigate();
    const pathname = useLocation().pathname;
    console.log(pathname);

    return (
        <>
            <NavbarWrapper>
                <div className="row justify-content-center w-100">
                    <div className="col-md-6 col-sm-8 col-xs-12 p-0">
                        <div className="d-flex justify-content-center">
                            <button
                                onClick={() => navigate("/")}
                                className={`btn w-100 py-2 ${(pathname.startsWith(`/`) && pathname.length - 1 <= ("/").length) && "active"}`}>
                                Alaram
                            </button>
                            <button
                                onClick={() => navigate("/Countdown")}
                                className={`btn w-100 py-2 ${(pathname.startsWith(`/Countdown`) && pathname.length - 1 <= ("/Countdown").length) && "active"}`}>
                                Countdown
                            </button>
                            <button
                                onClick={() => navigate("/Stopwatch")}
                                className={`btn w-100 py-2 ${(pathname.startsWith(`/Stopwatch`) && pathname.length - 1 <= ("/Stopwatch").length) && "active"}`}>
                                Stopwatch
                            </button>
                        </div>
                    </div>
                </div>
            </NavbarWrapper>
        </>
    );
}

export default Navbar;