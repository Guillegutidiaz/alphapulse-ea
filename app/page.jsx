export default function Home() {
  return (
    <main className="bg-[#0B0F1A] text-white min-h-screen font-sans">

      {/* ================= HERO ================= */}
      <section className="max-w-4xl mx-auto px-6 py-32 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Trade with statistical edge.<br />Not emotions.
        </h1>

        <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
          AlphaPulse EA is a rule-based expert advisor designed to operate
          consistently under real market conditions.
        </p>

        <a
          href="#pricing"
          className="inline-block bg-emerald-500 hover:bg-emerald-600 text-black font-semibold px-10 py-4 rounded-xl text-lg"
        >
          Get Instant Access – $100
        </a>
      </section>

      {/* ================= METRICS ================= */}
      <section className="bg-[#11162A] py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-6">
          {[
            ["Max Drawdown", "< 12%"],
            ["Win Rate", "58%"],
            ["Risk / Reward", "1 : 1.8"],
            ["Timeframe", "H1 – H4"],
          ].map(([label, value]) => (
            <div
              key={label}
              className="border border-gray-700 rounded-xl p-6 text-center"
            >
              <p className="text-gray-400 mb-2">{label}</p>
              <p className="text-2xl font-bold">{value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= WHY ================= */}
      <section className="max-w-5xl mx-auto px-6 py-28">
        <h2 className="text-3xl font-bold text-center mb-14">
          Why AlphaPulse EA Works
        </h2>

        <div className="grid md:grid-cols-2 gap-12 text-gray-300">
          <ul className="space-y-4">
            <li>✔ Rule-based quantitative logic</li>
            <li>✔ No martingale, no grid</li>
            <li>✔ Dynamic risk management</li>
            <li>✔ Execution-aware design</li>
          </ul>

          <ul className="space-y-4">
            <li>✔ Designed for real accounts</li>
            <li>✔ Compatible with most brokers</li>
            <li>✔ Fully automated execution</li>
            <li>✔ Focus on long-term consistency</li>
          </ul>
        </div>
      </section>

      {/* ================= RISK ================= */}
      <section className="bg-[#11162A] py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Designed for real market conditions
          </h2>

          <p className="text-gray-300 mb-12 max-w-2xl mx-auto">
            AlphaPulse EA prioritizes capital protection and risk control
            over aggressive growth strategies.
          </p>

          <div className="grid md:grid-cols-3 gap-6 text-gray-300">
            <div className="border border-gray-700 rounded-xl p-6">
              Risk capped per trade
            </div>
            <div className="border border-gray-700 rounded-xl p-6">
              No revenge trading logic
            </div>
            <div className="border border-gray-700 rounded-xl p-6">
              Drawdown-aware behavior
            </div>
          </div>
        </div>
      </section>

      {/* ================= DIFFERENTIATION ================= */}
<section className="max-w-5xl mx-auto px-6 py-28">
  <h2 className="text-3xl font-bold text-center mb-6">
    What makes AlphaPulse EA different
  </h2>

  <p className="text-gray-400 text-center max-w-3xl mx-auto mb-16">
    Most trading systems look good in demo accounts. Very few are designed
    to survive real execution conditions.
  </p>

  <div className="space-y-12 text-gray-300">

    <div>
      <h3 className="text-xl font-semibold mb-3">
        Demo-to-Real Transition
      </h3>
      <p>
        AlphaPulse EA is built with the explicit goal of bridging the gap
        between demo and real trading. Execution logic is designed under
        conservative, real-market assumptions.
      </p>
    </div>

    <div>
      <h3 className="text-xl font-semibold mb-3">
        Spread Awareness
      </h3>
      <p>
        The system accounts for variable spreads, spread expansion and
        execution costs, avoiding entries that only work in ideal demo
        environments.
      </p>
    </div>

    <div>
      <h3 className="text-xl font-semibold mb-3">
        Margin & Capital Constraints
      </h3>
      <p>
        AlphaPulse EA respects real margin usage, avoids over-leveraging
        and adapts position sizing to protect capital under real account
        conditions.
      </p>
    </div>

  </div>
</section>


      {/* ================= PRICING ================= */}
      <section
        id="pricing"
        className="max-w-4xl mx-auto px-6 py-32 text-center"
      >
        <h2 className="text-4xl font-bold mb-6">
          $100 — One-time payment
        </h2>

        <p className="text-gray-300 mb-10">
          Lifetime license • Free updates • Instant access
        </p>

        <a
          href="#"
          className="inline-block bg-emerald-500 hover:bg-emerald-600 text-black font-semibold px-12 py-4 rounded-xl text-lg"
        >
          Buy AlphaPulse EA
        </a>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-black py-12 text-center text-sm text-gray-500 px-6">
        Results shown are illustrative and for demonstration purposes only.<br />
        Trading involves risk. This product is not financial advice.
      </footer>

    </main>
  );
}
