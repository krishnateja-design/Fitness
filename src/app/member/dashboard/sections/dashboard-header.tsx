import { BellIcon, ChevronIcon } from "./dashboard-icons";
import { MobileNavigation } from "./dashboard-sidebar";

type DashboardHeaderProps = {
  memberName: string;
};

export function DashboardHeader({ memberName }: DashboardHeaderProps) {
  return (
    <header className="sticky top-0 z-20 flex h-20 items-center justify-between border-b border-slate-200/80 bg-white/90 px-4 backdrop-blur-xl sm:px-6 lg:px-8">
      <div className="flex min-w-0 items-center gap-3">
        <MobileNavigation />
        <div className="min-w-0">
          <h1 className="truncate text-lg font-bold tracking-tight text-slate-950 sm:text-xl">
            Member Dashboard
          </h1>
          <p className="hidden text-xs text-slate-500 sm:block">Welcome back, {memberName}</p>
        </div>
      </div>

      <div className="flex items-center gap-2 sm:gap-3">
        <button
          type="button"
          aria-label="View notifications"
          className="relative grid size-10 place-items-center rounded-xl border border-slate-200 bg-white text-slate-600 shadow-sm transition-colors hover:border-lime-300 hover:text-slate-950"
        >
          <BellIcon className="size-5" />
          <span className="absolute right-2 top-2 size-2 rounded-full bg-lime-500 ring-2 ring-white" />
        </button>

        <button
          type="button"
          aria-label="Open profile menu"
          className="flex items-center gap-2 rounded-xl p-1.5 transition-colors hover:bg-slate-100 sm:gap-3 sm:pr-2"
        >
          <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-slate-950 text-sm font-bold text-lime-400 ring-2 ring-lime-300/50">
            KP
          </span>
          <span className="hidden text-left md:block">
            <span className="block text-sm font-semibold text-slate-900">{memberName}</span>
            <span className="block text-[11px] text-slate-500">Premium member</span>
          </span>
          <ChevronIcon className="hidden size-4 rotate-90 text-slate-400 md:block" />
        </button>
      </div>
    </header>
  );
}
