import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';

import HomeIcon from "@mui/icons-material/Home";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import AnnouncementOutlinedIcon from '@mui/icons-material/AnnouncementOutlined';
import ClassOutlinedIcon from '@mui/icons-material/ClassOutlined';
import SupervisorAccountOutlinedIcon from '@mui/icons-material/SupervisorAccountOutlined';
import ReportIcon from '@mui/icons-material/Report';
import AssignmentIcon from '@mui/icons-material/Assignment';

const SideBar = () => {
    const location = useLocation();

    const isActive = (path) => location.pathname.startsWith(path) ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:bg-gray-100';

    return (
        <div className="flex flex-col w-64 h-screen p-4 bg-white shadow-lg border-r border-gray-200">
            <div className="space-y-2">
                <Link to="/" className={`flex items-center p-3 rounded-lg transition-all duration-200 ${isActive('/')}`}>
                    <HomeIcon className="w-6 h-6 mr-3" />
                    <span className="text-base font-medium">Home</span>
                </Link>
                <Link to="/Admin/classes" className={`flex items-center p-3 rounded-lg transition-all duration-200 ${isActive('/Admin/classes')}`}>
                    <ClassOutlinedIcon className="w-6 h-6 mr-3" />
                    <span className="text-base font-medium">Classes</span>
                </Link>
                <Link to="/Admin/subjects" className={`flex items-center p-3 rounded-lg transition-all duration-200 ${isActive('/Admin/subjects')}`}>
                    <AssignmentIcon className="w-6 h-6 mr-3" />
                    <span className="text-base font-medium">Subjects</span>
                </Link>
                <Link to="/Admin/teachers" className={`flex items-center p-3 rounded-lg transition-all duration-200 ${isActive('/Admin/teachers')}`}>
                    <SupervisorAccountOutlinedIcon className="w-6 h-6 mr-3" />
                    <span className="text-base font-medium">Teachers</span>
                </Link>
                <Link to="/Admin/students" className={`flex items-center p-3 rounded-lg transition-all duration-200 ${isActive('/Admin/students')}`}>
                    <PersonOutlineIcon className="w-6 h-6 mr-3" />
                    <span className="text-base font-medium">Students</span>
                </Link>
                <Link to="/Admin/notices" className={`flex items-center p-3 rounded-lg transition-all duration-200 ${isActive('/Admin/notices')}`}>
                    <AnnouncementOutlinedIcon className="w-6 h-6 mr-3" />
                    <span className="text-base font-medium">Notices</span>
                </Link>
                <Link to="/Admin/complains" className={`flex items-center p-3 rounded-lg transition-all duration-200 ${isActive('/Admin/complains')}`}>
                    <ReportIcon className="w-6 h-6 mr-3" />
                    <span className="text-base font-medium">Complains</span>
                </Link>
            </div>

            <div className="border-t border-gray-200 my-4"></div>

            <div className="space-y-2">
                <div className="text-sm font-semibold text-gray-500 px-3 py-2">User</div>
                <Link to="/Admin/profile" className={`flex items-center p-3 rounded-lg transition-all duration-200 ${isActive('/Admin/profile')}`}>
                    <AccountCircleOutlinedIcon className="w-6 h-6 mr-3" />
                    <span className="text-base font-medium">Profile</span>
                </Link>
                <Link to="/logout" className={`flex items-center p-3 rounded-lg transition-all duration-200 ${isActive('/logout')}`}>
                    <ExitToAppIcon className="w-6 h-6 mr-3" />
                    <span className="text-base font-medium">Logout</span>
                </Link>
            </div>
        </div>
    );
}

export default SideBar;