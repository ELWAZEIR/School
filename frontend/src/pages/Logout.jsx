import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authLogout } from '../redux/userRelated/userSlice';

const Logout = () => {
    const currentUser = useSelector(state => state.user.currentUser);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(authLogout());
        navigate('/');
    };

    const handleCancel = () => {
        navigate(-1);
    };

    return (
        <div className="h-[450px] flex items-center justify-center bg-gradient-to-br from-purple-50 to-indigo-50 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-2xl shadow-2xl border border-gray-100 transform transition-all hover:scale-105">
                <h1 className="text-4xl font-extrabold text-center text-gray-900">
                    {currentUser.name}
                </h1>
                <p className="mt-6 text-center text-gray-600 text-lg">
                    Are you sure you want to log out?
                </p>
                <div className="mt-8 space-y-6">
                    <button
                        onClick={handleLogout}
                        className="w-full px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl hover:from-red-600 hover:to-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all duration-300 shadow-lg hover:shadow-red-200"
                    >
                        Log Out
                    </button>
                    <button
                        onClick={handleCancel}
                        className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-xl hover:from-purple-600 hover:to-indigo-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-all duration-300 shadow-lg hover:shadow-purple-200"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Logout;