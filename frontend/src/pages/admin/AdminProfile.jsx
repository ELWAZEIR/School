import { useSelector } from 'react-redux';

const AdminProfile = () => {
    const { currentUser } = useSelector((state) => state.user);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 p-6">
            <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full transform transition-all hover:scale-105">
                <h1 className="text-3xl font-bold text-center text-gray-900 mb-6">
                    Admin Profile
                </h1>
                <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                        <span className="text-lg font-medium text-gray-700">Name:</span>
                        <span className="text-lg text-gray-900">{currentUser.name}</span>
                    </div>
                    <div className="flex items-center space-x-4">
                        <span className="text-lg font-medium text-gray-700">Email:</span>
                        <span className="text-lg text-gray-900">{currentUser.email}</span>
                    </div>
                    <div className="flex items-center space-x-4">
                        <span className="text-lg font-medium text-gray-700">School:</span>
                        <span className="text-lg text-gray-900">{currentUser.schoolName}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminProfile;