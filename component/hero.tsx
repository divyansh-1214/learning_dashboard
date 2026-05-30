import { Flame } from "lucide-react";

export default function Hero() {
  return (
    <section
      aria-labelledby="welcome-heading"
      className="grid grid-cols-3 gap-6"
    >
      {/* Main Hero Card */}
      <article className="col-span-2 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur-xl">
        <header>
          <h1 id="welcome-heading" className="text-3xl font-bold">
            Welcome back, Divyansh
          </h1>

          <p className="mt-2 text-gray-400">
            You're in the top 5% of learners this week. Keep up the momentum.
          </p>
        </header>

        <section aria-labelledby="streak-heading" className="mt-8">
          <h2 id="streak-heading" className="sr-only">
            Learning Streak
          </h2>

          <article className="flex items-center gap-4">
            <Flame size={48} aria-hidden="true" className="text-orange-500" />

            <div>
              <p className="text-sm text-gray-400">Current Streak</p>

              <strong className="text-2xl font-bold">24 Days</strong>
            </div>
          </article>
        </section>
      </article>

      {/* Secondary Card */}
      <aside
        className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur-xl"
        aria-label="Learning Insights"
      >
        <h2 className="text-xl font-semibold">Learning Insights</h2>

        <p className="mt-2 text-gray-400">
          Personalized recommendations and analytics will appear here.
        </p>
      </aside>
    </section>
  );
}
