import { useState } from "react";

import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

import FlyAshPage from "./components/FlyAshPage";
import ContactPage from "./components/ContactPage";
import MediaPage from "./components/MediaPage";
import PaverBlocksPage from "./components/PaverBlocksPage";
import StoneAggregatePage from "./components/StoneAggregatePage";
import AACBlocksPage from "./components/AACBlocksPage";



import AnnouncementPage from "./components/AnnouncementPage";
import FinancialPage from "./components/FinancialPage";
import ShareholdingPage from "./components/ShareholdingPage";
import GovernancePage from "./components/GovernancePage";
import PoliciesPage from "./components/PoliciesPage";

import HomeAbout from "./components/HomeAbout";
import GroupPage from "./components/GroupPage";
import AwesomeFacts from "./components/AwesomeFacts";
import WhatsAppChat from "./components/WhatsAppChat";

import banner from "./images/contactpg.png";
import room from "./images/room.jpg";
import latestproject from "./images/latestproject.png";


import "./App.css";

function App() {
  const [page, setPage] = useState("home");

  return (
    <>
      <TopBar />
      <Navbar setPage={setPage} />

      {/* HOME */}
      {page === "home" && (
        <>
          <Hero />
          <HomeAbout />
          <img src={latestproject} alt="home" />
        </>
      )}

     {/* ABOUT */}
{page === "about" && (
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
            ABOUT US
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
            About Us
          </span>

        </p>

      </div>

    </div>

    {/* ================= About ================= */}

    <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16">

      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">

        <div className="grid lg:grid-cols-2 gap-12 items-center p-8 lg:p-14">

          {/* Image */}

          <div className="flex justify-center">

            <div className="product-image">

              <img
                src={room}
                alt="About"
                className="w-full max-w-md"
              />

            </div>

          </div>

          {/* Content */}

          <div>

            <span className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-5">
              About Company
            </span>

            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">

              KALESH BUILD
              <br />

              <span className="text-red-600">
                SOLUTIONS
              </span>

            </h2>

            <p className="mt-6 text-gray-600 leading-8">

              Kalesh Build Solutions offers India's finest quality building
              construction and renovation products, providing reliable
              solutions for residential, commercial and industrial projects.

            </p>

            <p className="mt-6 text-gray-600 leading-8">

              The company was established with a manufacturing unit in
              Sonipat near Delhi under the guidance of Mr. Abhishek Garg,
              focusing on quality, innovation and customer satisfaction.

            </p>

            <p className="mt-6 text-gray-600 leading-8">

              We manufacture premium quality Fly Ash Bricks and modern
              building materials that deliver durability, strength and
              cost-effective construction solutions.

            </p>

            <p className="mt-6 text-gray-600 leading-8">

              Being economical in pricing and premium in quality, our
              products are the perfect investment for homes, offices and
              infrastructure projects.

            </p>

          </div>

        </div>

      </div>

    </section>

    <AwesomeFacts />

  </>
)}

      {/* PRODUCTS */}
      {page === "products" && (
        <div style={{ padding: "50px" }}>
          <h1>Our Products</h1>

          <h3>AAC Blocks</h3>
          <p>High-strength lightweight AAC Blocks.</p>

          <h3>Fly Ash Bricks</h3>
          <p>Eco-friendly Fly Ash Bricks.</p>

          <h3>Cement</h3>
          <p>Premium quality Cement.</p>
        </div>
      )}

      {page === "flyash" && <FlyAshPage />}
      {page === "paver" && <PaverBlocksPage />}
      {page === "stone" && <StoneAggregatePage />}
      {page === "aac" && <AACBlocksPage />}
      

      {/* GROUP */}
      {page === "group" && <GroupPage />}

      {/* INVESTORS */}
      {page === "announcement" && <AnnouncementPage />}
      {page === "financial" && <FinancialPage />}
      {page === "shareholding" && <ShareholdingPage />}
      {page === "governance" && <GovernancePage />}
      {page === "policies" && <PoliciesPage />}

      {/* MEDIA */}
      {page === "media" && <MediaPage />}

      {/* CONTACT */}
      {page === "contact" && <ContactPage />}
      <WhatsAppChat/>

      <Footer />
    </>
  );
}

export default App;