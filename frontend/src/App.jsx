import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import Homepage from './pages/Homepage';
import AdminDashboard from './pages/admin/AdminDashboard';
import StudentDashboard from './pages/student/StudentDashboard';
import TeacherDashboard from './pages/teacher/TeacherDashboard';
import LoginPage from './pages/LoginPage';
import AdminRegisterPage from './pages/admin/AdminRegisterPage';
import ChooseUser from './pages/ChooseUser';
import Nursery from './pages/Nursery/Nursery'
import Application from '../src/pages/Application/ApplicationForm'
import Nav from './components/Navpar/Nav';
import Footer from './components/Footer/Footer';
import ApplicationForm from '../src/pages/Application/ApplicationForm';
import Activities from './pages/Activities/Activities';
import Contact from './pages/contact/Contact';

const App = () => {
  const { currentRole } = useSelector(state => state.user);

  return (<>
    <Router>
  <Nav/>
      {currentRole === null &&
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="nursery" element={<Nursery />} />
          <Route path="activities" element={<Activities />} />
          <Route path="contact" element={<Contact />} />
          <Route path="application" element={<ApplicationForm />} />
          <Route path="/choose" element={<ChooseUser visitor="normal" />} />
          <Route path="/chooseasguest" element={<ChooseUser visitor="guest" />} />
          <Route path="/Adminlogin" element={<LoginPage role="Admin" />} />
          <Route path="/Studentlogin" element={<LoginPage role="Student" />} />
          <Route path="/Teacherlogin" element={<LoginPage role="Teacher" />} />
          <Route path="/Adminregister" element={<AdminRegisterPage />} />
          <Route path='*' element={<Navigate to="/" />} />
        </Routes>}
        
      {currentRole === "Admin" &&
        <>
          <AdminDashboard />
        </>
      }
      {currentRole === "Student" &&
        <>
          <StudentDashboard />
        </>
      }
      {currentRole === "Teacher" &&
        <>
          <TeacherDashboard />
        </>
      }
    <Footer/>
    </Router>
    </>
  )
}

export default App