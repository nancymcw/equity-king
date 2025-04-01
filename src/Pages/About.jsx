import john from "../assets/images/john.jpg";

export function About() {
  return (
    <div
      style={{
        backgroundImage: `url(${john})`,
        backgroundRepeat: `no-repeat`,
        width: `100vw`,
        height: `100vh`,
      }}
      className="about-bio"
    >
      {/* <img src="./src/assets/images/john.jpg" className="about-img" /> */}
    </div>
  );
}
