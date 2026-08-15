const CLIENT_LOGOS = [
  "Nova",
  "Fieldstone",
  "Aperture",
  "Northwind",
  "Vantage",
  "Cascade",
];

export default function LogoStrip() {
  return (
    <section className="w-full bg-white px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-8">
        {CLIENT_LOGOS.map((name) => (
          <span
            key={name}
            className="text-lg font-semibold tracking-tight text-neutral-300 grayscale select-none"
          >
            {name}
          </span>
        ))}
      </div>
    </section>
  );
}