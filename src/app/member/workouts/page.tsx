import { MemberShell } from "../layout/member-shell";
import { TodayWorkout } from "./workout/today-workout";

export default function WorkoutsPage() {
  return (
    <MemberShell title="Workouts" subtitle="View and continue your training plan">
      <TodayWorkout />
    </MemberShell>
  );
}
