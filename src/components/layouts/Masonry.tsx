import Card from "../../components/base/Card";

import Art from "/@assets/art.webp";
import TBS from "@assets/bs.webp";
import EMS from "@assets/ems.webp";
import TBSM from "@assets/TBS.webp";
import SM from "@assets/sm.webp";
import CB from "@assets/cb.webp";
import TB from "@assets/tb.webp";
import FL from "@assets/fl.webp";
import HM from "@assets/hm.webp";
import MP from "@assets/mp.webp";
import DT from "@assets/dt.webp";
import TM from "@assets/tm.webp";

const Masonry = ({ ...props }) => {
  const cards = [
    {
      projectName: "The Art",
      projectDesc:
        "A digital gallery app concept focusing on European art, enhancing exploration and engagement with immersive virtual tours and detailed insights into historical and contemporary pieces.",
      projectImg: Art,
      projectBuiltWith: ["Vue.js", "Nuxt.js", "GSAP"],
      projectUrl: "https://the-art.vercel.app/",
    },
    {
      projectName: "City of Brantford",
      projectDesc:
        "Welcome to Explore Brantford, my personal project dedicated to showcasing the city's best food, attractions, and more! Explore Brantford's diverse offerings and uncover its hidden gems with us.",
      projectImg: CB,
      projectBuiltWith: ["HTML", "CSS"],
      projectUrl: "https://hari-init.github.io/COB/",
    },
    {
      projectName: "The Bean Store",
      projectDesc:
        "A concept for a coffee shop app that revolutionizes the coffee experience by enabling easy ordering and instant customer feedback integration.",
      projectImg: TBS,
      projectBuiltWith: ["JavaScript", "HTML", "CSS"],
      projectUrl: "https://hari-init.github.io/TheBeanStore/",
    },
    {
      projectName: "EMS - MERN",
      projectDesc:
        "Employee Management System (EMS) that streamlines employee data management",
      projectImg: EMS,
      projectBuiltWith: [
        "React",
        "GraphQL",
        "Material UI",
        "MongoDB",
        "Express",
      ],
      projectUrl: "",
    },
    {
      projectName: "The Bean Store - Mobile",
      projectDesc:
        "A concept for a coffee shop app that revolutionizes the coffee experience by enabling easy ordering and instant customer feedback integration.",
      projectImg: TBSM,
      imageStyle: { width: "100%", height: "200px", objectFit: "contain" },
      projectBuiltWith: ["Android", "Flutter"],
      projectUrl: "",
    },
    {
      projectName: "Stock Mate",
      projectDesc:
        "A stock inventory app concept streamlined for real-time tracking and management, offering intuitive interfaces for seamless stock adjustments, data analytics, and predictive ordering to optimize inventory levels and business efficiency.",
      projectImg: SM,
      projectBuiltWith: ["JavaScript", "HTML", "CSS"],
      projectUrl: "https://stock-mate-ecru.vercel.app/",
    },
    {
      projectName: "The Bakery",
      projectDesc:
        "Discover a variety of bakeries and their delightful treats on our bakery website. Explore fresh pastries, bread, and more!.",
      projectImg: TB,
      projectBuiltWith: ["HTML", "CSS"],
      projectUrl: "https://hari-init.github.io/TheBakery/",
    },
    {
      projectName: "The Flowers",
      projectDesc:
        "Discover the elegance of flowers through our beautifully minimalistic website.",
      projectImg: FL,
      projectBuiltWith: ["HTML", "CSS"],
      projectUrl: "https://hari-init.github.io/Flowers/",
    },
    {
      projectName: "The Hang Man",
      projectDesc:
        "I created a classic hangman game as a personal project. Players guess letters to uncover a hidden word within limited attempts, featuring intuitive gameplay and interactive feedback.",
      projectImg: HM,
      projectBuiltWith: ["JavaScript", "HTML", "CSS"],
      projectUrl: "https://hari-init.github.io/TheHangMan/",
    },
    {
      projectName: "Portfoli V1",
      projectDesc: "Just Myself",
      projectImg: MP,
      projectBuiltWith: ["HTML", "CSS"],
      projectUrl: "https://hari-init.github.io/MySelf/",
    },
    {
      projectName: "Drive Test Portal",
      projectDesc:
        "Minimal Drive Test Portal, Helps the user to register for G2 and G test, also have admin panel to manage the user and test details.",
      projectImg: DT,
      projectBuiltWith: ["JavaScript", "Node.js", "MongoDB", "EJS", "CSS"],
      projectUrl: "https://driver-test-mu.vercel.app/",
    },
    {
      projectName: "Task Manager",
      projectDesc:
        "Task manager is a simple task management system, where user can create, update, delete and mark the task as completed. Also have the feature to filter the task based on the status.",
      projectImg: TM,
      projectBuiltWith: ["JavaScript", "Node.js"],
      projectUrl: "https://github.com/hari-init/taskManager",
    },
  ];

  // Calculate columns based on screen width
  const getColumnCount = () => {
    if (window.innerWidth < 768) return 1; // Mobile
    if (window.innerWidth < 1024) return 2; // Tablet
    return 3; // Desktop
  };

  const columns = getColumnCount();
  const columnCards: any = Array.from({ length: columns }, () => []);

  cards.forEach((card, index) => {
    columnCards[index % columns].push(card);
  });

  return (
    <div className="flex w-full md:w-3/4 m-auto pt-5" {...props}>
      {columnCards.map((column: any, colIndex: any) => (
        <div
          key={Date.now() + colIndex}
          className={`flex flex-col w-full border-gray-700/80 ${
            colIndex === 2 ? "" : `${columns === 1 ? "" : "border-r"}`
          }`}
        >
          {column.map((card: any, index: any) => (
            <div key={Date.now() + index}>
              <Card
                projectName={card.projectName}
                projectDesc={card.projectDesc}
                projectImg={card.projectImg}
                projectBuiltWith={card.projectBuiltWith}
                imageStyle={card.imageStyle}
                projectUrl={card.projectUrl}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Masonry;
