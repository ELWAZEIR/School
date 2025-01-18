import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen  bg-[#06213F] flex items-center justify-center px-4">
      <div className="max-w-5xl w-full bg-white shadow-md rounded-lg flex flex-col md:flex-row overflow-hidden">
        {/* القسم الخاص بالصورة */}
        <div className="hidden md:block md:w-1/2">
          <img
            src="https://images.pexels.com/photos/5212667/pexels-photo-5212667.jpeg"
            alt="Contact Us"
            className="w-full h-full object-cover"
          />
        </div>

        {/* القسم الخاص بالنموذج */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-between">
  <div>
    <h1 className="text-3xl font-extrabold text-gray-800 text-center mb-6">Get in Touch</h1>
    <p className="text-center text-gray-500 mb-10">
      Have any questions or need further information? Fill out the form below or reach us through the details provided!
    </p>
    <form className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-gray-700 font-medium mb-1">
            <span className="inline-flex items-center">
              <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A10.002 10.002 0 1121 12.197M12 6v6l3 3" />
              </svg>
              Full Name
            </span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your full name"
            className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 px-4 py-2"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
            <span className="inline-flex items-center">
              <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12h2a2 2 0 100-4h-2m-4 4h4m-4 4h4m-4 4h4M4 6h4m-4 4h4m-4 4h4" />
              </svg>
              Email Address
            </span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 px-4 py-2"
          />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="block text-gray-700 font-medium mb-1">
          <span className="inline-flex items-center">
            <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 20h9M4 4h16M4 4l8 16M4 4L4 20" />
            </svg>
            Message
          </span>
        </label>
        <textarea
          id="message"
          name="message"
          rows="4"
          placeholder="Type your message here..."
          className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 px-4 py-2"
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Send Message
      </button>
    </form>
  </div>
  {/* <div className="mt-10 text-center">
    <h2 className="text-xl font-semibold text-gray-800">Contact Information</h2>
    <p className="text-gray-500 mt-2">
    Nasr City , Cairo , Egyp
    </p>
    <p className="text-gray-500 mt-2">Phone: +202 24721556</p>
    <p className="text-gray-500">Email: info@cairoschools.edu.eg</p>
    <div className="flex justify-center gap-4 mt-4">
      <a href="#" className="text-blue-600 hover:text-blue-700">
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M22.675 0H1.326C.592 0 0 .593 0 1.326v21.348C0 23.407.592 24 1.326 24H22.675C23.408 24 24 23.407 24 22.674V1.326C24 .593 23.408 0 22.675 0z" />
        </svg>
      </a>
      <a href="#" className="text-blue-600 hover:text-blue-700">
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M23.953 4.569c-.885.391-1.833.654-2.828.775 1.014-.609 1.798-1.574 2.165-2.724-.951.555-2.005.959-3.127 1.184-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.248-2.229-.616v.061c0 2.385 1.693 4.374 3.946 4.829-.413.111-.849.171-1.296.171-.314 0-.624-.03-.924-.085.631 1.953 2.445 3.377 4.6 3.417-2.07 1.623-4.679 2.348-7.29 2.04 2.179 1.396 4.768 2.212 7.548 2.212 9.056 0 14.002-7.496 13.995-14.196.961-.695 1.8-1.56 2.465-2.549z" />
        </svg>
      </a>
    </div>
  </div> */}
   <div className="bg-gray-100 shadow-sm p-6 sm:p-8">
      {/* Office Address */}
      <div className="mb-6 flex items-start">
        <div className="bg-blue-500 p-3 rounded-full text-white">
          <i className="icofont-location-pin"></i>
        </div>
        <div className="ml-4">
          <h4 className="text-lg font-semibold text-gray-800">Office Address</h4>
          <p className="text-gray-600">Nasr City , Cairo , Egyp</p>
        </div>
      </div>

      {/* Send Email */}
      <div className="mb-6 flex items-start">
        <div className="bg-green-500 p-3 rounded-full text-white">
          <i className="icofont-envelope-open"></i>
        </div>
        <div className="ml-4">
          <h4 className="text-lg font-semibold text-gray-800">Send Email</h4>
          <p className="text-gray-600">info@cairoschools.edu.eg</p>
        </div>
      </div>

      {/* Phone & Fax */}
      <div className="mb-6 flex items-start">
        <div className="bg-yellow-500 p-3 rounded-full text-white">
          <i className="icofont-fax"></i>
        </div>
        <div className="ml-4">
          <h4 className="text-lg font-semibold text-gray-800">Phone &amp; Fax</h4>
          <p className="text-gray-600"> +202 24721556</p>
        </div>
      </div>

      {/* Opening Time */}
      <div className="flex items-start">
        <div className="bg-red-500 p-3 rounded-full text-white">
          <i className="icofont-eye"></i>
        </div>
        <div className="ml-4">
          <h4 className="text-lg font-semibold text-gray-800">Opening Time</h4>
          <p className="text-gray-600">Sunday – Thursday 8:00 AM – 2:00 PM</p>
        </div>
      </div>
    </div>

</div>

        
      </div>
    </div>
  );
};

export default Contact;
