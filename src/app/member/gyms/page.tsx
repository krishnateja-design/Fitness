import { MemberShell } from "../layout/member-shell";
import { FeatureIntroPanel } from "../shared/feature-intro-panel";

export default function GymsPage() {
  return (
    <MemberShell title="Gyms" subtitle="Explore gyms available to your membership">
      <FeatureIntroPanel
        eyebrow="Gyms"
        title="Find your training space"
        description="Your available gym locations will appear here."
      />
    </MemberShell>
  );
}
