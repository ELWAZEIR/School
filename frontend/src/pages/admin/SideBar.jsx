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

    const isActive = (path) => location.pathname.startsWith(path) ? 'text-blue-500' : 'text-gray-700';

    return (
        <div className="flex flex-col space-y-2 p-4 bg-white shadow-md">
            <React.Fragment>
                <Link to="/" className={`flex items-center p-2 rounded hover:bg-gray-100 ${isActive('/')}`}>
                    <HomeIcon className={`mr-2 ${isActive('/')}`} />
                    <span>Home</span>
                </Link>
                <Link to="/Admin/classes" className={`flex items-center p-2 rounded hover:bg-gray-100 ${isActive('/Admin/classes')}`}>
                    <ClassOutlinedIcon className={`mr-2 ${isActive('/Admin/classes')}`} />
                    <span>Classes</span>
                </Link>
                <Link to="/Admin/subjects" className={`flex items-center p-2 rounded hover:bg-gray-100 ${isActive('/Admin/subjects')}`}>
                    <AssignmentIcon className={`mr-2 ${isActive('/Admin/subjects')}`} />
                    <span>Subjects</span>
                </Link>
                <Link to="/Admin/teachers" className={`flex items-center p-2 rounded hover:bg-gray-100 ${isActive('/Admin/teachers')}`}>
                    <SupervisorAccountOutlinedIcon className={`mr-2 ${isActive('/Admin/teachers')}`} />
                    <span>Teachers</span>
                </Link>
                <Link to="/Admin/students" className={`flex items-center p-2 rounded hover:bg-gray-100 ${isActive('/Admin/students')}`}>
                    <PersonOutlineIcon className={`mr-2 ${isActive('/Admin/students')}`} />
                    <span>Students</span>
                </Link>
                <Link to="/Admin/notices" className={`flex items-center p-2 rounded hover:bg-gray-100 ${isActive('/Admin/notices')}`}>
                    <AnnouncementOutlinedIcon className={`mr-2 ${isActive('/Admin/notices')}`} />
                    <span>Notices</span>
                </Link>
                <Link to="/Admin/complains" className={`flex items-center p-2 rounded hover:bg-gray-100 ${isActive('/Admin/complains')}`}>
                    <ReportIcon className={`mr-2 ${isActive('/Admin/complains')}`} />
                    <span>Complains</span>
                </Link>
            </React.Fragment>

            <div className="border-t  border-gray-200 my-2"></div>

            <React.Fragment>
                <div className="text-sm  font-medium text-gray-500 px-2 py-1">User</div>
                <Link to="/Admin/profile" className={`flex items-center p-2 rounded hover:bg-gray-100 ${isActive('/Admin/profile')}`}>
                    <AccountCircleOutlinedIcon className={`mr-2 ${isActive('/Admin/profile')}`} />
                    <span>Profile</span>
                </Link>
                <Link to="/logout" className={`flex items-center p-2 rounded hover:bg-gray-100 ${isActive('/logout')}`}>
                    <ExitToAppIcon className={`mr-2 ${isActive('/logout')}`} />
                    <span>Logout</span>
                </Link>
            </React.Fragment>
        </div>
    );
}

export default SideBar;