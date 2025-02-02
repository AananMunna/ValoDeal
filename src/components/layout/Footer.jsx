import React from "react";
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-4">
        {/* Ghorer Bazar Description */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">
            {t('footer.title')} {/* Translated title */}
          </h2>
          <p className="text-sm">
            {t('footer.description1')} {/* Translated description part 1 */}
          </p>
          <p className="text-sm mt-2">
            {t('footer.description2')} {/* Translated description part 2 */}
          </p>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-6">
          <div>
            <h3 className="font-semibold text-lg mb-2">{t('footer.aboutUs')}</h3> {/* Translated "About Us" */}
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-[#0066c0]">{t('footer.aboutUsLink')}</a></li> {/* Translated "About Us" link */}
              <li><a href="#" className="hover:text-[#0066c0]">{t('footer.returnPolicy')}</a></li> {/* Translated "Return Policy" */}
              <li><a href="#" className="hover:text-[#0066c0]">{t('footer.refundPolicy')}</a></li> {/* Translated "Refund Policy" */}
              <li><a href="#" className="hover:text-[#0066c0]">{t('footer.customerService')}</a></li> {/* Translated "Customer Service" */}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">{t('footer.contact')}</h3> {/* Translated "Contact" */}
            <ul className="space-y-2 text-sm">
              <li>DBID ID : 437361334</li> {/* DBID ID likely doesn't need translation */}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-6 mt-6 text-center text-sm text-gray-400">
          <p>&copy; ShopClues 2024</p> {/* Copyright likely doesn't need translation */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;