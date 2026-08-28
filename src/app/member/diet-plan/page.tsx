import { MemberShell } from "../layout/member-shell";
import { TodayDiet } from "./nutrition/today-diet";

export default function DietPlanPage() {
  return (
    <MemberShell title="Diet Plan" subtitle="Track your daily nutrition targets">
      <TodayDiet />
    </MemberShell>
  );
}
