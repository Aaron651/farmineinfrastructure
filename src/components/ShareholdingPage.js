import shareholdingBanner from "../images/grouppg.png";
import "./ShareholdingPage.css";

function ShareholdingPage() {
  return (
    <>
      {/* ================= Banner ================= */}

      <section
        className="relative h-[320px] md:h-[420px] bg-cover bg-center"
        style={{ backgroundImage: `url(${shareholdingBanner})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative max-w-7xl h-full mx-auto flex items-center px-6 lg:px-8">

          <div>

            <h1 className="text-white text-4xl md:text-6xl font-bold uppercase tracking-wide">
              SHAREHOLDING PATTERN
            </h1>

            <div className="w-24 h-1 bg-red-600 mt-5 rounded-full"></div>

          </div>

        </div>

      </section>

      {/* ================= Breadcrumb ================= */}

      <div className="bg-gray-100 border-b">

        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">

          <p className="text-gray-600">

            Home

            <span className="mx-2 text-red-600">›</span>

            <span className="font-semibold">
              Shareholding Pattern
            </span>

          </p>

        </div>

      </div>

      {/* ================= Content ================= */}

      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16">

        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-14">

          <div className="mb-10">

            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Shareholding Pattern
            </h2>

            <div className="w-24 h-1 bg-red-600 rounded-full mt-5"></div>

          </div>

          <div className="shareholding-content">

            <p>

              Shareholding Pattern refers to the distribution of a
              company’s shares among different categories of
              shareholders and indicates who owns what percentage of
              the company. It provides a detailed view of the ownership
              structure and helps stakeholders understand how control
              and decision-making power are distributed within the
              organization.

            </p>

            <p>

              A shareholding pattern generally includes promoters,
              promoter groups, institutional investors, foreign
              investors, mutual funds, retail investors and other
              public shareholders. Promoters are usually the founders
              or key individuals who established the company and often
              hold a significant portion of shares, giving them major
              control over strategic decisions and company management.

            </p>

            <p>

              Institutional investors such as banks, insurance
              companies and mutual funds invest large amounts of
              capital and play an important role in influencing market
              confidence. Public shareholders include individual
              investors who purchase shares through stock exchanges
              and contribute to the company's market participation.

            </p>

            <p>

              The shareholding pattern is important because it reflects
              the financial strength, ownership concentration and
              governance structure of a company. A well-balanced
              shareholding pattern can improve corporate governance,
              attract investors and enhance market credibility.

            </p>

            <p>

              Companies regularly disclose their shareholding pattern
              in annual reports and regulatory filings to ensure
              transparency and compliance with legal requirements.
              This information helps investors analyze ownership
              trends, evaluate investment risks and understand the
              level of promoter control and public participation.

            </p>

            <p>

              Changes in the shareholding pattern over time may
              indicate strategic investments, mergers, acquisitions
              or changes in investor confidence. Therefore, the
              shareholding pattern serves as a crucial indicator of a
              company's ownership structure, stability and long-term
              growth potential.

            </p>

          </div>

        </div>

      </section>

    </>
  );
}

export default ShareholdingPage;