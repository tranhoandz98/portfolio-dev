import { MenuItemType } from "@/types/menu";

export enum MENU_DATA_KEY{
    ABOUT = "about",
    EXPERIENCE = "experience",
    SKILLS = "skills",
    EDUCATION = "education",
    BLOGS = "blogs",
    PROJECTS = "projects",
  }

  export enum MENU_DATA_LABEL{
    ABOUT = "About",
    EXPERIENCE = "Experience",
    SKILLS = "Skills",
    EDUCATION = "Education",
    BLOGS = "Blogs",
    PROJECTS = "Projects",
  }


export const MENU_DATA: MenuItemType[] = [
    {
      id: 1,
      title: MENU_DATA_LABEL.ABOUT,
      href: `#${MENU_DATA_KEY.ABOUT}`,
    },
    {
      id: 2,
      title: MENU_DATA_LABEL.EXPERIENCE,
      href: `#${MENU_DATA_KEY.EXPERIENCE}`,
    },
    {
      id: 3,
      title: MENU_DATA_LABEL.SKILLS,
      href: `#${MENU_DATA_KEY.SKILLS}`,
    },
    {
      id: 4,
      title: MENU_DATA_LABEL.EDUCATION,
      href: `#${MENU_DATA_KEY.EDUCATION}`,
    },
    {
      id: 5,
      title: MENU_DATA_LABEL.BLOGS,
      href: `#${MENU_DATA_KEY.BLOGS}`,
    },
    {
      id: 6,
      title: MENU_DATA_LABEL.PROJECTS,
      href: `#${MENU_DATA_KEY.PROJECTS}`,
    },
  ];


