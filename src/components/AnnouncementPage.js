import announcement from "../images/grouppg.png";
import "./AnnouncementPage.css";

function AnnouncementPage() {
  return (
    <>
      {/* ================= Banner ================= */}

      <section
        className="relative h-[320px] md:h-[420px] bg-cover bg-center"
        style={{ backgroundImage: `url(${announcement})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative max-w-7xl h-full mx-auto flex items-center px-6 lg:px-8">
          <div>
            <h1 className="text-white text-4xl md:text-6xl font-bold uppercase tracking-wide">
              CORPORATE ANNOUNCEMENT
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
              Corporate Announcement
            </span>
          </p>
        </div>
      </div>

      {/* ================= Content ================= */}

      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16">

        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-14">

          <div className="mb-10">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Corporate Announcement
            </h2>

            <div className="w-24 h-1 bg-red-600 rounded-full mt-5"></div>
          </div>

          <div className="announcement-content">

            <p>
              Corporate Announcement refers to an official communication
              issued by a company to share important information with
              its stakeholders, including investors, employees,
              customers and business partners. These announcements are
              essential for maintaining transparency, trust and
              effective communication within the corporate environment.
            </p>

            <p>
              A corporate announcement may include details about
              financial results, mergers, acquisitions, new product
              launches, management changes, policy updates, business
              expansions or other significant developments. Such
              announcements help stakeholders stay informed about the
              company's performance, future plans and strategic
              decisions.
            </p>

            <p>
              In publicly listed companies, corporate announcements are
              especially important because they ensure equal access to
              critical information and support fair market practices.
              By providing accurate and timely updates, corporate
              announcements strengthen corporate governance, enhance
              credibility and build confidence among shareholders and
              the public.
            </p>

          </div>

        </div>

      </section>

    </>
  );
}

export default AnnouncementPage;