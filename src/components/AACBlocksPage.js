import React, { useState } from "react";
import "./AACBlocksPage.css";

import banner from "../images/overallproductimage.png";
import block from "../images/ACCblock.png";

function AACBlocksPage() {
  const [tab, setTab] = useState("description");

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
              AAC BLOCKS
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
              AAC BLOCKS
            </span>

          </p>

        </div>

      </div>

      {/* ================= Product ================= */}

      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16">

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">

          <div className="grid lg:grid-cols-2 gap-12 items-center p-8 lg:p-14">

            {/* Image */}

            <div className="flex justify-center">

              <div className="product-image">

                <img
                  src={block}
                  alt="AAC Blocks"
                  className="w-full max-w-md"
                />

              </div>

            </div>

            {/* Content */}

            <div>

              <span className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-5">
                Premium Building Material
              </span>

              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">

                AAC BLOCKS

                <br />

                Manufacturers & Suppliers,

                <span className="text-red-600">
                  {" "}Delhi NCR
                </span>

              </h2>

              <p className="mt-6 text-gray-600 leading-8">

                AAC Blocks, also known as
                <strong> Autoclaved Aerated Concrete</strong>,
                are lightweight precast building materials offering
                excellent thermal insulation,
                sound insulation,
                high strength,
                durability and fire resistance.

              </p>

              <div className="mt-8 overflow-hidden rounded-xl border">

                <table className="w-full">

                  <tbody>

                    <tr className="border-b">

                      <td className="bg-gray-50 font-semibold p-4 w-52">
                        Pricing
                      </td>

                      <td className="p-4">
                        ₹2500 / CBM
                      </td>

                    </tr>

                    <tr>

                      <td className="bg-gray-50 font-semibold p-4">
                        Stock
                      </td>

                      <td className="p-4">

                        <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">

                          AVAILABLE

                        </span>

                      </td>

                    </tr>

                  </tbody>

                </table>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= Tabs ================= */}

      <section className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="flex flex-wrap border-b">

          <button
            onClick={() => setTab("description")}
            className={`tab-btn ${
              tab === "description" ? "active-tab" : ""
            }`}
          >
            Description
          </button>

          <button
            onClick={() => setTab("specification")}
            className={`tab-btn ${
              tab === "specification" ? "active-tab" : ""
            }`}
          >
            Specification
          </button>

          <button
            onClick={() => setTab("video")}
            className={`tab-btn ${
              tab === "video" ? "active-tab" : ""
            }`}
          >
            Video
          </button>

        </div>

        <div className="bg-white shadow-lg rounded-b-2xl p-8 lg:p-10">
                    {tab === "description" && (
            <div className="space-y-8 animate-fade">

              <div>

                <h2 className="text-3xl font-bold text-gray-900">
                  AAC BLOCKS at Affordable Prices
                </h2>

                <div className="w-24 h-1 bg-red-600 mt-4 rounded-full"></div>

              </div>

              <p className="text-gray-600 leading-8">
                Autoclaved Aerated Concrete (AAC) Blocks are modern,
                lightweight, eco-friendly construction materials that
                provide superior strength, excellent thermal insulation,
                sound insulation and fire resistance. They are widely
                used in residential, commercial and industrial projects.
              </p>

              <p className="text-gray-600 leading-8">
                Compared to conventional clay bricks, AAC Blocks are
                nearly three times lighter, reducing the overall dead
                load of the building while increasing construction speed
                and lowering structural costs.
              </p>

              <div>

                <h3 className="text-2xl font-semibold mb-6">
                  Advantages of AAC Blocks
                </h3>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">

                  <div className="feature-card">
                    <div className="feature-icon">✓</div>
                    <h4>Eco Friendly</h4>
                    <p>
                      Manufactured using sustainable raw materials with
                      minimal environmental impact.
                    </p>
                  </div>

                  <div className="feature-card">
                    <div className="feature-icon">✓</div>
                    <h4>Light Weight</h4>
                    <p>
                      Reduces structural load and makes handling easier.
                    </p>
                  </div>

                  <div className="feature-card">
                    <div className="feature-icon">✓</div>
                    <h4>Thermal Insulation</h4>
                    <p>
                      Keeps interiors cooler in summer and warmer during
                      winter.
                    </p>
                  </div>

                  <div className="feature-card">
                    <div className="feature-icon">✓</div>
                    <h4>Fire Resistant</h4>
                    <p>
                      Excellent fire resistance for enhanced building
                      safety.
                    </p>
                  </div>

                  <div className="feature-card">
                    <div className="feature-icon">✓</div>
                    <h4>Sound Proof</h4>
                    <p>
                      Provides better acoustic insulation than ordinary
                      bricks.
                    </p>
                  </div>

                  <div className="feature-card">
                    <div className="feature-icon">✓</div>
                    <h4>Easy Workability</h4>
                    <p>
                      Easy to cut, drill and shape, reducing labour time.
                    </p>
                  </div>

                </div>

              </div>

            </div>
          )}

          {tab === "specification" && (

            <div className="animate-fade">

              <h2 className="text-3xl font-bold mb-8">
                Technical Specification
              </h2>

              <div className="overflow-x-auto">

                <table className="spec-table w-full">

                  <tbody>

                    <tr>
                      <td>Size</td>
                      <td>625 × 200 × 250 mm</td>
                    </tr>

                    <tr>
                      <td>Weight</td>
                      <td>2900 gms</td>
                    </tr>

                    <tr>
                      <td>Density</td>
                      <td>550–650 kg/m³</td>
                    </tr>

                    <tr>
                      <td>Compressive Strength</td>
                      <td>40 kg/cm²</td>
                    </tr>

                    <tr>
                      <td>Sound Reduction</td>
                      <td>43 dB</td>
                    </tr>

                    <tr>
                      <td>Fire Rating</td>
                      <td>4 Hours</td>
                    </tr>

                    <tr>
                      <td>Water Absorption</td>
                      <td>Less than 20%</td>
                    </tr>

                  </tbody>

                </table>

              </div>

            </div>

          )}
                    {tab === "description" && (
            <div className="space-y-8 animate-fade">

              <div>

                <h2 className="text-3xl font-bold text-gray-900">
                  AAC BLOCKS at Affordable Prices
                </h2>

                <div className="w-24 h-1 bg-red-600 mt-4 rounded-full"></div>

              </div>

              <p className="text-gray-600 leading-8">
                Autoclaved Aerated Concrete (AAC) Blocks are modern,
                lightweight, eco-friendly construction materials that
                provide superior strength, excellent thermal insulation,
                sound insulation and fire resistance. They are widely
                used in residential, commercial and industrial projects.
              </p>

              <p className="text-gray-600 leading-8">
                Compared to conventional clay bricks, AAC Blocks are
                nearly three times lighter, reducing the overall dead
                load of the building while increasing construction speed
                and lowering structural costs.
              </p>

              <div>

                <h3 className="text-2xl font-semibold mb-6">
                  Advantages of AAC Blocks
                </h3>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">

                  <div className="feature-card">
                    <div className="feature-icon">✓</div>
                    <h4>Eco Friendly</h4>
                    <p>
                      Manufactured using sustainable raw materials with
                      minimal environmental impact.
                    </p>
                  </div>

                  <div className="feature-card">
                    <div className="feature-icon">✓</div>
                    <h4>Light Weight</h4>
                    <p>
                      Reduces structural load and makes handling easier.
                    </p>
                  </div>

                  <div className="feature-card">
                    <div className="feature-icon">✓</div>
                    <h4>Thermal Insulation</h4>
                    <p>
                      Keeps interiors cooler in summer and warmer during
                      winter.
                    </p>
                  </div>

                  <div className="feature-card">
                    <div className="feature-icon">✓</div>
                    <h4>Fire Resistant</h4>
                    <p>
                      Excellent fire resistance for enhanced building
                      safety.
                    </p>
                  </div>

                  <div className="feature-card">
                    <div className="feature-icon">✓</div>
                    <h4>Sound Proof</h4>
                    <p>
                      Provides better acoustic insulation than ordinary
                      bricks.
                    </p>
                  </div>

                  <div className="feature-card">
                    <div className="feature-icon">✓</div>
                    <h4>Easy Workability</h4>
                    <p>
                      Easy to cut, drill and shape, reducing labour time.
                    </p>
                  </div>

                </div>

              </div>

            </div>
          )}

          {tab === "specification" && (

            <div className="animate-fade">

              <h2 className="text-3xl font-bold mb-8">
                Technical Specification
              </h2>

              <div className="overflow-x-auto">

                <table className="spec-table w-full">

                  <tbody>

                    <tr>
                      <td>Size</td>
                      <td>625 × 200 × 250 mm</td>
                    </tr>

                    <tr>
                      <td>Weight</td>
                      <td>2900 gms</td>
                    </tr>

                    <tr>
                      <td>Density</td>
                      <td>550–650 kg/m³</td>
                    </tr>

                    <tr>
                      <td>Compressive Strength</td>
                      <td>40 kg/cm²</td>
                    </tr>

                    <tr>
                      <td>Sound Reduction</td>
                      <td>43 dB</td>
                    </tr>

                    <tr>
                      <td>Fire Rating</td>
                      <td>4 Hours</td>
                    </tr>

                    <tr>
                      <td>Water Absorption</td>
                      <td>Less than 20%</td>
                    </tr>

                  </tbody>

                </table>

              </div>

            </div>

          )}
                    {tab === "video" && (

            <div className="animate-fade">

              <h2 className="text-3xl font-bold text-center mb-8">
                Product Video
              </h2>

              <div className="max-w-5xl mx-auto">

                <div className="aspect-video rounded-2xl overflow-hidden shadow-xl">

                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/ifSrBb1EzgA"
                    title="AAC Blocks"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>

                </div>

              </div>

            </div>

          )}

        </div>

      </section>

     
    </>
  );

}

export default AACBlocksPage;