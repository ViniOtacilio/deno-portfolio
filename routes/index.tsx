import SpinningModel from "../islands/SpinningModel.tsx";
import { Icon, loadIcons } from "@iconify-icon/react";

// preload icons
loadIcons([
  "majesticons:suitcase",
  "tabler:calendar-filled",
  "carbon:location-filled",
  "devicon:dotnetcore",
  "devicon:csharp",
  "logos:vue",
  "logos:postgresql",
  "vscode-icons:file-type-js-official",
  "logos:typescript-icon",
  "skill-icons:react-dark",
  "skill-icons:tailwindcss-dark",
  "logos:deno",
  "devicon:nodejs",
  "skill-icons:docker",
  "logos:html-5",
  "logos:css-3",
  "logos:aws",
  "logos:ruby",
  "logos:angular-icon",
  "carbon:cloud-service-management",
  "carbon:network-4",
  "carbon:meter",
  "carbon:api-1",
  "carbon:ibm-cloud",
]);

function Hero() {
  return (
    <section class="p-4 py-12 flex justify-between items-center gap-10 flex-wrap">
      <div class="max-w-2xl">
        <p class="uppercase tracking-widest text-sm font-bold text-primary mb-4">
          Backend engineer · distributed systems · cloud architecture
        </p>
        <h1 class="text-4xl md:text-6xl font-bold leading-tight">
          I build reliable systems for real-world communication.
        </h1>
        <p class="text-xl mt-6 max-w-xl">
          Software Engineer with 7+ years of experience building scalable web
          platforms, cloud-native applications, and real-time communication
          systems with C# and .NET.
        </p>
        <div class="flex flex-wrap gap-3 mt-8">
          <a class="btn btn-primary text-base-100" href="#experience">
            Explore my experience
          </a>
          <a class="btn btn-outline" href="#technologies">
            View my toolkit
          </a>
        </div>
      </div>
      <SpinningModel />
    </section>
  );
}

interface Focus {
  title: string;
  description: string;
  icon: string;
}

function EngineeringFocus() {
  const focusAreas: Focus[] = [
    {
      title: "Distributed systems",
      description:
        "Asynchronous workflows, messaging, and service boundaries designed for resilience and scale.",
      icon: "carbon:network-4",
    },
    {
      title: "Cloud-native delivery",
      description:
        "Production-minded solutions across Azure and AWS, from architecture through deployment and support.",
      icon: "carbon:cloud-service-management",
    },
    {
      title: "Real-time communication",
      description:
        "Call workflows, authentication, authorization, and SignalR features where reliability matters.",
      icon: "carbon:api-1",
    },
  ];

  return (
    <section class="p-4 py-10 bg-primary text-primary-content">
      <div class="max-w-5xl mx-auto">
        <div class="flex flex-wrap justify-between items-end gap-4 mb-6">
          <div>
            <p class="uppercase tracking-widest text-sm font-bold opacity-80">
              What I care about
            </p>
            <h2 class="text-3xl font-bold mt-2">Engineering with a long view.</h2>
          </div>
          <p class="max-w-md opacity-90">
            I enjoy the hard parts: clear boundaries, observable systems, and
            software that stays dependable as its workload grows.
          </p>
        </div>
        <div class="grid md:grid-cols-3 gap-4">
          {focusAreas.map((focus) => (
            <article key={focus.title} class="p-5 bg-base-100 text-base-content rounded-box">
              <Icon class="w-8 h-8 text-primary mb-5" icon={focus.icon} width="none" height="none" />
              <h3 class="text-xl font-bold">{focus.title}</h3>
              <p class="mt-2">{focus.description}</p>
            </article>
          ))}
        </div>
      </div>
      </section>
  );
}

interface Experience {
  title: string;
  company: string;
  timePeriod: string;
  location: string;
  description: string;
}

