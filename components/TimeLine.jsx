import React from "react";

const TimeLine = () => {
  const data = [
{
      id: 0,
      title: "Web Developer",
      duration: "Persent - Nov 2024",
      org: "Afric Trust Tech Biometrics",
      skills: ["JavaScript", "React.js", "Node.js", "Express.js", "MongoDB"],
      class:
        "bg-green-100 text-green-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300",
    },
    {
      id: 1,
      title: "Full Stack Web Development using MEARN Internship",
      duration: "May 2024 - Nov 2023",
      org: "Information Technology Institute (ITI) - Ministry of Communications and Information Technology (MCIT)",
      skills: ["HTML 5", "CSS 3", "JWT", "Bootstrap", "TailwindCss","React.js", "Anglar.js"],
      class:
        "bg-yellow-100 text-yellow-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300",
    },
    {
      // HTML 5 - CSS 3 - Bootstrap - TailwindCss - React.js - Anglar.js - Responsive Web Design  Linux - Git - Github 
      id: 2,
      title: "Faculty of Computers and Artificial Intelligence",
      duration: "Jun 2023 - Oct 2019",
      org: "Sohag University",
      skills: ["Python", "Php", "C++", "Linux", "Git", "Github", "Wordpress"],
      class:
        "bg-pink-100 text-pink-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-pink-900 dark:text-pink-300",
    },
  ];
  return (
    <div>
      <ol className="relative border-s border-gray-200 dark:border-gray-700">
        {data.map((item) => (
          <li className="mb-10 ms-6" key={item.id}>
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
              <svg
                className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg>
            </span>
            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              {item.title}{" "}
              {item.id === 0 && (
                <span className="bg-red-500 text-[#fff] text-sm font-medium me-2 px-2.5 py-0.5 border-sky-100 rounded ms-3">
                  Latest
                </span>
              )}
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              {item.duration}
            </time>
            <p>{item.org}</p>
            <div className="flex flex-wrap mt-8">
              {item.skills.map((i, idx) => (
                <span key={idx} className={`${item.class}`}>
                  {i}
                </span>
              ))}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default TimeLine;
