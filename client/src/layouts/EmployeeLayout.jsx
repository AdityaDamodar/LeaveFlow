import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const EmployeeLayout = ({ children }) => {

    return (

        <div className="d-flex">

            <Sidebar role="employee" />

            <div
                className="flex-grow-1 bg-light"
                style={{
                    minHeight: "100vh",
                }}
            >

                <Navbar />

                <div className="container-fluid p-4">

                    {children}

                </div>

            </div>

        </div>

    );

};

export default EmployeeLayout;