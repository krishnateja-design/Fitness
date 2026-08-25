const exercises = [
  { name: "Bench Press", sets: "4 × 10", completed: true },
  { name: "Incline Dumbbell Press", sets: "3 × 12", completed: true },
  { name: "Tricep Pushdown", sets: "3 × 12", completed: false },
];

export function TodayWorkout() {
  return (
    <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-lime-600">Today&apos;s Workout</p>

          <h2 className="mt-1 text-2xl font-extrabold tracking-tight text-slate-950">
            Chest + Triceps
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            6 exercises • 55 min
          </p>
        </div>

        <button
          type="button"
          className="rounded-xl bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
        >
          Continue Workout
        </button>
      </div>

      <div className="mt-6">
        <div className="mb-2 flex items-center justify-between text-sm">
          <span className="font-medium text-slate-600">Workout Progress</span>
          <span className="font-semibold text-slate-950">40%</span>
        </div>

        <div className="h-2 overflow-hidden rounded-full bg-slate-100">
          <div className="h-full w-[40%] rounded-full bg-lime-400" />
        </div>
      </div>

      <div className="mt-6 space-y-3">
        {exercises.map((exercise) => (
          <div
            key={exercise.name}
            className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50 px-4 py-3"
          >
            <div>
              <p className="font-semibold text-slate-900">{exercise.name}</p>
              <p className="mt-1 text-sm text-slate-500">{exercise.sets}</p>
            </div>

            <span
              className={`rounded-full px-3 py-1 text-xs font-semibold ${
                exercise.completed
                  ? "bg-lime-100 text-lime-700"
                  : "bg-slate-200 text-slate-600"
              }`}
            >
              {exercise.completed ? "Completed" : "Pending"}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}