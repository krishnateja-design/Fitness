type FeatureIntroPanelProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function FeatureIntroPanel({
  eyebrow,
  title,
  description,
}: FeatureIntroPanelProps) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <p className="text-sm font-semibold text-lime-600">{eyebrow}</p>
      <h2 className="mt-1 text-2xl font-extrabold tracking-tight text-slate-950">
        {title}
      </h2>
      <p className="mt-2 max-w-2xl text-sm text-slate-500">{description}</p>
    </section>
  );
}
