interface Map {
  [key: string]: string;
}

const navMap: Map = {
  "All Blog": "/",
  "Blog Editor": "/editor",
};

const socialMediaMap: Map = {
  Github: "https://github.com/sarthakpant772",
  Linkedin: "https://www.linkedin.com/in/pant-sarthak/",
  Twitter: "https://twitter.com/1SarthakPant",
  Gmail: "sarthak.pant31@gmail.com",
};

const imageName: string[] = [
  "react",
  "mongodb",
  "node",
  "redux",
  "python",
  "SystemDesign",
  "SQL",
  "AWS",
  "Javascript",
  "typescript",
  "c/c++",
  "ML",
  "NLP",
];

const socialMediaName: string[] = ["Github", "Linkedin", "Twitter", "Gmail"];

export { imageName, socialMediaName, navMap, socialMediaMap };
