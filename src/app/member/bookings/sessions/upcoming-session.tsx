export function UpcomingSession() {
  return (
    <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-lime-600">
            Upcoming Session
          </p>

          <h2 className="mt-1 text-2xl font-extrabold tracking-tight text-slate-950">
            Rahul Sharma
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Strength & Muscle Building
          </p>

          <div className="mt-4 flex flex-wrap gap-3 text-sm text-slate-600">
            <span className="rounded-lg bg-slate-100 px-3 py-2">
              Tomorrow
            </span>

            <span className="rounded-lg bg-slate-100 px-3 py-2">
              7:00 AM
            </span>
          </div>
        </div>

        <button
          type="button"
          className="rounded-xl bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
        >
          View Booking
        </button>
      </div>
    </section>
  );
}
