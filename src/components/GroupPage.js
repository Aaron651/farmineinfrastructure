import "./GroupPage.css";

import banner from "../images/grouppg.png";
import greenLogo from "../images/green.jpg.png";
import forestLogo from "../images/greenforestpress.png";

function GroupPage() {
  return (
    <>
      {/* ================= Banner ================= */}

      <section
        className="relative h-[320px] md:h-[420px] bg-cover bg-center"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative max-w-7xl h-full mx-auto flex items-center px-6 lg:px-8">

          <div>

            <h1 className="text-white text-4xl md:text-6xl font-bold uppercase tracking-wide">
              GREEN FOREST PRESS
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
              Our Group
            </span>

          </p>

        </div>

      </div>

      {/* ================= Main Section ================= */}

      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16">

        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-14">

          {/* Logos */}

          <div className="flex flex-col md:flex-row items-center justify-center gap-10">

            <img
              src={greenLogo}
              alt="Q Green"
              className="green-logo"
            />

            <img
              src={forestLogo}
              alt="Q Green Forest Press"
              className="forest-logo"
            />

          </div>

          {/* Visit Button */}

          <div className="text-center mt-10">

            <button
              className="visit-btn"
              onClick={() =>
                window.open(
                  "https://qgreenforestpress.com/",
                  "_blank"
                )
              }
            >
              Visit Website
            </button>

          </div>

          {/* Title */}

          <div className="text-center mt-14">

            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">

              New Initiative in Sustainable
              <br />
              Construction Solutions

            </h2>

            <div className="w-24 h-1 bg-red-600 rounded-full mx-auto mt-5"></div>

          </div>

          {/* Content */}

          <div className="group-content mt-12">

            <p>

              Kalesh Build Solutions is a trusted manufacturer and supplier
              of high-quality Fly Ash Bricks, AAC Blocks, Paver Blocks,
              Kerb Stones and other modern construction materials.
              Established with a vision to provide innovative and
              eco-friendly building solutions, the company focuses on
              delivering products that meet the highest standards of
              quality, durability and performance.

            </p>

            <p>

              With advanced manufacturing facilities and a
              customer-centric approach, Kalesh Build Solutions serves
              residential, commercial and infrastructure projects across
              the region. Our commitment to sustainability and
              technological excellence enables us to offer
              cost-effective construction products while contributing
              to environmentally responsible development.

            </p>
                        <p>

              Our group companies are engaged in manufacturing,
              infrastructure development, construction solutions and
              allied industries. Through continuous innovation and
              strategic partnerships, we aim to provide comprehensive
              building solutions that support the evolving needs of the
              construction sector.

            </p>

            <p>

              Driven by quality, reliability and customer satisfaction,
              Kalesh Build Solutions continues to strengthen its
              position as a preferred partner for builders,
              contractors, architects and developers seeking premium
              construction materials and dependable service.

            </p>

          </div>

          {/* ================= Video ================= */}

          <div className="mt-16">

            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">

              Company Video

            </h2>

            <div className="max-w-5xl mx-auto">

              <div className="aspect-video rounded-2xl overflow-hidden shadow-xl">

                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/iS0smzCY-4k"
                  title="Q Green Group"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= Bottom CTA ================= */}

      <section className="bg-red-600 mt-20">

        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">

          <div className="flex flex-col lg:flex-row justify-between items-center gap-8">

            <div>

              <h2 className="text-white text-3xl font-bold">
                Want to Know More About Our Group?
              </h2>

              <p className="text-red-100 mt-3 text-lg">
                Explore our initiatives, companies and sustainable
                construction solutions.
              </p>

            </div>

            <button
              className="bg-white text-red-600 font-semibold px-8 py-4 rounded-full hover:bg-gray-100 duration-300 shadow-lg"
              onClick={() =>
                window.open(
                  "https://qgreenforestpress.com/",
                  "_blank"
                )
              }
            >
              Visit Website
            </button>

          </div>

        </div>

      </section>

    </>
  );
}

export default GroupPage;