const coreStack = [
  "Java",
  "Spring Boot",
  "Angular",
  "Oracle DB",
  "TypeScript",
  "Tailwind CSS",
];

const prevStack = [
  "Node",
  "Quarkus",
  "HCL Commerce",
  "Rabbit MQ",
  "React",
  "Mongo",
  "AngularJS",
  "EC2",
  "S3",
  "Axis2",
  "Apache Camel",
];

function Stack() {
  return (
    <>
      <div className="mt-15">
        <h1 className="text-3xl font-bold">Tech Stack</h1>
      </div>

      <div className="mt-10 grid grid-row gap-5">
        <div
          className="grid grid-cols-1
    lg:grid-cols-[1fr_4fr]
    gap-8"
        >
          <div className="text-md font-bold tracking-widest text-[#3B82F6] dark:text-blue-300">
            Core expertise
          </div>
          <div className="flex flex-wrap gap-2">
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

        <div
          className="grid grid-cols-1
    lg:grid-cols-[1fr_4fr]
    gap-8"
        >
          <div className="text-md font-bold tracking-widest text-[#3B82F6] dark:text-blue-300">
            Also worked with
          </div>
          <div className="flex flex-wrap gap-2">
            {prevStack.map((stackItem) => (
              <span
                key={stackItem}
                className="rounded-full bg-mist-400 px-4 py-2 text-sm text-slate-100"
              >
                {stackItem}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Stack;
