import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {

    const { user, logout } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleLogout = () => {

        logout();

        navigate("/");

    };

    return (

        <nav className="navbar bg-white shadow-sm px-4">

            <h4 className="fw-bold m-0">

                Leave Management System

            </h4>

            <div className="d-flex align-items-center">

                <div className="text-end me-3">

                    <strong>

                        {user?.name}

                    </strong>

                    <br/>

                    <small className="text-muted">

                        {user?.role}

                    </small>

                </div>

                <button
                    className="btn btn-outline-danger"
                    onClick={handleLogout}
                >

                    <i className="bi bi-box-arrow-right me-2"></i>

                    Logout

                </button>

            </div>

        </nav>

    );

};

export default Navbar;