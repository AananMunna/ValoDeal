import React from "react";
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Social media icons

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        {/* Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* Ghorer Bazar Description */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-4">
              {t('footer.title')} {/* Translated title */}
            </h2>
            <p className="text-sm text-gray-300">
              {t('footer.description1')} {/* Translated description part 1 */}
            </p>
            <p className="text-sm text-gray-300 mt-2">
              {t('footer.description2')} {/* Translated description part 2 */}
            </p>
          </div>

          {/* About Us Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{t('footer.aboutUs')}</h3> {/* Translated "About Us" */}
            <ul className="space-y-3">
              <li>
                <Link to="about" className="text-gray-300 hover:text-[#0066c0] transition-colors duration-300">
                  {t('footer.aboutUsLink')} {/* Translated "About Us" link */}
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#0066c0] transition-colors duration-300">
                  {t('footer.returnPolicy')} {/* Translated "Return Policy" */}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#0066c0] transition-colors duration-300">
                  {t('footer.refundPolicy')} {/* Translated "Refund Policy" */}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#0066c0] transition-colors duration-300">
                  {t('footer.customerService')} {/* Translated "Customer Service" */}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{t('footer.contact')}</h3> {/* Translated "Contact" */}
            <ul className="space-y-3 text-gray-300">
              <li>DBID ID : 437361334</li> {/* DBID ID likely doesn't need translation */}
              <li>Email: support@ghorerbazar.com</li>
              <li>Phone: +880 1234 567890</li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{t('footer.followUs')}</h3> {/* Translated "Follow Us" */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:text-[#0066c0] transition-colors duration-300"
                aria-label="Facebook"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-[#0066c0] transition-colors duration-300"
                aria-label="Twitter"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-[#0066c0] transition-colors duration-300"
                aria-label="Instagram"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-[#0066c0] transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-700 pt-6 mt-6 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} ShopClues. {t('footer.allRightsReserved')}</p> {/* Translated "All Rights Reserved" */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;