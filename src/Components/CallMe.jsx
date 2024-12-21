import experiment from "../assets/telephone-fill.svg";
export function CallMe() {
  return (
    <>
      <a href="tel:763-300-3983">
        <button className="call-me-button-numbers">(763)-300-3983</button>
        <button className="call-me-button-phone">
          <img
            src={experiment}
            style={{ height: 25, width: 25 }}
            alt="Call 763-300-3983"
          />
        </button>
      </a>
    </>
  );
}
