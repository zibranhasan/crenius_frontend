"use client"
import { motion } from 'framer-motion';
import Image from 'next/image';


const brands = [
  { name: 'MAS', logo: '/assets/PrevW2.jpg' },
  { name: 'Shikhun Academy', logo: '/assets/PrevW1.jpg' },
  { name: 'Fytobyte', logo: '/assets/PrevW3.jpg' },
//   { name: 'Quran Recitation', logo: '/path/to/quran-logo.png' },
//   { name: 'Monwon', logo: '/path/to/monwon-logo.png' },
//   { name: 'Zeedoot', logo: '/path/to/zeedoot-logo.png' },
//   { name: 'Proto Interior', logo: '/path/to/proto-logo.png' },
//   { name: 'Antic+', logo: '/path/to/antic-logo.png' }
];

const PrevWorkedSection = () => {
  return (
    <div className="bg-black text-white py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-4xl font-bold mb-8 font-ClashDisplay">
          We&apos;ve worked with some amazing brands
        </h2>
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {brands.map((brand, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="flex justify-center items-center p-4 bg-[#680DF5] rounded-md"
            >
              <Image height={200} width={200}  src={brand.logo} alt={brand.name} className="max-h-12" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default PrevWorkedSection;
