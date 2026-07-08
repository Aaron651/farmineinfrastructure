import "./MapSection.css";

function MapSection() {

  return (

    <div className="map">

      <iframe
        title="google-map"
        src="https://www.google.com/maps?q=kurnool&output=embed"
        width="100%"
        height="500"
        loading="lazy"
      ></iframe>

    </div>

  );

}

export default MapSection;