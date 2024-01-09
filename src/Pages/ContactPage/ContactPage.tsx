import MapComponent from "../../components/MapComponent/MapComponent";
import "./ContactPage.css";

const ContactPage = (): React.ReactElement => {
  const apiGoogleMap = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
  return (
    <section className="data-container">
      <h2 className="data__title">Contacta con nosotros</h2>
      <span className="data__company-name">Libreria Midu S.L.</span>
      <MapComponent apiKey={apiGoogleMap} />
      <span>Calle Josep Vicenç Foix 7</span>
      <span>08750 Molins de Rei, Barcelona</span>
      <span>Tel. 665365529</span>
      <span>libreria_midu_1991@gmail.com</span>
    </section>
  );
};

export default ContactPage;
