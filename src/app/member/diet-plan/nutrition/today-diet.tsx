const macros = [
  { label: "Protein", value: "110g" },
  { label: "Carbs", value: "180g" },
  { label: "Fat", value: "55g" },
];

export function TodayDiet() {
  return (
    <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-lime-600">
            Today&apos;s Diet
          </p>

          <h2 className="mt-1 text-2xl font-extrabold tracking-tight text-slate-950">
            Daily Nutrition
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            Stay on track with your daily calorie and macro targets.
          </p>
        </div>

        <button
          type="button"
          className="rounded-xl bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
        >
          View Diet Plan
        </button>
      </div>

      <div className="mt-6">
        <div className="mb-2 flex items-center justify-between text-sm">
          <span className="font-medium text-slate-600">
            Calories
          </span>

          <span className="font-semibold text-slate-950">
            1,450 / 2,400 kcal
          </span>
        </div>

        <div className="h-2 overflow-hidden rounded-full bg-slate-100">
          <div className="h-full w-[60%] rounded-full bg-lime-400" />
        </div>
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        {macros.map((macro) => (
          <div
            key={macro.label}
            className="rounded-xl border border-slate-100 bg-slate-50 p-4"
          >
            <p className="text-sm font-medium text-slate-500">
              {macro.label}
            </p>

            <p className="mt-1 text-xl font-bold text-slate-950">
              {macro.value}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
