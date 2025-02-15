import { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import logo from "../../assets/Daco_5715743.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import Header from "./navbarComponents/Header";
import { useCart } from '../../context/CartContext'; // Import the useCart hook

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const { cart } = useCart(); // Use the cart state from the context

  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [isOpen, setIsOpen] = useState(false);

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
    "apple",
    "smart-phon",
    "Desktop",
    "Ghee",
    "Jackfruit",
    "Keyboard",
    "Phone",
    "Orange",
    "IPhone",
    "Under",
    "Yellow",
    "T-Shirt",
    "Edge",
    "Windows",
    "Query",
    "Mango",
    "Nature",
    "Boss",
    "Vector",
    "Cow",
    "X-ray",
    "Z-Index",
    "Rose",
    "Flower",
    "Cameras",
  ];

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setQuery(value);
    setSuggestions(
      value ? products.filter((product) => product.toLowerCase().includes(value.toLowerCase())) : []
    );
  };

  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion);
    setSuggestions([]);
  };

  const toggleSearchBar = () => {
    setIsSearchOpen(!isSearchOpen);
    setIsMenuOpen(false);
  };

  const toggleSignInModal = () => {
    setIsSignInModalOpen(!isSignInModalOpen);
    setIsSearchOpen(false);
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsSearchOpen(false);
  };

  const toggleDropdown = () => setIsOpen(!isOpen);

  const changeLanguageF = (language) => {
    setSelectedLanguage(language);
    setIsOpen(false);
    i18n.changeLanguage(language === "English" ? "en" : "bn");
  };

  return (
    <>
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        {/* Top Banner */}
        <Header />

        {/* Main Navbar */}
        <div className="container mx-auto flex justify-between items-center lg:py-3 px-2">
          {/* Logo */}
          <Link to="/" className="text-3xl font-extrabold hidden lg:block ">
            <img src={logo} className="w-24 h-8 md:w-32" alt="Logo" />
          </Link>

          {/* Search Bar (Desktop) */}
          <div className="w-2/5 mx-4 relative hidden lg:block">
            <motion.div 
              className="relative rounded-full overflow-hidden shadow-md"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            > 
              <input
                type="text"
                placeholder={t("header.searchPlaceholder")}
                value={query}
                onChange={handleSearchChange}
                className="w-full p-3 pl-10 bg-gray-100 border-none focus:outline-none placeholder-gray-500"
              />
              <div className="absolute left-3 top-3 text-gray-500">
                <i className="bi bi-search"></i> 
              </div>
            </motion.div>

            {/* Suggestions Dropdown */}
            {suggestions.length > 0 && (
              <motion.div
                className="absolute top-full left-0 right-0 mt-1 bg-white shadow-md rounded-lg z-10"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <ul className="max-h-60 overflow-y-auto">
                  {suggestions.map((suggestion, index) => (
                    <motion.li
                      key={index}
                      className="p-3 cursor-pointer text-black hover:bg-gray-100 transition-colors duration-300" 
                      onClick={() => handleSuggestionClick(suggestion)}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      {suggestion}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )}
          </div>

          {/* User Actions */}
          <div className="flex items-center justify-between lg:justify-normal w-full mx-auto lg:mx-0 lg:w-auto space-x-3 md:space-x-6 bg-white/90 backdrop-blur-lg p-2 lg:p-0 rounded-full shadow-lg fixed lg:relative bottom-1 left-0 right-0 border lg:border-none">
          <Link to="/" className="text-3xl font-extrabold lg:hidden">
            <img src={logo} className=" h-7" alt="Logo" />
          </Link>
  {/* Mobile Search Icon */}
  <button
    onClick={toggleSearchBar}
    className="lg:hidden p-3 rounded-full bg-white shadow-md transition-all duration-300 hover:scale-110 hover:shadow-md active:scale-90"
    aria-label="Toggle Search Bar"
  >
    <i className="bi bi-search text-2xl text-gray-900"></i>
  </button>

  {/* User Icon */}
  <button
    onClick={toggleSignInModal}
    className="p-3 rounded-full bg-white shadow-md transition-all duration-300 hover:scale-110 hover:shadow-md active:scale-90"
    aria-label="User Account"
  >
    <i className="bi bi-person text-2xl text-gray-900"></i>
  </button>

  {/* Cart Icon */}
  <Link to="/cart">
    <button className="relative p-3 rounded-full bg-white shadow-md transition-all duration-300 hover:scale-110 hover:shadow-md active:scale-90">
      <i className="bi bi-cart text-2xl text-gray-900 transition-transform duration-300 transform group-hover:scale-110 group-hover:rotate-12"></i>
      {cart.length > 0 && (
        <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5 transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:animate-pulse">
          {cart.length}
        </span>
      )}
    </button>
  </Link>

  {/* Mobile Menu Button */}
  <button
    onClick={toggleMenu}
    className="lg:hidden p-3 rounded-full bg-white shadow-md transition-transform duration-300 transform hover:scale-110 hover:rotate-90 active:scale-90"
  >
    <i className="bi bi-list text-2xl text-gray-900"></i>
  </button>

  {/* Language Dropdown */}
  <div className="relative">
    <button
      onClick={toggleDropdown}
      className="flex flex-col lg:flex-row items-center justify-center space-x-2 p-3 rounded-full bg-white shadow-md text-[8px] md:text-sm transition-all duration-300 hover:scale-110 hover:shadow-md active:scale-90"
    >
      <span>{selectedLanguage}</span>
      <i className="bi bi-chevron-down text-xs"></i>
    </button>

    {isOpen && (
      <ul className="absolute right-0 bottom-16 lg:-bottom-24 mt-2 w-32 py-2 bg-white shadow-xl rounded-lg border border-gray-200 transition-all duration-300 ease-in-out">
        <li>
          <a
            onClick={() => changeLanguageF("English")}
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95"
          >
            English
          </a>
        </li>
        <li>
          <a
            onClick={() => changeLanguageF("বাংলা")}
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95"
          >
            বাংলা
          </a>
        </li>
      </ul>
    )}
  </div>

  {/* Sign In Button (Desktop) */}
  <button
    onClick={toggleSignInModal}
    className="hidden md:flex items-center justify-center bg-[#008ecc] text-white px-6 py-2 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg active:scale-95"
  >
    {t("header.signIn")}
  </button>
</div>

        </div>

        {/* Mobile Search Bar */}
        <AnimatePresence>
          {isSearchOpen && (
            <motion.div
              initial={{ top: "-100%", opacity: 0 }}
              animate={{ top: 0, opacity: 1 }}
              exit={{ top: "-100%", opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50 p-4"
            >
              <div className="relative flex items-center bg-gray-100 rounded-full p-2 shadow-sm">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={query}
                  onChange={handleSearchChange}
                  className="w-full bg-transparent px-4 py-2 rounded-full text-black focus:outline-none focus:ring-2 focus:ring-[#008ecc] placeholder-gray-500 placeholder:italic"
                />
                <button
                  onClick={toggleSearchBar}
                  className="text-white bg-[#008ecc] p-2 rounded-full ml-2 hover:bg-[#0077b3] transition-colors duration-300"
                >
                  <i className="bi bi-x text-2xl"></i>
                </button>
              </div>

              {/* Search Suggestions */}
              <AnimatePresence>
                {query && suggestions.length > 0 && (
                  <motion.ul
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="mt-2 bg-white border rounded-lg shadow-md overflow-hidden"
                  >
                    {suggestions.map((suggestion, index) => (
                      <motion.li
                        key={index}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="p-3 hover:bg-gray-100 cursor-pointer transition-all duration-200"
                        onClick={() => handleSearchChange({ target: { value: suggestion } })}
                      >
                        {suggestion}
                      </motion.li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <AnimatePresence>
            {isMenuOpen && (
              <>
                {/* Overlay with fade-in & fade-out */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, transition: { duration: 0.3 } }}
                  transition={{ duration: 0.3 }}
                  className="fixed inset-0 bg-black bg-opacity-40 z-40"
                  onClick={toggleMenu}
                />

                {/* Smooth Slide-in & Slide-out Menu */}
                <motion.div
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%", transition: { duration: 0.5, ease: "easeInOut" } }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="fixed top-0 right-0 w-80 h-full bg-white text-black z-50 shadow-xl overflow-y-auto"
                >
                  <div className="flex justify-end p-4">
                    <motion.button
                      onClick={toggleMenu}
                      whileHover={{ rotate: 90 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-2xl text-gray-600 hover:text-red-500 focus:outline-none"
                    >
                      <i className="bi bi-x text-4xl"></i>
                    </motion.button>
                  </div>

                  <nav className="px-6 py-4 space-y-6">
                    <h2 className="text-xl font-semibold text-gray-700">Categories</h2>
                    <ul className="space-y-4 text-lg font-medium">
                      <motion.li
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-3 rounded-lg bg-gray-100 hover:bg-blue-600 hover:text-white transition-colors duration-300 shadow-md"
                      >
                        <a href="/pants">Pants</a>
                      </motion.li>
                    </ul>

                    <h2 className="text-xl font-semibold text-gray-700 mt-8">Other Links</h2>
                    <ul className="space-y-4 text-lg font-medium">
                      <motion.li
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-3 rounded-lg bg-gray-100 hover:bg-green-500 hover:text-white transition-colors duration-300 shadow-md"
                      >
                        <a href="/about">About Us</a>
                      </motion.li>
                      <motion.li
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-3 rounded-lg bg-gray-100 hover:bg-green-500 hover:text-white transition-colors duration-300 shadow-md"
                      >
                        <a href="/contact">Contact</a>
                      </motion.li>
                    </ul>
                  </nav>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        )}

        {/* Sign In Modal */}
        {isSignInModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            {/* Modal Container with Zoom-in and Fade-in effect */}
            <motion.div
              className="bg-white p-6 rounded-lg w-96"
              initial={{ opacity: 0, scale: 0.95 }} // Initial state: faded and zoomed out
              animate={{ opacity: 1, scale: 1 }}    // Final state: fully visible and scaled
              exit={{ opacity: 0, scale: 0.95 }}    // Exit state: faded and zoomed out
              transition={{ duration: 0.5, ease: "easeOut" }} // Smooth transition
            >
              <div className="relative">
                <button
                  onClick={toggleSignInModal}
                  className="absolute -top-4 -right-3 text-gray-600 hover:text-gray-900"
                >
                  <i className="bi bi-x-lg text-2xl"></i>
                </button>
              </div>
              <h2 className="text-2xl font-semibold mb-4 text-center">{t("header.signIn")}</h2>
              <form onSubmit={(e)=>e.preventDefault()}>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                    {t("header.email")}
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder={t("header.emailPlaceholder")}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                    {t("header.password")}
                  </label>
                  <input
                    type="password"
                    id="password"
                    placeholder={t("header.passwordPlaceholder")}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <button
                  className="w-full bg-[#008ecc] text-white p-3 rounded-lg hover:bg-[#008fccb7]"
                >
                  {t("header.signIn")}
                </button>
              </form>
              <button className="w-full bg-[#4285F4] text-white p-3 rounded-lg mt-4 flex items-center justify-center">
                <i className="bi bi-google text-white text-lg mr-2"></i>
                {t("header.google")}
              </button>
            </motion.div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
