import { MemberShell } from "../layout/member-shell";
import { WeeklyProgress } from "./activity/weekly-progress";

export default function ProgressPage() {
  return (
    <MemberShell title="Progress" subtitle="Review your fitness activity and results">
      <WeeklyProgress />
    </MemberShell>
  );
}
