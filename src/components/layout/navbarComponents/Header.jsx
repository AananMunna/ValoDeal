import { useTranslation } from "react-i18next";

const Header = () => {
      const { t, i18n } = useTranslation();
  return (
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
  )
}

export default Header