import { DashboardIcon, type IconName } from "./dashboard-icons";

const navigationItems: { label: string; icon: IconName; active?: boolean }[] = [
  { label: "Dashboard", icon: "dashboard", active: true },
  { label: "Workouts", icon: "workouts" },
  { label: "Diet Plan", icon: "diet" },
  { label: "Progress", icon: "progress" },
  { label: "Measurements", icon: "measurements" },
  { label: "Gyms", icon: "gyms" },
  { label: "Trainers", icon: "trainers" },
  { label: "Bookings", icon: "bookings" },
  { label: "Profile", icon: "profile" },
];

function Brand() {
  return (
    <div className="flex h-20 items-center gap-3 px-7">
      <div className="grid size-10 place-items-center rounded-xl bg-lime-400 text-slate-950 shadow-[0_0_24px_rgba(163,230,53,0.2)]">
        <DashboardIcon name="workouts" className="size-6" />
      </div>
      <div>
        <p className="text-lg font-extrabold tracking-tight text-white">
          {"PULSE"}
          <span className="text-lime-400">FIT</span>
        </p>
        <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-500">
          Member space
        </p>
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <nav aria-label="Member navigation" className="flex min-h-0 flex-1 flex-col">
      <div className="flex-1 space-y-1 overflow-y-auto px-4 py-4">
        <p className="mb-3 px-3 text-[10px] font-bold uppercase tracking-[0.22em] text-slate-600">
          Main menu
        </p>
        {navigationItems.map((item) => (
          <a
            key={item.label}
            href="#"
            aria-current={item.active ? "page" : undefined}
            className={`group flex items-center gap-3 rounded-xl px-3.5 py-3 text-sm font-medium transition-colors ${
              item.active
                ? "bg-lime-400 text-slate-950 shadow-[0_8px_30px_rgba(163,230,53,0.14)]"
                : "text-slate-400 hover:bg-white/[0.06] hover:text-white"
            }`}
          >
            <DashboardIcon
              name={item.icon}
              className={`size-5 shrink-0 ${
                item.active ? "text-slate-950" : "text-slate-500 group-hover:text-lime-400"
              }`}
            />
            {item.label}
          </a>
        ))}
      </div>

      <div className="border-t border-white/[0.07] p-4">
        <a
          href="#"
          className="group flex items-center gap-3 rounded-xl px-3.5 py-3 text-sm font-medium text-slate-400 transition-colors hover:bg-rose-400/10 hover:text-rose-300"
        >
          <DashboardIcon name="logout" className="size-5 text-slate-500 group-hover:text-rose-300" />
          Logout
        </a>
      </div>
    </nav>
  );
}

export function DashboardSidebar() {
  return (
    <aside className="fixed inset-y-0 left-0 z-30 hidden w-64 flex-col border-r border-white/[0.06] bg-slate-950 lg:flex">
      <Brand />
      <Navigation />
    </aside>
  );
}

export function MobileNavigation() {
  return (
    <div className="lg:hidden">
      <input id="member-menu" type="checkbox" className="peer sr-only" />
      <label
        htmlFor="member-menu"
        className="grid size-10 cursor-pointer place-items-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm"
      >
        <span className="sr-only">Open navigation menu</span>
        <span className="space-y-1.5">
          <span className="block h-0.5 w-5 rounded-full bg-current" />
          <span className="block h-0.5 w-5 rounded-full bg-current" />
          <span className="block h-0.5 w-5 rounded-full bg-current" />
        </span>
      </label>
      <label
        htmlFor="member-menu"
        aria-label="Close navigation menu"
        className="pointer-events-none fixed inset-0 z-40 bg-slate-950/40 opacity-0 backdrop-blur-sm transition-opacity peer-checked:pointer-events-auto peer-checked:opacity-100"
      />
      <aside className="fixed inset-y-0 left-0 z-50 flex w-[min(20rem,86vw)] -translate-x-full flex-col bg-slate-950 shadow-2xl transition-transform duration-300 peer-checked:translate-x-0">
        <div className="flex items-center justify-between border-b border-white/[0.06] pr-5">
          <Brand />
          <label
            htmlFor="member-menu"
            aria-label="Close navigation menu"
            className="grid size-9 cursor-pointer place-items-center rounded-full bg-white/[0.07] text-xl text-white transition-colors hover:bg-white/[0.12]"
          >
            ×
          </label>
        </div>
        <Navigation />
      </aside>
    </div>
  );
}
