import "./Hero.css";
import banner from "../images/heropg.png";

function Hero() {
  return (
    <>
      {/* ================= Hero Banner ================= */}

      <section
        className="relative h-[620px] lg:h-[720px] overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: `url(${banner})`,
        }}
      >
        {/* Overlay */}

        <div className="absolute inset-0 bg-black/55"></div>

        {/* Content */}

        <div className="relative max-w-7xl mx-auto h-full px-6 lg:px-8">

          <div className="grid lg:grid-cols-2 items-center h-full gap-14">

            {/* ================= Left ================= */}

            <div>

              <span className="inline-block bg-red-600 text-white px-5 py-2 rounded-full text-sm font-semibold tracking-wider uppercase mb-6">
                Premium Construction Materials
              </span>

              <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-black uppercase leading-tight">

                THE BEST

                <br />

                <span className="text-red-500">
                  CEMENT
                </span>

                {" "}FLY ASH

                <br />

                BRICKS

              </h1>

              <div className="w-28 h-1 bg-red-600 rounded-full mt-6 mb-10"></div>

              <div className="space-y-5">

                <div className="hero-point">

                  <div className="hero-check">
                    ✓
                  </div>

                  <p>
                    GREY COLOR RESEMBLES TO CEMENT
                  </p>

                </div>

                <div className="hero-point">

                  <div className="hero-check">
                    ✓
                  </div>

                  <p>
                    SMOOTH FINISH &amp; UNIFORM SHAPE
                  </p>

                </div>

                <div className="hero-point">

                  <div className="hero-check">
                    ✓
                  </div>

                  <p>
                    HIGH COMPRESSION STRENGTH
                  </p>

                </div>

                <div className="hero-point">

                  <div className="hero-check">
                    ✓
                  </div>

                  <p>
                    MINIMIZED WASTE
                  </p>

                </div>

              </div>

            </div>

            {/* ================= Right ================= */}

            <div className="flex justify-center lg:justify-end">
                            <div className="hero-glass">

                <div className="hero-badge">
                  100%
                </div>

                <h2>

                  ENVIRONMENT

                  <br />

                  <span>FRIENDLY</span>

                </h2>

                <p>
                  Eco-friendly Fly Ash Bricks manufactured with modern
                  technology for stronger, greener and sustainable
                  construction.
                </p>

                
              </div>

            </div>

          </div>

        </div>

      </section>

    </>
  );
}

export default Hero;