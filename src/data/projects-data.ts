import { StaticImageData } from "next/image";
import ayla from "/public/image/ayla.jpg";
import crefin from "/public/image/crefin.jpg";
import realEstate from "/public/image/real-estate.jpg";
import travel from "/public/image/travel.jpg";

type ProjectType = {
  id: number;
  name: string;
  description: string;
  tools: string[];
  role: string;
  code?: string;
  demo?: string;
  image?: StaticImageData;
};

export const projectsData: ProjectType[] = [
  {
    id: 1,
    name: "xCyber Doc, xCyber Contract",
    tools: [
      "Laravel",
      "Mysql",
      "React",
      "Nginx",
      "Primereact",
      "Keycloak",
      "SCSS",
      "TypeScript",
      "Redux"
    ],
    role: "Full Stack Developer",
    code: "",
    demo: "",
    image: crefin,
    description:
      "My team and I built a software for digitally signing documents and electronic contracts on a cloud platform. I developed the API using Laravel, the interface using Reactjs combined with Primereact. Keycloak for the authentication system.",
    
  },
  {
    id: 2,
    name: "xCyber Bill",
    description:
      "Software to digitally sign documents and electronic contracts on cloud computing platform",
    tools: [
      "AngularJS",
      "Keycloak", "PrimeNg"
    ],
    role: "Front End Developer",
    code: "",
    demo: "",
    image: travel,
  },
  {
    id: 3,
    name: "xCyber BillStore",
    description:
      "The system automatically checks, analyzes, enters and manages smart input invoices",
    tools: [
      "React",
      "Bootstrap",
      "SCSS",
      "TypeScript",
      "Keycloak",
      "AntDesign",
      "Nginx",
      "Redux"
    ],
    code: "",
    role: "Front End Developer",
    demo: "",
    // image: realEstate,
  },
  {
    id: 4,
    name: "FastCA RS",
    description:
      "A business management app that provides digital signature services",
    tools: ["ReactNative"],
    code: "",
    demo: "",
    image: ayla,
    role: "Front End Developer",
  },
];

// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
    // image: crefin,
// },
