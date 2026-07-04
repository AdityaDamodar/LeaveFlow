import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Sidebar = ({ role }) => {

    const location = useLocation();
    const { user } = useContext(AuthContext);

    const active = (path) =>
        location.pathname === path
            ? "nav-link text-white bg-white bg-opacity-25 rounded"
            : "nav-link text-white";

    return (
        <div
            className="d-flex flex-column bg-primary text-white p-3"
            style={{
                width: "260px",
                minHeight: "100vh",
            }}
        >

            <div className="text-center mb-4">

                <i className="bi bi-building fs-1"></i>

                <h3 className="mt-2 fw-bold">
                    LeaveFlow
                </h3>

                <small className="text-light">
                    Leave Management System
                </small>

            </div>

            <hr className="border-light"/>

            <ul className="nav flex-column">

                {role === "employee" && (
                    <>

                        <li className="mb-2">

                            <Link
                                className={active("/dashboard")}
                                to="/dashboard"
                            >

                                <i className="bi bi-speedometer2 me-2"></i>

                                Dashboard

                            </Link>

                        </li>

                        <li className="mb-2">

                            <Link
                                className={active("/apply-leave")}
                                to="/apply-leave"
                            >

                                <i className="bi bi-calendar-plus me-2"></i>

                                Apply Leave

                            </Link>

                        </li>

                        <li>

                            <Link
                                className={active("/my-leaves")}
                                to="/my-leaves"
                            >

                                <i className="bi bi-list-check me-2"></i>

                                My Leaves

                            </Link>

                        </li>

                    </>
                )}

                {role === "admin" && (
                    <>

                        <li className="mb-2">

                            <Link
                                className={active("/admin/dashboard")}
                                to="/admin/dashboard"
                            >

                                <i className="bi bi-speedometer2 me-2"></i>

                                Dashboard

                            </Link>

                        </li>

                        <li>

                            <Link
                                className={active("/admin/leaves")}
                                to="/admin/leaves"
                            >

                                <i className="bi bi-calendar-check me-2"></i>

                                Leave Requests

                            </Link>

                        </li>

                    </>
                )}

            </ul>

            <div className="mt-auto">

                <hr className="border-light"/>

                <div className="small">

                    <strong>{user?.name}</strong>

                    <br/>

                    {user?.role}

                </div>

            </div>

        </div>
    );
};

export default Sidebar;