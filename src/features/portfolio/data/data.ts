import helper from "@/utils/helper";
import { TProject } from "../types/portfolioTypes";
import {
  FaCss3Alt,
  FaGithub,
  FaHtml5,
  FaJs,
  FaLinkedin,
  FaNodeJs,
  FaReact,
  FaTwitter,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import { TbJson } from "react-icons/tb";
import { PiFileJsxFill } from "react-icons/pi";
import { BiLogoRedux } from "react-icons/bi";

export const getTechs = async () => {
  return [
    {
      id: helper.generateId(),
      name: "HTML",
      icon: FaHtml5,
    },
    {
      id: helper.generateId(),
      name: "CSS",
      icon: FaCss3Alt,
    },
    {
      id: helper.generateId(),
      name: "Javascript",
      icon: FaJs,
    },
    {
      id: helper.generateId(),
      name: "React",
      icon: FaReact,
    },
    {
      id: helper.generateId(),
      name: "Next.js",
      icon: SiNextdotjs,
    },
    {
      id: helper.generateId(),
      name: "Tailwind",
      icon: SiTailwindcss,
    },
    {
      id: helper.generateId(),
      name: "Typescript",
      icon: SiTypescript,
    },
    {
      id: helper.generateId(),
      name: "Node.js",
      icon: FaNodeJs,
    },
    {
      id: helper.generateId(),
      name: "Redux",
      icon: SiRedux,
    },
  ];
};

export const getHobbies = async () => {
  return [
    {
      id: helper.generateId(),
      name: "Cooking",
      emoji: "🍳",
      left: "5%",
      top: "5%",
    },
    {
      id: helper.generateId(),
      name: "Reading",
      emoji: "📖",
      left: "50%",
      top: "5%",
    },
    {
      id: helper.generateId(),
      name: "Gaming",
      emoji: "🎮",
      left: "10%",
      top: "35%",
    },
    {
      id: helper.generateId(),
      name: "Music",
      emoji: "🎧",
      left: "35%",
      top: "40%",
    },
    {
      id: helper.generateId(),
      name: "Traveling",
      emoji: "🌍",
      left: "70%",
      top: "45%",
    },
    {
      id: helper.generateId(),
      name: "Hiking",
      emoji: "🥾",
      left: "5%",
      top: "65%",
    },
    {
      id: helper.generateId(),
      name: "Gardening",
      emoji: "🌿",
      left: "45%",
      top: "70%",
    },
  ];
};

export const getProjects = async () => {
  const projects: TProject[] = [
    {
      id: helper.generateId(),
      compony: "personal project",
      title: "Social Media",
      year: 2024,
      image: "/chatty.png",
      projectLink: "https://chatty.liara.run/register",
      githubLink: "https://github.com/morteza-x/chatty-1",
      results: [
        {
          id: helper.generateId(),
          name: "Zustand for state management",
        },
        {
          id: helper.generateId(),
          name: "React/React-router Frontend",
        },
        {
          id: helper.generateId(),
          name: "JWT authentication & Http cookie",
        },
      ],
    },
    {
      id: helper.generateId(),
      compony: "personal project",
      title: "Netflix Clone UI",
      year: 2024,
      image: "/netflix.png",
      projectLink: "https://netflix-rostami.liara.run/",
      githubLink: "https://github.com/morteza-x/netflix-c",
      results: [
        {
          id: helper.generateId(),
          name: "Next.js server side rendering",
        },
        {
          id: helper.generateId(),
          name: "Tailwind Css for UI design",
        },
        {
          id: helper.generateId(),
          name: "Chakra UI for UI library",
        },
      ],
    },
    {
      id: helper.generateId(),
      compony: "personal project",
      title: "Coming Soon...",
      year: 2024,
      image: "/panel.png",
      projectLink: "#",
      githubLink: "#",
      results: [
        {
          id: helper.generateId(),
          name: "first feature",
        },
        {
          id: helper.generateId(),
          name: "second feature",
        },
        {
          id: helper.generateId(),
          name: "third feature",
        },
      ],
    },
  ];
  return projects;
};

export const tapes = [
  "Amazing UX/UI",
  "Fluent in Javascript",
  "Fast and responsive",
  "TypeScript Expert",
  "Next.js Server side rendering",
  "Redux state management",
  "TailwindCSS designed",
  "Problem solving",
  "Highly interactive",
  "Accessible",
  "Mobile responsive",
  "JWT authentication",
];

//export const getTestimonials = async () => {}

export const getSoftSkills = async () => {
  return [
    {
      id: helper.generateId(),
      name: "On time delivery",
      emoji: "⏰",
    },
    {
      id: helper.generateId(),
      name: "Good Communication",
      emoji: "🗣️",
    },
    {
      id: helper.generateId(),
      name: "Ability to adjust to new tools",
      emoji: "🔧",
    },
    {
      id: helper.generateId(),
      name: "Patience and perseverance",
      emoji: "💪",
    },
    {
      id: helper.generateId(),
      name: "I'm a fast learner",
      emoji: "🚀",
    },
    {
      id: helper.generateId(),
      name: "I'll get to work on time",
      emoji: "🕒",
    },
    {
      id: helper.generateId(),
      name: "Team work",
      emoji: "🤝",
    },
    {
      id: helper.generateId(),
      name: "Perform well under deadlines",
      emoji: "⏳",
    },
  ];
};

export const footerLinks = [
  {
    id: helper.generateId(),
    name: "Linkedin",
    link: "https://www.linkedin.com/in/morteza-rostami-929782277/",
    icon: FaLinkedin,
  },
  {
    id: helper.generateId(),
    name: "Github",
    link: "https://github.com/morteza-x",
    icon: FaGithub,
  },
  {
    id: helper.generateId(),
    name: "XTwitter",
    link: "https://x.com/realRostamii",
    icon: FaXTwitter,
  },
];

export const orbits = [
  {
    size: 420,
    rotation: 79,
    shouldOrbit: true,
    shouldSpin: false,
    orbitDuration: "30s",
    spinDuration: "5s",
    component: {
      icon: PiFileJsxFill,
      className: "size-5 text-emerald-300/20",
    },
  },
  {
    size: 430,
    rotation: -14,
    shouldOrbit: true,
    shouldSpin: false,
    orbitDuration: "32s",
    spinDuration: "5s",
    component: {
      icon: PiFileJsxFill,
      className: "size-8 text-emerald-300/20",
    },
  },
  {
    size: 520,
    rotation: -41,
    shouldOrbit: true,
    shouldSpin: false,
    orbitDuration: "34s",
    spinDuration: "5s",
    component: {
      icon: TbJson,
      className: "size-14 text-emerald-300/20",
    },
  },
  {
    size: 530,
    rotation: 178,
    shouldOrbit: true,
    shouldSpin: true,
    orbitDuration: "36s",
    spinDuration: "5s",
    component: {
      icon: BiLogoRedux,
      className: "size-10 text-emerald-300/20",
    },
  },
  {
    size: 550,
    rotation: 20,
    shouldOrbit: true,
    shouldSpin: true,
    orbitDuration: "38s",
    spinDuration: "7s",
    component: {
      icon: FaReact,
      className: "size-10 text-emerald-300/40",
    },
  },
  {
    size: 590,
    rotation: 98,
    shouldOrbit: true,
    shouldSpin: true,
    orbitDuration: "40s",
    spinDuration: "7s",
    component: {
      icon: BiLogoRedux,
      className: "size-8 text-emerald-300/40",
    },
  },
  {
    size: 650,
    rotation: -5,
    shouldOrbit: true,
    shouldSpin: false,
    orbitDuration: "42s",
    spinDuration: "5s",
    component: {
      icon: TbJson,
      className: "size-14 text-emerald-300/20",
    },
  },
  {
    size: 710,
    rotation: 144,
    shouldOrbit: true,
    shouldSpin: false,
    orbitDuration: "44s",
    spinDuration: "5s",
    component: {
      icon: PiFileJsxFill,
      className: "size-14 text-emerald-300/20",
    },
  },
  {
    size: 720,
    rotation: 100,
    shouldOrbit: true,
    shouldSpin: false,
    orbitDuration: "46s",
    spinDuration: "5s",
    component: {
      icon: TbJson,
      className: "size-14 text-emerald-300/20",
    },
  },
  {
    size: 800,
    rotation: -72,
    shouldOrbit: true,
    shouldSpin: true,
    orbitDuration: "48s",
    spinDuration: "6s",
    component: {
      icon: FaReact,
      className: "size-12 text-emerald-300/40",
    },
  },
];
