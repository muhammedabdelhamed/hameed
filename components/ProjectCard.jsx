import Image from "next/image";
import Link from "next/link";

// import aizen from "@/public/work/aizen.jpg";
// import kamui from "@/public/work/kamui.jpg";
// import pokedex from "@/public/work/pokedex.jpg";
// import portfolio from "@/public/work/portfolio.jpg";
// import cryptohunter from "@/public/work/crypto-hunter.jpg";
// import redeye from "@/public/work/red-eye.jpg";
// import evo from "@/public/work/evo.jpg";
// import notion from "@/public/work/notion.jpg";
// import nike from "@/public/work/nike.jpg";

import aizen from "@/public/work/images/ebdaa.png";
import kamui from "@/public/work/images/icejcom.png";
import pokedex from "@/public/work/images/TepTac Services.png";
import portfolio from "@/public/work/images/FrontEndReactJS.png";
import cryptohunter from "@/public/work/images/walmart-dashbord-using-angular-js-vercel.png";
import redeye from "@/public/work/red-eye.jpg";
import evo from "@/public/work/images/uberStore.png";
import notion from "@/public/work/images/admin-dashboard.png";
import nike from "@/public/work/images/MearnStackWalmart.png";
const ProjectCard = () => {
  const data = [
    {
      id: 1,
      image: aizen,
      title: "Ebdaa",
      description: "Ebdaa for Interior Designs Elementor Pro Builder",
      link: "https://ebdaa.io/",
      target: "_self",
    },
    {
      id: 2,
      image: kamui,
      title: "icejcom",
      description: "ICEJCOM Communication Agency Elementor Pro Builder",
      link: "https://icejcom.com/",
      target: "_self",
    },
    {
      id: 3,
      image: pokedex,
      title: "TepTac Services",
      description: "TepTac Services Communication Agency Elementor Pro Builder",
      link: "https://teptac.com/",
      target: "_self",
    },
    {
      id: 4,
      image: evo,
      title: "uberStore",
      description: "uberStore",
      link: "#",
      target: "_blank",
    },
    {
      id: 5,
      image: nike,
      title: "Walmart Clone",
      description: "Mearn Stack Walmart Clone",
      link: "https://graduation-project-walmart-clone.vercel.app/",
      target: "_blank",
    },
    {
      id: 6,
      image: notion,
      title: "Grand Caffe",
      description: "System Front end development.",
      link: "https://grand-caffe.vercel.app/",
      target: "_blank",
    },
    {
      id: 7,
      image: portfolio,
      title: "Moviex",
      description: "ReactJs Movies Website Front end Development",
      link: "https://movix-clone-three.vercel.app/",
      target: "",
    },
    {
      id: 8,
      image: cryptohunter,
      title: "Walmart Dashbord",
      description: " Using Angular.js",
      link: "https://walmart-dashbord-using-angular-js.vercel.app/login",
      target: "_self",
    },

  ];

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
      {data.map((project) => {
        return (
          <div
            className="rounded-lg mb-12 flex flex-col items-center"
            key={project.id}
          >
            <Link
              href={project.link}
              target={project.target}
              onClick={() => {
                project.title === "Portfolio"
                  ? alert("You are already on this site! 🤩")
                  : project.title === "Pokedex"
                  ? alert(
                      "Ash Ketchum asked you to open in desktop browser.. 🚀"
                    )
                  : "";
              }}
            >
              <Image
                loading="lazy"
                src={project.image}
                alt={project.title}
                width="300"
                className="rounded-lg drop-shadow-2xl hover:scale-110"
              />
            </Link>
            <div className="flex flex-col items-center">
              <h1 className="font-semibold text-[1.5rem] mt-3 text-gray-700 dark:text-white">
                {project.title}
              </h1>
              <p className="max-w-[90%] text-gray-400 font-light text-center text-sm">
                {project.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectCard;
