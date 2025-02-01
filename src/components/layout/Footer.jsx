import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-4">
        {/* Ghorer Bazar Description */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">
            ShopClues: Your Trusted Source for Safe & Organic Food
          </h2>
          <p className="text-sm">
          ShopClues is a leading e-commerce platform committed to delivering safe, healthy, and organic food products across Bangladesh. Renowned for its dedication to quality, ShopClues offers a diverse range of health-focused items, including premium mustard oil, pure ghee, organic honey, dates, chia seeds, and an assortment of nuts. Each product is carefully sourced and crafted to ensure maximum health benefits, meeting the highest standards of purity and freshness.
          </p>
          <p className="text-sm mt-2">
            With a focus on convenience, ShopClues operates primarily online, bringing the goodness of nature straight to your doorstep. Whether you're seeking to elevate your wellness journey or simply enjoy natural, wholesome foods, ShopClues is your go-to destination for authentic, trustworthy products.
          </p>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-6">
          <div>
            <h3 className="font-semibold text-lg mb-2">About Us</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-[#0066c0]">About Us</a></li>
              <li><a href="#" className="hover:text-[#0066c0]">রিটার্ন পলিসি</a></li>
              <li><a href="#" className="hover:text-[#0066c0]">রিফান্ড পলিসি</a></li>
              <li><a href="#" className="hover:text-[#0066c0]">গ্রাহক সেবা</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>DBID ID : 437361334</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-6 mt-6 text-center text-sm text-gray-400">
          <p>&copy; ShopClues 2024</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
