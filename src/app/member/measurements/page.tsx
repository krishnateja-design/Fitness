import { MemberShell } from "../layout/member-shell";
import { MeasurementsOverview } from "./body-metrics/measurements-overview";

export default function MeasurementsPage() {
  return (
    <MemberShell title="Measurements" subtitle="Monitor changes in your body measurements">
      <MeasurementsOverview />
    </MemberShell>
  );
}
