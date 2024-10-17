// components/WhatWeDo.tsx
import { FaCheckSquare } from "react-icons/fa";

const WhatWeDo = () => {
  const services = [
    {
      id: 1,
      title: "Digital Marketing",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus.",
    },
    {
      id: 2,
      title: "Graphics Design",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus.",
    },
    {
      id: 3,
      title: "Mobile App Development",
      description: "Ut lectus arcu bibendum at varius vel pharetra vel turpis laoreet sit amet.",
    },
    {
      id: 4,
      title: "Website Development",
      description: "Ut lectus arcu bibendum at varius vel pharetra vel turpis laoreet sit amet.",
    },
  
  ];

  return (
    <div className="bg-black text-white py-16 px-10">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Our Expertise & Services</h2>
        <p className="max-w-2xl mx-auto mb-12">
          Cursus vitae congue mauris rhoncus aenean vel elit scelerisque. Mauris pellentesque pulvinar
          pellentesque habitant morbi.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12">
          {services.map((service) => (
            <div
              key={service.id}
              className="p-6 border border-gray-700 rounded-lg flex items-start justify-between bg-gray-800"
            >
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <FaCheckSquare className="text-yellow-400" />
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                </div>
                <p>{service.description}</p>
              </div>
              <div className="bg-yellow-400 text-gray-900 font-bold text-3xl p-3 rounded-lg ml-4">
                {String(service.id).padStart(2, "0")}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
