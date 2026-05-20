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
  "Design and build responsive, accessible user interfaces",
  "Turn product requirements into scalable frontend architecture",
  "Ship polished experiences focused on usability and performance",
];

const howIWork = [
  "Component-driven development",
  "Clear communication with product and design teams",
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
  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
  };

  return (
    <section className="min-h-screen bg-stone-50 text-stone-900 dark:bg-zinc-950 dark:text-zinc-100 transition-colors duration-500">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <button onClick={toggleTheme}>Toggle Theme</button>

        {/* Presentation */}
        <div className="grid gap-8 lg:grid-cols-[3fr_1fr] lg:items-start">
          <div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              {getFullName()}
            </h1>
            <p className="mt-3 text-sm font-medium uppercase tracking-widest text-violet-400">
              {PERSONAL_INFO.role}
            </p>

            <div
              className="mt-8 rounded-2xl bg-white dark:bg-gray-800 rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5 p-6"
            >
              <h2 className="text-gray-900 dark:text-white mt-5 text-base font-medium tracking-tight">
                Who Am I
              </h2>
              <p className="mt-3 text-gray-500 dark:text-gray-400 mt-2 text-sm">
                I’m a Software Engineer focused on building scalable backend
                systems. My main expertise is in Java development, working with
                technologies such as Spring Boot, but I’ve also explored modern
                frontend technologies like Next.js, React, Angular and Tailwind
                CSS. Beyond coding, I’m passionate about continuous learning,
                chess and even dancing! I regularly practice algorithmic problem
                solving and study system design concepts.
              </p>
            </div>
          </div>
          <div>
            <img
              className="rounded-full bg-white dark:bg-zinc-900
border border-stone-200 dark:border-zinc-800 p-2"
              src="./src/assets/images/photo_profile.webp"
            ></img>
          </div>
        </div>

        {/* What I do section! */}
        <div className="mt-5 grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div className="grid gap-4">
            <article
              className="rounded-2xl bg-white dark:bg-zinc-900
border border-stone-200 dark:border-zinc-800 p-6"
            >
              <h2 className="text-lg font-semibold text-violet-300">
                What I Do
              </h2>
              <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-300">
                {whatIDo.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-violet-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
          <div className="grid gap-4">
            <article
              className="rounded-2xl bg-white dark:bg-zinc-900
border border-stone-200 dark:border-zinc-800 p-6"
            >
              <h2 className="text-lg font-semibold text-violet-300">
                How I Work
              </h2>
              <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-300">
                {howIWork.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-violet-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>

        {/* Stack */}
        <div className="mt-8 rounded-2xl bg-white dark:bg-gray-800 rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5 p-6">
          <h2 className="text-gray-900 dark:text-white mt-5 text-base font-medium tracking-tight">My Stack</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            {coreStack.map((stackItem) => (
              <span
                key={stackItem}
                className="rounded-full border border-violet-500/40 bg-slate-900 px-4 py-2 text-sm text-slate-100"
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
