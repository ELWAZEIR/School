import React from "react";
import sportVideo from "../../assets/sport.mp4";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSmileBeam,
  faDumbbell,
  faUsers,
  faCalendarCheck,
} from "@fortawesome/free-solid-svg-icons";
const Activities = () => {
  const activities = [
    {
      title: "Running",
      description:
        "Running improves cardiovascular health, builds stamina, and helps with weight management. It’s a simple, effective form of exercise.",
      image:
        "https://images.pexels.com/photos/8927011/pexels-photo-8927011.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      title: "Logical Thinking Workshop",
      description:
        "Enhance your logical thinking and problem-solving skills through engaging activities and mind games designed to challenge your brain.",
      image:
        "https://res.cloudinary.com/dvqnm98ue/image/upload/v1737331859/school-system/assets/activity-4-1.jpg-1_kecm7h.jpg",
    },
    {
      title: "School Trip",
      description:
        "School trips provide students with hands-on learning experiences, foster teamwork, and create lasting memories.",
      image:
        "https://res.cloudinary.com/dvqnm98ue/image/upload/v1737331925/school-system/assets/WhatsApp-Image-2022-06-06-at-3.58.55-PM_dibsmk.jpg",
    },
    {
      title: "Aviation Day",
      description:
        "Aviation Day introduces students to the world of flight, inspiring curiosity and passion for aerospace engineering.",
      image:
        "https://res.cloudinary.com/dvqnm98ue/image/upload/v1737331924/school-system/assets/WhatsApp-Image-2022-09-04-at-9.54.51-AM_w58nnu.jpg",
    },
    {
      title: "Volleyball",
      description:
        "Volleyball is a dynamic team sport that enhances coordination, agility, and teamwork while providing a great workout.",
      image:
        "https://res.cloudinary.com/dvqnm98ue/image/upload/v1737331921/school-system/assets/20211202_135918-scaled_dmg4uv.jpg",
    },
    {
      title: "Art Class",
      description:
        "Art classes encourage creativity, self-expression, and fine motor skills development in a fun and engaging environment.",
      image:
        "https://res.cloudinary.com/dvqnm98ue/image/upload/v1737331951/school-system/assets/IMG-20220530-WA0008_skl5hy.jpg",
    },
    {
      title: "Painting Workshop",
      description:
        "Painting workshops allow students to explore their artistic talents and learn various techniques in a supportive setting.",
      image:
        "https://res.cloudinary.com/dvqnm98ue/image/upload/v1737331708/school-system/assets/fun-day3.jpg_iuruqm.jpg",
    },
    {
      title: "Cooking Class",
      description:
        "Cooking classes teach students essential life skills, promote healthy eating habits, and encourage teamwork in the kitchen.",
      image:
        "https://res.cloudinary.com/dvqnm98ue/image/upload/v1737331709/school-system/assets/easter2.jpeg_nzzt80.jpg",
    },
  ];
  return (
    <>
      <h2 className="text-4xl text-white bg-[#06213F] text-center font-bold pt-40 pb-5">
        School Sports Activities
      </h2>
      <div className="bg-[#06213F]">
        {/* Header */}
        <header className="relative w-full h-[550px] overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url(https://res.cloudinary.com/dvqnm98ue/image/upload/v1737331954/school-system/assets/imgonline-com-ua-twotoone-Dlf4GsqD8g-scaled_dofxbz.jpg)",
            }}
          >
            <div className="flex items-center justify-center w-full h-full bg-black bg-opacity-50">
              <h1 className="text-3xl sm:text-5xl text-white font-bold text-center px-4">
                Sports = Life
              </h1>
            </div>
          </div>
        </header>
        {/* Article about Sports and Addiction */}
        <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-800 to-indigo-900 text-white">
          <h2 className="text-3xl sm:text-4xl text-center font-bold mb-12">
            Sports: A Solution to Addiction
          </h2>

          <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Improve Mood */}
            <div className="flex items-center space-x-4 p-6 bg-white bg-opacity-10 rounded-lg hover:bg-opacity-20 transition duration-300">
              <FontAwesomeIcon
                icon={faSmileBeam}
                className="text-3xl sm:text-4xl text-yellow-400"
              />
              <div>
                <h3 className="text-lg sm:text-xl font-semibold">Boost Mood</h3>
                <p className="text-sm sm:text-base mt-2">
                  Exercise releases endorphins, reducing stress and enhancing
                  mood.
                </p>
              </div>
            </div>

            {/* Boost Confidence */}
            <div className="flex items-center space-x-4 p-6 bg-white bg-opacity-10 rounded-lg hover:bg-opacity-20 transition duration-300">
              <FontAwesomeIcon
                icon={faDumbbell}
                className="text-3xl sm:text-4xl text-green-400"
              />
              <div>
                <h3 className="text-lg sm:text-xl font-semibold">
                  Enhance Confidence
                </h3>
                <p className="text-sm sm:text-base mt-2">
                  Sports improve physical health and self-esteem, reducing
                  addiction triggers.
                </p>
              </div>
            </div>

            {/* Build Support */}
            <div className="flex items-center space-x-4 p-6 bg-white bg-opacity-10 rounded-lg hover:bg-opacity-20 transition duration-300">
              <FontAwesomeIcon
                icon={faUsers}
                className="text-3xl sm:text-4xl text-blue-400"
              />
              <div>
                <h3 className="text-lg sm:text-xl font-semibold">
                  Foster Connections
                </h3>
                <p className="text-sm sm:text-base mt-2">
                  Team sports create social bonds, replacing negative addiction
                  influences.
                </p>
              </div>
            </div>

            {/* Create Routine */}
            <div className="flex items-center space-x-4 p-6 bg-white bg-opacity-10 rounded-lg hover:bg-opacity-20 transition duration-300">
              <FontAwesomeIcon
                icon={faCalendarCheck}
                className="text-3xl sm:text-4xl text-orange-400"
              />
              <div>
                <h3 className="text-lg sm:text-xl font-semibold">
                  Establish Routine
                </h3>
                <p className="text-sm sm:text-base mt-2">
                  Regular exercise establishes a healthy routine, reducing idle
                  time that fuels addiction.
                </p>
              </div>
            </div>
          </div>

          <p className="text-lg sm:text-2xl text-center mt-12 max-w-2xl mx-auto">
            Sports provide a holistic way to overcome addiction, benefiting both
            mind and body.
          </p>
        </div>
        {/* Video Section */}
        <div className="relative w-full h-[300px] sm:h-[500px] my-6">
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
          >
            <source src={sportVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        {/* Sports Activities */}
        <div className="py-16 px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl text-white text-center font-bold mb-12">
            School Sports Activities
          </h2>

          {/* Sports Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {activities.map((activity, index) => (
              <div
                key={index}
                className="relative bg-white rounded-lg shadow-xl overflow-hidden transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-2xl"
              >
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-[200px] sm:h-[250px] object-cover transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 flex items-center justify-center transition-all duration-500 ease-in-out hover:bg-opacity-50">
                  <div className="text-white text-center p-4 opacity-0 transition-all duration-500 ease-in-out transform translate-y-4 hover:opacity-100 hover:translate-y-0">
                    <h3 className="text-xl sm:text-2xl font-semibold">
                      {activity.title}
                    </h3>
                    <p className="text-sm sm:text-base mt-4">
                      {activity.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Activities;