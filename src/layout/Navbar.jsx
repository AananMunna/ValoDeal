import React, { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css"; // Import Bootstrap Icons

const Navbar = () => {
  const [query, setQuery] = useState(""); // Store the search query
  const [suggestions, setSuggestions] = useState([]); // Store the filtered suggestions
  const [isSearchOpen, setIsSearchOpen] = useState(false); // Track search bar visibility

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

  // Function to handle the input change in the search bar
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

  // Function to handle suggestion click
  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion); // Set the clicked suggestion as the query
    setSuggestions([]); // Clear suggestions after selection
  };

  // Toggle the search bar visibility
  const toggleSearchBar = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <nav className="bg-[#005F3A] text-[#F1E7D1] shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 relative">
        {/* Logo */}
        <div className="text-3xl font-extrabold text-[#F1E7D1]">ValoDeal</div>

        {/* Search Bar (Hidden on mobile, visible on larger screens) */}
        <div className="flex-grow mx-4 relative hidden lg:block">
          <input
            type="text"
            placeholder="Search products..."
            value={query}
            onChange={handleSearchChange} // Update query on input change
            className="w-full p-3 rounded-lg bg-[#F1E7D1] text-[#005F3A] focus:outline-none focus:ring-2 focus:ring-[#E03D2C]"
          />
          <button className="absolute right-3 top-3 text-[#005F3A]">
            <i className="bi bi-search text-xl"></i> {/* Bootstrap Icon for Search */}
          </button>

          {/* Suggestions Dropdown */}
          {suggestions.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-white shadow-lg rounded-lg z-10">
              <ul className="max-h-60 overflow-y-auto">
                {suggestions.map((suggestion, index) => (
                  <li
                    key={index}
                    className="p-2 cursor-pointer text-black hover:bg-[#E03D2C] hover:text-white"
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
        <div className="flex items-center space-x-6">
          {/* Mobile Search Icon */}
          <button
            onClick={toggleSearchBar}
            className="lg:hidden text-2xl text-[#F1E7D1] hover:text-[#E03D2C]"
          >
            <i className="bi bi-search"></i> {/* Bootstrap Icon for Search (Mobile) */}
          </button>

          {/* User Icon */}
          <button className="hover:text-[#E03D2C]">
            <i className="bi bi-person text-2xl"></i> {/* Bootstrap Icon for User */}
          </button>

          {/* Cart Icon */}
          <button className="hover:text-[#E03D2C] relative">
            <i className="bi bi-cart text-2xl"></i> {/* Bootstrap Icon for Cart */}
            <span className="absolute top-0 right-0 bg-[#E03D2C] text-white text-xs rounded-full px-1">3</span>
          </button>

          {/* Sign In Button */}
          <button className="bg-[#E03D2C] text-[#F1E7D1] hover:bg-[#c93322] px-4 py-2 rounded-lg hidden md:block">
            Sign In
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center">
          <button>
            <i className="bi bi-list text-3xl"></i> {/* Hamburger Menu Icon */}
          </button>
        </div>
      </div>

      {/* Mobile Search Bar (Appears with smooth transition) */}
      {isSearchOpen && (
        <div
          className="fixed top-0 left-0 right-0 bg-[#005F3A] text-[#F1E7D1] z-50 p-4 transition-all duration-500 ease-in-out"
          style={{
            transform: isSearchOpen ? "translateY(0)" : "translateY(-100%)",
            position: "absolute",
            top: "50px",
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
              className="w-full p-3 rounded-lg bg-[#F1E7D1] text-[#005F3A] focus:outline-none focus:ring-2 focus:ring-[#E03D2C]"
            />
            <button className="absolute right-3 top-3 text-[#005F3A]">
              <i className="bi bi-search text-xl"></i> {/* Bootstrap Icon for Search */}
            </button>
          </div>
          {/* Suggestions Dropdown for mobile */}
          {suggestions.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-white shadow-lg rounded-lg z-10">
              <ul className="max-h-60 overflow-y-auto">
                {suggestions.map((suggestion, index) => (
                  <li
                    key={index}
                    className="p-2 cursor-pointer text-black hover:bg-[#E03D2C] hover:text-white"
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
    </nav>
  );
};

export default Navbar;
