// import React from "react";
// import logo from "../../assets/logo.png";
// const AboutUs = () => {
//   return (
//     <div className="bg-[#06213F]  text-[#333] min-h-screen">
//       {/* العنوان الرئيسي */}
//       <div className="bg-[#06213F] py-16">
//         <div className="container mx-auto px-4">
//           <div className="flex flex-col items-center justify-center space-y-8">
//             <img
//               src={logo}
//               alt="Cairo International School Logo"
//               className="w-24 h-24"
//             />
//             <h1 className="text-5xl font-bold text-center text-white">
//               About Cairo International School
//             </h1>
//             <p className="text-lg text-white text-center max-w-2xl">
//               Cairo International School is dedicated to providing a world-class
//               education that fosters intellectual growth, creativity, and global
//               citizenship. Our mission is to empower students to achieve their
//               full potential in a nurturing and innovative environment.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* معلومات عن المدرسة */}
//       <div className="bg-[#06213F] container mx-auto px-4 py-16">
//         <div className="bg-white p-10 rounded-lg shadow-lg">
//           <h2 className="text-3xl font-semibold mb-8 text-[#2C3E50]">
//             About Us
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             <div>
//               <p className="mb-6 text-[#555] leading-relaxed">
//                 Cairo International Schools were established in 1992 with
//                 different stages varying from Kindergarten to Secondary stage.
//                 Cairo Language Schools are one of the distinguished schools in
//                 Egypt where thousands of students had graduated and held
//                 prestigious positions in many fields including Medicine,
//                 Engineering, Economics, and Politics.
//               </p>
//               <p className="mb-6 text-[#555] leading-relaxed">
//                 The school has the latest technological equipment, smart
//                 classrooms, laboratories, playgrounds, and many other facilities
//                 in addition to hiring well-experienced, talented, professional,
//                 and old-handed staff.
//               </p>
//               <p className="text-[#555] leading-relaxed">
//                 The school cares about integrating active learning strategies in
//                 the process of teaching and learning to meet international
//                 criteria based on the different competencies of students.
//               </p>
//             </div>
//             <div className="flex justify-center items-center">
//               <img
//                 src="https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//                 alt="School Classroom"
//                 className="rounded-lg shadow-md w-full h-auto"
//               />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* الرؤية والرسالة والقيم */}
//       <div className=" bg-[#06213F] container mx-auto px-4 py-16">
//         <h2 className="text-3xl font-semibold mb-12 text-center text-white">
//           Our Vision, Mission & Values
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
//           <div className="bg-white p-8 rounded-lg shadow-lg hover:scale-105 transition-transform">
//             <h3 className="text-2xl font-semibold mb-6 text-[#2C3E50]">
//               Vision
//             </h3>
//             <p className="text-[#555] leading-relaxed">
//               Develop well-rounded, confident, and responsible individuals who
//               aspire to realize their own potential. We foster our students’
//               passion for learning, encourage them to learn new experiences, and
//               give them a solid foundation to build on.
//             </p>
//           </div>
//           <div className="bg-white p-8 rounded-lg shadow-lg hover:scale-105 transition-transform">
//             <h3 className="text-2xl font-semibold mb-6 text-[#2C3E50]">
//               Mission
//             </h3>
//             <p className="text-[#555] leading-relaxed">
//               Provide high-quality education and childcare in a safe, respectful
//               environment that builds a foundation for life-long learning.
//               Improve students' skills to be able to make decisions. Ensure that
//               parents, teachers, and community members are actively involved in
//               our students' learning process.
//             </p>
//           </div>
//           <div className="bg-white p-8 rounded-lg shadow-lg hover:scale-105 transition-transform">
//             <h3 className="text-2xl font-semibold mb-6 text-[#2C3E50]">
//               Values
//             </h3>
//             <ul className="list-disc pl-6 text-[#555] leading-relaxed">
//               <li className="mb-3">
//                 All students are equal and deserve unique education.
//               </li>
//               <li className="mb-3">
//                 Education is a must for everyone in society.
//               </li>
//               <li className="mb-3">
//                 Teachers and parents are genuine participants.
//               </li>
//               <li>Mental and physical well-being is a high priority.</li>
//             </ul>
//           </div>
//         </div>
//       </div>

