const projects = [
  {
    name: "SellSmart",
    version: "1.0.0",
    status: "Production",
    description: "Modern web application built with React + Vite + TypeScript",
    repository: "#",
    preview: "#",
    imageUrl: "src\public\assets\project-images\sellsmart-logo.svg",
    featured: true,
    techStack: {
      Frontend: ["Vite", "React", "Tailwind"],
    },
    dependencies: [],
  },
  {
    name: "My Amazon Analytics",
    version: "1.0.0",
    status: "Production",
    description: "E-commerce platform optimization",
    repository: "#",
    preview: "#",
    imageUrl: "src\public\assets\blog-images\amazon-ppc.svg",
    featured: true,
    techStack: {
      Frontend: ["Next.js", "TypeScript", "GraphQL"],
    },
    dependencies: [],
  },
  {
    name: "Demo App",
    version: "1.0.0",
    status: "Production",
    description: "My demo app built with Vercel",
    repository: "#",
    preview: "https://wesleyquintero-dev.vercel.app/",
    imageUrl: "/assets/myAvatar.png",
    featured: false,
    techStack: {
      Frontend: ["React", "JavaScript", "Vercel"],
    },
    dependencies: [],
  },
];

export default projects;
