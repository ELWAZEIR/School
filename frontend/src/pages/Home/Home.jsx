// import React from 'react'
// import Slider from '../../components/Slider/Slider'

// function Home() {
//   return (
//     <>
//     <Slider/>
//      <div className="bg-[#06213F] py-16">
//         <div className="container mx-auto px-4">
//           <h2 className="text-4xl font-bold mb-16 text-center text-white">
//             Our Top Management
//           </h2>
//           <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
//             {/* العضو الأول */}
//             <div className="bg-white rounded-lg shadow-lg text-center hover:scale-105 transition-transform duration-300 relative group overflow-hidden">
//               <div className="w-full h-64 relative">
//                 <img
//                   src="https://res.cloudinary.com/dvqnm98ue/image/upload/v1737331745/school-system/assets/Dr.Kareema_prm3zb.png"
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
//                   src="https://res.cloudinary.com/dvqnm98ue/image/upload/v1737331765/school-system/assets/Dr.-Mohamad_jxnyoz.png"
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
//       {/* About Section */}
//       <div className="bg-gray-100 py-16">
//         <div className="container mx-auto px-4">
//           <h2 className="text-4xl font-bold text-center text-[#06213F] mb-8">About Our School</h2>
//           <p className="text-lg text-gray-700 text-center max-w-4xl mx-auto">
//             Welcome to our International School, where excellence meets innovation. Our mission is to empower students 
//             to reach their full potential through world-class education, fostering creativity, leadership, and lifelong 
//             learning.
//           </p>
//         </div>
//       </div>

//       {/* Why Choose Us Section */}
//       <div className="bg-white py-16">
//         <div className="container mx-auto px-4">
//           <h2 className="text-4xl font-bold text-center text-[#06213F] mb-8">Why Choose Us?</h2>
//           <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
//             <div className="text-center p-6">
//               <img 
// src="https://images.pexels.com/photos/256395/pexels-photo-256395.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
// alt="Academic Excellence" 
//                 className="mx-auto mb-4"
//               />
//               <h4 className="text-2xl font-semibold text-[#2C3E50]">Academic Excellence</h4>
//               <p className="text-gray-700 mt-2">
//                 We provide a rigorous and engaging curriculum designed to prepare students for the future.
//               </p>
//             </div>
//             <div className="text-center p-6">
//               <img 
// src="https://images.pexels.com/photos/1056588/pexels-photo-1056588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
// alt="Modern Facilities" 
//                 className="mx-auto mb-4"
//               />
//               <h4 className="text-2xl font-semibold text-[#2C3E50]">Modern Facilities</h4>
//               <p className="text-gray-700 mt-2">
//                 Our campus features state-of-the-art classrooms, labs, and sports facilities.
//               </p>
//             </div>
//             <div className="text-center p-6">
//               <img 
// src="https://images.pexels.com/photos/5676743/pexels-photo-5676743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
// alt="Experienced Staff" 
//                 className="mx-auto mb-4"
//               />
//               <h4 className="text-2xl font-semibold text-[#2C3E50]">Experienced Staff</h4>
//               <p className="text-gray-700 mt-2">
//                 Learn from a team of passionate and highly qualified educators.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* News & Events Section */}
//       <div className="bg-[#06213F] py-16">
//         <div className="container mx-auto px-4 text-white">
//           <h2 className="text-4xl font-bold text-center mb-8">News & Events</h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6">
//               <h4 className="text-2xl font-semibold mb-4">Annual Science Fair</h4>
//               <p>
//                 Join us for an exciting day of innovation and discovery at our Annual Science Fair.
//               </p>
//               <p className="text-sm text-gray-500 mt-2">Date: March 15, 2025</p>
//             </div>
//             <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6">
//               <h4 className="text-2xl font-semibold mb-4">Sports Day</h4>
//               <p>
//                 Celebrate teamwork and athleticism at our upcoming Sports Day event.
//               </p>
//               <p className="text-sm text-gray-500 mt-2">Date: April 10, 2025</p>
//             </div>
//             <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6">
//               <h4 className="text-2xl font-semibold mb-4">Art Exhibition</h4>
//               <p>
//                 Experience creativity at its best at our Annual Art Exhibition.
//               </p>
//               <p className="text-sm text-gray-500 mt-2">Date: May 20, 2025</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Testimonials Section */}
//       <div className="bg-gray-100 py-16">
//         <div className="container mx-auto px-4">
//           <h2 className="text-4xl font-bold text-center text-[#06213F] mb-8">What Parents Say</h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
//             <div className="bg-white rounded-lg shadow-lg p-6">
//               <p className="text-gray-700">
//                 "This school has transformed my child's education and overall development. The teachers are truly dedicated."
//               </p>
//               <p className="text-sm text-gray-500 mt-4">- Sarah, Parent</p>
//             </div>
//             <div className="bg-white rounded-lg shadow-lg p-6">
//               <p className="text-gray-700">
//                 "The facilities and teaching methods here are unparalleled. I highly recommend this school."
//               </p>
//               <p className="text-sm text-gray-500 mt-4">- Ahmed, Parent</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default Home