// https://stackoverflow.com/questions/34424845/adding-script-tag-to-react-jsx
// https://rgwidgets.ravu.me/widgets/render/55fd2b3b-0024-4069-beaa-92346db03a13

import { useEffect } from "react";

export function ReviewsWidget() {
  return (
    <iframe src="https://rgwidgets.ravu.me/widgets/render/55fd2b3b-0024-4069-beaa-92346db03a13"></iframe>
  );
  // useEffect(() => {
  //   const script = document.createElement("script");
  //   const reviews = document.getElementById("reviews-widget");
  //   // script.src = "https://widgets.revue.us/2.0/rw-widget-list.js";
  //   script.src =
  //     "https://app.reviewgrower.com/js/v1/embed.js?token=55fd2b3b-0024-4069-beaa-92346db03a13";
  //   script.type = "text/javascript";
  //   script.async = true;
  //   reviews.appendChild(script);
  //   return () => {
  //     reviews.removeChild(script);
  //   };
  // }, []);
  //   <div data-rw-list="44697"></div>;
}
//REPUSO SCRIPT BELOW INCLUDING DIV-RW-LIST
//   {
//   const script = document.createElement("script");
//   script.type = "module";
//   script.src = "https://widgets.revue.us/2.0/rw-widget-list.js";
//   document.getElementsByTagName("head")[0].appendChild(script);

//   return <div data-rw-list="44697"></div>;
// }
//REVIEWGOER SCRIPT BELOW
// {
//   <script src="https://app.reviewgrower.com/js/v1/embed.js?token=55fd2b3b-0024-4069-beaa-92346db03a13" type="text/javascript"></script>
// }
