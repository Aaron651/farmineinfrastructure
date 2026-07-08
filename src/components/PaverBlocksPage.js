// src/components/PaverBlocksPage.js

import React, { useState } from "react";
import "./PaverBlocksPage.css";

import banner from "../images/overallproductimage.png";
import block from "../images/paverblock.png";

function PaverBlocksPage() {
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
              PAVER BLOCKS
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
              PAVER BLOCKS
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
                  alt="Paver Blocks"
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

                PAVER BLOCKS

                <br />

                Manufacturers & Suppliers,

                <span className="text-red-600">
                  {" "}Delhi NCR
                </span>

              </h2>

              <p className="mt-6 text-gray-600 leading-8">

                Paver Blocks are high-strength precast concrete paving
                materials widely used for footpaths, driveways,
                parking areas, gardens and landscaping projects.
                They provide durability, attractive appearance,
                excellent load-bearing capacity and long service life.

              </p>

              <div className="mt-8 overflow-hidden rounded-xl border">

                <table className="w-full">

                  <tbody>

                    <tr className="border-b">

                      <td className="bg-gray-50 font-semibold p-4 w-52">
                        Pricing
                      </td>

                      <td className="p-4">
                        ₹2500 / Piece
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
                  PAVER BLOCKS at Affordable Prices
                </h2>

                <div className="w-24 h-1 bg-red-600 mt-4 rounded-full"></div>

              </div>

              <p className="text-gray-600 leading-8">

                Paver Blocks are premium quality concrete paving blocks
                designed for residential, commercial and industrial
                applications. They offer outstanding durability,
                high compressive strength and an attractive finish,
                making them ideal for pathways, driveways, parking
                areas, gardens and landscaping projects.

              </p>

              <p className="text-gray-600 leading-8">

                Manufactured using high-grade cement and aggregates,
                our Paver Blocks are weather resistant, easy to install,
                low maintenance and available in various colours,
                shapes and thicknesses to suit every project.

              </p>

              <div>

                <h3 className="text-2xl font-semibold mb-6">
                  Advantages of Paver Blocks
                </h3>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">

                  <div className="feature-card">

                    <div className="feature-icon">✓</div>

                    <h4>High Strength</h4>

                    <p>
                      Built to withstand heavy traffic loads with
                      excellent durability.
                    </p>

                  </div>

                  <div className="feature-card">

                    <div className="feature-icon">✓</div>

                    <h4>Weather Resistant</h4>

                    <p>
                      Performs efficiently in all weather conditions
                      without losing strength or colour.
                    </p>

                  </div>

                  <div className="feature-card">

                    <div className="feature-icon">✓</div>

                    <h4>Elegant Appearance</h4>

                    <p>
                      Available in different colours, textures and
                      patterns to enhance outdoor spaces.
                    </p>

                  </div>

                  <div className="feature-card">

                    <div className="feature-icon">✓</div>

                    <h4>Low Maintenance</h4>

                    <p>
                      Requires minimal maintenance and damaged blocks
                      can be replaced individually.
                    </p>

                  </div>

                  <div className="feature-card">

                    <div className="feature-icon">✓</div>

                    <h4>Slip Resistant</h4>

                    <p>
                      Textured surface provides better grip and
                      improves pedestrian safety.
                    </p>

                  </div>

                  <div className="feature-card">

                    <div className="feature-icon">✓</div>

                    <h4>Eco Friendly</h4>

                    <p>
                      Manufactured using quality materials with
                      minimal environmental impact.
                    </p>

                  </div>

                </div>

              </div>

            </div>

          )}

          {/* ================= Specification ================= */}

          {tab === "specification" && (

            <div className="animate-fade">

              <h2 className="text-3xl font-bold mb-8">
                Technical Specification
              </h2>

              <div className="overflow-x-auto">

                <table className="spec-table w-full">

                  <tbody>

                    <tr>
                      <td>Thickness</td>
                      <td>40 mm / 60 mm / 80 mm</td>
                    </tr>

                    <tr>
                      <td>Material</td>
                      <td>High Strength Concrete</td>
                    </tr>

                    <tr>
                      <td>Shape</td>
                      <td>Zig Zag / I Shape / Rectangle</td>
                    </tr>

                    <tr>
                      <td>Surface Finish</td>
                      <td>Glossy / Matte</td>
                    </tr>

                    <tr>
                      <td>Load Capacity</td>
                      <td>Heavy Duty</td>
                    </tr>

                    <tr>
                      <td>Water Absorption</td>
                      <td>Less than 6%</td>
                    </tr>

                    <tr>
                      <td>Application</td>
                      <td>
                        Driveways, Parking Areas, Walkways,
                        Gardens & Landscaping
                      </td>
                    </tr>

                  </tbody>

                </table>

              </div>

            </div>

          )}
                    {/* ================= Video ================= */}

          {tab === "video" && (

            <div className="animate-fade">

              <h2 className="text-3xl font-bold text-center mb-8">
                Product Video
              </h2>

              <div className="max-w-5xl mx-auto">

                <div className="aspect-video rounded-2xl overflow-hidden shadow-xl">

                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/PZpb_b_r5bs"
                    title="Paver Blocks"
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

export default PaverBlocksPage;