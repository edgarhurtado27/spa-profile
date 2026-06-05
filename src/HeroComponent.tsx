import { useState, useEffect } from "react";

const coreStack = [
  "Java",
  "Node",
  "React",
  "Angular",
  "Oracle DB",
  "Mongo",
  "TypeScript",
  "Tailwind CSS",
  "Apache Camel",
];

const whatIDo = [
  "Build responsive and accessible user interfaces",
  "Turn product requirements into scalable backend systems",
];

const howIWork = [
  "Clear communication with product and develop teams",
  "Continuous improvement through iteration and feedback",
];

const PERSONAL_INFO = {
  name: "Edgar",
  lastName: "Hurtado",
  role: "Software Engineer",
};

const getFullName = () => {
  return `${PERSONAL_INFO.name} ${PERSONAL_INFO.lastName}`;
};

function HeroComponent() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved) {
      setTheme(saved);
      document.documentElement.classList.toggle("dark", saved === "dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };

  return (
    <section className="min-h-screen bg-[#F9FAFB] text-stone-900 dark:bg-[#1E1E22] dark:text-zinc-100 transition-colors duration-500">
      <div className="mx-auto max-w-6xl px-6 py-10 ">
<div className="mx-auto max-w-6xl px-6 py-16 flex justify-end">
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full dark:hover:bg-gray-900 hover:bg-gray-300 transition"
        >
          {theme === "light" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
              />
            </svg>
          )}
        </button>
        </div>

        {/* Presentation */}
        <div className="grid gap-8 lg:grid-cols-[3fr_1fr] lg:items-start">
          <div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              {getFullName()}
            </h1>
            <p className="mt-3 text-sm font-medium uppercase tracking-widest text-[#3B82F6] dark:text-blue-300">
              {PERSONAL_INFO.role}
            </p>

            <div className="mt-8 rounded-2xl bg-white dark:bg-[#27282D] rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5 p-6">
              <h2 className="text-lg font-semibold">Who Am I</h2>
              <p className="mt-3 text-gray-700 dark:text-gray-400 mt-2 text-sm">
                I’m a Software Engineer focused on building scalable backend
                systems. My main expertise is in Java development, but I’ve also
                explored modern frontend technologies like React, Angular,
                Next.js and Tailwind. Beyond coding, I’m passionate about
                continuous learning, I regularly practice algorithmic problem
                solving and study system design concepts.
              </p>
            </div>
          </div>
          <div>
            <img
              className="rounded-full bg-white dark:bg-zinc-900
border border-stone-300 dark:border-zinc-800 p-2"
              src="./src/assets/images/photo_profile.webp"
            ></img>
          </div>
        </div>

        {/* What I do section! */}
        <div className="mt-5 grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div className="grid gap-4">
            <article
              className="rounded-2xl bg-white dark:bg-[#27282D]
border border-slate-200 dark:border-zinc-800 p-6 shadow-xl"
            >
              <h2 className="text-lg font-semibold">What I Do</h2>
              <ul className="mt-3 space-y-2 text-sm leading-7 text-gray-700 dark:text-gray-400">
                {whatIDo.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#3B82F6] dark:bg-blue-300" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
          <div className="grid gap-4">
            <article
              className="rounded-2xl bg-white dark:bg-[#27282D]
border border-slate-200 dark:border-zinc-800 p-6 shadow-xl"
            >
              <h2 className="text-lg font-semibold">How I Work</h2>
              <ul className="mt-3 space-y-2 text-sm leading-7 text-gray-700 dark:text-gray-400">
                {howIWork.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#3B82F6] dark:bg-blue-300" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>

        {/* Stack */}
        <div className="mt-8 rounded-2xl bg-white dark:bg-[#27282D] rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5 p-6">
          <h2 className="text-lg font-semibold">My Stack</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            {coreStack.map((stackItem) => (
              <span
                key={stackItem}
                className="rounded-full bg-[#34363F] px-4 py-2 text-sm text-slate-100"
              >
                {stackItem}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroComponent;