//       {/* الإحصائيات */}
//       <div className="bg-[#06213F] py-16">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl font-semibold mb-12 text-center text-white">
//             Our Achievements
//           </h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//             <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:scale-105 transition-transform">
//               <h3 className="text-4xl font-bold text-[#2C3E50]">121</h3>
//               <p className="text-[#555] mt-2">Quality Teachers</p>
//             </div>
//             <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:scale-105 transition-transform">
//               <h3 className="text-4xl font-bold text-[#2C3E50]">342</h3>
//               <p className="text-[#555] mt-2">Enrolled Students</p>
//             </div>
//             <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:scale-105 transition-transform">
//               <h3 className="text-4xl font-bold text-[#2C3E50]">434</h3>
//               <p className="text-[#555] mt-2">Satisfied Parents</p>
//             </div>
//             <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:scale-105 transition-transform">
//               <h3 className="text-4xl font-bold text-[#2C3E50]">562</h3>
//               <p className="text-[#555] mt-2">Successful Events</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* المرافق المدرسية */}
//       <div className="container mx-auto px-4 py-16">
//         <h2 className="text-3xl font-semibold mb-12 text-center text-white">
//           Our Facilities
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           <div className="bg-white p-8 rounded-lg shadow-lg hover:scale-105 transition-transform">
//             <h3 className="text-2xl font-semibold mb-6 text-[#2C3E50]">
//               Smart Classrooms
//             </h3>
//             <p className="text-[#555] leading-relaxed">
//               Our classrooms are equipped with the latest technology to enhance
//               the learning experience.
//             </p>
//             <img
//               src="https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//               alt="Smart Classrooms"
//               className="h-72 mt-6 rounded-lg shadow-md w-full "
//             />
//           </div>
//           <div className="bg-white p-8 rounded-lg shadow-lg hover:scale-105 transition-transform">
//             <h3 className="text-2xl font-semibold mb-6 text-[#2C3E50]">
//               Science Labs
//             </h3>
//             <p className="text-[#555] leading-relaxed">
//               State-of-the-art laboratories for hands-on learning in science and
//               technology.
//             </p>
//             <img
//               src="https://images.pexels.com/photos/414860/pexels-photo-414860.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//               alt="Science Labs"
//               className="h-72 mt-6 rounded-lg shadow-md w-full "
//             />
//           </div>
//           <div className="bg-white p-8 rounded-lg shadow-lg hover:scale-105 transition-transform">
//             <h3 className="text-2xl font-semibold mb-6 text-[#2C3E50]">
//               Sports Complex
//             </h3>
//             <p className="text-[#555] leading-relaxed">
//               A fully-equipped sports complex to promote physical fitness and
//               teamwork.
//             </p>
//             <img
//               src="https://images.pexels.com/photos/248547/pexels-photo-248547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//               alt="Sports Complex"
//               className="h-72 mt-6 rounded-lg shadow-md w-full "
//             />
//           </div>
//         </div>
//       </div>
//       {/* الإدارة العليا */}
//       <div className="bg-[#06213F] py-16">
//         <div className="container mx-auto px-4">
//           <h2 className="text-4xl font-bold mb-16 text-center text-white">
//             Our Top Management
//           </h2>
//           <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
//             {/* العضو الأول */}
//             <div className="bg-white rounded-lg shadow-lg text-center hover:scale-105 transition-transform duration-300 relative group overflow-hidden">
//               <div className="w-full h-64 relative">
//                 <img
//                   src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//                   alt="Dr. Karima Abdel Karim"
//                   className="w-full h-full object-cover"
//                 />
//                 <div className="absolute inset-0 bg-[#06213F] opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center">
//                   <p className="text-white text-lg px-4 text-center">
//                     Dr. Karima is a visionary leader with over 20 years of
//                     experience in education.
//                   </p>
//                 </div>
//               </div>
//               <div className="p-6">
//                 <h4 className="text-2xl font-semibold text-[#2C3E50]">
//                   Dr. Karima Abdel Karim
//                 </h4>
//                 <p className="text-[#555] mt-2">
//                   Chairman and Owner of the School
//                 </p>
//               </div>
//             </div>

