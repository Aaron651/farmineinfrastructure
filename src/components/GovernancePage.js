import React from "react";
import governanceBanner from "../images/grouppg.png";
import "./GovernancePage.css";

function GovernancePage() {
  return (
    <>
      {/* ================= Banner ================= */}

      <section
        className="relative h-[320px] md:h-[420px] bg-cover bg-center"
        style={{ backgroundImage: `url(${governanceBanner})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative max-w-7xl h-full mx-auto flex items-center px-6 lg:px-8">

          <div>

            <h1 className="text-white text-4xl md:text-6xl font-bold uppercase tracking-wide">
              CORPORATE GOVERNANCE REPORT
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
              Corporate Governance Report
            </span>

          </p>

        </div>

      </div>

      {/* ================= Content ================= */}

      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16">

        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-14 animate-fade">

          <div className="mb-10">

            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Corporate Governance Report
            </h2>

            <div className="w-24 h-1 bg-red-600 mt-4 rounded-full"></div>

          </div>

          <div className="space-y-8">

            <p className="text-gray-600 leading-8">
              Corporate Governance Report is a formal document that explains
              the policies, practices, structures and processes through which
              a company is directed, controlled and managed. It provides
              detailed information about how the organization ensures
              transparency, accountability, fairness and ethical
              decision-making in its operations.
            </p>

            <p className="text-gray-600 leading-8">
              The report highlights the roles and responsibilities of the
              board of directors, management team, audit committees and
              other governance bodies involved in overseeing the company's
              performance and compliance. Corporate governance aims to
              protect the interests of shareholders, investors, employees,
              customers and other stakeholders by ensuring that business
              activities are conducted responsibly and according to legal
              and regulatory standards.
            </p>

            <p className="text-gray-600 leading-8">
              A corporate governance report typically includes information
              about board composition, leadership structure, committee
              meetings, risk management practices, internal controls,
              compliance policies, ethical standards and corporate social
              responsibility initiatives.
            </p>
                        <p className="text-gray-600 leading-8">
              It also describes how the company manages conflicts of
              interest, maintains financial integrity and ensures
              accurate disclosure of important information.
            </p>

            <p className="text-gray-600 leading-8">
              Strong corporate governance improves organizational
              efficiency, reduces risks, prevents fraud and enhances
              investor confidence. It helps create a culture of
              discipline, responsibility and long-term strategic
              planning within the organization.
            </p>

            <p className="text-gray-600 leading-8">
              Publicly listed companies are often required to publish
              corporate governance reports as part of their annual
              disclosures to demonstrate compliance with stock exchange
              regulations and corporate laws. These reports help
              stakeholders evaluate the company's governance quality
              and its commitment to sustainable growth.
            </p>

            <p className="text-gray-600 leading-8">
              Effective corporate governance supports business
              stability, strengthens reputation and contributes
              significantly to the long-term success and value creation
              of the company.
            </p>

          </div>

        </div>

      </section>

    </>
  );
}

export default GovernancePage;