import { useEffect, useState } from "react";

import EmployeeLayout from "../layouts/EmployeeLayout";
import API from "../services/api";

const MyLeaves = () => {

    const [leaves, setLeaves] = useState([]);

    useEffect(() => {

        fetchLeaves();

    }, []);

    const fetchLeaves = async () => {

        try {

            const { data } = await API.get("/leave/my-leaves");

            setLeaves(data.leaves);

        }

        catch (error) {

            console.log(error);

        }

    };

    return (

        <EmployeeLayout>

            <div className="card shadow">

                <div className="card-body">

                    <h3 className="mb-4">

                        My Leave History

                    </h3>

                    <div className="table-responsive">

<table className="table table-hover align-middle">

    <thead className="table-primary">

        <tr>

            <th>Leave Type</th>

            <th>From</th>

            <th>To</th>

            <th>Total Days</th>

            <th>Status</th>

        </tr>

    </thead>

    <tbody>

        {

            leaves.length > 0 ?

            leaves.map((leave)=>(

                <tr key={leave._id}>

                    <td>{leave.leaveType}</td>

                    <td>{leave.fromDate.substring(0,10)}</td>

                    <td>{leave.toDate.substring(0,10)}</td>

                    <td>{leave.totalDays}</td>

                    <td>

                        {

                            leave.status==="Approved"

                            ?

                            <span className="badge bg-success">

                                <i className="bi bi-check-circle me-1"></i>

                                Approved

                            </span>

                            :

                            leave.status==="Rejected"

                            ?

                            <span className="badge bg-danger">

                                <i className="bi bi-x-circle me-1"></i>

                                Rejected

                            </span>

                            :

                            <span className="badge bg-warning text-dark">

                                <i className="bi bi-hourglass me-1"></i>

                                Pending

                            </span>

                        }

                    </td>

                </tr>

            ))

            :

            <tr>

                <td colSpan="5" className="text-center">

                    No leave requests found.

                </td>

            </tr>

        }

    </tbody>

</table>

</div>
                </div>

            </div>

        </EmployeeLayout>

    );

};

export default MyLeaves;