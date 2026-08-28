import { MemberShell } from "../layout/member-shell";
import { FeatureIntroPanel } from "../shared/feature-intro-panel";

export default function TrainersPage() {
  return (
    <MemberShell title="Trainers" subtitle="Connect with fitness professionals">
      <FeatureIntroPanel
        eyebrow="Trainers"
        title="Meet your fitness experts"
        description="Your trainers and available coaching options will appear here."
      />
    </MemberShell>
  );
}
