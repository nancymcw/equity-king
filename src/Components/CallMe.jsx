import experiment from "../assets/telephone-fill.svg";

export function CallMe() {
  return (
    <>
      <a href="tel:763-296-8176">
        <button className="call-me-button-numbers">(763) 296-8176</button>
        <button className="call-me-button-phone">
          <img
            src={experiment}
            style={{ height: 25, width: 25 }}
            alt="Call 763-296-8176"
          />
        </button>
      </a>
    </>
  );
}
