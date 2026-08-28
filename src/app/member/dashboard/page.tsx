import { MemberShell, memberName } from "../layout/member-shell";
import { FitnessSummary } from "./overview/fitness-summary";
import { WelcomeBanner } from "./overview/welcome-banner";

export default function MemberDashboardPage() {
  return (
    <MemberShell>
      <WelcomeBanner memberName={memberName} />
      <FitnessSummary />
    </MemberShell>
  );
}
