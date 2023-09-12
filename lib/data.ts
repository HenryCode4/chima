import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import shopsnickers from "@/public/shopsnickers.png";
import mythreads from "@/public/mythreads.png";
import messenger from "@/public/messenger.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Lagos, NG",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2021",
  },
  {
    title: "Front-End Developer",
    location: "Lagos, NG",
    description:
      "I worked as a front-end developer for a year. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2022",
  },
  {
    title: "Full-Stack Developer",
    location: "Lagos, NG",
    description:
      "I'm now a full-stack developer working with 7up. My stack includes React, Next.js, TypeScript, Tailwind, Prisma, postgresSql and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "ShopSnickers",
    description:
      "Built a snickers store with the latest technologies.",
    tags: ["React", "vite", "Tailwind"],
    imageUrl: shopsnickers,
  },
  {
    title: "Threads-Clone",
    description:
      "Threads clone app.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind"],
    imageUrl: mythreads,
  },
  {
    title: "Messenger-clone",
    description:
      "Messenger app for texting with real time chat.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Prisma"],
    imageUrl: messenger,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "PostgresSql",
  "MongoDB",
  "Express",
  "SQL",
  "Framer Motion",
] as const;