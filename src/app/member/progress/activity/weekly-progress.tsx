const weeklyProgress = {
  workoutsCompleted: 4,
  workoutTarget: 5,
  caloriesBurned: 1850,
  activeMinutes: 210,
};

export function WeeklyProgress() {
  const workoutPercentage =
    (weeklyProgress.workoutsCompleted / weeklyProgress.workoutTarget) * 100;

  return (
    <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div>
        <p className="text-sm font-semibold text-lime-600">
          Weekly Progress
        </p>

        <h2 className="mt-1 text-2xl font-extrabold text-slate-950">
          Your Activity
        </h2>

        <p className="mt-2 text-sm text-slate-500">
          See how you&apos;re progressing this week.
        </p>
      </div>

      <div className="mt-6">
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold text-slate-700">
            Workouts
          </p>

          <p className="text-sm font-bold text-slate-950">
            {weeklyProgress.workoutsCompleted} / {weeklyProgress.workoutTarget}
          </p>
        </div>

        <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-100">
          <div
            className="h-full rounded-full bg-lime-400"
            style={{ width: `${workoutPercentage}%` }}
          />
        </div>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl bg-slate-50 p-4">
          <p className="text-sm text-slate-500">
            Calories Burned
          </p>

          <p className="mt-1 text-xl font-bold text-slate-950">
            {weeklyProgress.caloriesBurned} kcal
          </p>
        </div>

        <div className="rounded-xl bg-slate-50 p-4">
          <p className="text-sm text-slate-500">
            Active Minutes
          </p>

          <p className="mt-1 text-xl font-bold text-slate-950">
            {weeklyProgress.activeMinutes} min
          </p>
        </div>
      </div>
    </section>
  );
}
