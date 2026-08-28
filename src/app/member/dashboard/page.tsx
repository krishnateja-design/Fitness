import { DashboardHeader } from "./sections/dashboard-header";
import { DashboardSidebar } from "./sections/dashboard-sidebar";
import { WelcomePanel } from "./sections/welcome-panel";
import { SummaryCards } from "./sections/summary-cards";
import { TodayWorkout } from "./sections/today-workout";
import { TodayDiet } from "./sections/today-diet";
import {UpcomingSession} from "./sections/upcoming-session";
import {WeeklyProgress} from "./sections/weekly-progress";
import {MeasurementsOverview} from "./sections/measurements-overview";

const mockMember = {
  name: "Krishna",
};

export default function MemberDashboardPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-950">
      <DashboardSidebar />

      <div className="min-h-screen lg:pl-64">
        <DashboardHeader memberName={mockMember.name} />
        <main className="px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
          <WelcomePanel memberName={mockMember.name} />
          <SummaryCards />
          <TodayWorkout />
          <TodayDiet />
          <UpcomingSession />
          <WeeklyProgress />
          <MeasurementsOverview />
        </main>
      </div>
    </div>
  );
}
