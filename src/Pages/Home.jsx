import ServicesList from "../Components/ServicesList";
import johnnyimage from "../assets/images/stock1.png";

export function Home() {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${johnnyimage})`,
        }}
        className="home-div"
      >
        <h1>BRINGING YOU QUALITY HOME REFINISHING SINCE 2015...</h1>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur,
        minus. Praesentium provident quas asperiores voluptate rerum neque
        eaque, ipsam quisquam nesciunt! Quaerat tempore corporis doloremque
        doloribus.
        <ServicesList />
      </div>
      CONTACT ME <br />
      REVIEWS WIDGET <br />
      FOOTER with more contact info, business hours, any other info
    </>
  );
}
