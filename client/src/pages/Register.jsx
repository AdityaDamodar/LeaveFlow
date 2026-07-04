import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

import API from "../services/api";

const Register = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({

        name: "",

        email: "",

        password: "",

        confirmPassword: "",

    });

    const handleChange = (e) => {

        setFormData({

            ...formData,

            [e.target.name]: e.target.value,

        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {

            toast.error("Passwords do not match");

            return;

        }

        try {

            const { data } = await API.post(

                "/auth/register",

                {

                    name: formData.name,

                    email: formData.email,

                    password: formData.password,

                }

            );

            toast.success(data.message);

            setTimeout(() => {

                navigate("/");

            }, 1500);

        }

        catch (error) {

            toast.error(

                error.response?.data?.message ||

                "Registration Failed"

            );

        }

    };

    return (

        <div
            className="d-flex justify-content-center align-items-center"
            style={{
                minHeight: "100vh",
                background:
                    "linear-gradient(to right,#0d6efd,#4dabf7)",
            }}
        >

            <ToastContainer />

            <div
                className="card shadow-lg p-4"
                style={{
                    width: "450px",
                    borderRadius: "15px",
                }}
            >

                <h2 className="text-center mb-2">

                    LeaveFlow

                </h2>

                <p className="text-center text-muted mb-4">

                    Create Employee Account

                </p>

                <form onSubmit={handleSubmit}>

                    <input

                        type="text"

                        name="name"

                        placeholder="Full Name"

                        className="form-control mb-3"

                        onChange={handleChange}

                        required

                    />

                    <input

                        type="email"

                        name="email"

                        placeholder="Email"

                        className="form-control mb-3"

                        onChange={handleChange}

                        required

                    />

                    <input

                        type="password"

                        name="password"

                        placeholder="Password"

                        className="form-control mb-3"

                        onChange={handleChange}

                        required

                    />

                    <input

                        type="password"

                        name="confirmPassword"

                        placeholder="Confirm Password"

                        className="form-control mb-4"

                        onChange={handleChange}

                        required

                    />

                    <button
                        className="btn btn-primary w-100"
                    >

                        Register

                    </button>

                </form>

                <div className="text-center mt-3">

                    Already have an account?

                    <Link to="/">

                        {" "}Login

                    </Link>

                </div>

            </div>

        </div>

    );

};

export default Register;