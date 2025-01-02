export function ReviewsWidget() {
  // ----- REPUSO -----
  const script = document.createElement("script");
  script.type = "module";
  script.src = "https://widgets.revue.us/2.0/rw-widget-list.js";
  document.getElementsByTagName("head")[0].appendChild(script);

  return <div data-rw-list="44697"></div>;
}
