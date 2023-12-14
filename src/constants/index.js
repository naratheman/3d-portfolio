import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Flutter Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Artificial Intelligence Enthusiast",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Fullstack Engineer Intern",
    company_name: "SG Bike",
    icon: "https://media.licdn.com/dms/image/C510BAQHH7Xga7mT4Vg/company-logo_200_200/0/1630601671791/sg_bike_logo?e=1710374400&v=beta&t=Krw9YYTvMpkFqanvSdwtqtFVLRBqwvNGizAjKKq5LCw",
    iconBg: "#FF0000",
    date: "June 2021 - August 2021",
    points: [
      "Demonstrated strong leadership by spearheading collaborative development of a comprehensive staff portal with a team of 3. The portal facilitates seamless tracking of attendance, leaves, and payroll information, showcasing effective teamwork and leadership in driving impactful projects.",
      "Held daily stand-ups and sprint planning, ensuring project milestones were met efficiently and collaboratively.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Eliminated paper-based leave submission process for all staff by developing a user-friendly digital platform using React and Firebase.",
    ],
  },
  {
    title: "Undergraduate Teaching Assistant",
    company_name: "Loyola Marymount University",
    icon: "https://media.licdn.com/dms/image/C560BAQHj28c61vAWOA/company-logo_200_200/0/1630595894552/loyola_marymount_university_logo?e=1710374400&v=beta&t=fex5Ssq8F8_wo-7nT6f3kzwk_H9TA73qFHgeLt5bBM4",
    iconBg: "#4682B4",
    date: "Aug 2022 - Dec 2022",
    points: [
      "Elevated student performance in programming assignments through personalized 1-on-1 tutoring sessions by providing comprehensive guidance on debugging, expanding the scope of assistance beyond routine assignments.",
      "Delivered an engaging lecture to a class of 30 students, illuminating the intricacies of entrepreneurial start-up launches.",
      "Discussed proven formulas and strategic steps employed by successful entrepreneurs to minimize risks during business launch.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "PoolUp",
    icon: "https://media.licdn.com/dms/image/C560BAQGfc6vLq1DrRA/company-logo_200_200/0/1630653486081?e=1710374400&v=beta&t=0f9PmAcOcltr28oA5v8w2i-N7c5XMnVpNhfA8eq2YGI",
    iconBg: "#FFFFFF",
    date: "Jun 2023 - Present",
    points: [
      "Managed the migration of a website from HTML to a responsive React site, resulting in a remarkable performance score improvement from 67 to 96, enhancing user experience and optimizing page load times.",
      "Collaborated on developing a mobile application using Flutter, implementing 5 new user-centric features boosteing overall user experience. These additions resulted in a 23% increase in user engagement and a 15% decrease in user churn, contributing to continued growth and positive feedback from users.",
      "Displayed a commitment to clean, semantic markup, evidencing an acute attention to detail. This commitment translated into an enhanced code quality and readability, underscoring a dedication to maintaining a high standard of work and ensuring the effective communication of code within the team and project.",
      "Coordinated seamlessly with design team to implement UI/UX best practices and accessibility standards, increasing project’s user-centered design and overall usability.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "It was great working with Nara, his energy and enthusiasm was uplifting during meetings and everyone on the team shares the same sentiment.",
    name: "Talah Cumins",
    designation: "Founder",
    company: "PoolUp",
    image: "https://media.licdn.com/dms/image/C5603AQEucEMDmCdS2w/profile-displayphoto-shrink_200_200/0/1653624602786?e=1707955200&v=beta&t=c7rMSppPE7oONHYyzzs4ozgd5BxHx_YH6x83Z01ON60",
  },
  {
    testimonial:
      "Nara is very detailed, he tries to anticipate the scenarios and edge cases and works hard to figure out how each feature integrates deeply within the entire mobile app we were bulding",
    name: "Giovani Debiagi",
    designation: "Senior Software Engineer",
    company: "PoolUp",
    image: "https://media.licdn.com/dms/image/C4D03AQGzRPK2A2tL0g/profile-displayphoto-shrink_200_200/0/1588672443079?e=1707955200&v=beta&t=WbCiuRHY41_tVaG9NPK4bUwwIqkXoaSAc8-bEBgY2i0",
  },
  {
    testimonial:
      "Nara was able to integrate our website from a HTML to a fully resposnive React application, which resulted in a efficiency score improvement from 70 to 96",
    name: "Michael Chong",
    designation: "Founder and CEO",
    company: "PoolUp",
    image: "https://media.licdn.com/dms/image/C5603AQFrpE3KhEu2sw/profile-displayphoto-shrink_200_200/0/1658598953604?e=1707955200&v=beta&t=anHDnfibUledVTz2c_RFYaJ4M0SgEJCKlYq2q475pGo",
  },
];

const projects = [
  {
    name: "PoolUp Web & Mobile",
    description:
      "Led the redevelopment of PoolUp's website, elevating their online presence, and enchance user experience by contributing to the PoolUp mobile application, now available for download on Apple's AppStore.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "flutter",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://poolup.co",
  },
  {
    name: "Myst",
    description:
      "Designed and developed a dynamic website for a local Indonesian brand, seamlessly bringing their vision to life through meticulous attention to detail and a user-centric approach.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "snapscroll-css",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Food Truck Map",
    description:
      "With just a few clicks, users can discover a diverse range of culinary delights on a dynamic and interactive map. You would also be able to see what type of food a specific food truck would be offering.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "RadarMapsAPI",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://food-truck-finder-psi.vercel.app",
  },
];

export { services, technologies, experiences, testimonials, projects };