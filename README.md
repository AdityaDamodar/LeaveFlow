# 🚀 LeaveFlow – MERN Stack Leave Management System

A full-stack Leave Management System built using the MERN Stack that allows employees to apply for leave requests while enabling administrators to manage, approve, or reject those requests through a secure role-based dashboard.

---

# 🌐 Live Demo

### Frontend
https://leave-flow-iota.vercel.app

### Backend API
https://leaveflow-backend-wox5.onrender.com

---

# ✨ Key Features

- 🔐 JWT Authentication & Role-Based Authorization
- 👨‍💼 Employee and Admin Dashboards
- 📝 Leave Application & Approval Workflow
- 📊 Leave Balance Tracking
- ☁️ MongoDB Atlas Database
- 🚀 Deployed on Vercel & Render
- 📱 Responsive User Interface

---

# 📸 Screenshots

### Login Page

<img width="1920" height="1080" alt="Login" src="https://github.com/user-attachments/assets/11e0df50-f21e-4c5c-b3fd-5e68e3b76843" />

---

### Register Page

<img width="1920" height="1080" alt="Register" src="https://github.com/user-attachments/assets/543bdaf9-f277-4817-95fa-187e53db3235" />

---

### Employee Dashboard

<img width="1920" height="1080" alt="Employee Dashboard" src="https://github.com/user-attachments/assets/0803fa13-5910-4699-8643-67c6992fb6d5" />

---

### Admin Dashboard

<img width="1920" height="1080" alt="Admin Dashboard" src="https://github.com/user-attachments/assets/8d1774c1-17eb-4046-b2af-0ecc76c319b2" />

---

### Apply Leave

<img width="1920" height="1080" alt="Apply Leave" src="https://github.com/user-attachments/assets/35d58143-04d9-4875-8d40-d36580323970" />

---

### My Leaves

<img width="1920" height="1080" alt="My Leaves" src="https://github.com/user-attachments/assets/123f13a8-cd34-4c56-bcee-4ab6566f5b11" />

---

### Leave Requests (Admin)

<img width="1920" height="1080" alt="Leave Requests" src="https://github.com/user-attachments/assets/7dddf9fc-ccfb-40ef-b677-b0124f619b61" />

---

# ✨ Features

## 🔐 Authentication

- User Registration
- User Login
- JWT Authentication
- Password Hashing using bcrypt
- Protected Routes
- Role-Based Authorization

---

## 👨‍💼 Employee Module

- Employee Dashboard
- Apply Leave
- View Leave History
- Track Leave Status
- Leave Balance Management

---

## 👨‍💻 Admin Module

- Admin Dashboard
- View All Leave Requests
- Approve Leave Requests
- Reject Leave Requests
- Leave Status Management

---

# 🛠 Tech Stack

## Frontend

- React.js
- Vite
- React Router DOM
- Axios
- Bootstrap 5
- CSS

## Backend

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT (jsonwebtoken)
- bcryptjs

## Deployment

- Vercel
- Render
- MongoDB Atlas

---

# 📁 Folder Structure

```text
LeaveFlow
│
├── client
│   ├── src
│   ├── public
│   └── package.json
│
├── server
│   ├── config
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── utils
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/AdityaDamodar/LeaveFlow.git
```

---

## Backend Setup

```bash
cd server
npm install
npm run dev
```

---

## Frontend Setup

```bash
cd client
npm install
npm run dev
```

---

# 🔑 Environment Variables

## Backend (.env)

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key
```

---

## Frontend (.env)

```env
# Local Development
VITE_API_URL=http://localhost:5000/api

# Production (Configured in Vercel Environment Variables)
VITE_API_URL=https://leaveflow-backend-wox5.onrender.com/api
```

---

# 📌 API Endpoints

## Authentication

- POST `/api/auth/register`
- POST `/api/auth/login`
- GET `/api/auth/profile`

---

## Employee

- POST `/api/leave/apply`
- GET `/api/leave/my-leaves`

---

## Admin

- GET `/api/admin/all-leaves`
- PUT `/api/admin/approve/:id`
- PUT `/api/admin/reject/:id`

---

## Dashboard

- GET `/api/dashboard`

---

# 🔒 Authentication Flow

1. User Registration
2. Password Hashing using bcrypt
3. JWT Token Generation
4. Token Storage in Local Storage
5. Protected Route Verification
6. Role-Based Dashboard Access

---

# 🚀 Deployment

### Frontend

- Vercel

### Backend

- Render

### Database

- MongoDB Atlas

---

# 🤖 AI Usage

This project was developed with the assistance of AI tools as a development aid.

## AI Tool Used

- ChatGPT

## How AI Was Used

- Understanding MERN stack architecture
- Learning React and Express concepts
- Debugging backend and frontend issues
- JWT Authentication implementation guidance
- MongoDB Atlas configuration assistance
- Render and Vercel deployment troubleshooting
- Code organization and documentation improvements

## My Contribution

I independently integrated all components, implemented the application structure, tested APIs, debugged issues, configured MongoDB Atlas, deployed the application on Render and Vercel, and validated the complete end-to-end workflow. AI assistance was used for guidance and problem-solving, while the final implementation, integration, testing, and deployment were completed by me.

---

# 📈 Future Enhancements

- Email Notifications
- Leave Calendar
- Multi-Level Manager Approval
- File Attachments
- Leave Analytics Dashboard
- Dark Mode
- Mobile Responsive Enhancements
- Attendance Management Module

---

# 👨‍💻 Author

**Aditya Damodar**

**GitHub**  
https://github.com/AdityaDamodar

**LinkedIn**  
https://www.linkedin.com/in/aditya-damodar24/

**Email**  
adityardamodar@gmail.com

---

# 📄 License

This project was developed for educational and assessment purposes.
