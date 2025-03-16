import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";
import project5 from "../assets/projects/project-5.png";

export const HERO_CONTENT = `I am a full-stack developer with experience in React and Angular for frontend development, as well as Node.js and Python for backend services. I have worked with MySQL and MongoDB for data management, and I am well-versed in Git for version control and Docker for containerization. My experience includes freelance projects and a data-focused internship at Ayesha Spinning Mills Ltd., where I developed my skills in handling and processing large datasets. I am passionate about building scalable and efficient solutions while continuously improving my technical expertise.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications.  I have worked with a variety of technologies, including React.js, Node.js, Express.js, MySQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies.`;

export const EXPERIENCES = [
  {
    year: "Jan 2024 - June 2024",
    role: "Internship",
    company: " Ayesha Spinning Mills Ltd",
    description: ` gained valuable experience during my internship at Ayesha Spinning Mills Ltd., where I supported the development team with web development and data entry tasks.`,
    technologies: ["HTML","CSS","Javascript", "React.js", "mongoDB","MRP"],
  },
  {
    year: "Augest 2024 - December 2024",
    role: "Internship",
    company: " Promertezz International",
    description: `I developed a feature-rich expense tracker that allows users to record their income and expenses with a clean and attractive interface. I utilized Tailwind CSS to enhance the user interface and ensure a seamless user experience. For data storage and retrieval, I used MongoDB to optimize efficiency. The application was built with EJS (Embedded JavaScript Template) to guarantee fast and responsive performance. Additionally, I incorporated interactive visualizations using various graphs to present financial data in an engaging and meaningful way.`,
    technologies: ["HTML","CSS","Javascript", "React.js", "MongoDB" ,"MYSQL"],
  }
];

export const PROJECTS = [
  {
    title: "E-Commerce Website With Admin Panel",
    image: project1,
    description:
      "A fully functional e-commerce website with features such as product listing, user management, order tracking, shopping cart, and user authentication.",
    technologies: ["React.js", "Tailwind", "Node.js", "MySQL"],
  },
  {
    title: "Expense Tracking App",
    image: project2,
    description:
      "An application for managing expenses according to the user, with features such as CRUD operations for income and expenses, user authentication, and graphical representation.",
    technologies: ["EJS", "CSS", "Node.js", "MongoDB"],
  },
  {
    title: "Currency Converter",
    image: project3,
    description:
      "This is a real-time chat applicatiThis app allows users to quickly convert between different currencies using live exchange rates, making it a handy tool for anyone dealing with international transactions. Here's a sneak peek at the UI! on that allows multiple users to exchange messages instantly. It is built using HTML, CSS, JavaScript, Node.js, and Socket.io for seamless communication.",
    technologies: ["React.js", "Tailwind"  ],
  },
  {
    title: "Rock Paper Scissor",
    image: project4,
    description:
      "In a game, a player who chooses rock defeats another player who selects scissors ('rock crushes scissors') but loses to a player who picks paper ('paper covers rock') a play of paper loses to scissors ('scissors cut paper').",
    technologies: ["HTML", "CSS", "JAVASCRIPT"],
  },
  {
    title: "Tic Tac Toe",
    image: project5,
    description:
      "In a game, two players draw either an O or an X in one square of a grid consisting of nine squares. The winner is the first player to get three of the same symbols in a row.",
    technologies: ["HTML", "CSS", "JavaScript" ],
  },
];

export const CONTACT = {
  address: "Mou Mubarak Road Rahim Yar Khan ",
  phoneNo: "+92-305-8094-340 ",
  email: "umerdinahmedzia@gmail.com",
};