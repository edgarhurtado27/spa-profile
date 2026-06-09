import Experience from "./components/experience/Experience";
import Skills from "./components/skills/Skills";
import Stack from "./components/stack/Stack";
import Header from "./components/header/Header";


const greetings = "Hello, I'm";

const PERSONAL_INFO = {
  name: "Edgar",
  lastName: "Hurtado",
  role: "Backend Software Engineer",
  liUrl: "https://www.linkedin.com/in/edgar-ivan-hurtado-guzman-6068a7135/",
  ghUrl: "https://github.com/edgarhurtado27",
  email: "edgarivancs@gmail.com",
};

const getFullName = () => {
  return `${PERSONAL_INFO.name} ${PERSONAL_INFO.lastName}`;
};

function HeroComponent() {
  const initExpYr = 2018;
  const currentYear = new Date().getFullYear();

  const yrsExp = currentYear - initExpYr;


  return (
    <section className="min-h-screen bg-[#F9FAFB] text-stone-900 dark:bg-[#1E1E22] dark:text-zinc-100 transition-colors duration-500">
      <div className="mx-auto max-w-6xl px-6 py-5 ">
      <Header />



        {/* Presentation */}
        <div
          className="mt-20 grid
    grid-cols-1
    lg:grid-cols-[4fr_1fr]
    gap-8"
        >
          <section>
            <p className="text-sm font-semibold tracking-widest text-[#3B82F6] dark:text-blue-300">
              {greetings}
            </p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              {getFullName()}
            </h1>
            <p className="mt-3 text-sm font-semibold tracking-widest text-[#3B82F6] dark:text-blue-300">
              {PERSONAL_INFO.role}
            </p>

            <p className="mt-3 text-gray-700 dark:text-gray-400 mt-2 text-sm">
              I build scalable backend systems, design clean architectures and
              solve complex problems.
              <br />
              Beyond coding, I’m passionate about continuous learning, I
              regularly practice algorithmic problem solving and study system
              design concepts.
            </p>

            <div className="flex gap-9 items-center mt-5 text-gray-700 dark:text-gray-400 mt-2 text-sm">
              <div className="flex gap-1 items-center align-start">
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
                    d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
                  />
                </svg>
                <p>{yrsExp}+ Years Experience</p>
              </div>

              <div className="flex gap-1 items-center align-start">
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
                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                  />
                </svg>
                <p>Based in Mexico</p>
              </div>

              <div className="flex gap-1 items-center align-start">
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
                    d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>

                <p> Available for new oportunities</p>
              </div>
            </div>
          </section>

          <div>
            <img
              className="rounded-full bg-white dark:bg-zinc-900
border border-stone-300 dark:border-zinc-800 p-2"
              src="/images/photo_profile.webp"
            ></img>
          </div>
        </div>

        {/* What I Bring! */}

        <Skills />

        {/* Stack */}
        <Stack />

        <Experience />
      </div>
    </section>
  );
}

export default HeroComponent;
