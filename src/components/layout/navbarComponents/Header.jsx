import { useTranslation } from "react-i18next";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const Header = () => {
  const { t } = useTranslation();

  return (
    <motion.div
      className="bg-gradient-to-r from-[#0077b6] to-[#008ecc] p-3 text-center text-white text-sm md:text-base shadow-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-wrap items-center justify-center gap-4">
        <motion.span
          className="font-semibold"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {t("header.text1")}:
        </motion.span>
        <motion.a
          href="https://wa.me/8801712345678?text=Hello%20ValoDeal%2C%20I%20want%20to%20know%20more%20about%20your%20products"
          target="_blank"
          className="flex items-center gap-2 hover:underline transition duration-300"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <FaWhatsapp className="text-lg text-green-400" />
          +8801321208940
        </motion.a>
        <motion.span
          className="hidden sm:inline"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          |
        </motion.span>
        <motion.span
          className="font-semibold"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {t("header.hotline")}:
        </motion.span>
        <motion.a
          href="tel:+8801234567890"
          className="flex items-center gap-2 underline hover:text-gray-200 transition duration-300"
          whileHover={{ scale: 1.1, rotate: -5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <FaPhoneAlt className="text-lg" />
          09642-922922
        </motion.a>
      </div>
    </motion.div>
  );
};

export default Header;
