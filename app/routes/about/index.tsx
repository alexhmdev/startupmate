export default function About() {
  return (
    <section className="flex flex-col justify-center w-[80ch] mx-4 gap-y-4">
      <div className="text-xl text-justify">
        <h1 className="text-4xl md:text-5xl leading-tight md:leading-tight text-gradient-theme">
          What can StartupMate do?
        </h1>
        <br />
        <p>
          This awesome IA can help yo to give you some startup ideas with less
          eforth.
          <br />
          With just giving a some words to StartupMate, you have a fast idea for
          your startup!
          <br />
          Just feel free to explore and be creative about what you can create
          with this awesome IA! 💡
        </p>
      </div>
      <div className="text-xl text-justify">
        <h1 className="text-4xl md:text-5xl text-gradient-theme">
          Main features
        </h1>
        <br />
        <ul className="list-disc list-inside">
          <li>Generate a startup idea</li>
          <li>Generate a business model canvas and export it</li>
          <li>See your IA responses</li>
        </ul>
      </div>
    </section>
  );
}
