import React, { useState, useEffect } from 'react';
import Joi from 'joi';

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    studentName: '',
    birthDate: '',
    age: '', // New field for age
    grade: '',
    parentName: '',
    contactNumber: '',
    email: '',
    address: '',
    religion: '', // Added religion field
    studentImage: null, // For the uploaded image
  });

  const [errors, setErrors] = useState({});

  // Joi validation schema
  const schema = Joi.object({
    studentName: Joi.string()
      .pattern(/^[a-zA-Z\s]+$/)
      .min(3)
      .max(50)
      .required()
      .label('Student Name')
      .messages({ 'string.pattern.base': 'Student Name must contain letters only.' }),
    birthDate: Joi.date().iso().less('now').required().label('Date of Birth'),
    age: Joi.number().min(3).max(18).required().label('Age'), // Age validation
    grade: Joi.string().required().label('Grade'),
    parentName: Joi.string()
      .pattern(/^[a-zA-Z\s]+$/)
      .min(3)
      .max(50)
      .required()
      .label('Parent Name')
      .messages({ 'string.pattern.base': 'Parent Name must contain letters only.' }),
    contactNumber: Joi.string()
      .pattern(/^\d{10,15}$/)
      .required()
      .label('Contact Number')
      .messages({ 'string.pattern.base': 'Contact Number must be between 10 and 15 digits.' }),
    email: Joi.string().email({ tlds: { allow: false } }).required().label('Email'),
    address: Joi.string().min(10).max(200).required().label('Address'),
    religion: Joi.string().required().label('Religion'), // Religion validation
    studentImage: Joi.any().required().label('Student Image'),
  });

  // Calculate age based on birth date
  useEffect(() => {
    if (formData.birthDate) {
      const birthDate = new Date(formData.birthDate);
      const today = new Date();
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      setFormData((prevData) => ({ ...prevData, age }));
    }
  }, [formData.birthDate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, studentImage: e.target.files[0] });
  };

  const validate = () => {
    const { error } = schema.validate(formData, { abortEarly: false });
    if (!error) return null;

    const validationErrors = {};
    error.details.forEach((item) => {
      validationErrors[item.path[0]] = item.message;
    });
    return validationErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (validationErrors) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    console.log('Form submitted:', formData);
    // Send formData to backend
  };

  return (
    <div className="min-h-screen pt-32 bg-[url('https://res.cloudinary.com/dvqnm98ue/image/upload/v1737331726/school-system/assets/ramadan.jpg_yoc6ff.jpg')] flex items-center justify-center py-10">
      <div className="bg-black bg-opacity-50 shadow-lg rounded-lg p-8 max-w-4xl w-full">
        <h2 className="text-2xl font-bold mb-6 text-white text-center">Student Application Form</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Student Name */}
            <div>
              <label htmlFor="studentName" className="block text-white font-medium">
                Student Name
              </label>
              <input
                type="text"
                id="studentName"
                name="studentName"
                value={formData.studentName}
                onChange={handleChange}
                className={`w-full mt-1 px-3 py-2 border rounded-lg focus:ring ${
                  errors.studentName ? 'border-red-500 focus:ring-red-300' : 'focus:ring-indigo-300'
                }`}
                placeholder="Enter student's name"
              />
              {errors.studentName && <p className="text-red-500 text-sm">{errors.studentName}</p>}
            </div>

            {/* Parent Name */}
            <div>
              <label htmlFor="parentName" className="block text-white font-medium">
                Parent Name
              </label>
              <input
                type="text"
                id="parentName"
                name="parentName"
                value={formData.parentName}
                onChange={handleChange}
                className={`w-full mt-1 px-3 py-2 border rounded-lg focus:ring ${
                  errors.parentName ? 'border-red-500 focus:ring-red-300' : 'focus:ring-indigo-300'
                }`}
                placeholder="Enter parent's name"
              />
              {errors.parentName && <p className="text-red-500 text-sm">{errors.parentName}</p>}
            </div>

            {/* Date of Birth */}
            <div>
              <label htmlFor="birthDate" className="block text-white font-medium">
                Date of Birth
              </label>
              <input
                type="date"
                id="birthDate"
                name="birthDate"
                value={formData.birthDate}
                onChange={handleChange}
                className={`w-full mt-1 px-3 py-2 border rounded-lg focus:ring ${
                  errors.birthDate ? 'border-red-500 focus:ring-red-300' : 'focus:ring-indigo-300'
                }`}
              />
              {errors.birthDate && <p className="text-red-500 text-sm">{errors.birthDate}</p>}
            </div>

            {/* Age */}
            <div>
              <label htmlFor="age" className="block text-white font-medium">
                Age
              </label>
              <input
                type="number"
                id="age"
                name="age"
                value={formData.age}
                readOnly // Age is calculated automatically
                className="w-full mt-1 px-3 py-2 border rounded-lg focus:ring focus:ring-indigo-300 bg-gray-100"
              />
            </div>

            {/* Grade */}
            <div>
              <label htmlFor="grade" className="block text-white font-medium">
                Grade
              </label>
              <select
                id="grade"
                name="grade"
                value={formData.grade}
                onChange={handleChange}
                className={`w-full mt-1 px-3 py-2 border rounded-lg focus:ring ${
                  errors.grade ? 'border-red-500 focus:ring-red-300' : 'focus:ring-indigo-300'
                }`}
              >
                <option value="" disabled>
                  Select grade
                </option>
                <option value="KG1">KG1</option>
                <option value="KG2">KG2</option>
                <option value="Grade 1">Grade 1</option>
                <option value="Grade 2">Grade 2</option>
                <option value="Grade 3">Grade 3</option>
                <option value="Grade 4">Grade 4</option>
                <option value="Grade 5">Grade 5</option>
                <option value="Grade 6">Grade 6</option>
                <option value="Grade 7">Grade 7</option>
                <option value="Grade 8">Grade 8</option>
                <option value="Grade 9">Grade 9</option>
                <option value="Grade 10">Grade 10</option>
                <option value="Grade 11">Grade 11</option>
                <option value="Grade 12">Grade 12</option>
              </select>
              {errors.grade && <p className="text-red-500 text-sm">{errors.grade}</p>}
            </div>

            {/* Contact Number */}
            <div>
              <label htmlFor="contactNumber" className="block text-white font-medium">
                Contact Number
              </label>
              <input
                type="tel"
                id="contactNumber"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                className={`w-full mt-1 px-3 py-2 border rounded-lg focus:ring ${
                  errors.contactNumber ? 'border-red-500 focus:ring-red-300' : 'focus:ring-indigo-300'
                }`}
                placeholder="Enter contact number"
              />
              {errors.contactNumber && <p className="text-red-500 text-sm">{errors.contactNumber}</p>}
            </div>

            {/* Religion */}
            <div>
              <label htmlFor="religion" className="block text-white font-medium">
                Religion
              </label>
              <select
                id="religion"
                name="religion"
                value={formData.religion}
                onChange={handleChange}
                className={`w-full mt-1 px-3 py-2 border rounded-lg focus:ring ${
                  errors.religion ? 'border-red-500 focus:ring-red-300' : 'focus:ring-indigo-300'
                }`}
              >
                <option value="" disabled>
                  Select religion
                </option>
                <option value="Muslim">Muslim</option>
                <option value="Christian">Christian</option>
                <option value="Other">Other</option>
              </select>
              {errors.religion && <p className="text-red-500 text-sm">{errors.religion}</p>}
            </div>
          </div>

          {/* Address */}
          <div>
            <label htmlFor="address" className="block text-white font-medium">
              Address
            </label>
            <textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className={`w-full mt-1 px-3 py-2 border rounded-lg focus:ring ${
                errors.address ? 'border-red-500 focus:ring-red-300' : 'focus:ring-indigo-300'
              }`}
              placeholder="Enter home address"
              rows="3"
            />
            {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
          </div>

          {/* Upload Image */}
          <div>
            <label htmlFor="studentImage" className="block text-white font-medium">
              Upload Student Image
            </label>
            <input
              type="file"
              id="studentImage"
              name="studentImage"
              accept="image/*"
              onChange={handleFileChange}
              className="w-full mt-1 px-3 py-2 border rounded-lg focus:ring focus:ring-indigo-300"
            />
            {errors.studentImage && <p className="text-red-500 text-sm">{errors.studentImage}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 focus:ring focus:ring-indigo-300"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default ApplicationForm;