const measurements = [
  {
    label: "Weight",
    current: 74,
    previous: 75,
    unit: "kg",
  },
  {
    label: "Chest",
    current: 102,
    previous: 100,
    unit: "cm",
  },
  {
    label: "Waist",
    current: 84,
    previous: 86,
    unit: "cm",
  },
];

export function MeasurementsOverview() {
  return (
    <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div>
        <p className="text-sm font-semibold text-lime-600">
          Measurements
        </p>

        <h2 className="mt-1 text-2xl font-extrabold text-slate-950">
          Body Progress
        </h2>

        <p className="mt-2 text-sm text-slate-500">
          Your latest measurements compared with your previous results.
        </p>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        {measurements.map((measurement) => {
          const difference =
            measurement.current - measurement.previous;

          return (
            <article
              key={measurement.label}
              className="rounded-xl bg-slate-50 p-4"
            >
              <p className="text-sm font-medium text-slate-500">
                {measurement.label}
              </p>

              <p className="mt-2 text-2xl font-extrabold text-slate-950">
                {measurement.current} {measurement.unit}
              </p>

              <p className="mt-2 text-sm text-slate-500">
                {difference > 0 ? "+" : ""}
                {difference} {measurement.unit} from previous
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}