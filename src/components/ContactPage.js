import React, { useState } from "react";
import "./ContactPage.css";
import contactBanner from "../images/contactpg.png";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaUser,
  FaPhone,
  FaPen,
} from "react-icons/fa";

function ContactPage() {

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response = await fetch(
        "http://127.0.0.1:8000/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (response.ok) {

        alert(data.message);

        setFormData({
          name: "",
          phone: "",
          email: "",
          address: "",
        });

      } else {

        alert(data.detail || "Submission Failed");

      }

    } catch (error) {

      console.error(error);
      alert("Cannot connect to FastAPI Server.");

    }

  };

  const handleReset = () => {

    setFormData({
      name: "",
      phone: "",
      email: "",
      address: "",
    });

  };

  return (
    <>

      {/* ================= Banner ================= */}

      <section
        className="relative h-[320px] md:h-[420px] bg-cover bg-center"
        style={{ backgroundImage: `url(${contactBanner})` }}
      >

        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative max-w-7xl h-full mx-auto flex items-center px-6 lg:px-8">

          <div>

            <h1 className="text-white text-4xl md:text-6xl font-bold uppercase tracking-wide">
              CONTACT US
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
              Contact
            </span>

          </p>

        </div>

      </div>

      {/* ================= Contact Cards ================= */}

      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16">

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          <div className="contact-card">

            <FaPhoneAlt className="contact-icon" />

            <h3>Phone Number</h3>

            <p>
              8520823389
              <br />
              7993255250
            </p>

          </div>

          <div className="contact-card">

            <FaEnvelope className="contact-icon" />

            <h3>Email Address</h3>

            <p>
              medarametlakalesh
              <br />
              @gmail.com
            </p>

          </div>

          <div className="contact-card">

            <FaMapMarkerAlt className="contact-icon" />

            <h3>Address</h3>

            <p>
              Pondicherry, Kalapet
              <br />
              Near PTU College, 605014
            </p>

          </div>

        </div>

      </section>
            {/* ================= Contact Section ================= */}

      <section className="max-w-7xl mx-auto px-6 lg:px-8 pb-20">

        <div className="grid lg:grid-cols-2 gap-10">

          {/* ================= Location ================= */}

          <div className="bg-white rounded-2xl shadow-xl p-8">

            <h2 className="text-3xl font-bold text-gray-900">
              Location
            </h2>

            <div className="w-20 h-1 bg-red-600 rounded-full mt-4 mb-8"></div>

            <iframe
              title="location"
              src="https://www.google.com/maps?q=pondicherry,kalapet&output=embed"
              loading="lazy"
              className="w-full h-[450px] rounded-xl border-0"
            ></iframe>

          </div>

          {/* ================= Contact Form ================= */}

          <div className="bg-white rounded-2xl shadow-xl p-8">

            <h2 className="text-3xl font-bold text-gray-900">
              Contact Form
            </h2>

            <div className="w-20 h-1 bg-red-600 rounded-full mt-4 mb-8"></div>

            <form onSubmit={handleSubmit} className="space-y-5">

              <div className="input-group">

                <div className="icon-box">
                  <FaUser />
                </div>

                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />

              </div>

              <div className="input-group">

                <div className="icon-box">
                  <FaPhone />
                </div>

                <input
                  type="text"
                  name="phone"
                  placeholder="Mobile Number"
                  value={formData.phone}
                  onChange={handleChange}
                  maxLength={10}
                  required
                />

              </div>

              <div className="input-group">

                <div className="icon-box">
                  <FaEnvelope />
                </div>

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />

              </div>

              <div className="input-group">

                <div className="icon-box textarea-icon">
                  <FaPen />
                </div>

                <textarea
                  name="address"
                  placeholder="Address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                ></textarea>

              </div>

              <div className="flex gap-4 pt-2">

                <button
                  type="submit"
                  className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-full duration-300"
                >
                  Submit
                </button>

                <button
                  type="button"
                  onClick={handleReset}
                  className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-semibold px-8 py-3 rounded-full duration-300"
                >
                  Reset
                </button>

              </div>

            </form>

          </div>

        </div>

      </section>

    </>
  );

}

export default ContactPage;