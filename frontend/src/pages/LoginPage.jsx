import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../redux/userRelated/userHandle';
import Popup from '../components/Popup';

const LoginPage = ({ role }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { status, currentUser, response, error, currentRole } = useSelector(state => state.user);

    const [toggle, setToggle] = useState(false);
    const [loader, setLoader] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [message, setMessage] = useState("");

    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [rollNumberError, setRollNumberError] = useState(false);
    const [studentNameError, setStudentNameError] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        if (role === "Student") {
            const rollNum = event.target.rollNumber.value;
            const studentName = event.target.studentName.value;
            const password = event.target.password.value;

            if (!rollNum || !studentName || !password) {
                if (!rollNum) setRollNumberError(true);
                if (!studentName) setStudentNameError(true);
                if (!password) setPasswordError(true);
                return;
            }
            const fields = { rollNum, studentName, password };
            setLoader(true);
            dispatch(loginUser(fields, role));
        } else {
            const email = event.target.email.value;
            const password = event.target.password.value;

            if (!email || !password) {
                if (!email) setEmailError(true);
                if (!password) setPasswordError(true);
                return;
            }

            const fields = { email, password };
            setLoader(true);
            dispatch(loginUser(fields, role));
        }
    };

    const handleInputChange = (event) => {
        const { name } = event.target;
        if (name === 'email') setEmailError(false);
        if (name === 'password') setPasswordError(false);
        if (name === 'rollNumber') setRollNumberError(false);
        if (name === 'studentName') setStudentNameError(false);
    };
    useEffect(() => {
        if (status === 'success' || currentUser !== null) {
            if (currentRole === 'Admin') {
                navigate('/Admin/dashboard');
            } else if (currentRole === 'Student') {
                navigate('/Student/dashboard');
            } else if (currentRole === 'Teacher') {
                navigate('/Teacher/dashboard');
            }
        } else if (status === 'failed') {
            setMessage(response);
            setShowPopup(true);
            setLoader(false);
        } else if (status === 'error') {
            setMessage("Network Error");
            setShowPopup(true);
            setLoader(false);
        }
    }, [status, currentRole, navigate, error, response, currentUser]);

    return (
        <div className="min-h-screen  bg-black  mt-10 flex">
            <div className="flex-1 flex flex-col  justify-center items-center p-8">
                <h1 className="text-4xl font-bold mb-4 text-purple-800">{role} Login</h1>
                <p className="text-gray-300 mb-8">Welcome back! Please enter your details</p>
                <form onSubmit={handleSubmit} className="w-full max-w-md">
                    {role === "Student" ? (
                        <>
                            <div className="mb-4 ">
                                <label htmlFor="rollNumber" className="block  text-gray-300">Roll Number</label>
                                <input
                                    type="number"
                                    id="rollNumber"
                                    name="rollNumber"
                                    className={`w-full p-2 border ${rollNumberError ? 'border-red-500' : 'border-gray-300'} rounded`}
                                    placeholder="Enter your Roll Number"
                                    onChange={handleInputChange}
                                />
                                {rollNumberError && <p className="text-red-500 text-sm">Roll Number is required</p>}
                            </div>
                            <div className="mb-4">
                                <label htmlFor="studentName" className="block text-gray-300">Student Name</label>
                                <input
                                    type="text"
                                    id="studentName"
                                    name="studentName"
                                    className={`w-full p-2 border ${studentNameError ? 'border-red-500' : 'border-gray-300'} rounded`}
                                    placeholder="Enter your name"
                                    onChange={handleInputChange}
                                />
                                {studentNameError && <p className="text-red-500 text-sm">Name is required</p>}
                            </div>
                        </>
                    ) : (
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-300">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className={`w-full p-2 border ${emailError ? 'border-red-500' : 'border-gray-300'} rounded`}
                                placeholder="Enter your email"
                                onChange={handleInputChange}
                            />
                            {emailError && <p className="text-red-500 text-sm">Email is required</p>}
                        </div>
                    )}
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-300">Password</label>
                        <div className="relative">
                            <input
                                type={toggle ? 'text' : 'password'}
                                id="password"
                                name="password"
                                className={`w-full p-2 border ${passwordError ? 'border-red-500' : 'border-gray-300'} rounded`}
                                placeholder="Password"
                                onChange={handleInputChange}
                            />
                            <button
                                type="button"
                                onClick={() => setToggle(!toggle)}
                                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                            >
                                {toggle ? '👁️' : '👁️‍🗨️'}
                            </button>
                        </div>
                        {passwordError && <p className="text-red-500 text-sm">Password is required</p>}
                    </div>
                    <div className="flex justify-between items-center mb-6">
                        <label className="flex items-center">
                            <input type="checkbox" className="form-checkbox" />
                            <span className="ml-2 text-gray-300">Remember me</span>
                        </label>
                        <a href="#" className="text-purple-600 hover:underline">Forgot password?</a>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 transition duration-300"
                    >
                        {loader ? 'Loading...' : 'Login'}
                    </button>
                </form>
            </div>
            <Popup message={message} setShowPopup={setShowPopup} showPopup={showPopup} />
        </div>
    );
};

export default LoginPage;