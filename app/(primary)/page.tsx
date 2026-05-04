const Home = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 font-sans dark:bg-black px-6">
      <main className="flex w-full max-w-3xl flex-col items-center justify-center text-center gap-6">
        <h1 className="text-4xl font-semibold tracking-tight text-black dark:text-white">
          Your App is Ready 🚀
        </h1>

        <p className="text-lg leading-7 text-zinc-600 dark:text-zinc-400 max-w-xl">
          This template comes pre-configured with Next.js, TypeScript, Tailwind
          CSS, ESLint, Prettier, Husky, and an SVG sprite system. Start building
          your features immediately.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 mt-4">
          <a
            href="#"
            className="px-6 py-3 rounded-full bg-black text-white dark:bg-white dark:text-black font-medium hover:opacity-80 transition"
          >
            Start Building
          </a>
        </div>

        <p className="text-sm text-zinc-500 mt-8">
          Tip: Delete this page and start building your first feature ✨
        </p>
      </main>
    </div>
  );
};

export default Home;
