import policiesBanner from "../images/grouppg.png";
import "./PoliciesPage.css";

function PoliciesPage() {
  return (
    <>
      {/* ================= Banner ================= */}

      <section
        className="relative h-[320px] md:h-[420px] bg-cover bg-center"
        style={{ backgroundImage: `url(${policiesBanner})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative max-w-7xl h-full mx-auto flex items-center px-6 lg:px-8">

          <div>

            <h1 className="text-white text-4xl md:text-6xl font-bold uppercase tracking-wide">
              POLICIES
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
              Policies
            </span>

          </p>

        </div>

      </div>

      {/* ================= Content ================= */}

      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16">

        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-14">

          <div className="mb-10">

            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Policies
            </h2>

            <div className="w-24 h-1 bg-red-600 rounded-full mt-5"></div>

          </div>

          <div className="policies-content">

            <p>

              Policies are a set of formal rules, guidelines and
              principles established by an organization to govern its
              operations, decision-making processes and employee
              behavior. They provide a structured framework that helps
              ensure consistency, discipline, accountability and
              compliance across all levels of the organization.

            </p>

            <p>

              Policies are essential for defining how a company
              conducts its activities, manages resources, handles
              risks and responds to internal and external challenges.
              They may cover various areas such as human resource
              management, workplace ethics, safety regulations,
              financial management, data security, quality assurance,
              environmental responsibility and customer service.

            </p>

            <p>

              Well-defined policies help employees understand their
              roles, responsibilities, rights and obligations while
              ensuring that all actions align with the company's goals,
              values and legal requirements. Organizational policies
              also play a crucial role in maintaining fairness and
              transparency by establishing clear procedures for
              handling conflicts, grievances and operational decisions.

            </p>

            <p>

              In addition, policies support regulatory compliance by
              ensuring the company follows industry standards,
              government laws and corporate governance practices.
              Effective policies improve operational efficiency,
              reduce misunderstandings, minimize risks and strengthen
              organizational culture.

            </p>

            <p>

              They also help management make informed and consistent
              decisions while promoting ethical conduct and
              professional behavior. Regular review and updating of
              policies are important to adapt to changing business
              environments, technological advancements and regulatory
              changes.

            </p>

            <p>

              Overall, policies serve as a foundation for smooth
              organizational functioning, sustainable growth and
              long-term success by providing clear direction and
              maintaining order within the company.

            </p>

          </div>

        </div>

      </section>

    </>
  );
}

export default PoliciesPage;