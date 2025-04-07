import { Footer } from "../Components/Footer";

export function Gallery() {
  return (
    <>
      <div className="gallery-div">
        <a href="./src/assets/images/stock2.jpg">
          <img src="./src/assets/images/stock2.jpg" className="gallery-img" />
        </a>
        <a href="./src/assets/images/stock3.jpg">
          <img src="./src/assets/images/stock3.jpg" className="gallery-img" />
        </a>
        <a href="./src/assets/images/stock4.jpg">
          <img src="./src/assets/images/stock4.jpg" className="gallery-img" />
        </a>
        <a href="./src/assets/images/stock5.jpg">
          <img src="./src/assets/images/stock5.jpg" className="gallery-img" />
        </a>
        <a href="./src/assets/images/johnnyimage.png">
          <img
            src="./src/assets/images/johnnyimage.png"
            className="gallery-img"
          />
        </a>
      </div>
      <Footer />
    </>
  );
}
