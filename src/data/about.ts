import { StaticImageData } from "next/image";
import profile from "/public/profile.jpg";

type AboutDataType = {
  content: string;
  avatar: StaticImageData;
};

export const aboutData: AboutDataType = {
  content:
    "My name is Tran Van Hoan. I am a professional and enthusiastic programmer in my daily life. I am a quick learner with a self-learning attitude. I love to learn and explore new technologies and am passionate about problem-solving. I love almost all the stacks of web application development and love to make the web more open to the world. My core skill is based on JavaScript, PHP and I love to do most of the things using JavaScript, PHP. I am available for any kind of job opportunity that suits my skills and interests.",
  avatar: profile,
};
