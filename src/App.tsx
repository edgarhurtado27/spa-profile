
function App() {

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="mx-auto max-w-5xl px-6 py-16">
        <p className="text-sm font-medium uppercase tracking-widest text-violet-400">
          Frontend Engineer
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-6xl">
          Edgar Hurtado
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-slate-300">
          I build clean, user-focused web interfaces with React, Angular, and
          modern frontend tooling.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          {['React', 'Angular', 'Tailwind CSS', 'Webpack', 'Material UI'].map(
            (skill) => (
              <span
                key={skill}
                className="rounded-full border border-violet-500/50 bg-violet-500/10 px-4 py-2 text-sm"
              >
                {skill}
              </span>
            ),
          )}
        </div>
      </section>
    </main>
  )
}

export default App
