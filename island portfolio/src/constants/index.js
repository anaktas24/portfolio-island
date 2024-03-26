import {lama, lewagon, mango,godot } from "../assets/images";
import {
    contact,
    clipstudio,
    threejs,
    vite,
    postgre,
    blender,
    ruby,
    css,
    git,
    github,
    html,
    javascript,
    linkedin,
    nodejs,
    react,
    rails,
    redux,
    sass,
    unity,
    tailwindcss,

} from "../assets/icons";

export const skills = [
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },

  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: threejs,
    name: "Three.js",
    type: "Frontend",
  },

  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: vite,
    name: "Vite",
    type: "Frontend",
  },
  {
    imageUrl: ruby,
    name: "Ruby",
    type: "Backend",
  },
  {
    imageUrl: rails,
    name: "Rails",
    type: "Backend",
  },
  {
    imageUrl: postgre,
    name: "PostgreSQL",
    type: "Backend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },

  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: blender,
    name: "Blender",
    type: "3D Modeling",
  },
  {
    imageUrl: clipstudio,
    name: "Clip Studio Paint",
    type: "Design",
  },
  {
    imageUrl: unity,
    name: "Unity",
    type: "Game Development",
  },
];

export const experiences = [
  {
    title: "Junior Full Stack Developer",
    company_name: "KarmaLama",
    icon: lama,
    iconBg: "#accbe1",
    date: "May 2023 - August 2023",
        points: [
            "Contributed to developing the project plan and schedule for the web application.",
            "Outlined the MVP for the startup.",
            "Aided in setting up the basic structure of the web application using Ruby on Rails."

        ],
    },
    {
        title: "Web Developer Bootcamp",
        company_name: "Le Wagon",
        icon: lewagon,
        iconBg: "#fbc3bc",
        date: "Oct 2022 - Dec 2022",
        points: [
            "Learned the fundamentals of software development and programming: writing clean and efficient code with object-oriented programming, building MVC software from scratch, and mastering relational databases and SQL.",
            "Mastered front-end development and web design: developed responsive websites with HTML and CSS, designed user interfaces with Bootstrap and Figma, and built interactive web applications using JavaScript.",
            "Deployed fully-functional apps from scratch: designed and built complete web applications working as a team, deployed online using Heroku and a real domain, worked as a team to develop the application.",
            "Adopted best-in-class development workflow: understanding the importance of version control with Git and GitHub, and learned how to collaborate with other developers using GitHub, Slack, and Trello.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/anaktas24',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/ioanton',
    }
];

export const projects = [

    {
        iconUrl: mango,
        theme: 'btn-back-yellow',
        name: 'Migrating Mango',
        description:  "Comprehensive app designed to facilitate the relocation process to a new country, offering guidance and resources to seamlessly start a new chapter and adapt to life abroad.",
        link:'https://github.com/anaktas24/Migrating-Mango-v2-client'
    } ,
    {
      iconUrl: godot,
      theme: 'btn-back-red',
      name: 'Godot Game',
      description: "A simple 3D game developed using Godot Engine and Blender. The game is a third-person platformer where the player has to collect coins and escape to win. (In progress)",
      link:'https://github.com/anaktas24/Godot-3D'
    } ,
    {
      iconUrl: godot,
      theme: 'btn-back-red',
      name: 'React on Rails',
      description: "This project is a simple CRUD (Create, Read, Update, Delete) application that combines a Ruby on Rails API backend with a React frontend.",
      link:'https://github.com/anaktas24/ReactOnRails'
    } ,
];
