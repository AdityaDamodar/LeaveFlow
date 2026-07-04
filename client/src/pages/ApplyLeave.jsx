import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

import EmployeeLayout from "../layouts/EmployeeLayout";
import API from "../services/api";

const ApplyLeave = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({

        leaveType: "",

        fromDate: "",

        toDate: "",

        reason: "",

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

                "/leave/apply",

                formData

            );

            toast.success(data.message);

            setTimeout(() => {

                navigate("/my-leaves");

            }, 1200);

        }

        catch (error) {

            toast.error(

                error.response?.data?.message ||

                "Something went wrong"

            );

        }

    };

    return (

        <EmployeeLayout>

            <ToastContainer />

            <div className="row justify-content-center">

                <div className="col-md-8">

                    <div className="card shadow">

                        <div className="card-body">

                            <h3 className="mb-4">

                                Apply Leave

                            </h3>

                            <form onSubmit={handleSubmit}>

                                <select

                                    name="leaveType"

                                    className="form-select mb-3"

                                    onChange={handleChange}

                                >

                                    <option value="">

                                        Select Leave Type

                                    </option>

                                    <option>

                                        Annual Leave

                                    </option>

                                    <option>

                                        Sick Leave

                                    </option>

                                    <option>

                                        Casual Leave

                                    </option>

                                    <option>

                                        Work From Home

                                    </option>

                                </select>

                                <input

                                    type="date"

                                    name="fromDate"

                                    className="form-control mb-3"

                                    onChange={handleChange}

                                />

                                <input

                                    type="date"

                                    name="toDate"

                                    className="form-control mb-3"

                                    onChange={handleChange}

                                />

                                <textarea

                                    name="reason"

                                    rows="4"

                                    className="form-control mb-3"

                                    placeholder="Reason"

                                    onChange={handleChange}

                                ></textarea>

                                <button className="btn btn-primary w-100">

                                    Apply Leave

                                </button>

                            </form>

                        </div>

                    </div>

                </div>

            </div>

        </EmployeeLayout>

    );

};

export default ApplyLeave;