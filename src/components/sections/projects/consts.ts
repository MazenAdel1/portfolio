import { ProjectProps } from "./type";

export const projects: ProjectProps[] = [
  {
    id: 1,
    title: "Napd",
    description:
      "A real-time clinical system application for recording patient status and data, and providing a dashboard for the doctor to monitor the patients and their status.",
    href: [
      {
        title: "Demo Video",
        url: "https://drive.google.com/file/d/1ArcDsIWLWlyGzuYp7BVYaC8f4PlKL2jI/view",
      },
      {
        title: "Github Repository",
        url: "https://github.com/MazenAdel1/napd",
      },
    ],
    technologies: [
      {
        title: "Front-End",
        technologies: ["React", "TypeScript", "Tailwind CSS", "Shadcn UI"],
      },
      { title: "Back-End", technologies: ["Node.js", "Express", "Prisma"] },
      { title: "Real-Time", technologies: ["Socket.io"] },
    ],
    images: {
      main: "/projects/logos/napd-logo.webp",
      background: "/projects/backgrounds/image-01.webp",
    },
  },
  {
    id: 2,
    title: "Yaqra",
    description:
      "A readers-community application for sharing and discovering books for the arabic community, with different social features like following, commenting, and rating.",
    href: [
      {
        title: "Demo Video",
        url: "https://drive.google.com/file/d/1EBKqUySOXieF3XiOTuNxCxkRc5eypNEW/view",
      },
      {
        title: "Github Repository",
        url: "https://github.com/Yaqra/YaqraClient",
      },
    ],
    technologies: [
      {
        title: "Front-End",
        technologies: ["React", "Typescript", "Tailwind CSS", "Framer Motion"],
      },
      {
        title: "Back-End",
        technologies: [".NET"],
        partner: {
          name: "Omar El-Naggar",
          href: "https://www.linkedin.com/in/omarnaru/",
        },
      },
      { title: "Real-Time", technologies: ["Socket.io"] },
    ],
    images: {
      main: "/projects/logos/yaqra-logo.svg",
      background: "/projects/backgrounds/image-02.webp",
    },
  },
  {
    id: 3,
    title: "Fruit-ex",
    description:
      "A website for Fruit-ex company to display their products and services, with a custom CMS to manage the products and the content, with English and Arabic support.",
    href: [
      {
        title: "Live Website",
        url: "https://fruit-ex.com/",
      },
    ],
    technologies: [
      {
        title: "Front-End",
        technologies: ["Next.js", "React", "Typescript"],
      },
      {
        title: "Back-End",
        technologies: ["Next.js Server Actions", "MongoDB"],
      },
    ],
    images: {
      main: "/projects/logos/fruitex-logo.webp",
      background: "/projects/backgrounds/image-03.webp",
    },
  },
  {
    id: 4,
    title: "Portfolio",
    description:
      "The website you are currently on, a personal portfolio to showcase my projects and skills, with a special vibes and animations.",
    href: [
      {
        title: "Github Repository",
        url: "https://github.com/MazenAdel1/portfolio",
      },
    ],
    technologies: [
      {
        title: "Front-End",
        technologies: [
          "Next.js",
          "React",
          "Typescript",
          "Tailwind CSS",
          "Framer Motion",
        ],
      },
    ],
    images: {
      main: "/projects/logos/portfolio-logo.webp",
      background: "/projects/backgrounds/image-04.webp",
    },
  },
  {
    id: 5,
    title: "ATP GYM",
    description:
      "A website for ATP GYM to display their services and coaches, with a custom CMS to manage the whole website's content.",
    href: [
      {
        title: "Github Repository",
        url: "https://github.com/MazenAdel1/atp",
      },
      {
        title: "Demo Video",
        url: "https://drive.google.com/file/d/1wOXbWeJuNdowOM9Ik1QLs0H1N5rJ97ut/view?usp=drive_link",
      },
    ],
    technologies: [
      {
        title: "Front-End",
        technologies: [
          "Next.js",
          "React",
          "Typescript",
          "TailwindCSS",
          "Framer Motion",
        ],
      },
      {
        title: "Back-End",
        technologies: ["Laravel"],
        partner: {
          name: "Mohamed Harby",
          href: "https://www.linkedin.com/in/mohamed-harby-b5808a388/",
        },
      },
    ],
    images: {
      main: "/projects/logos/atp-logo.webp",
      background: "/projects/backgrounds/image-05.webp",
    },
  },
  {
    id: 6,
    title: "Quran-V2",
    description:
      "A Quran application with a modern design and a lot of features like bookmarking, searching, and a fast reading experience.",
    href: [
      {
        title: "Github Repository",
        url: "https://github.com/MazenAdel1/Quran-V2",
      },
      { title: "Live Website", url: "https://quran-v2-chi.vercel.app/" },
    ],
    technologies: [
      {
        title: "Front-End",
        technologies: [
          "Next.js",
          "React",
          "Typescript",
          "Tailwind CSS",
          "Shadcn UI",
        ],
      },
    ],
    images: {
      main: "/projects/logos/quran-logo.svg",
      background: "/projects/backgrounds/image-06.webp",
    },
  },
];
