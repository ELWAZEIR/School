import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const AccountMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { currentRole, currentUser } = useSelector(state => state.user);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <div className="relative">
            {/* Avatar Button */}
            <div className="flex items-center text-center">
                <button
                    onClick={toggleMenu}
                    className="ml-2 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-sm font-semibold text-white">
                        {String(currentUser.name).charAt(0)}
                    </div>
                </button>
            </div>

            {/* Dropdown Menu */}
            {isMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1">
                        {/* Profile Link */}
                        <Link
                            to={`/${currentRole}/profile`}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            onClick={closeMenu}
                        >
                            Profile
                        </Link>

                        {/* Divider */}
                        <div className="border-t border-gray-200"></div>

                        {/* Settings */}
                        <button
                            className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            onClick={closeMenu}
                        >
                            <div className="flex items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 mr-2"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 012.106 2.106c.836 1.372-.734 2.942-2.106 2.106a1.532 1.532 0 01-.947-2.287c-1.561-.379-1.561-2.6 0-2.978a1.533 1.533 0 01.947-2.287c1.372-.836 2.942.734 2.106 2.106-.54.886-.061 2.042.947 2.287 1.561.379 1.561 2.6 0 2.978a1.532 1.532 0 01-2.106 2.106c-.836-1.372.734-2.942 2.106-2.106a1.532 1.532 0 01.947 2.287c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01-.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-2.287-.947c-.836-1.372.734-2.942 2.106-2.106zM10 13a3 3 0 100-6 3 3 0 000 6z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                Settings
                            </div>
                        </button>

                        {/* Logout Link */}
                        <Link
                            to="/logout"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            onClick={closeMenu}
                        >
                            <div className="flex items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 mr-2"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                Logout
                            </div>
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AccountMenu;