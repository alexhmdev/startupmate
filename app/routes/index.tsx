export default function Index() {
  return (
    <article className="flex flex-col justify-center mx-4 md:w-[75ch] gap-y-4 ">
      <div className="flex flex-col items-end gap-x-4">
        <h1 className="text-5xl md:text-6xl text-transparent font-extrabold bg-clip-text bg-gradient-to-r from-primary to-accent">
          Welcome to StartupMate
        </h1>
        <p className="flex-none text-lg">
          - Your Partner in Entrepreneurship! 😉
        </p>
      </div>
      <p className="text-xl text-justify">
        Are you looking for a powerful tool to help you turn your business ideas
        into reality? Look no further! Our app, StartupMate, is designed to help
        you generate innovative business ideas, craft a winning business model,
        and bring your vision to life. With StartupMate, you'll have all the
        resources you need to take your first steps towards entrepreneurship
        success. Join the countless entrepreneurs who have already used
        StartupMate to launch their businesses and start your journey today!
      </p>
    </article>
  );
}
