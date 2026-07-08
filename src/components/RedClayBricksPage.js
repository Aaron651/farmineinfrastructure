import React, { useState } from "react";
import "./RedClayBricksPage.css";

import banner from "../images/overallproductimage.png";
import brick from "../images/redbrick.png"; // Change to your image name

function RedClayBricksPage() {
  const [activeTab, setActiveTab] = useState("specification");

  return (
    <div className="redclay-page">

      {/* Banner */}
      <div
        className="redclay-banner"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <h1>RED CLAY BRICKS</h1>
      </div>

      {/* Breadcrumb */}

      <div className="breadcrumb">
        Home &nbsp; &gt; &nbsp; RED CLAY BRICKS
      </div>

      {/* Product Section */}

      <div className="product-section">

        <div className="product-image">
          <img src={brick} alt="Red Clay Brick" />
        </div>

        <div className="product-details">

          <h2>
            RED CLAY BRICKS MANUFACTURERS & SUPPLIERS, DELHI NCR
          </h2>

          <p>
            "The traditional bricks" are man-made materials that are widely
            used in building, civil engineering work and landscape design.
            Red clay Bricks are produced with best quality filtered soil &
            sweet water and fired by coal at a high temperature.
            Size of our bricks is standard by ensuring that you get most out
            of the money spent.
          </p>

          <table className="info-table">
            <tbody>
              <tr>
                <td>Pricing</td>
                <td>₹ 7 Per Piece</td>
              </tr>

              <tr>
                <td>Stock Availability</td>
                <td>AVAILABLE</td>
              </tr>
            </tbody>
          </table>

        </div>

      </div>

      {/* Tabs */}

      <div className="tabs">

        <button
          className={activeTab === "description" ? "active" : ""}
          onClick={() => setActiveTab("description")}
        >
          Description
        </button>

        <button
          className={activeTab === "specification" ? "active" : ""}
          onClick={() => setActiveTab("specification")}
        >
          Specification
        </button>

        <button
          className={activeTab === "video" ? "active" : ""}
          onClick={() => setActiveTab("video")}
        >
          Video
        </button>

      </div>

      <div className="tab-content">

        {activeTab === "description" && (

          <>
            <h2>
              RED CLAY BRICKS at Affordable Prices in Ghaziabad,
              Noida, Gurgaon & Sonipat Haryana
            </h2>

            <p>
              "The traditional bricks" are man-made materials that are widely
              used in building, civil engineering work and landscape design.
              Red Clay Bricks are produced with best quality filtered soil &
              sweet water and fired by coal at a high temperature. Clay bricks
              are durable, heat resistant and suitable for decorative and
              structural applications.
            </p>
          </>

        )}

        {activeTab === "specification" && (

          <table className="spec-table">

            <tbody>

              <tr>
                <td>Size</td>
                <td>20</td>
              </tr>

              <tr>
                <td>Weight</td>
                <td>20</td>
              </tr>

              <tr>
                <td>Density</td>
                <td>20</td>
              </tr>

              <tr>
                <td>Strength</td>
                <td>20</td>
              </tr>

              <tr>
                <td>Absorption</td>
                <td>12</td>
              </tr>

            </tbody>

          </table>

        )}

      {activeTab === "video" && (
  <div className="video-container">
    <iframe
      width="100%"
      height="500"
      src="https://www.youtube.com/embed/gFZ3unSUI7U"
      title="Red Clay Bricks"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
)}
      </div>

    </div>
  );
}

export default RedClayBricksPage;