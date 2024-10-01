import Image from "next/image";

export default function Education() {
  const items = [
    {
      institution: "Birla Institute of Technology & Science, Pilani",
      degree: "B.E. in Electronics and Instrumentation",
      years: "2017-2021",
      cgpa: "CGPA – 8.01/10"
    }
  ];

  return (
    <section>
      <h2 className="font-inter-tight text-lg font-semibold text-gray-800 dark:text-gray-100 mb-6">
        Education
      </h2>
      <div className="">
        {items.map((item, index) => (
          <div key={index} className="p-4 rounded">
            <div className="flex justify-between">
            <h3 className="font-semibold text-gray-800 dark:text-gray-100">
              {item.institution}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">{item.years}</p>
            </div>
            
            
            <div className="flex justify-between">
              <p className="text-gray-600 dark:text-gray-400">{item.degree}</p>
              <p className="text-gray-600 dark:text-gray-400">{item.cgpa}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}