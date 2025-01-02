import { ContactMe } from "../Components/ContactMe";
import { ReviewsWidget } from "../Components/ReviewsWidget";
import ServicesList from "../Components/ServicesList";
import stock3brown from "../assets/images/stock3brown.jpg";

export function Home() {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${stock3brown})`,
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
      <ContactMe />
      <br />
      <div id="reviews-widget">
        <ReviewsWidget />
      </div>
      <br />
      FOOTER with more contact info, business hours, any other info
    </>
  );
}
