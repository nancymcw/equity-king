// https://stackoverflow.com/questions/34424845/adding-script-tag-to-react-jsx

import { useEffect } from "react";

export function ReviewsWidget() {
  useEffect(() => {
    const script = document.createElement("script");

    // script.src = "https://widgets.revue.us/2.0/rw-widget-list.js";
    script.src =
      "https://app.reviewgrower.com/js/v1/embed.js?token=55fd2b3b-0024-4069-beaa-92346db03a13";
    script.type = "text/javascript";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  //   <div data-rw-list="44697"></div>;
}

//   {
//   const script = document.createElement("script");
//   script.type = "module";
//   script.src = "https://widgets.revue.us/2.0/rw-widget-list.js";
//   document.getElementsByTagName("head")[0].appendChild(script);

//   return <div data-rw-list="44697"></div>;
// }
// {
//   <script src="https://app.reviewgrower.com/js/v1/embed.js?token=55fd2b3b-0024-4069-beaa-92346db03a13" type="text/javascript"></script>
// }
