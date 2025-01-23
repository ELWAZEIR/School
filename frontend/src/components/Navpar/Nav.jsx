import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // استيراد FontAwesomeIcon
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'; // استيراد الأيقونات

function Nav() {
  const { currentRole } = useSelector(state => state.user);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // حالة القائمة المنسدلة

  if (currentRole === null) {
    return (
      <nav className="fixed top-0 left-0 right-0 z-20 border-b border-gray-500 bg-[#06213F] text-white py-4">
        {/* الجزء العلوي من الشريط */}
        <div className="container mx-auto px-4 flex justify-between items-center py-2">
          {/* الشعار */}
          <div className="flex items-center space-x-2">
            <img
              src="https://res.cloudinary.com/dvqnm98ue/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1737550046/logo_k7il1i.jpg"
              alt="School Logo"
              className="w-10 h-10"
            />
            <h1 className="text-xl sm:text-2xl font-bold">
              Cairo International School
            </h1>
          </div>

          {/* أيقونة القائمة للشاشات الصغيرة */}
          <div className="sm:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
            >
              <FontAwesomeIcon
                icon={isMenuOpen ? faTimes : faBars} // تغيير الأيقونة بناءً على الحالة
                className="w-6 h-6"
              />
            </button>
          </div>

          {/* روابط التنقل الرئيسية (للشاشات الكبيرة) */}
          <ul className="hidden sm:flex space-x-4 text-lg">
            <li>
              <Link to="/" className="text-[#F9F9F9] hover:text-[#55ABDA] transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link to="contact" className="text-[#F9F9F9] hover:text-[#55ABDA] transition-colors">
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                target="planck"
                to="https://me.classera.com"
                className="text-[#F9F9F9] hover:text-[#55ABDA] transition-colors"
              >
                Classera
              </Link>
            </li>
            <li>
              <Link to="Studentlogin" className="text-[#F9F9F9] hover:text-[#55ABDA] transition-colors">
                Student Login
              </Link>
            </li>
            <li>
              <Link to="Adminlogin" className="text-[#F9F9F9] hover:text-[#55ABDA] transition-colors">
                Admin Login
              </Link>
            </li>
            <li>
              <Link to="Teacherlogin" className="text-[#F9F9F9] hover:text-[#55ABDA] transition-colors">
                Staff Login
              </Link>
            </li>
          </ul>
        </div>

        {/* القائمة المنسدلة للشاشات الصغيرة */}
        {isMenuOpen && (
          <div className="sm:hidden bg-[#06213F]">
            <ul className="flex flex-col space-y-4 p-4 text-lg">
              <li>
                <Link to="/" className="text-[#F9F9F9] hover:text-[#55ABDA] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="contact" className="text-[#F9F9F9] hover:text-[#55ABDA] transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  target="planck"
                  to="https://me.classera.com"
                  className="text-[#F9F9F9] hover:text-[#55ABDA] transition-colors"
                >
                  Classera
                </Link>
              </li>
              <li>
                <Link to="Studentlogin" className="text-[#F9F9F9] hover:text-[#55ABDA] transition-colors">
                  Student Login
                </Link>
              </li>
              <li>
                <Link to="Adminlogin" className="text-[#F9F9F9] hover:text-[#55ABDA] transition-colors">
                  Admin Login
                </Link>
              </li>
              <li>
                <Link to="Teacherlogin" className="text-[#F9F9F9] hover:text-[#55ABDA] transition-colors">
                  Staff Login
                </Link>
              </li>
              {/* الجزء السفلي من الشريط (للشاشات الصغيرة) */}
              <li>
                <Link to="activities" className="text-[#F9F9F9] hover:text-[#55ABDA] transition-colors">
                  Activities
                </Link>
              </li>
              <li>
                <Link to="application" className="text-[#F9F9F9] hover:text-[#55ABDA] transition-colors">
                  Application
                </Link>
              </li>
              <li>
                <Link to="nursery" className="text-[#F9F9F9] hover:text-[#55ABDA] transition-colors">
                  Nursery
                </Link>
              </li>
            </ul>
          </div>
        )}

        {/* الجزء السفلي من الشريط (للشاشات الكبيرة) */}
        <div className="hidden sm:flex container mx-auto px-4 justify-center items-center py-2">
          <ul className="bg-white py-2 font-bold text-[#06213F] w-[30%] rounded-lg justify-center space-x-16 flex">
            <li>
              <Link to="activities" className="hover:text-[#55ABDA] transition-colors">
                Activities
              </Link>
            </li>
            <li>
              <Link to="application" className="hover:text-[#55ABDA] transition-colors">
                Application
              </Link>
            </li>
            <li>
              <Link to="nursery" className="hover:text-[#55ABDA] transition-colors">
                Nursery
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }

  return null;
}

export default Nav;