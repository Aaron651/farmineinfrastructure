// src/components/FlyAshPage.js

import React, { useState } from "react";
import "./FlyAshPage.css";

import banner from "../images/overallproductimage.png";
import flyash from "../images/product.jpg";

function FlyAshPage() {
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
              FLY ASH BRICKS
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
              FLY ASH BRICKS
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
                  src={flyash}
                  alt="Fly Ash Bricks"
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

                FLY ASH BRICKS

                <br />

                Manufacturers & Suppliers,

                <span className="text-red-600">
                  {" "}Delhi NCR
                </span>

              </h2>

              <p className="mt-6 text-gray-600 leading-8">

                Fly Ash Bricks, also known as Green Eco Bricks,
                are high-quality building materials manufactured using
                fly ash, cement and sand. They provide superior strength,
                durability, dimensional accuracy and eco-friendly
                construction benefits.

              </p>

              <div className="mt-8 overflow-hidden rounded-xl border">

                <table className="w-full">

                  <tbody>

                    <tr className="border-b">

                      <td className="bg-gray-50 font-semibold p-4 w-52">
                        Pricing
                      </td>

                      <td className="p-4">
                        ₹4000 / 1000 Bricks
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
                  Fly Ash Bricks at Affordable Prices
                </h2>

                <div className="w-24 h-1 bg-red-600 mt-4 rounded-full"></div>

              </div>

              <p className="text-gray-600 leading-8">

                Fly Ash Bricks are high-quality eco-friendly building
                materials manufactured using fly ash, cement and sand.
                They offer excellent compressive strength, dimensional
                accuracy and long-lasting durability, making them ideal
                for residential, commercial and industrial construction.

              </p>

              <p className="text-gray-600 leading-8">

                Our Fly Ash Bricks are manufactured using advanced
                technology and strict quality standards to ensure
                consistent size, smooth finish and superior performance.
                They help reduce construction costs while supporting
                sustainable and environmentally friendly building
                practices.

              </p>

              <div>

                <h3 className="text-2xl font-semibold mb-6">
                  Advantages of Fly Ash Bricks
                </h3>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">

                  <div className="feature-card">

                    <div className="feature-icon">✓</div>

                    <h4>High Strength</h4>

                    <p>
                      Excellent compressive strength for durable
                      construction projects.
                    </p>

                  </div>

                  <div className="feature-card">

                    <div className="feature-icon">✓</div>

                    <h4>Dimensional Accuracy</h4>

                    <p>
                      Uniform shape and precise dimensions reduce
                      plaster consumption.
                    </p>

                  </div>

                  <div className="feature-card">

                    <div className="feature-icon">✓</div>

                    <h4>Eco Friendly</h4>

                    <p>
                      Manufactured using recycled fly ash, helping
                      conserve natural resources.
                    </p>

                  </div>

                  <div className="feature-card">

                    <div className="feature-icon">✓</div>

                    <h4>Abrasion Resistant</h4>

                    <p>
                      Strong surface finish provides long service life
                      with minimal wear.
                    </p>

                  </div>

                  <div className="feature-card">

                    <div className="feature-icon">✓</div>

                    <h4>Cost Effective</h4>

                    <p>
                      Reduces construction cost due to uniform size
                      and lower mortar consumption.
                    </p>

                  </div>

                  <div className="feature-card">

                    <div className="feature-icon">✓</div>

                    <h4>Wide Applications</h4>

                    <p>
                      Suitable for homes, commercial buildings,
                      boundary walls and industrial projects.
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
                      <td>Size</td>
                      <td>230 × 110 × 70 mm</td>
                    </tr>

                    <tr>
                      <td>Weight</td>
                      <td>2900 gms</td>
                    </tr>

                    <tr>
                      <td>Density</td>
                      <td>1600–1700 kg/m³</td>
                    </tr>

                    <tr>
                      <td>Compressive Strength</td>
                      <td>75–100 kg/cm²</td>
                    </tr>

                    <tr>
                      <td>Water Absorption</td>
                      <td>10–15%</td>
                    </tr>

                    <tr>
                      <td>Material</td>
                      <td>Fly Ash, Cement & Sand</td>
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
                    src="https://www.youtube.com/embed/_d8Gw4ZkEqs"
                    title="Fly Ash Bricks"
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

export default FlyAshPage;