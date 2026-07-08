import financialBanner from "../images/grouppg.png";
import "./FinancialPage.css";

function FinancialPage() {
  return (
    <>
      {/* ================= Banner ================= */}

      <section
        className="relative h-[320px] md:h-[420px] bg-cover bg-center"
        style={{ backgroundImage: `url(${financialBanner})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative max-w-7xl h-full mx-auto flex items-center px-6 lg:px-8">

          <div>

            <h1 className="text-white text-4xl md:text-6xl font-bold uppercase tracking-wide">
              FINANCIAL INFORMATION
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
              Financial Information
            </span>

          </p>

        </div>

      </div>

      {/* ================= Content ================= */}

      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16">

        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-14">

          <div className="mb-10">

            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Financial Information
            </h2>

            <div className="w-24 h-1 bg-red-600 rounded-full mt-5"></div>

          </div>

          <div className="financial-content">

            <p>

              Financial Information refers to the data and records that
              describe the financial activities, performance and position
              of an organization or company. It provides a clear
              understanding of how a business manages its income,
              expenses, assets, liabilities, profits and losses over a
              specific period. Financial information is essential for
              decision-making because it helps management, investors,
              creditors and other stakeholders evaluate the financial
              health and stability of the company.

            </p>

            <p>

              Common financial information includes balance sheets,
              income statements, cash flow statements, profit and loss
              accounts, annual reports and tax records. The balance
              sheet presents the company's assets, liabilities and
              shareholders' equity, showing its overall financial
              position at a particular time. The income statement
              focuses on revenue earned and expenses incurred, helping
              determine whether the company has made a profit or
              suffered a loss.

            </p>

            <p>

              Cash flow statements track the movement of cash into and
              out of the organization, indicating its liquidity and
              ability to meet short-term obligations. Accurate financial
              information is important for budgeting, forecasting,
              investment planning and strategic growth. It also ensures
              transparency and accountability while helping companies
              comply with legal and regulatory requirements.

            </p>

            <p>

              In modern businesses, financial information plays a
              crucial role in risk management, resource allocation,
              performance measurement and long-term sustainability. By
              analyzing financial information, organizations can
              identify strengths, weaknesses, opportunities and
              potential financial risks, enabling better planning and
              improved business performance.

            </p>

          </div>

        </div>

      </section>

    </>
  );
}

export default FinancialPage;