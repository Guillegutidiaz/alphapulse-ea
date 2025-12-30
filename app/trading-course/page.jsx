export default function TradingCourse() {
  return (
    <main className="bg-[#0B0F1A] text-white min-h-screen font-sans">

      {/* HERO */}
      <section className="max-w-4xl mx-auto px-6 py-28 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Trading Course: Understanding Real Market Conditions
        </h1>
        <p className="text-gray-300 text-lg">
          Before using any automated system, it is essential to understand how trading really works.
        </p>
      </section>

      {/* DEMO VS REAL */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-6">
          Demo trading is not real trading
        </h2>
        <p className="text-gray-300 mb-6">
          Demo accounts are useful to learn platform mechanics, but they do not reflect real market conditions.
        </p>
        <ul className="text-gray-300 space-y-2">
          <li>• No emotional pressure in demo</li>
          <li>• Fixed or unrealistic spreads</li>
          <li>• No real liquidity constraints</li>
        </ul>
      </section>

      {/* SPREAD */}
      <section className="bg-[#11162A] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">What is the spread?</h2>
          <p className="text-gray-300 mb-4">
            The spread is the difference between the buy and sell price of an asset.
          </p>
          <p className="text-gray-300">
            It is a real trading cost paid on every transaction.
          </p>
        </div>
      </section>

      {/* MARGIN */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-6">
          Margin and leverage explained
        </h2>
        <p className="text-gray-300">
          Leverage allows traders to control larger positions with less capital,
          but also increases exposure to risk.
        </p>
      </section>

      {/* WHY FAIL */}
      <section className="bg-[#11162A] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">
            Why most strategies fail when going live
          </h2>
          <ul className="text-gray-300 space-y-2">
            <li>• Underestimating spread impact</li>
            <li>• Ignoring execution conditions</li>
            <li>• Over-leveraging small accounts</li>
            <li>• Emotional interference</li>
          </ul>
        </div>
      </section>

      {/* ALPHAPULSE */}
      <section className="max-w-4xl mx-auto px-6 py-28 text-center">
        <h2 className="text-3xl font-bold mb-6">
          How AlphaPulse EA addresses these issues
        </h2>
        <ul className="text-gray-300 space-y-2 mb-10">
          <li>• Spread-aware logic</li>
          <li>• Conservative risk assumptions</li>
          <li>• Designed for real execution</li>
          <li>• No martingale, no grid</li>
        </ul>

        <a
          href="/#pricing"
          className="inline-block bg-emerald-500 hover:bg-emerald-600 text-black font-semibold px-10 py-4 rounded-xl"
        >
          Learn more about AlphaPulse EA
        </a>
      </section>

    </main>
  );
}
