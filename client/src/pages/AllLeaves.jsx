import { useEffect, useState } from "react";

import AdminLayout from "../layouts/AdminLayout";
import API from "../services/api";

const AllLeaves = () => {

    const [leaves, setLeaves] = useState([]);

    useEffect(() => {

        fetchLeaves();

    }, []);

    const fetchLeaves = async () => {

        const { data } = await API.get("/admin/leaves");

        setLeaves(data.leaves);

    };

    const approveLeave = async(id)=>{

      if(window.confirm("Approve this leave request?")){

      await API.put(`/admin/approve/${id}`);

      fetchLeaves();

      }

      };

    const rejectLeave = async(id)=>{

      if(window.confirm("Reject this leave request?")){

      await API.put(`/admin/reject/${id}`);

      fetchLeaves();

      }

      };

    return (

        <AdminLayout>

            <div className="card shadow">

                <div className="card-body">

                    <h3 className="mb-4">

                        Leave Requests

                    </h3>

                    <div className="table-responsive">

<table className="table table-hover align-middle">

<thead className="table-primary">

<tr>

<th>Employee</th>

<th>Leave Type</th>

<th>Total Days</th>

<th>Status</th>

<th>Action</th>

</tr>

</thead>

<tbody>

{

leaves.length>0 ?

leaves.map((leave)=>(

<tr key={leave._id}>

<td>

<strong>

{leave.employee.name}

</strong>

<br/>

<small className="text-muted">

{leave.employee.email}

</small>

</td>

<td>

{leave.leaveType}

</td>

<td>

{leave.totalDays}

</td>

<td>

{

leave.status==="Approved"

?

<span className="badge bg-success">

Approved

</span>

:

leave.status==="Rejected"

?

<span className="badge bg-danger">

Rejected

</span>

:

<span className="badge bg-warning text-dark">

Pending

</span>

}

</td>

<td>

{

leave.status==="Pending"

&&

<>

<button

className="btn btn-success btn-sm me-2"

onClick={()=>approveLeave(leave._id)}

>

Approve

</button>

<button

className="btn btn-danger btn-sm"

onClick={()=>rejectLeave(leave._id)}

>

Reject

</button>

</>

}

</td>

</tr>

))

:

<tr>

<td colSpan="5" className="text-center">

No Leave Requests

</td>

</tr>

}

</tbody>

</table>

</div>

                </div>

            </div>

        </AdminLayout>

    );

};

export default AllLeaves;