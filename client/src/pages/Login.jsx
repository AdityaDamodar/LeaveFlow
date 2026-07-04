import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../services/api";
import { AuthContext } from "../context/AuthContext";
import { toast, ToastContainer } from "react-toastify";

const Login = () => {

    const navigate = useNavigate();

    const user = JSON.parse(localStorage.getItem("user"));

            if (user) {

            if (user.role === "admin") {

                  navigate("/admin/dashboard");

            } else {

                  navigate("/dashboard");

            }

            }

    const { login } = useContext(AuthContext);

    const [formData, setFormData] = useState({

        email: "",

        password: "",

    });

    const handleChange = (e) => {

        setFormData({

            ...formData,

            [e.target.name]: e.target.value,

        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const { data } = await API.post(
                "/auth/login",
                formData
            );

            login(data);

            toast.success(data.message);

            if (data.user.role === "admin") {

                navigate("/admin/dashboard");

            } else {

                navigate("/dashboard");

            }

        } catch (error) {

            toast.error(

                error.response?.data?.message ||

                "Login Failed"

            );

        }

    };

    return (

        <div
            className="d-flex justify-content-center align-items-center"
            style={{
                minHeight: "100vh",
                background:
                    "linear-gradient(to right,#0d6efd,#4dabf7)"
            }}
        >

            <ToastContainer />

            <div
                className="card shadow-lg p-4"
                style={{
                    width: "420px",
                    borderRadius: "15px",
                }}
            >

                <h2 className="text-center mb-2">

                    LeaveFlow

                </h2>

                <p className="text-center text-muted mb-4">

                    Employee Leave Management System

                </p>

                <form onSubmit={handleSubmit}>

                    <input

                        type="email"

                        name="email"

                        placeholder="Email"

                        className="form-control mb-3"

                        onChange={handleChange}

                    />

                    <input

                        type="password"

                        name="password"

                        placeholder="Password"

                        className="form-control mb-3"

                        onChange={handleChange}

                    />

                    <button
                        className="btn btn-primary w-100"
                    >

                        Login

                    </button>

                </form>

                <div className="text-center mt-3">

                    Don't have an account?

                    <Link
                        to="/register"
                    >
                        {" "}
                        Register
                    </Link>

                </div>

            </div>

        </div>

    );

};

export default Login;