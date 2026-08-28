import { MemberShell } from "../layout/member-shell";
import { FeatureIntroPanel } from "../shared/feature-intro-panel";

export default function ProfilePage() {
  return (
    <MemberShell title="Profile" subtitle="Manage your member information">
      <FeatureIntroPanel
        eyebrow="Profile"
        title="Your member profile"
        description="Your personal details and membership settings will appear here."
      />
    </MemberShell>
  );
}
