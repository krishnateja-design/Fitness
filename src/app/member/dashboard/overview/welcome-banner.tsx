type WelcomeBannerProps = {
  memberName: string;
};

export function WelcomeBanner({ memberName }: WelcomeBannerProps) {
  return (
    <section className="relative isolate overflow-hidden rounded-3xl bg-slate-950 px-6 py-10 shadow-[0_24px_60px_rgba(15,23,42,0.14)] sm:px-10 sm:py-12 lg:px-12 lg:py-14">
      <div className="absolute -right-20 -top-24 -z-10 size-80 rounded-full border-[44px] border-lime-400/[0.08]" />
      <div className="absolute -bottom-24 right-20 -z-10 size-56 rounded-full bg-lime-400/[0.08] blur-3xl" />
      <div className="absolute inset-y-0 right-[18%] -z-10 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />

      <div className="max-w-2xl">
        <div className="mb-5 flex items-center gap-2">
          <span className="h-px w-8 bg-lime-400" />
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-lime-400">
            Let&apos;s get stronger
          </span>
        </div>
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
          Good afternoon, <span className="text-lime-400">{memberName}</span>
        </h2>
        <p className="mt-4 text-base text-slate-300 sm:text-lg">
          Ready to make progress today?
        </p>
      </div>
    </section>
  );
}
