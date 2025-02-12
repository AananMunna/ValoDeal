import { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import logo from "../../assets/Daco_5715743.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t, i18n } = useTranslation();

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
        <div className="bg-[#008ecc] p-2 text-center text-white text-xs md:text-base">
          {t("header.text1")}:{" "}
          <a
            href="https://wa.me/8801712345678?text=Hello%20ValoDeal%2C%20I%20want%20to%20know%20more%20about%20your%20products"
            target="_blank"
            className="mx-2 hover:underline"
          >
            +8801321208940
          </a>{" "}
          | {t("header.hotline")}:{" "}
          <a href="tel:+8801234567890" className="underline ml-2 hover:text-gray-200">
            09642-922922
          </a>
        </div>

        {/* Main Navbar */}
        <div className="container mx-auto flex justify-between items-center py-4 px-1">
          {/* Logo */}
          <Link to="/" className="text-3xl font-extrabold">
            <img src={logo} className="w-24 h-8 md:w-32" alt="Logo" />
          </Link>

          {/* Search Bar (Desktop) */}
          <div className="w-2/5 mx-4 relative hidden lg:block">
            <input
              type="text"
              placeholder={t("header.searchPlaceholder")}
              value={query}
              onChange={handleSearchChange}
              className="w-full p-3 rounded-full bg-gray-100 border border-transparent focus:border-[#008ecc] focus:ring-2 focus:ring-[#008ecc] transition-all duration-300 ease-in-out placeholder-gray-500 placeholder:italic"
            />
            <button className="absolute right-3 top-3 text-gray-600 hover:text-[#008ecc]">
              <i className="bi bi-search text-xl"></i>
            </button>

            {/* Suggestions Dropdown */}
            {suggestions.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-white shadow-lg rounded-lg z-10">
                <ul className="max-h-60 overflow-y-auto">
                  {suggestions.map((suggestion, index) => (
                    <li
                      key={index}
                      className="p-3 cursor-pointer text-black hover:bg-[#008ecc] hover:text-white transition-colors duration-300"
                      onClick={() => handleSuggestionClick(suggestion)}
                    >
                      {suggestion}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* User Actions */}
          <div className="flex items-center space-x-2 md:space-x-6">
            {/* Mobile Search Icon */}
            <button
              onClick={toggleSearchBar}
              className="lg:hidden text-2xl text-black hover:text-[#008ecc] transition-all duration-300 p-2 rounded-full hover:bg-gray-100 active:scale-95"
              aria-label="Toggle Search Bar"
            >
              <i className="bi bi-search"></i>
            </button>

            {/* User Icon */}
            <button
              onClick={toggleSignInModal}
              className="text-2xl text-gray-800 hover:text-[#008ecc] transition-all duration-300 p-2 rounded-full hover:bg-gray-100 active:scale-95"
              aria-label="User Account"
            >
              <i className="bi bi-person"></i>
            </button>

            {/* Cart Icon */}
            <Link to="/cart">
              <button className="relative p-2 group transition-all duration-300 active:scale-95">
                <i className="bi bi-cart text-2xl text-gray-800 group-hover:text-[#008ecc] transition-transform duration-300 transform group-hover:scale-110 group-hover:rotate-12"></i>
                <span className="absolute top-0 right-0 bg-[#008ecc] text-white text-xs rounded-full px-1.5 py-0.5 transform transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:animate-pulse">
                  3
                </span>
              </button>
            </Link>

            {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-3xl text-gray-800 hover:text-[#008ecc] transition-transform duration-300 transform hover:rotate-90"
          >
            <i className="bi bi-list"></i>
          </button>

            {/* Language Dropdown */}
            <div className="relative inline-block text-left">
              <button
                onClick={toggleDropdown}
                className="flex items-center justify-center space-x-2 text-xs md:text-sm px-2 py-1 md:w-28 md:h-10 bg-white border border-gray-300 text-gray-700 hover:text-black hover:bg-gray-50 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#008ecc] focus:ring-opacity-50 active:scale-95 flex-col text-center"
              >
                <span>{selectedLanguage}</span>
                <i className="bi bi-chevron-down text-xs"></i>
              </button>

              {isOpen && (
                <ul className="absolute right-0 mt-2 w-32 py-2 bg-white shadow-lg rounded-lg border border-gray-300 transform transition-all duration-300 ease-in-out">
                  <li>
                    <a
                      onClick={() => changeLanguageF("English")}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 focus:outline-none active:scale-95"
                    >
                      English
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => changeLanguageF("বাংলা")}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 focus:outline-none active:scale-95"
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
              className="hidden md:flex items-center justify-center bg-[#008ecc] text-white px-6 py-2 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#008ecc] focus:ring-opacity-50 active:scale-95"
            >
              {t("header.signIn")}
            </button>
          </div>

          
        </div>

        {/* Mobile Search Bar */}
        {isSearchOpen && (
          <div className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50 p-4 transition-all duration-500 ease-in-out">
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
          </div>
        )}

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="fixed top-0 right-0 w-80 h-full bg-white text-black z-50 shadow-xl transform transition-transform duration-500 ease-in-out overflow-y-auto">
            <div className="flex justify-end p-4">
              <button
                onClick={toggleMenu}
                className="text-2xl text-gray-600 hover:text-red-500 focus:outline-none transition-transform duration-300 transform hover:rotate-90"
              >
                <i className="bi bi-x text-4xl"></i>
              </button>
            </div>
            <nav className="px-6 py-4 space-y-6">
              <h2 className="text-xl font-semibold text-gray-700">Categories</h2>
              <ul className="space-y-4 text-lg font-medium">
                <li className="p-3 rounded-lg bg-gray-100 hover:bg-blue-600 hover:text-white transition-colors duration-300 shadow-md">
                  <a href="/pants">Pants</a>
                </li>
              </ul>
              <h2 className="text-xl font-semibold text-gray-700 mt-8">Other Links</h2>
              <ul className="space-y-4 text-lg font-medium">
                <li className="p-3 rounded-lg bg-gray-100 hover:bg-green-500 hover:text-white transition-colors duration-300 shadow-md">
                  <a href="/about">About Us</a>
                </li>
                <li className="p-3 rounded-lg bg-gray-100 hover:bg-green-500 hover:text-white transition-colors duration-300 shadow-md">
                  <a href="/contact">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
        )}

        {/* Sign In Modal */}
        {isSignInModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg w-96 transform transition-all duration-500 ease-in-out">
              <button
                onClick={toggleSignInModal}
                className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
              >
                <i className="bi bi-x-lg text-2xl"></i>
              </button>
              <h2 className="text-2xl font-semibold mb-4 text-center">{t("header.signIn")}</h2>
              <form>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                    {t("header.email")}
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder={t("header.emailPlaceholder")}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#008ecc] text-white p-3 rounded-lg hover:bg-[#008fccb7]"
                >
                  {t("header.signIn")}
                </button>
              </form>
              <button className="w-full bg-[#4285F4] text-white p-3 rounded-lg mt-4 flex items-center justify-center">
                <i className="bi bi-google text-white text-lg mr-2"></i>
                {t("header.google")}
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;