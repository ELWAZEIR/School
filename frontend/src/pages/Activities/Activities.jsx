import React from 'react';
import sportVideo from '../../assets/sport.mp4';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmileBeam, faDumbbell, faUsers, faCalendarCheck } from '@fortawesome/free-solid-svg-icons';

const Activities = () => {
  const activities = [
    {
      title: 'Running',
      description: 'Running improves cardiovascular health, builds stamina, and helps with weight management. It’s a simple, effective form of exercise.',
      image: 'https://images.pexels.com/photos/8927011/pexels-photo-8927011.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      title: 'Football',
      description: 'Football is a fantastic team sport that helps improve coordination, communication, and teamwork. It’s a full-body workout.',
      image: 'https://images.pexels.com/photos/47730/the-ball-stadion-football-the-pitch-47730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      title: 'Swimming',
      description: 'Swimming is an excellent low-impact exercise for all ages. It builds strength, improves cardiovascular health, and promotes relaxation.',
      image: 'https://images.pexels.com/photos/1263348/pexels-photo-1263348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      title: 'Tennis',
      description: 'Tennis is a fun sport that boosts agility, enhances coordination, and improves mental focus. It’s great for building muscle and stamina.',
      image: 'https://images.pexels.com/photos/1042883/pexels-photo-1042883.jpeg',
    },
    {
      title: 'Basketball',
      description: 'Basketball is a high-intensity team sport that helps improve cardiovascular fitness, coordination, and agility while building teamwork.',
      image: 'https://images.pexels.com/photos/267761/pexels-photo-267761.jpeg',
    },
    {
      title: 'Yoga',
      description: 'Yoga is a peaceful practice that improves flexibility, reduces stress, and promotes mindfulness. It benefits both the body and mind.',
      image: 'https://images.pexels.com/photos/1051838/pexels-photo-1051838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
  ];

  return (<>         <h2 className="text-4xl text-white bg-[#06213F] text-center font-bold py-4 ">School Sports Activities</h2>
   <div className="bg-[#06213F]">
        
      {/* Header */}
      <header className="relative w-full h-[500px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://media.istockphoto.com/id/1472309199/fr/photo/jeune-basketteur-junior-en-action-mouvement-sur-fond-clair-avec-des-dessins-abstraits-color%C3%A9s.jpg?s=2048x2048&w=is&k=20&c=7UzHDHPluvtb78hJrNcimjNMsfwUlWI6CJUBEtf2cPI=)',
          }}
        >
          <div className="flex items-center justify-center w-full h-full bg-black opacity-50">
            <h1 className="text-5xl text-white font-bold">Sports = Life</h1>
          </div>
        </div>
      </header>
{/* Article about Sports and Addiction */}
<div className="py-16 px-4  sm:px-6 lg:px-8 text-white">
      <h2 className="text-4xl text-center font-bold mb-6">Sports: A Solution to Addiction</h2>

      <div className="space-y-6 flex">
        {/* Improve Mood */}
        <div className="flex items-center space-x-4">
          <FontAwesomeIcon icon={faSmileBeam} className="text-3xl text-yellow-400" />
          <div>
            <h3 className="text-xl font-semibold">Boost Mood</h3>
            <p className="text-sm">Exercise releases endorphins, reducing stress and enhancing mood.</p>
          </div>
        </div>

        {/* Boost Confidence */}
        <div className="flex items-center space-x-4">
          <FontAwesomeIcon icon={faDumbbell} className="text-3xl text-green-400" />
          <div>
            <h3 className="text-xl font-semibold">Enhance Confidence</h3>
            <p className="text-sm">Sports improve physical health and self-esteem, reducing addiction triggers.</p>
          </div>
        </div>

        {/* Build Support */}
        <div className="flex items-center space-x-4">
          <FontAwesomeIcon icon={faUsers} className="text-3xl text-blue-400" />
          <div>
            <h3 className="text-xl font-semibold">Foster Connections</h3>
            <p className="text-sm">Team sports create social bonds, replacing negative addiction influences.</p>
          </div>
        </div>

        {/* Create Routine */}
        <div className="flex items-center space-x-4">
          <FontAwesomeIcon icon={faCalendarCheck} className="text-3xl text-orange-400" />
          <div>
            <h3 className="text-xl font-semibold">Establish Routine</h3>
            <p className="text-sm">Regular exercise establishes a healthy routine, reducing idle time that fuels addiction.</p>
          </div>
        </div>
      </div>

      <p className="text-2xl flex justify-center items-center mt-6">
        Sports provide a holistic way to overcome addiction, benefiting both mind and body.
      </p>
    </div>



      {/* Video Section */}
      <div className="relative w-full h-[400px] my-6">
        <video className="w-full h-full object-cover" autoPlay muted loop>
          <source src={sportVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Sports Activities */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl text-white text-center font-bold mb-12">School Sports Activities</h2>

        {/* Sports Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {activities.map((activity, index) => (
            <div key={index} className="relative bg-white rounded-lg shadow-xl overflow-hidden transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-2xl hover:rotate-3">
              <img
                src={activity.image}
                alt={activity.title}
                className="w-full h-[300px] object-cover transition-transform duration-500 ease-in-out hover:scale-110"
              />
              <div className="absolute inset-0 bg-black opacity-50 flex items-center justify-center">
                <div className="text-white text-center p-4 transition-all duration-300 ease-in-out transform opacity-0 hover:opacity-100">
                  <h3 className="text-2xl font-semibold">{activity.title}</h3>
                  <p className="text-lg mt-4">{activity.description}</p>
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
