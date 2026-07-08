import "./MediaPage.css";
import banner from "../images/grouppg.png";

import img1 from "../images/media1.jpg";
import img2 from "../images/media2.jpg";
import img3 from "../images/media3.jpg";

function MediaPage() {

  const mediaItems = [
    {
      image: img1,
      title: "RT6, Bangalore",
    },
    {
      image: img2,
      title: "RT4 Alipurduar",
    },
    {
      image: img3,
      title: "RT 3 Jharkhand",
    },
  ];

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
              MEDIA
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
              Media
            </span>

          </p>

        </div>

      </div>

      {/* ================= Media ================= */}

      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16">

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {mediaItems.map((item, index) => (

            <div
              className="media-card"
              key={index}
            >

              <img
                src={item.image}
                alt={item.title}
              />

              <button>
                {item.title}
              </button>

            </div>

          ))}

        </div>

      </section>

    </>
  );

}

export default MediaPage;