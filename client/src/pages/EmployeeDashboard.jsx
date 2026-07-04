import { useEffect, useState } from "react";

import EmployeeLayout from "../layouts/EmployeeLayout";

import DashboardCard from "../components/DashboardCard";

import API from "../services/api";

const EmployeeDashboard = () => {
      
    const [dashboard, setDashboard] = useState({

        remainingLeave: 0,

        pending: 0,

        approved: 0,

        rejected: 0,

    });

    const [loading, setLoading] = useState(true);
    useEffect(() => {

        fetchDashboard();

    }, []);
    
    const fetchDashboard = async () => {

    try {

        const { data } = await API.get("/dashboard");

        setDashboard(data.dashboard);

    } catch (error) {

        console.log(error);

    } finally {

        setLoading(false);

    }

};
if (loading) {

    return (

        <EmployeeLayout>

            <div className="d-flex justify-content-center align-items-center" style={{ height: "70vh" }}>

                <div className="spinner-border text-primary" role="status">

                    <span className="visually-hidden">

                        Loading...

                    </span>

                </div>

            </div>

        </EmployeeLayout>

    );

}
    return (

        <EmployeeLayout>

            <h2 className="mb-4">

                Employee Dashboard

            </h2>

            <div className="row">

                <DashboardCard

                    title="Remaining Leave"

                    value={dashboard.remainingLeave}

                    color="bg-primary text-white"

                    icon="bi bi-calendar-check"

                />

                <DashboardCard

                    title="Pending"

                    value={dashboard.pending}

                    color="bg-warning"

                    icon="bi bi-hourglass-split"

                />

                <DashboardCard

                    title="Approved"

                    value={dashboard.approved}

                    color="bg-success text-white"

                    icon="bi bi-check-circle"

                />

                <DashboardCard

                    title="Rejected"

                    value={dashboard.rejected}

                    color="bg-danger text-white"

                    icon="bi bi-x-circle"

                />

            </div>

            <div className="card shadow border-0 mt-4">

                <div className="card-body">

                    <h4>

                        Welcome 👋

                    </h4>

                    <p>

                        Your dashboard gives a quick overview of your leave requests and available leave balance.

                    </p>

                </div>

            </div>

        </EmployeeLayout>

    );

};

export default EmployeeDashboard;