import "./Catalogue.css";
import Paintings from "../Paintings/Piantings";

const Catalogue = ({ paintings }) => {
  return (
    <div>
      <h2>Catalogue</h2>

      <Paintings paintings={paintings} />
    </div>
  );
};

export default Catalogue;