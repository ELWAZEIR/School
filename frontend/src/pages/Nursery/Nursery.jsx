import React from "react";

const Nursery = () => {
  // بيانات الروابط (ImageLinks Section)
  const exploreLinks = [
    {
      image:
        "https://res.cloudinary.com/dvqnm98ue/image/upload/v1737331596/school-system/assets/Costume-day.jpeg-1_1_lwhet0.jpg",
      title: "Admissions",
      description:
        "Discover our admission process and how to join our vibrant school community.",
    },
    {
      image:
        "https://res.cloudinary.com/dvqnm98ue/image/upload/v1737331569/school-system/assets/easter6.jpeg_lszd5k.jpg",
      title: "Policies",
      description:
        "Learn about our school policies to ensure a safe and supportive environment.",
    },
    {
      image:
        "https://res.cloudinary.com/dvqnm98ue/image/upload/v1737331552/school-system/assets/easter3.jpeg_qnkerv.jpg",
      title: "Ofsted Reports",
      description:
        "View our latest Ofsted reports and see how we maintain high educational standards.",
    },
    {
      image:
        "https://res.cloudinary.com/dvqnm98ue/image/upload/v1737331554/school-system/assets/Costume-day.jpeg_epqwtu.jpg",
      title: "SEND Support",
      description:
        "Explore our Special Educational Needs and Disabilities (SEND) support programs.",
    },
  ];
  // بيانات الصور الجديدة
  const activities = [
    {
      image:
        "https://res.cloudinary.com/dvqnm98ue/image/upload/v1737331812/school-system/assets/IMG_7097-scaled_vzjxqf.jpg",
      title: "Interactive Learning",
      description:
        "Engage in hands-on activities that make learning fun and effective for students.",
    },
    {
      image:
        "https://res.cloudinary.com/dvqnm98ue/image/upload/v1737331794/school-system/assets/IMG_6584-scaled_myifum.jpg",
      title: "Quran Studies",
      description:
        "Our Quran classes focus on memorization, recitation, and understanding the holy Quran.",
    },
    {
      image:
        "https://res.cloudinary.com/dvqnm98ue/image/upload/v1737331798/school-system/assets/thumbnail_image0_cmm62e.jpg",
      title: "Modern Classrooms",
      description:
        "State-of-the-art classrooms designed to inspire creativity and innovation.",
    },
    {
      image:
        "https://res.cloudinary.com/dvqnm98ue/image/upload/v1737331971/school-system/assets/WhatsApp-Image-2022-06-22-at-10.18.28-AM-1_pacjta.jpg",
      title: "Prayer",
      description:
        "Fun and educational activities to teach children the importance of prayer and how to perform it correctly.",
    },
    {
      image:
        "https://res.cloudinary.com/dvqnm98ue/image/upload/v1737331792/school-system/assets/easter5.jpeg_u758gx.jpg",
      title: "Group Activities",
      description:
        "Team-based projects to develop collaboration and communication skills.",
    },
    {
      image:
        "https://res.cloudinary.com/dvqnm98ue/image/upload/v1737331794/school-system/assets/IMG_6478-scaled_gavfxi.jpg",
      title: "Personalized Support",
      description:
        "Tailored guidance to help each student achieve their full potential.",
    },
    {
      image:
        "https://res.cloudinary.com/dvqnm98ue/image/upload/v1737331767/school-system/assets/new-year1.jpg_h5mulk.jpg",
      title: "Art & Creativity",
      description:
        "Explore artistic talents through painting, drawing, and creative expression.",
    },
    {
      image:
        "https://res.cloudinary.com/dvqnm98ue/image/upload/v1737331720/school-system/assets/open-day.jpg_yu54zo.jpg",
      title: "Open Day Events",
      description:
        "Join us for special events to experience our school's vibrant community.",
    },
    {
      image:
        "https://res.cloudinary.com/dvqnm98ue/image/upload/v1737331680/school-system/assets/mothers-day_dui5dh.jpg",
      title: "Mother's Day Celebration",
      description:
        "Celebrating the love and dedication of mothers with special activities.",
    },
    {
      image:
        "https://res.cloudinary.com/dvqnm98ue/image/upload/v1737331680/school-system/assets/easter1.jpeg_thc5j8.jpg",
      title: "Easter Festivities",
      description:
        "Fun and educational activities to celebrate the Easter season.",
    },
  ];
  const cardsData = [
    {
      image:
        "https://media.istockphoto.com/id/178495572/photo/happy-child-with-painted-hands.jpg?s=1024x1024&w=is&k=20&c=VDV77egnWQJmTkeCtkGFHqVTQCjHcQouo4UOKfubJBI=",
      date: "9 Dec 2024",
      title: "Art & Creativity Day",
      description:
        "Join us for a fun-filled day of painting, drawing, and creative activities for kids!",
    },
    {
      image:
        "https://res.cloudinary.com/dvqnm98ue/image/upload/v1737331934/school-system/assets/WhatsApp-Image-2022-09-04-at-9.54.25-AM-1_qxtwfo.jpg",
      date: "15 Dec 2024",
      title: "Sports Festival",
      description:
        "A day full of sports, games, and teamwork activities to promote physical fitness and fun.",
    },
    {
      image:
        "https://res.cloudinary.com/dvqnm98ue/image/upload/v1737331934/school-system/assets/WhatsApp-Image-2022-06-21-at-11.34.57-AM-1_rtpn7s.jpg",
      date: "20 Dec 2024",
      title: "Science Fair",
      description:
        "Explore the wonders of science with exciting experiments and projects by our young scientists.",
    },
  ];
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(https://res.cloudinary.com/dvqnm98ue/image/upload/v1737331863/school-system/assets/KG-activity_qetucc.png)`,
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center text-center text-white">
          <div className="max-w-2xl px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up">
              Welcome to Our Cairo International School
            </h1>
            <p className="text-lg md:text-xl mb-8 animate-fade-in-up delay-200">
              We provide a safe and nurturing environment for your child's
              growth and development.
            </p>
            <a
              href="#welcome"
              className="inline-block bg-primary px-6 py-2 md:px-8 md:py-3 rounded-full text-lg font-semibold hover:bg-primary-dark transition-all animate-fade-in-up delay-400"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section id="welcome" className="py-16 md:py-20 bg-[#06213F] text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Welcome to Our Nursery
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              At our nursery, we are committed to providing a stimulating and
              caring environment where children can thrive and grow.
            </p>
          </div>
        </div>
      </section>

      {/* Our Activities Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">
            Our Activities
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.map((activity, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-center text-white p-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">
                      {activity.title}
                    </h3>
                    <p className="text-sm">{activity.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">
            Why Choose Us?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-all">
              <h4 className="text-xl md:text-2xl font-bold mb-4">
                Experienced Staff
              </h4>
              <p className="text-gray-600">
                Our team of experienced educators is dedicated to providing the
                best care and education for your child.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-all">
              <h4 className="text-xl md:text-2xl font-bold mb-4">
                Safe Environment
              </h4>
              <p className="text-gray-600">
                We prioritize safety and ensure that our facilities are secure
                and child-friendly.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-all">
              <h4 className="text-xl md:text-2xl font-bold mb-4">
                Holistic Development
              </h4>
              <p className="text-gray-600">
                Our programs focus on the physical, emotional, and intellectual
                development of each child.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MixedFeeds Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">
            Latest Updates
          </h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {cardsData.map((card, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-2">{card.date}</div>
                  <h3 className="text-xl md:text-2xl font-bold mb-4">
                    {card.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ImageLinks Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">
            Explore More
          </h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {exploreLinks.map((link, index) => (
              <div
                key={index}
                className="group relative block h-64 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundImage: `url(${link.image})` }}
                ></div>
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="absolute inset-0 flex items-center justify-center text-center text-white p-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold mb-2">
                      {link.title}
                    </h3>
                    <p className="text-sm">{link.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Nursery;
