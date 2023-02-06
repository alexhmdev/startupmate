export default function About() {
  return (
    <section className="flex flex-col justify-center w-auto mx-4 gap-y-4">
      <div className="text-xl text-justify">
        <h1 className="text-3xl md:text-4xl leading-tight md:leading-tight text-gradient-theme">
          What can StartupMate do?
        </h1>
        <br />
        <p>
          This awesome AI can help you generate some startup ideas with minimal
          eforth.
          <br />
          Simply provide a few words to StartupMate, and you'll quickly have a
          great idea for your startup.
          <br />
          Just feel free to explore and be creative about what you can create
          with this awesome AI! 💡
        </p>
      </div>
      <div className="text-xl text-justify">
        <h1 className="text-3xl md:text-4xl text-gradient-theme">
          Main features
        </h1>
        <br />
        <ul className="list-disc list-inside">
          <li>Generate a startup idea</li>
          <li>Generate a business model canvas and export it</li>
          <li>See your AI responses</li>
        </ul>
      </div>
    </section>
  );
}
