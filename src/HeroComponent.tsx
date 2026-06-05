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
  liUrl: "https://www.linkedin.com/in/edgar-ivan-hurtado-guzman-6068a7135/",
  ghUrl: "https://github.com/edgarhurtado27",
  email: "edgarivancs@gmail.com",
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
            className="cursor-pointer p-2 rounded-full dark:hover:bg-gray-900 hover:bg-gray-300 transition"
          >
            {theme === "light" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-6"
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
            <p className="mt-3 flex gap-4 text-sm font-medium tracking-widest text-[#3B82F6] dark:text-blue-300 items-center">
              {PERSONAL_INFO.role} |
                <a
                  href={PERSONAL_INFO.ghUrl}
                  target="_blank"
                  rel="noopener noreferrer">
                  <svg
                    fill="#000000"
                    className="size-6"
                    viewBox="0 -0.5 25 25"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="m12.301 0h.093c2.242 0 4.34.613 6.137 1.68l-.055-.031c1.871 1.094 3.386 2.609 4.449 4.422l.031.058c1.04 1.769 1.654 3.896 1.654 6.166 0 5.406-3.483 10-8.327 11.658l-.087.026c-.063.02-.135.031-.209.031-.162 0-.312-.054-.433-.144l.002.001c-.128-.115-.208-.281-.208-.466 0-.005 0-.01 0-.014v.001q0-.048.008-1.226t.008-2.154c.007-.075.011-.161.011-.249 0-.792-.323-1.508-.844-2.025.618-.061 1.176-.163 1.718-.305l-.076.017c.573-.16 1.073-.373 1.537-.642l-.031.017c.508-.28.938-.636 1.292-1.058l.006-.007c.372-.476.663-1.036.84-1.645l.009-.035c.209-.683.329-1.468.329-2.281 0-.045 0-.091-.001-.136v.007c0-.022.001-.047.001-.072 0-1.248-.482-2.383-1.269-3.23l.003.003c.168-.44.265-.948.265-1.479 0-.649-.145-1.263-.404-1.814l.011.026c-.115-.022-.246-.035-.381-.035-.334 0-.649.078-.929.216l.012-.005c-.568.21-1.054.448-1.512.726l.038-.022-.609.384c-.922-.264-1.981-.416-3.075-.416s-2.153.152-3.157.436l.081-.02q-.256-.176-.681-.433c-.373-.214-.814-.421-1.272-.595l-.066-.022c-.293-.154-.64-.244-1.009-.244-.124 0-.246.01-.364.03l.013-.002c-.248.524-.393 1.139-.393 1.788 0 .531.097 1.04.275 1.509l-.01-.029c-.785.844-1.266 1.979-1.266 3.227 0 .025 0 .051.001.076v-.004c-.001.039-.001.084-.001.13 0 .809.12 1.591.344 2.327l-.015-.057c.189.643.476 1.202.85 1.693l-.009-.013c.354.435.782.793 1.267 1.062l.022.011c.432.252.933.465 1.46.614l.046.011c.466.125 1.024.227 1.595.284l.046.004c-.431.428-.718 1-.784 1.638l-.001.012c-.207.101-.448.183-.699.236l-.021.004c-.256.051-.549.08-.85.08-.022 0-.044 0-.066 0h.003c-.394-.008-.756-.136-1.055-.348l.006.004c-.371-.259-.671-.595-.881-.986l-.007-.015c-.198-.336-.459-.614-.768-.827l-.009-.006c-.225-.169-.49-.301-.776-.38l-.016-.004-.32-.048c-.023-.002-.05-.003-.077-.003-.14 0-.273.028-.394.077l.007-.003q-.128.072-.08.184c.039.086.087.16.145.225l-.001-.001c.061.072.13.135.205.19l.003.002.112.08c.283.148.516.354.693.603l.004.006c.191.237.359.505.494.792l.01.024.16.368c.135.402.38.738.7.981l.005.004c.3.234.662.402 1.057.478l.016.002c.33.064.714.104 1.106.112h.007c.045.002.097.002.15.002.261 0 .517-.021.767-.062l-.027.004.368-.064q0 .609.008 1.418t.008.873v.014c0 .185-.08.351-.208.466h-.001c-.119.089-.268.143-.431.143-.075 0-.147-.011-.214-.032l.005.001c-4.929-1.689-8.409-6.283-8.409-11.69 0-2.268.612-4.393 1.681-6.219l-.032.058c1.094-1.871 2.609-3.386 4.422-4.449l.058-.031c1.739-1.034 3.835-1.645 6.073-1.645h.098-.005zm-7.64 17.666q.048-.112-.112-.192-.16-.048-.208.032-.048.112.112.192.144.096.208-.032zm.497.545q.112-.08-.032-.256-.16-.144-.256-.048-.112.08.032.256.159.157.256.047zm.48.72q.144-.112 0-.304-.128-.208-.272-.096-.144.08 0 .288t.272.112zm.672.673q.128-.128-.064-.304-.192-.192-.32-.048-.144.128.064.304.192.192.32.044zm.913.4q.048-.176-.208-.256-.24-.064-.304.112t.208.24q.24.097.304-.096zm1.009.08q0-.208-.272-.176-.256 0-.256.176 0 .208.272.176.256.001.256-.175zm.929-.16q-.032-.176-.288-.144-.256.048-.224.24t.288.128.225-.224z" />
                  </svg>
                </a>

                <a
                  href={PERSONAL_INFO.liUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    className="size-6"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="#0288D1"
                      d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
                    ></path>
                    <path
                      fill="#FFF"
                      d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"
                    ></path>
                  </svg>
                </a>

                <a href={`mailto:'${PERSONAL_INFO.email}`}>

<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z" />
</svg>
                </a>

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
              src="/images/photo_profile.webp"
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
