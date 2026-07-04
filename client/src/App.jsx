import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";

import EmployeeDashboard from "./pages/EmployeeDashboard";
import ApplyLeave from "./pages/ApplyLeave";
import MyLeaves from "./pages/MyLeaves";

import AdminDashboard from "./pages/AdminDashboard";
import AllLeaves from "./pages/AllLeaves";

import ProtectedRoute from "./components/ProtectedRoute";

function App() {

    return (

        <BrowserRouter>

            <Routes>

                <Route path="/" element={<Login />} />

                <Route path="/register" element={<Register />} />

                <Route
                    path="/dashboard"
                    element={
                        <ProtectedRoute role="employee">
                            <EmployeeDashboard />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/apply-leave"
                    element={
                        <ProtectedRoute role="employee">
                            <ApplyLeave />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/my-leaves"
                    element={
                        <ProtectedRoute role="employee">
                            <MyLeaves />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/admin/dashboard"
                    element={
                        <ProtectedRoute role="admin">
                            <AdminDashboard />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/admin/leaves"
                    element={
                        <ProtectedRoute role="admin">
                            <AllLeaves />
                        </ProtectedRoute>
                    }
                />

            </Routes>

        </BrowserRouter>

    );

}

export default App;