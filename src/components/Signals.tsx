export default function Signals() {
  const metrics = [
    { value: "$2.8M+", label: "In funding unlocked" },
    { value: "YC", label: "Cohort acceptance" },
    { value: "1300+", label: "Active members" },
    { value: "23+", label: "Students hired by startups" },
    { value: "2025", label: "Celebrating one year" },
  ];

  return (
    <section className="py-16 lg:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-wvg-blue/5 to-black" />
      
      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="h-full w-full" style={{
          backgroundImage: `linear-gradient(to right, white 1px, transparent 1px)`,
          backgroundSize: '120px 100%'
        }} />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-white/50">03</span>
          <div className="w-12 h-[1px] bg-white/20" />
          <h2 className="font-editorial text-4xl lg:text-5xl">Signals</h2>
        </div>

        {/* Metrics grid */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-[1px] bg-white/10">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="bg-black p-8 lg:p-10 group hover:bg-white/[0.02] transition-colors duration-300"
            >
              <div className="font-editorial text-3xl lg:text-4xl xl:text-5xl mb-3 group-hover:gradient-text transition-all duration-500">
                {metric.value}
              </div>
              <p className="font-mono text-[10px] lg:text-xs uppercase tracking-wider text-white/60">
                {metric.label}
              </p>
            </div>
          ))}
        </div>

        {/* Accent line */}
        <div className="mt-12 h-[1px] bg-gradient-to-r from-wvg-green via-wvg-teal to-wvg-purple opacity-50" />
      </div>
    </section>
  );
}