//             {/* العضو الثاني */}
//             <div className="bg-white rounded-lg shadow-lg text-center hover:scale-105 transition-transform duration-300 relative group overflow-hidden">
//               <div className="w-full h-64 relative">
//                 <img
//                   src="https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//                   alt="Dr. Mohamad Ibrahim"
//                   className="w-full h-full object-cover"
//                 />
//                 <div className="absolute inset-0 bg-[#06213F] opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center">
//                   <p className="text-white text-lg px-4 text-center">
//                     Dr. Mohamad is a pioneer in the field of education with a
//                     passion for innovation.
//                   </p>
//                 </div>
//               </div>
//               <div className="p-6">
//                 <h4 className="text-2xl font-semibold text-[#2C3E50]">
//                   Dr. Mohamad Ibrahim
//                 </h4>
//                 <p className="text-[#555] mt-2">Founder of Schools</p>
//               </div>
//             </div>

//             {/* العضو الثالث */}
//             <div className="bg-white rounded-lg shadow-lg text-center hover:scale-105 transition-transform duration-300 relative group overflow-hidden">
//               <div className="w-full h-64 relative">
//                 <img
//                   src="https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//                   alt="Dr. Zainab"
//                   className="w-full h-full object-cover"
//                 />
//                 <div className="absolute inset-0 bg-[#06213F] opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center">
//                   <p className="text-white text-lg px-4 text-center">
//                     Dr. Zainab is a renowned scientific advisor with a focus on
//                     student development.
//                   </p>
//                 </div>
//               </div>
//               <div className="p-6">
//                 <h4 className="text-2xl font-semibold text-[#2C3E50]">
//                   Dr. Zainab
//                 </h4>
//                 <p className="text-[#555] mt-2">Scientific Advisor</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* الخريجون الناجحون */}
//       <div className="bg-[#06213F] py-16">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl font-semibold mb-12 text-center text-white">
//             Our Successful Alumni
//           </h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//             <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:scale-105 transition-transform">
//               <img
//                 src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600"
//                 alt="Alumni 1"
//                 className="w-32 h-32 mx-auto rounded-full mb-6 object-cover"
//               />
//               <h4 className="text-2xl font-semibold text-[#2C3E50]">
//                 Dr. Ahmed Ali
//               </h4>
//               <p className="text-[#555] mt-2">Cardiologist</p>
//             </div>
//             <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:scale-105 transition-transform">
//               <img
//                 src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600"
//                 alt="Alumni 2"
//                 className="w-32 h-32 mx-auto rounded-full mb-6 object-cover"
//               />
//               <h4 className="text-2xl font-semibold text-[#2C3E50]">
//                 Eng. Sara Mohamed
//               </h4>
//               <p className="text-[#555] mt-2">Software Engineer</p>
//             </div>
//             <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:scale-105 transition-transform">
//               <img
//                 src="https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=600"
//                 alt="Alumni 3"
//                 className="w-32 h-32 mx-auto rounded-full mb-6 object-cover"
//               />
//               <h4 className="text-2xl font-semibold text-[#2C3E50]">
//                 Dr. Youssef Hassan
//               </h4>
//               <p className="text-[#555] mt-2">Economist</p>
//             </div>
//             <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:scale-105 transition-transform">
//               <img
//                 src="https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=600"
//                 alt="Alumni 4"
//                 className="w-32 h-32 mx-auto rounded-full mb-6 object-cover"
//               />
//               <h4 className="text-2xl font-semibold text-[#2C3E50]">
//                 Dr. Leila Samir
//               </h4>
//               <p className="text-[#555] mt-2">Politician</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* الفوتر */}
//       <div className="bg-[#06213F] text-white text-center py-8">
//         <p className="text-lg">
//           &copy; 2024 Cairo International School. All Rights Reserved.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default AboutUs;
