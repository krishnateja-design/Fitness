const summaryItems = [
  {
    label: "Fitness Goal",
    value: "Muscle Gain",
    helper: "Current focus",
  },
  {
    label: "Current Weight",
    value: "74 kg",
    helper: "Latest measurement",
  },
  {
    label: "Workout Streak",
    value: "6 Days",
    helper: "Keep it going",
  },
  {
    label: "Weekly Workouts",
    value: "4 / 5",
    helper: "1 workout remaining",
  },
];

export function FitnessSummary() {
  return (
    <section className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {summaryItems.map((item) => (
        <article
          key={item.label}
          className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
        >
          <p className="text-sm font-semibold text-slate-500">
            {item.label}
          </p>

          <p className="mt-3 text-2xl font-extrabold tracking-tight text-slate-950">
            {item.value}
          </p>

          <div className="mt-4 flex items-center gap-2">
            <span className="size-2 rounded-full bg-lime-400" />
            <p className="text-sm text-slate-500">
              {item.helper}
            </p>
          </div>
        </article>
      ))}
    </section>
  );
}
