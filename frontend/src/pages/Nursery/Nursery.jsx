import React from 'react';

const Nursery = () => {
  const slides = [
    {
      image: "https://images.pexels.com/photos/8422207/pexels-photo-8422207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Healthy Bodies",
    },
    {
      image: "https://media.istockphoto.com/id/1163921563/photo/group-of-preschool-children-answering-a-question.jpg?s=2048x2048&w=is&k=20&c=-bODXcDOIjBguLc-hTg_UXr88X_uAPnL2ifTvjSlBLw=",
      title: "Kind Hearts",
    },
    {
      image: "https://images.pexels.com/photos/8612897/pexels-photo-8612897.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Happy Minds",
    },
  ];

  // بيانات الأحداث (MixedFeeds Section)
  const events = [
    {
      date: "06 Mar",
      title: "World Book Day",
      time: "9:00am – 3:00pm",
      link: "https://example.com/event1",
    },
    {
      date: "18 Apr",
      title: "Good Friday - School Closed",
      time: "All Day",
      link: "https://example.com/event2",
    },
    {
      date: "21 Apr",
      title: "Easter Monday - School Closed",
      time: "All Day",
      link: "https://example.com/event3",
    },
  ];

  // بيانات الروابط (ImageLinks Section)
  const links = [
    {
      image: "https://media.istockphoto.com/id/1129133835/photo/interior-design-of-a-kindergarten-classroom.jpg?s=1024x1024&w=is&k=20&c=svOgTKMCT49M5cex_pwzHqdLyeYsS6TgOaSV9fVDFoM=",
      title: "Admissions",
      link: "https://example.com/admissions",
    },
    {
      image: "https://media.istockphoto.com/id/1067731518/photo/classroom-of-kindergarten-interior-design.jpg?s=1024x1024&w=is&k=20&c=1YlQmx-ENKu_OepIPJM2YH4Ev1I8bh5d3HuowDou2ZE=",
      title: "Policies",
      link: "https://example.com/policies",
    },
    {
      image: "https://media.istockphoto.com/id/178495572/photo/happy-child-with-painted-hands.jpg?s=1024x1024&w=is&k=20&c=VDV77egnWQJmTkeCtkGFHqVTQCjHcQouo4UOKfubJBI=",
      title: "Ofsted",
      link: "https://example.com/ofsted",
    },
    {
      image: "https://media.istockphoto.com/id/483468106/photo/little-girl-in-preschool-hands-covered-with-paint.jpg?s=1024x1024&w=is&k=20&c=2Rw9EbBRvuhFC04SCUC5fD9j-3dd6jPZ6QGMDLZpJ2s=",
      title: "SEND",
      link: "https://example.com/send",
    },
  ];
  // بيانات الصور الجديدة
  const activities = [
    {
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhe7igEdyP9qLHbRE5WUQiXu7nFM2yj2Us1g1jDznhRk_dm6xsnc51zMrxHkEE2L6I93UXQPQHSJJsxuQ0pDb1dIqqZMkqRz5TEkmfVGdefwt9mJgsWUKB0n6a-wq4rzT0jgfvpl7BdSeeV/s1600/%25D8%25A8%25D9%2584%25D9%2584%25D8%25A7.jpeg",
      title: "Educational Activities",
      description: "We offer a variety of educational activities designed to stimulate curiosity and foster a love for learning in children.",
    },
    {
      image: "https://img.pikbest.com/photo/20240605/children-reading-the-holy-quran-on-blessed-night_10598742.jpg!w700wp",
      title: "Quran Learning",
      description: "Our Quran classes are designed to teach children the holy Quran in a simple and engaging manner, helping them build a strong spiritual foundation.",
    },
    {
      image: "https://media.istockphoto.com/id/487521233/photo/cute-kids-in-kindergarden.jpg?s=1024x1024&w=is&k=20&c=ExVNwDIcTyhl0-ARuUk2PEuYYOLKi4LmdfE04cLgeLM=",
      title: "Our Classrooms",
      description: "Our classrooms are equipped with modern educational tools to provide a safe and stimulating environment for your child's growth.",
    },
    {
      image: "https://media.istockphoto.com/id/174936661/photo/classroom.jpg?s=1024x1024&w=is&k=20&c=n49hhWh7WUPsRemqO5yjGjMZ15WDeVc_OXlQyaeJ7y8=",
      title: "Interactive Learning",
      description: "We encourage interactive learning through group activities, helping children develop social and communication skills.",
    },
    {
      image: "https://media.istockphoto.com/id/862689772/photo/getting-help.jpg?s=1024x1024&w=is&k=20&c=ZuQIqfV84CpK857gRfR05TVUxQQJNAyEH5ONhDp106k=",
      title: "Individual Support",
      description: "We provide personalized attention to each child to ensure they reach their full potential in a supportive environment.",
    },
    {
      image: "https://media.istockphoto.com/id/1178762793/photo/happy-teacher-coloring-with-a-group-of-primary-students.jpg?s=2048x2048&w=is&k=20&c=e6cH0S4_-C81JB9Oz6eeNTiUZX7FksbJwVsEsmWiLXk=",
      title: "Creative Arts",
      description: "Our creative arts programs allow children to express themselves through painting, drawing, and other artistic activities.",
    },
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${activities[0].image})` }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center text-center text-white">
          <div className="max-w-2xl px-4">
            <h1 className="text-5xl font-bold mb-4 animate-fade-in-up">Welcome to Our Cairo Internationl School </h1>
            <p className="text-xl mb-8 animate-fade-in-up delay-200">
              We provide a safe and nurturing environment for your child's growth and development.
            </p>
            <a
              href="#welcome"
              className="inline-block bg-primary px-8 py-3 rounded-full text-lg font-semibold hover:bg-primary-dark transition-all animate-fade-in-up delay-400"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section id="welcome" className="py-20 bg-[#06213F] text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">Welcome to Our Nursery</h2>
            <p className="text-xl text-gray700 mb-8">
              At our nursery, we are committed to providing a stimulating and caring environment where children can thrive and grow.
            </p>
          </div>
        </div>
      </section>

      {/* Our Activities Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-center mb-12">Our Activities</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((activity, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div
                  className="h-64 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundImage: `url(${activity.image})` }}
                ></div>
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-center text-white p-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{activity.title}</h3>
                    <p className="text-sm">{activity.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-center mb-12">Why Choose Us?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h4 className="text-2xl font-bold mb-4">Experienced Staff</h4>
              <p className="text-gray-600">
                Our team of experienced educators is dedicated to providing the best care and education for your child.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h4 className="text-2xl font-bold mb-4">Safe Environment</h4>
              <p className="text-gray-600">
                We prioritize safety and ensure that our facilities are secure and child-friendly.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h4 className="text-2xl font-bold mb-4">Holistic Development</h4>
              <p className="text-gray-600">
                Our programs focus on the physical, emotional, and intellectual development of each child.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* باقي الأقسام */}
      {/* MixedFeeds Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-center mb-12">Latest Updates</h3>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div
                className="h-64 bg-cover bg-center"
                style={{ backgroundImage: "url('https://media.istockphoto.com/id/178495572/photo/happy-child-with-painted-hands.jpg?s=1024x1024&w=is&k=20&c=VDV77egnWQJmTkeCtkGFHqVTQCjHcQouo4UOKfubJBI=')" }}
              ></div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">9 Dec 2024</div>
                <h3 className="text-2xl font-bold mb-4">Latest Newsletter</h3>
                <a
                  href="/attachments/download.asp?file=115&amp;type=pdf"
                  className="inline-block bg-primary px-6 py-2 rounded-full text-white hover:bg-primary-dark transition-all"
                >
                  Download
                </a>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <header className="bg-secondary p-6">
                <h3 className="text-2xl font-bold text-white">Upcoming Events</h3>
              </header>
              <div className="p-6">
                <ul>
                  {events.map((event, index) => (
                    <li key={index} className="mb-4">
                      <a href={event.link} className="flex items-center space-x-4 hover:text-primary transition-all">
                        <div className="flex-shrink-0 w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white">
                          <div>
                            <div className="text-sm font-bold">{event.date.split(' ')[0]}</div>
                            <div className="text-xs">{event.date.split(' ')[1]}</div>
                          </div>
                        </div>
                        <div>
                          <h3 className="text-lg font-bold">{event.title}</h3>
                          <div className="text-sm text-gray-500">{event.time}</div>
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
                <a
                  href="/calendar/?calid=1&amp;pid=3&amp;viewid=1"
                  className="inline-block bg-primary px-6 py-2 rounded-full text-white hover:bg-primary-dark transition-all mt-4"
                >
                  View Full Calendar
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ImageLinks Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-center mb-12">Explore More</h3>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.link}
                className="group relative block h-64 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundImage: `url(${link.image})` }}
                ></div>
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="absolute inset-0 flex items-center justify-center text-center text-white">
                  <div>
                    <h3 className="text-2xl font-bold">{link.title}</h3>
                    <div className="mt-2 text-sm">Learn More</div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Nursery;