function Experience() {
  const experiences: Experience[] = [
    {
      title: "Software Developer",
      company: "Language Services Associates",
      timePeriod: "Jul 2025 - Present",
      location: "Horsham, Pennsylvania, United States",
      description:
        "Building real-time communication and call workflows, asynchronous messaging, and performance-focused platform features.",
    },
    {
      title: "Mid-Level Software Developer",
      company: "Exato Digital",
      timePeriod: "Aug 2023 - July 2025",
      location: "São Paulo, Brazil",
      description:
        "Designed and delivered APIs, integrations, and cloud-based services across the full software development lifecycle.",
    },
    {
      title: "Junior Software Developer",
      company: "Exato Digital",
      timePeriod: "Oct 2020 - Aug 2023",
      location: "São Paulo, Brazil",
      description:
        "Developed scalable backend services with .NET, Entity Framework, PostgreSQL, SQL Server, and third-party integrations.",
    },
    {
      title: "Development Intern",
      company: "Exato Digital",
      timePeriod: "Feb 2020 - Oct 2020",
      location: "São Paulo, Brazil",
      description:
        "Built a foundation across backend development, frontend integration, deployment, and production support.",
    },
  ];

  return (
    <section id="experience" class="p-4 py-12 flex flex-wrap-reverse justify-evenly items-center gap-8">
      <div class="flex flex-col">
        {experiences.map((experience, i) => (
          <div
            key={`${experience.company}-${experience.timePeriod}`}
            class="flex flex-col"
          >
            {i > 0 &&
              (
                <div class="flex flex-col gap-2 ml-8 my-2">
                  {[...Array(3)].map((_, dotIndex) => (
                    <span
                      key={dotIndex}
                      class="w-1 aspect-square bg-gray-500 rounded-full"
                    />
                  ))}
                </div>
              )}

            <div class="card">
              <div class="card-body p-4">
                <h2 class="card-title">{experience.title}</h2>
                <span class="flex items-center gap-2 text-gray">
                  <Icon
                    icon="majesticons:suitcase"
                    width="none"
                    height="none"
                  />
                  {experience.company}
                </span>
                <span class="flex items-center gap-2 text-gray">
                  <Icon
                    icon="tabler:calendar-filled"
                    width="none"
                    height="none"
                  />
                  {experience.timePeriod}
                </span>
                <span class="flex items-center gap-2 text-gray">
                  <Icon
                    icon="carbon:location-filled"
                    width="none"
                    height="none"
                  />
                  {experience.location}
                </span>
                <p class="mt-3 max-w-lg">{experience.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div class="max-w-xs">
        <p class="uppercase tracking-widest text-sm font-bold text-primary">The path so far</p>
        <h2 class="text-3xl font-bold text-primary mt-2">Work Experience</h2>
        <p class="mt-4">
          From internship to owning production systems, each role has added a
          deeper layer of engineering responsibility.
        </p>
      </div>
    </section>
  );
}

interface Project {
  title: string;
  description: string;
  link: string;
  type: string;
  icon: string;
}

function Projects() {
  const projects: Project[] = [
    {
      title: "Denoland Fresh",
      description:
        "Fresh is a full stack modern web framework for JavaScript and TypeScript developers.",
      link: "https://fresh.deno.dev/",
      type: "Open Source",
      icon: "logos:deno",
    },
    {
      title: "Dogr.",
      description:
        "Dogr is a web application I developed to hone my skills in Nuxt and Vue.",
      link: "https://dogr.vercel.app/",
      type: "Personal",
      icon: "logos:vue",
    },
  ];

  return (
    <section class="p-4 my-8">
      <h1 class="text-3xl font-bold text-primary text-center mb-4">
        Projects and Contributions
      </h1>
      <div class="flex flex-wrap justify-center items-center gap-2">
        {projects.map((project) => (
          <div key={project.title} class="card max-w-96">
            <div class="card-body p-4">
              <h2 class="card-title">
                <Icon
                  class="w-6 h-6"
                  icon={project.icon}
                  width="none"
                  height="none"
                />
                {project.title}
                <span class="badge badge-ghost ml-auto">{project.type}</span>
              </h2>
              <p>{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer noopener"
                class="btn btn-primary text-base-100"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Technologies() {
  const technologies = [
    "devicon:dotnetcore",
    "devicon:csharp",
    "logos:vue",
    "logos:postgresql",
    "vscode-icons:file-type-js-official",
    "logos:typescript-icon",
    "skill-icons:react-dark",
    "skill-icons:tailwindcss-dark",
    "logos:deno",
    "devicon:nodejs",
    "skill-icons:docker",
    "logos:html-5",
    "logos:css-3",
    "logos:aws",
    "logos:ruby",
    "logos:angular-icon",
  ];

  return (
    <section id="technologies" class="my-16">
      <h1 class="text-3xl font-bold text-primary text-center mb-4">
        Technologies
      </h1>
      <div class="p-4 flex justify-center items-center flex-wrap gap-4">
        {technologies.map((technology) => (
          <Icon
            key={technology}
            class="w-8 h-8"
            icon={technology}
            width="none"
            height="none"
          />
        ))}
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <EngineeringFocus />
      {/* <Projects /> */}
      <Experience />
      <Technologies />
    </>
  );
}
