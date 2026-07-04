import { useEffect, useState } from "react";

import AdminLayout from "../layouts/AdminLayout";
import DashboardCard from "../components/DashboardCard";
import API from "../services/api";

const AdminDashboard = () => {

    const [dashboard, setDashboard] = useState({

        employees: 0,
        pending: 0,
        approved: 0,
        rejected: 0,

    });

    useEffect(() => {

        fetchDashboard();

    }, []);

    const fetchDashboard = async () => {

        try {

            const { data } = await API.get("/dashboard/admin");

            setDashboard(data.dashboard);

        }

        catch (error) {

            console.log(error);

        }

    };

    return (

        <AdminLayout>

            <h2 className="mb-4">

                Admin Dashboard

            </h2>

            <div className="row">

                <DashboardCard

                    title="Employees"

                    value={dashboard.employees}

                    color="bg-primary text-white"

                    icon="bi bi-people"

                />

                <DashboardCard

                    title="Pending"

                    value={dashboard.pending}

                    color="bg-warning"

                    icon="bi bi-hourglass"

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

            <div className="card shadow border-0">

                <div className="card-body">

                    <h4>

                        HR Dashboard

                    </h4>

                    <p>

                        View and manage employee leave requests from one place.

                    </p>

                </div>

            </div>

        </AdminLayout>

    );

};

export default AdminDashboard;