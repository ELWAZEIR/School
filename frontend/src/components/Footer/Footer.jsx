import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom"; // تأكد من استيراد Link إذا كنت تستخدم React Router

const Footer = () => {
  const { currentRole } = useSelector((state) => state.user);

  if (currentRole === null){
    return (
      <footer className="border-t border-gray-600 bg-[#06213F] text-white py-12">
        <div className="container mx-auto px-4">
          {/* Grid Layout for Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Contact Information */}
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <p className="mb-2">Cairo Language Schools</p>
              <p className="mb-2">Nasr City , Cairo , Egyp</p>
              <p className="mb-2">Postcode/Zip</p>
              <p className="mb-2">Phone: +202 24721556</p>
              <p className="mb-2">
                Email:{" "}
                <a
                  href="mailto:info@cairoschools.edu.eg"
                  className="text-[#55ABDA] hover:underline"
                >
                  info@cairoschools.edu.eg
                </a>
              </p>
            </div>

            {/* Working Hours */}
            <div>
              <h3 className="text-xl font-bold mb-4">Working Hours</h3>
              <p className="mb-2">Sunday – Thursday</p>
              <p className="mb-2">8:00 AM – 2:00 PM</p>
            </div>

            {/* Social Media Links */}
            <div>
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-6">
                <Link
                  target="planck"
                  to="https://www.youtube.com/channel/UCmh-K_dbUv9qZkCboG4DN2w"
                  className="text-[#55ABDA] hover:text-[#3B8DBF] transition-colors"
                >
                  Youtube
                </Link>
                <Link
                  target="planck"
                  to="https://www.facebook.com/people/Cairo-Language-Schools/100085882050564/?mibextid=ZbWKwL"
                  className="text-[#55ABDA] hover:text-[#3B8DBF] transition-colors"
                >
                  Facebook
                </Link>
                <Link
                  target="planck"
                  to="#"
                  className="text-[#55ABDA] hover:text-[#3B8DBF] transition-colors"
                >
                  LinkedIn
                </Link>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-[#55ABDA] pt-8 text-center">
            <p>
              &copy; {new Date().getFullYear()} Cairo Language Schools. All
              rights reserved.
            </p>
          </div>
        </div>
      </footer>
    )}

    return""
};

export default Footer;
