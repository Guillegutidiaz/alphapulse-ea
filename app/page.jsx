export default function Home() {
  return (
    <main className="bg-[#0B0F1A] text-white min-h-screen font-sans">

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-24 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Trade with statistical edge.<br />Not emotions.
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto mb-10">
          AlphaPulse EA is a rule-based expert advisor designed to trade consistently
          under real market conditions.
        </p>
        <a
          href="#pricing"
          className="inline-block bg-emerald-500 hover:bg-emerald-600 text-black font-semibold px-8 py-4 rounded-lg text-lg"
        >
          Get Instant Access – $100
        </a>
      </section>

      {/* PERFORMANCE */}
      <section className="bg-[#11162A] py-20">
        <div className="max-w-5xl mx-auto grid md:grid-cols-4 gap-6 px-6 text-center">
          {[
            ["Max Drawdown", "< 12%"],
            ["Win Rate", "58%"],
            ["Risk / Reward", "1 : 1.8"],
            ["Timeframe", "H1 – H4"],
          ].map(([title, value]) => (
            <div key={title} className="border border-gray-700 rounded-xl p-6">
              <p className="text-gray-400">{title}</p>
              <p className="text-2xl font-bold mt-2">{value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why AlphaPulse EA Works
        </h2>
        <div className="grid md:grid-cols-2 gap-8 text-gray-300">
          <ul className="space-y-4">
            <li>✔ Rule-based quantitative logic</li>
            <li>✔ No martingale, no grid</li>
            <li>✔ Dynamic risk management</li>
            <li>✔ Works in real market conditions</li>
          </ul>
          <ul className="space-y-4">
            <li>✔ Compatible with most brokers</li>
            <li>✔ Optimized execution logic</li>
            <li>✔ Fully automated trading</li>
            <li>✔ Long-term consistency focus</li>
          </ul>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-[#11162A] py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8 text-gray-300">
            <div>
              <h3 className="font-semibold text-xl mb-2">1. Install</h3>
              <p>Attach AlphaPulse EA to your MT5 platform.</p>
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-2">2. Configure</h3>
              <p>Choose your preferred risk level.</p>
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-2">3. Trade</h3>
              <p>The system executes trades automatically.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="max-w-5xl mx-auto px-6 py-24 text-center">
        <h2 className="text-4xl font-bold mb-6">$100 – One-Time Payment</h2>
        <p className="text-gray-300 mb-8">
          Lifetime license • Free updates • Instant access
        </p>
        <button className="bg-emerald-500 hover:bg-emerald-600 text-black font-semibold px-10 py-4 rounded-lg text-lg">
          Buy AlphaPulse EA
        </button>
      </section>

      {/* DISCLAIMER */}
      <footer className="bg-black py-12 px-6 text-sm text-gray-500 text-center">
        Trading involves risk. Past performance does not guarantee future results.
        This product is not financial advice.
      </footer>

    </main>
  );
}
