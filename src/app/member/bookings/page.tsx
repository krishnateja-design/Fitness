import { MemberShell } from "../layout/member-shell";
import { UpcomingSession } from "./sessions/upcoming-session";

export default function BookingsPage() {
  return (
    <MemberShell title="Bookings" subtitle="Manage your upcoming training sessions">
      <UpcomingSession />
    </MemberShell>
  );
}
