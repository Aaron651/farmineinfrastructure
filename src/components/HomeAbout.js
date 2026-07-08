import "./HomeAbout.css";
import room from "../images/room.jpg";

function HomeAbout() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16">

      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">

        <div className="grid lg:grid-cols-2 gap-12 items-center p-8 lg:p-14">

          {/* Image */}

          <div className="flex justify-center">

            <div className="about-image">

              <img
                src={room}
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

            <div className="w-24 h-1 bg-red-600 mt-5 rounded-full"></div>

            <p className="mt-6 text-gray-600 leading-8">

              Kalesh Build Solutions offers India's finest quality
              building construction and renovation products, which can
              give shape to your challenging interior and exterior
              renovation ideas. The company has been established with
              manufacturing unit in Sonipat near Delhi in 2015.

            </p>

            <p className="mt-6 text-gray-600 leading-8">

              Kalesh Build Solutions is a reputed manufacturer and
              supplier of premium quality Fly Ash Bricks & other
              Building Material. Our bricks are produced using
              uncompromising quality standards and modern manufacturing
              processes.

            </p>

            <p className="mt-6 text-gray-600 leading-8">

              Being economical in pricing and premium in quality,
              our brand forms the true investment for your home
              or office environment.

            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default HomeAbout;