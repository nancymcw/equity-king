import { ContactMe } from "../Components/ContactMe";
import { ReviewsWidget } from "../Components/ReviewsWidget";
import { Footer } from "../Components/Footer";
import ServicesList from "../Components/ServicesList";

export function Home() {
  return (
    <div className="home-wrapper">
      <div className="home-div">
        <h1>BRINGING YOU QUALITY HOME REFINISHING SINCE 2016...</h1>
        We strive for excellence every time we refinish or reface your cabinets.
        Quality finishing and cabinets are a smart investment in your property.
        From choosing the right colors and brand of paint for your job to the
        actual painting and clean up, we provide value through our exceptional
        service.
        <ServicesList />
      </div>
      <ContactMe />
      <br />
      <div id="reviews-widget">
        <ReviewsWidget />
      </div>
      <br />
      <Footer />
    </div>
  );
}
