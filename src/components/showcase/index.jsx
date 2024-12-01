import "./showcase.scss";
import uzum from "../../img/bg__uzum.png";
function Showcase() {
  return (
    <div className="showcase">
      <div className="container">
        <img src={uzum} alt="Image 1" className="image" />
      </div>
    </div>
  );
}

export default Showcase;
