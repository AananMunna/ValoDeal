import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const productsData = [
  {
    id: 1,
    name: {
      en: "Gawa Ghee",
      bn: "গাওয়া ঘি"
    },
    price: {
       en:"Tk 900.00",
       bn: "900.00 টাকা"
      },
    imageUrl: "https://ghorerbazar.com/cdn/shop/files/ghee-500gm.jpg?v=1710231379&width=360",
  },
  {
    id: 2,
    name: {
      en: "Kashmiri Sidr Honey",
      bn: "কাশ্মীরি সিদ্র মধু"
    },
    price: {
      en:"Tk 1500.00",
      bn: "1500.00 টাকা"
     },
    imageUrl: "https://ghorerbazar.com/cdn/shop/files/sidol-honey-03.jpg?v=1731588878&width=360",
  },
  {
    id: 3,
    name: {
      en: "Khejuri Jhola Gurr",
      bn: "ঝোলা গুড়"
    },
    price: {
      en:"Tk 780.00",
      bn: "780.00 টাকা"
     },
    imageUrl: "https://ghorerbazar.com/cdn/shop/files/jholagur1kg.png?v=1734511253&width=360",
  },
  {
    id: 4,
    name: {
      en: "Gawa Ghee",
      bn: "গাওয়া ঘি"
    },
    price: {
       en:"Tk 900.00",
       bn: "900.00 টাকা"
      },
    imageUrl: "https://ghorerbazar.com/cdn/shop/files/ghee-500gm.jpg?v=1710231379&width=360",
  },
  {
    id: 5,
    name: {
      en: "Kashmiri Sidr Honey",
      bn: "কাশ্মীরি সিদ্র মধু"
    },
    price: {
      en:"Tk 1500.00",
      bn: "1500.00 টাকা"
     },
    imageUrl: "https://ghorerbazar.com/cdn/shop/files/sidol-honey-03.jpg?v=1731588878&width=360",
  },
  {
    id: 6,
    name: {
      en: "Khejuri Jhola Gurr",
      bn: "ঝোলা গুড়"
    },
    price: {
      en:"Tk 780.00",
      bn: "780.00 টাকা"
     },
    imageUrl: "https://ghorerbazar.com/cdn/shop/files/jholagur1kg.png?v=1734511253&width=360",
  },
  {
    id: 7,
    name: {
      en: "Kashmiri Sidr Honey",
      bn: "কাশ্মীরি সিদ্র মধু"
    },
    price: {
      en:"Tk 1500.00",
      bn: "1500.00 টাকা"
     },
    imageUrl: "https://ghorerbazar.com/cdn/shop/files/sidol-honey-03.jpg?v=1731588878&width=360",
  },
  {
    id: 8,
    name: {
      en: "Khejuri Jhola Gurr",
      bn: "ঝোলা গুড়"
    },
    price: {
      en:"Tk 780.00",
      bn: "780.00 টাকা"
     },
    imageUrl: "https://ghorerbazar.com/cdn/shop/files/jholagur1kg.png?v=1734511253&width=360",
  },
  {
    id: 9,
    name: {
      en: "Gawa Ghee",
      bn: "গাওয়া ঘি"
    },
    price: {
       en:"Tk 900.00",
       bn: "900.00 টাকা"
      },
    imageUrl: "https://ghorerbazar.com/cdn/shop/files/ghee-500gm.jpg?v=1710231379&width=360",
  },
  {
    id: 10,
    name: {
      en: "Kashmiri Sidr Honey",
      bn: "কাশ্মীরি সিদ্র মধু"
    },
    price: {
      en:"Tk 1500.00",
      bn: "1500.00 টাকা"
     },
    imageUrl: "https://ghorerbazar.com/cdn/shop/files/sidol-honey-03.jpg?v=1731588878&width=360",
  }
];


const ProductCard = ({ product }) => {
  const { t } = useTranslation();
  const { i18n } = useTranslation(); // Get language function from react-i18next
  const currentLang = i18n.language || "en"; // Default to English if no language is set

  return (
    <Link to='/filter' className="bg-white p-4 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
      <img
        src={product.imageUrl}
        alt={product.name[currentLang]} // Use translated name
        className="w-full h-auto object-cover rounded-md mb-4"
      />
      <h2 className="text-lg font-semibold mb-2 truncate">
        {product.name[currentLang]} {/* Use current language name */}
      </h2>
      <p className="text-md font-bold text-gray-800 mb-3">{product.price[currentLang]}</p>
      <Link to='/cart'>
        <button className="w-full bg-[#008ecc] text-white py-2 rounded-lg hover:bg-[#006fab]">
        {t('cart')}
        </button>
      </Link>
    </Link>
  );
};


const ProductPage = () => {
  const [products, setProducts] = useState(productsData);
  const { t } = useTranslation();

  return (
    <div className="container mx-auto pb-10 mt-10">
      <h1 className="text-3xl font-bold text-center mb-8">{t('allProduct')}</h1>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
