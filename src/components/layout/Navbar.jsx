import  { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import logo from '../../assets/Daco_5715743.png'
import { Link } from "react-router-dom";

import { useTranslation } from 'react-i18next';

const Navbar = () => {

  const { t } = useTranslation();

  const [query, setQuery] = useState(""); // Store the search query
  const [suggestions, setSuggestions] = useState([]); // Store the filtered suggestions
  const [isSearchOpen, setIsSearchOpen] = useState(false); // Track search bar visibility
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false); // Track sign-in modal visibility
  const [isUserModalOpen, setIsUserModalOpen] = useState(false); // Track user modal visibility
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Track sidebar visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Track mobile menu visibility

  // Sample list of products (this can be dynamic or fetched from an API)
  const products = [
    "Laptop",
    "Smartphone",
    "Headphones",
    "Shoes",
    "T-shirts",
    "Watches",
    "Chairs",
    "Table",
    "Books",
    "Cameras"
  ];

  // Handle input change for the search bar
  const handleSearchChange = (event) => {
    const value = event.target.value;
    setQuery(value);

    // Filter suggestions based on the query
    if (value) {
      const filteredSuggestions = products.filter((product) =>
        product.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]); // Clear suggestions if the query is empty
    }
  };

  // Handle suggestion click
  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion); // Set the clicked suggestion as the query
    setSuggestions([]); // Clear suggestions after selection
  };

  // Toggle the search bar visibility
  const toggleSearchBar = () => {
    setIsSearchOpen(!isSearchOpen);
    // Close other modals when the search bar is toggled
    setIsSignInModalOpen(false);
    setIsUserModalOpen(false);
    setIsSidebarOpen(false);
    setIsMenuOpen(false);
  };

  // Toggle the sign-in modal visibility
  const toggleSignInModal = () => {
    setIsSignInModalOpen(!isSignInModalOpen);
    // Close other modals when the sign-in modal is toggled
    setIsSearchOpen(false);
    setIsUserModalOpen(false);
    setIsSidebarOpen(false);
    setIsMenuOpen(false);
  };

  // Toggle the mobile menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Close other modals when the mobile menu is toggled
    setIsSearchOpen(false);
    setIsSignInModalOpen(false);
    setIsUserModalOpen(false);
    setIsSidebarOpen(false);
  };


  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const changeLanguageF = (language) => {
    setSelectedLanguage(language);
    setIsOpen(false); // Close the dropdown after selection
    // You can add language change logic here, like setting the app's language
    changeLanguage()

    if (language == 'English') {
      changeLanguage('en')
    }else{
      changeLanguage('bn')
    }
    
  };
  const { i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <>
    <nav className="bg-[#fff] text-[#000] shadow-sm sticky top-0 z-50">
      <div className="bg-[#008ecc] p-2 text-center text-white text-xs md:text-base">
      {t("header.text1")}:  
      <a href="https://wa.me/8801712345678?text=Hello%20ValoDeal%2C%20I%20want%20to%20know%20more%20about%20your%20products" target="_blank" className="mx-2">
      +8801321208940
      </a>
       | {t('header.hotline')}:  
      <a href="tel:+8801234567890" className=" underline ml-2">
      09642-922922
      </a>
      </div>
      <div className="container mx-auto flex justify-between items-center py-4 px-6 relative">
        {/* Logo */}
        <div className="text-3xl font-extrabold text-[#F1E7D1]">
            <Link to='/'>
            <img src={logo} className="w-28 mr-5" alt="" />
            </Link>
            </div>
        {/* Search Bar (Hidden on mobile, visible on larger screens) */}
        <div className="w-2/5 mx-4 relative hidden lg:block">
          <input
            type="text"
            placeholder={t('header.searchPlaceholder')}
            value={query}
            onChange={handleSearchChange}
            className="w-full p-3 rounded-lg bg-[] border border-[#008ecc] text-[#000] focus:outline-none focus:ring-2 focus:ring-[#008ecc]"
          />
          <button className="absolute right-3 top-3 text-[#000]">
            <i className="bi bi-search text-xl"></i>
          </button>

          {/* Suggestions Dropdown */}
          {suggestions.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-white shadow-lg rounded-lg z-10">
              <ul className="max-h-60 overflow-y-auto">
                {suggestions.map((suggestion, index) => (
                  <li
                    key={index}
                    className="p-2 cursor-pointer text-black hover:bg-[#008ecc] hover:text-white"
                    onClick={() => handleSuggestionClick(suggestion)}
                  >
                    {suggestion}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* User Actions and Search Icon (Visible on mobile) */}
        <div className="flex items-center space-x-3">
          {/* Mobile Search Icon */}
          <button
            onClick={toggleSearchBar}
            className="lg:hidden text-2xl text-[#000] hover:text-[#008ecc]"
          >
            <i className="bi bi-search"></i>
          </button>

          {/* User Icon */}
          <button onClick={toggleSignInModal} className="hover:text-[#008ecc] hidden">
            <i className="bi bi-person text-2xl"></i>
          </button>

          {/* Cart Icon */}
          <Link to='/cart'>
          <button className="hover:text-[#008ecc] relative">
            <i className="bi bi-cart text-2xl"></i>
            <span className="absolute top-0 right-0 bg-[#008ecc] text-white text-xs rounded-full px-1">3</span>
          </button>
          </Link>
          {/* language select option */}
          <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        className="border rounded px-1 py-1 text-xs w-16 md:w-28 h-7 justify-center items-center mt-1 flex md:btn bg-transparent text-gray-700 hover:text-black focus:outline-none"
      >
        <span>{selectedLanguage}</span>
        <i className="bi bi-chevron-down"></i>
      </button>

      {isOpen && (
        <ul
          className="absolute right-0 mt-2 w-32 py-2 bg-white shadow-lg rounded-lg border border-gray-300"
        >
          <li>
            <a
              
              onClick={() => changeLanguageF('English')}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
            >
              English
            </a>
          </li>
          <li>
            <a
              onClick={() => changeLanguageF('বাংলা')}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
            >
              বাংলা
            </a>
          </li>
        </ul>
      )}
    </div>

          {/* Sign In Button */}
          <button
            onClick={toggleSignInModal}
            className="bg-[#008ecc] text-[#fff] hover:bg-[#008ecc] px-4 py-2 rounded-lg hidden md:block btn"
          >
            {t('header.signIn')}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center">
          <button onClick={toggleMenu}>
            <i className="bi bi-list text-3xl"></i>
          </button>
        </div>
      </div>

      {/* Mobile Search Bar */}
      {isSearchOpen && (
        <div
          className="fixed top-0 left-0 right-0 bg-[#fff] shadow-md text-[#000] z-50 p-4 transition-all duration-500 ease-in-out"
          style={{
            transform: isSearchOpen ? "translateY(0)" : "translateY(-100%)",
            position: "absolute",
            top: "60px",
            left: "0",
            right: "0",
            zIndex: 50,
            width: "100%",
            paddingTop: "20px"
          }}
        >
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              value={query}
              onChange={handleSearchChange}
              className="w-full p-3 rounded-lg bg-[#ddd] text-[#000] focus:outline-none focus:ring-2 focus:ring-[#008ecc]"
            />
            <button className="absolute right-14 top-3 text-[#000]">
              <i className="bi bi-search text-xl"></i>
            </button>
            <button
              className="absolute right-0 text-[#fff]"
              onClick={toggleSearchBar}
            >
              <i className="bi bi-x text-4xl absolute top-0 right-0 bg-[#008ecc] pb-2 rounded-r-lg"></i>
            </button>
          </div>
          {/* Suggestions Dropdown for mobile */}
          {suggestions.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-white shadow-lg rounded-lg z-10">
              <ul className="max-h-60 overflow-y-auto">
                {suggestions.map((suggestion, index) => (
                  <li
                    key={index}
                    className="p-2 cursor-pointer text-black hover:bg-[#008ecc] hover:text-white"
                    onClick={() => handleSuggestionClick(suggestion)}
                  >
                    {suggestion}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {/* Sign In Modal */}
      {isSignInModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-96 transform transition-transform duration-500 ease-in-out"
            style={{ transform: isSignInModalOpen ? "translateY(0)" : "translateY(-100%)" }}
          >
            {/* Close Modal Icon */}
            <button
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
              onClick={toggleSignInModal}
            >
              <i className="bi bi-x-lg text-2xl"></i>
            </button>
            <h2 className="text-2xl font-semibold mb-4 text-center ">Sign In</h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#008ecc] text-white p-3 rounded-lg hover:bg-[#008fccb7]"
              >
                Sign In
              </button>
            </form>

            {/* Google Sign In Button */}
            <button
              className="w-full bg-[#4285F4] text-white p-3 rounded-lg mt-4 flex items-center justify-center"
            >
              <i className="bi bi-google text-white text-lg mr-2"></i>
              Continue with Google
            </button>
          </div>
        </div>
      )}

      {/* User Modal */}
      {isUserModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-96">
            <button
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
            >
              <i className="bi bi-x-lg text-2xl"></i>
            </button>
            <h2 className="text-2xl font-semibold mb-4 text-center">User Profile</h2>
            {/* User Info (Placeholder) */}
            <p className="text-lg">Name: John Doe</p>
            <p className="text-lg">Email: johndoe@example.com</p>
            <button
              className="w-full bg-[#E03D2C] text-white p-3 rounded-lg mt-4 hover:bg-[#c93322]"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Sidebar for Cart */}
      {isSidebarOpen && (
        <div
          className="fixed top-0 right-0 bg-[#fff] w-64 h-full z-50 shadow-lg transform transition-transform duration-300"
          style={{
            transform: isSidebarOpen ? "translateX(0)" : "translateX(100%)"
          }}
        >
          <div className="flex justify-end p-4">
            <button className="text-xl">
              <i className="bi bi-x"></i>
            </button>
          </div>
          <div className="p-4">
            <h2 className="text-2xl font-semibold">Cart</h2>
            {/* Add Cart items here */}
            <ul>
              <li className="py-2">Product 1</li>
              <li className="py-2">Product 2</li>
              <li className="py-2">Product 3</li>
            </ul>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className="fixed top-0 right-0 w-64 h-full bg-[#fff] text-[#000] z-50 shadow-lg transform transition-transform duration-300"
          style={{
            transform: isMenuOpen ? "translateX(0)" : "translateX(100%)"
          }}
        >
          <div className="flex justify-end p-4">
            <button onClick={toggleMenu} className="text-xl">
              <i className="bi bi-x"></i>
            </button>
          </div>
          <ul className="px-4 py-4">
            <li className="p-2 text-xl hover:bg-[#008ecc] hover:text-white">
              <a href="/">Home</a>
            </li>
            <li className="p-2 text-xl hover:bg-[#008ecc] hover:text-white">
              <a href="/products">Products</a>
            </li>
            <li className="p-2 text-xl hover:bg-[#008ecc] hover:text-white">
              <a href="/about">About</a>
            </li>
            <li className="p-2 text-xl hover:bg-[#008ecc] hover:text-white">
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </nav>
    </>
  );
};

export default Navbar;
