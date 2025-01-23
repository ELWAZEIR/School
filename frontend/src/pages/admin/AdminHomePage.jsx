import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CountUp from 'react-countup';
import SeeNotice from '../../components/SeeNotice';
import Students from "../../assets/img1.png";
import Classes from "../../assets/img2.png";
import Teachers from "../../assets/img3.png";
import { getAllSclasses } from '../../redux/sclassRelated/sclassHandle';
import { getAllStudents } from '../../redux/studentRelated/studentHandle';
import { getAllTeachers } from '../../redux/teacherRelated/teacherHandle';

const AdminHomePage = () => {
    const dispatch = useDispatch();
    const { studentsList } = useSelector((state) => state.student);
    const { sclassesList } = useSelector((state) => state.sclass);
    const { teachersList } = useSelector((state) => state.teacher);
    const { currentUser } = useSelector(state => state.user);

    const adminID = currentUser._id;

    useEffect(() => {
        dispatch(getAllStudents(adminID));
        dispatch(getAllSclasses(adminID, "Sclass"));
        dispatch(getAllTeachers(adminID));
    }, [adminID, dispatch]);

    const numberOfStudents = studentsList && studentsList.length;
    const numberOfClasses = sclassesList && sclassesList.length;
    const numberOfTeachers = teachersList && teachersList.length;

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Total Students Card */}
                <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center justify-between text-center">
                    <img src={Students} alt="Students" className="w-16 h-16 mb-4" />
                    <h2 className="text-xl font-semibold">Total Students</h2>
                    <CountUp
                        start={0}
                        end={numberOfStudents}
                        duration={2.5}
                        className="text-2xl md:text-3xl font-bold text-green-600"
                    />
                </div>

                {/* Total Classes Card */}
                <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center justify-between text-center">
                    <img src={Classes} alt="Classes" className="w-16 h-16 mb-4" />
                    <h2 className="text-xl font-semibold">Total Classes</h2>
                    <CountUp
                        start={0}
                        end={numberOfClasses}
                        duration={5}
                        className="text-2xl md:text-3xl font-bold text-green-600"
                    />
                </div>

                {/* Total Teachers Card */}
                <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center justify-between text-center">
                    <img src={Teachers} alt="Teachers" className="w-16 h-16 mb-4" />
                    <h2 className="text-xl font-semibold">Total Teachers</h2>
                    <CountUp
                        start={0}
                        end={numberOfTeachers}
                        duration={2.5}
                        className="text-2xl md:text-3xl font-bold text-green-600"
                    />
                </div>
            </div>

            {/* See Notice Section */}
            <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
                <SeeNotice />
            </div>
        </div>
    );
};

export default AdminHomePage;