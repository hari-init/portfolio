import { Section, SubSection, Accordion } from "../../components";
import { skills } from "../../assets/skills";

const About = () => {
  const skillStyle = {
    background:
      "linear-gradient(to right, white, transparent 20%, transparent 80%, white)",
  };
  const experiences = [
    {
      isAcc: true,
      topLeftTitle: "Exclusive Resorts",
      topLeftSubTitle: "Front End Developer",
      topLeftDetail: "Remote",
      topRightTitle: "2023 - 04/2024",
      descriptionTitle: "Public Website",
      descriptions: [
        "Developed features with Vue 3 and Nuxt 3, and migrated from Vue 2 for better performance.",
        "Integrated Prismic, AWS, and Cloudinary.",
        "Created custom components and optimized performance.",
      ],
    },
    {
      isAcc: true,
      topLeftTitle: "Habitat28, Canada",
      topLeftSubTitle: "WordPress Developer",
      topLeftDetail: "Remote",
      topRightTitle: "2024 - 04/2024",
      descriptionTitle: "Public Website",
      descriptions: [
        "Customized WordPress themes and plugins, and managed content for dynamic updates.",
        "Improved performance with SEO and security.",
        "Built with WordPress, WooCommerce, Gutenberg, ACF, and PHP.",
      ],
    },
    {
      isAcc: true,
      topLeftTitle: "Intellect Design Arena",
      topLeftSubTitle: "Associate Consultant",
      topLeftDetail: "India",
      topRightTitle: "2021 - 2023",
      descriptionTitle: "iSherlock and iESG | Due Diligence",
      descriptions: [
        "Led product design and development with Vue.js, Bulma CSS, and Node.js.",
        "Spearheaded R&D initiatives to enhance quality and user experience.",
        "Built with Angular, OAuth 2.0, Vue.js, TypeScript, Pinia, Vite, and Testing Library.",
      ],
    },
    {
      isAcc: true,
      topLeftTitle: "Photon interactive",
      topLeftSubTitle: "Software Engineer",
      topLeftDetail: "India",
      topRightTitle: "2021",
      descriptionTitle: "Public Website",
      descriptions: [
        "Managed a small team, fostering collaboration.",
        "Developed features with Vue.js and Nuxt.js; built responsive layouts with PWA and ADA compliance.",
        "Leveraged Node.js for scalability and performance.",
      ],
    },
    {
      isAcc: true,
      topLeftTitle: "EMD systems",
      topLeftSubTitle: "Software Engineer",
      topLeftDetail: "India",
      topRightTitle: "2018 - 2021",
      descriptionTitle: "MMS & GIP | DICOM viewer",
      descriptions: [
        "Skilled in React.js.",
        "Utilize Node.js for scalability and best practices.",
        "Experienced with Angular and Vue.js.",
      ],
    },
  ];
  const education = [
    {
      isAcc: false,
      topLeftTitle: "Conestoga",
      topLeftSubTitle: "Web development",
      topLeftDetail: "Canada",
      topRightTitle: "05/2023 - 12/2024",
      descriptionTitle: "",
      descriptions: [],
    },
    {
      isAcc: false,
      topLeftTitle: "Pondicherry University",
      topLeftSubTitle: "ECE",
      topLeftDetail: "Canada",
      topRightTitle: "2014 - 2018",
      descriptionTitle: "",
      descriptions: [],
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
