import Slider from "../components/Slider/Slider";
import React from "react";

function Homepage() {
  const membersData = [
    
    {
      id: 2,
      name: "Dr. Zainab",
      role: "Scientific Advisor",
      image:
        "https://cairoschools.edu.eg/wp-content/uploads/2022/06/Dr.-Zainab.png",
      description:
        "Dr. Zainab is a renowned scientific advisor with a focus on student development.",
    },
    {
      id: 1,
      name: "Dr. Mohamad Ibrahim",
      role: "Founder of Schools",
      image:
        "https://res.cloudinary.com/dvqnm98ue/image/upload/v1737331765/school-system/assets/Dr.-Mohamad_jxnyoz.png",
      description:
        "Dr. Mohamad is a pioneer in the field of education with a passion for innovation.",
    },
    {
      id: 3,
      name: "Dr. Karima Abdel Karim",
      role: "Chairman and Owner of the School",
      image:
        "https://res.cloudinary.com/dvqnm98ue/image/upload/v1737331745/school-system/assets/Dr.Kareema_prm3zb.png",
      description:
        "Dr. Karima is a visionary leader with over 20 years of experience in education.",
    },
  ];
  const features = [
    {
      id: 1,
      image:"https://res.cloudinary.com/dvqnm98ue/image/upload/v1737331877/school-system/assets/20211012_102614-scaled_fpefnh.jpg",
      title: "Academic Excellence",
      description:
        "We provide a rigorous and engaging curriculum designed to prepare students for the future.",
    },
    {
      id: 2,
      image:"https://res.cloudinary.com/dvqnm98ue/image/upload/v1737331737/school-system/assets/fun-day-2.jpg_havenp.jpg",
      title: "Modern Facilities",
      description:
        "Our campus features state-of-the-art classrooms, labs, and sports facilities.",
    },
    {
      id: 3,
      image:"https://res.cloudinary.com/dvqnm98ue/image/upload/v1737331928/school-system/assets/WhatsApp-Image-2022-09-04-at-9.54.50-AM-1_icympl.jpg",
      title: "Experienced Staff",
      description:
        "Learn from a team of passionate and highly qualified educators.",
    },
  ];
  return (
    <>
      <Slider />
      <div className="bg-[#06213F] py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 text-center text-white">
            Our Top Management
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {membersData.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-lg shadow-lg text-center hover:scale-105 transition-transform duration-300 relative group overflow-hidden"
              >
                <div className="w-full aspect-w-16 aspect-h-9 relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full p-4 object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-[#224771] opacity-0 group-hover:opacity-60 transition-opacity duration-300 flex items-center justify-center">
                    <p className="text-white text-lg px-4 text-center">
                      {member.description}
                    </p>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-2xl font-semibold text-[#2C3E50]">
                    {member.name}
                  </h4>
                  <p className="text-[#555] mt-2">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* About Section */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#06213F] mb-8">
            About Our School
          </h2>
          <p className="text-lg text-gray-700 text-center max-w-4xl mx-auto">
            Welcome to our International School, where excellence meets
            innovation. Our mission is to empower students to reach their full
            potential through world-class education, fostering creativity,
            leadership, and lifelong learning.
          </p>
        </div>
      </div>
      {/* Why Choose Us Section */}
      <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-[#06213F] mb-12">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 hover:scale-105 transform"
            >
              <div className="w-full h-48 overflow-hidden rounded-t-lg">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-2xl font-semibold text-[#2C3E50] mt-6">
                {feature.title}
              </h4>
              <p className="text-gray-700 mt-4">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
      {/* News & Events Section */}
      <div className="bg-[#06213F] py-16">
        <div className="container mx-auto px-4 text-white">
          <h2 className="text-4xl font-bold text-center mb-8">News & Events</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6">
              <h4 className="text-2xl font-semibold mb-4">
                Annual Science Fair
              </h4>
              <p>
                Join us for an exciting day of innovation and discovery at our
                Annual Science Fair.
              </p>
              <p className="text-sm text-gray-500 mt-2">Date: March 15, 2025</p>
            </div>
            <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6">
              <h4 className="text-2xl font-semibold mb-4">Sports Day</h4>
              <p>
                Celebrate teamwork and athleticism at our upcoming Sports Day
                event.
              </p>
              <p className="text-sm text-gray-500 mt-2">Date: April 10, 2025</p>
            </div>
            <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6">
              <h4 className="text-2xl font-semibold mb-4">Art Exhibition</h4>
              <p>
                Experience creativity at its best at our Annual Art Exhibition.
              </p>
              <p className="text-sm text-gray-500 mt-2">Date: May 20, 2025</p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#06213F] mb-8">
            What Parents Say
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <p className="text-gray-700">
                "This school has transformed my child's education and overall
                development. The teachers are truly dedicated."
              </p>
              <p className="text-sm text-gray-500 mt-4">- Sarah, Parent</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <p className="text-gray-700">
                "The facilities and teaching methods here are unparalleled. I
                highly recommend this school."
              </p>
              <p className="text-sm text-gray-500 mt-4">- Ahmed, Parent</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;
