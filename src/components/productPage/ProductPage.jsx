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
    desc:{
      en:'Pure ghee is a processed food ingredient in milk. Ghee originated in Bengali cuisine thousands of years ago. Not just polao, biryani or bharta, ghee is also a favorite with hot white rice. Many jokingly say “Panta Bhate Ghee”. So Gawa Ghee has been in demand since ancient times.',
      bn:'খাঁটি গাওয়া ঘি দুধের একটি প্রক্রিয়াজাত খাদ্য উপাদান। হাজার বছর আগে বাঙালির খাবারে ঘি-এর উৎপত্তি। শুধু পোলাও, বিরিয়ানি বা ভর্তা নয়, গরম সাদা ভাতের সাথেও ঘি অনেকের প্রিয়। অনেকে মজা করে বলেন “পান্তা ভাতে ঘি”। সুতরাং প্রাচীন সময় থেকেই গাওয়া ঘি এর চাহিদা রয়েছে।',
    },
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
    desc:{
      en:'Crystallization is a natural process that does not affect the quality of honey in any way. However, due to the granular texture of crystallized honey, many people feel discomfort while consuming it. Therefore, Ghorer Bazars "Crystal Honey" is processed using advanced technology, maintaining its natural nutritional value. As a result, Ghorer Bazars "Crystal Honey" is completely free from granules.',
      bn:'ক্রিস্টাল হানি ক্রিস্টালাইজেশন একটি প্রাকৃতিক প্রক্রিয়া। এটি মধুর গুণমানকে কোনোভাবেই প্রভাবিত করে না। তবে ক্রিস্টালাইজড মধু দানাদার হওয়াতে খাওয়ার সময় অনেকেই অস্বস্তি বোধ করেন। তাই ঘরের বাজার এর “ক্রিস্টাল হানি’’ সর্বাধুনিক প্রযুক্তির ব্যবহার করে, প্রাকৃতিক পুষ্টিগুণ বজায় রেখে  স্বয়ংক্রিয়ভাবে প্রক্রিয়াজাত করা হয়। ফলে ঘরের বাজারের “ক্রিস্টাল হানি’’ সম্পূর্ন দানা বিহীন।',
    },
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
    desc:{
      en:'The process of making Khejur Gur begins from November and continues until mid-March. It starts by tying clay pots or pitchers to date palm trees after peeling the bark. A clean white cloth is wrapped over the pot to prevent birds or insects from entering. The sap is then extracted from the date palm tree and poured into a clean container for purification. Finally, under careful supervision, the sap is processed to produce high-quality Khejur Gur.',
      bn:'নভেম্বর থেকে মধ্য মার্চ পর্যন্ত, গাছে কলসি বাঁধার মাধ্যমে শুরু হয় খেজুর গুড় তৈরির হাতেখড়ি। গাছের ছাল ছিলে তাতে মাটির ছোটো হাড়ি বা কলস বাঁধা হয়। সাথে হাড়ির উপরে সাদা পরিষ্কার কাপড় মুড়ানো হয়, যাতে করে পাখি বা কীটপতঙ্গ প্রবেশ করতে না পারে। এরপর খেজুর গাছ থেকে রস নামিয়ে পরিশোধন-এর জন্য পরিষ্কার একটা পাত্রে ঢালা হয়। এরপর নিজস্ব তত্ত্বাবধায়নে তৈরি করা হয় খেজুর গুড়।',
    },
  },
  
];


const ProductCard = ({ product }) => {
  const { t } = useTranslation();
  const { i18n } = useTranslation(); // Get language function from react-i18next
  const currentLang = i18n.language || "en"; // Default to English if no language is set

  return (
<Link 
  to={`/productDetails/${product.id}`} 
  state={{ product }} // Pass the entire product object
  className="bg-white p-4 rounded-2xl shadow-md hover:shadow-2xl transition-all transform hover:scale-[1.01] hover:translate-y- duration-[500ms] ease-[cubic-bezier(0.4,0,0.2,1)] will-change-transform"
>
  <img
    src={product.imageUrl}
    alt={product.name[currentLang]}
    className="w-full h-auto object-cover rounded-md mb-4 transition-transform duration-[500ms] ease-in-out transform hover:scale-[1.05] will-change-transform"
  />
  <h2 className="text-lg font-semibold mb-2 truncate text-gray-900 transition-colors duration-[400ms] ease-in-out hover:text-[#008ecc]">
    {product.name[currentLang]}
  </h2>
  <p className="text-md font-bold text-gray-800 mb-3 transition-all duration-[400ms] ease-in-out hover:text-[#008ecc]">
    {product.price[currentLang]}
  </p>
  <button className="w-full bg-[#008ecc] text-white py-2 rounded-lg hover:bg-[#006fab] ease-in-out  active:translate-y-0.5 
    transition-all 
    duration-300 
    transform 
    hover:-translate-y-1 hover:scale-105 hover:shadow-2xl 
    focus:ring-4 focus:ring-blue-300 focus:outline-none active:scale-95">
    {t('cart.addToCart')}
  </button>
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
