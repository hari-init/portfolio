import { Section, SubSection, Accordion } from "../../components";
import { skills } from "../../assets/skills";

const About = () => {
  const skillStyle = {
    // background:
    //   "linear-gradient(to right, white, transparent 20%, transparent 80%, white)",
  };
  const experiences = [
    {
      isAcc: true,
      topLeftTitle: "Foodbia,",
      topLeftSubTitle: "Shopify Developer",
      topLeftDetail: "Remote [Volunteering]",
      topRightTitle: "Present",
      topRightTitleMob: "Present",
      descriptionTitle: "Public Website",
      descriptions: [
        "Keeping the Shopify store functional by making occasional updates and fixes.",
        "Editing product pages, collections, and other site content.",
        "Updating metadata and improving site structure for better search rankings.",
      ],
    },
    {
      isAcc: true,
      topLeftTitle: "Exclusive Resorts,",
      topLeftSubTitle: "Senior Software Engineer",
      topLeftDetail: "Remote",
      topRightTitle: "12/2023 - 04/2024",
      topRightTitleMob: "12/23 - 04/24",
      descriptionTitle: "Public Website",
      descriptions: [
        "Developed high-performance front-end solutions, leading component library development for UI consistency.",
        "Built and maintained a Vue-based Design System (Vue 3 & Nuxt 3) to standardize UI components.",
        "Transitioned legacy CMS to Prismic, improving content delivery speed by 40%.",
        "Replaced Webpack with Vite, cutting build times by 50%.",
      ],
    },
    {
      isAcc: true,
      topLeftTitle: "Habitat28,",
      topLeftSubTitle: "WordPress Developer",
      topLeftDetail: "Canada [Volunteering]",
      topRightTitle: "04/2024 - 05/2024",
      topRightTitleMob: "04/24 - 05/24",
      descriptionTitle: "Public Website",
      descriptions: [
        "Customized WordPress themes and plugins, and managed content for dynamic updates.",
        "Improved performance with SEO and security.",
        "Built with WordPress, WooCommerce, Gutenberg, ACF, and PHP.",
      ],
    },
    {
      isAcc: true,
      topLeftTitle: "Intellect Design Arena,",
      topLeftSubTitle: "Associate Consultant",
      topLeftDetail: "India",
      topRightTitle: "12/2021 - 08/2023",
      topRightTitleMob: "12/21 - 08/23",
      descriptionTitle: "iSherlock and iESG | Due Diligence",
      descriptions: [
        "Led internal app development, creating reusable Vue + TypeScript components for enterprise applications.",
        "Developed and maintained a Vue-based Component Library, ensuring UI consistency and faster development.",
        "Built Vue PoCs to replace legacy systems, improving app performance by 25%.",
        "Contributed to Django-based backend services, enhancing full-stack development capabilities.",
      ],
    },
    {
      isAcc: true,
      topLeftTitle: "Photon interactive,",
      topLeftSubTitle: "Software Engineer",
      topLeftDetail: "India",
      topRightTitle: "02/2021 - 12/2021",
      topRightTitleMob: "02/21 - 12/21",
      descriptionTitle: "Public Website",
      descriptions: [
        "Developed a WCAG-compliant React/Next.js eCommerce platform with GDPR compliance.",
        "Created interactive product manuals using React and Prismic, increasing user engagement by 20%.",
        "Integrated CMS and Cloudinary, reducing image load times by 40%.",
        "Achieved 90%+ test coverage with Jest and Testing Library for robust code quality.",
      ],
    },
    {
      isAcc: true,
      topLeftTitle: "EMD systems,",
      topLeftSubTitle: "Software Engineer",
      topLeftDetail: "India",
      topRightTitle: "06/2018 - 02/2021",
      topRightTitleMob: "06/18 - 02/21",
      descriptionTitle: "MMS & GIP | DICOM viewer",
      descriptions: [
        "Developed DICOM viewer features, improving radiology workflows by 15%.",
        "Built image manipulation tools using Vue/React/Angular, reducing manual adjustments by 30%.",
        "Delivered RIS/PACS applications with optimized rendering and state management.",
      ],
    },
  ];
  const education = [
    {
      isAcc: false,
      topLeftTitle: "PG in Web Development",
      topLeftSubTitle: "Conestoga, Canada",
      topLeftDetail: "",
      topRightTitle: "05/2023 - 12/2024",
      topRightTitleMob: "05/23 - 12/24",
      descriptionTitle: "",
      descriptions: ["GPA: 3.64 | Dean's Honour List"],
    },
    {
      isAcc: false,
      topLeftTitle: "Bachelors in ECE,",
      topLeftSubTitle: "Pondicherry University, India",
      topLeftDetail: "",
      topRightTitle: "2014 - 2018",
      topRightTitleMob: "2014 - 2018",
      descriptionTitle: "",
      descriptions: ["GPA: 7.5 | Distinction"],
    },
  ];
  return (
    <Section name="About" titleText="About" height="">
      <main className="pt-8 md:pt-16">
        <h1 className="text-heading-lg md:text-balance text-center">
          Building web applications, user experiences, and innovative solutions
          as a Full Stack Developer.
        </h1>
        <SubSection title="Experience">
          {experiences.map((exp) => (
            <Accordion
              key={exp.topLeftTitle}
              isAcc={exp.isAcc}
              topLeftTitle={exp.topLeftTitle}
              topLeftSubTitle={exp.topLeftSubTitle}
              topLeftDetail={exp.topLeftDetail}
              topRightTitle={exp.topRightTitle}
              topRightTitleMob={exp.topRightTitleMob}
              descriptionTitle={exp.descriptionTitle}
              descriptions={exp.descriptions}
            />
          ))}
        </SubSection>
        <SubSection title="Skills">
          <div className=" mt-5 w-full mx-auto  rounded-md relative overflow-clip ">
            <div
              className="absolute inset-0 w-full h-full z-10 pointer-events-none"
              style={skillStyle}
            ></div>
            <ul className="flex flex-wrap gap-2 md:p-10 justify-center">
              {skills.map((skill) => {
                let cssClass = "border-gray-600/80 text-gray-600";
                if (skill.main) {
                  cssClass = `${skill.style} hover:scale-125 ease-in-out duration-100`;
                }
                return (
                  <li
                    key={skill.name}
                    className={` border rounded-md ${cssClass} `}
                  >
                    <div className="px-2 md:px-4 md:py-1">
                      <span className="pointer-events-none">{skill.name}</span>
                      <span className="text-gray-700/80 pointer-events-none">
                        {" "}
                        |{" "}
                      </span>
                      <span className="pointer-events-none">{skill.years}</span>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </SubSection>
        <SubSection title="Education">
          {education.map((exp) => (
            <Accordion
              key={exp.topLeftTitle}
              isAcc={exp.isAcc}
              topLeftTitle={exp.topLeftTitle}
              topLeftSubTitle={exp.topLeftSubTitle}
              topLeftDetail={exp.topLeftDetail}
              topRightTitle={exp.topRightTitle}
              topRightTitleMob={exp.topRightTitleMob}
              descriptionTitle={exp.descriptionTitle}
              descriptions={exp.descriptions}
            />
          ))}
        </SubSection>
      </main>
    </Section>
  );
};

export default About;
