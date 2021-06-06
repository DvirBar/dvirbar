import React, { Fragment } from "react";
import MyProjects from "./MyProjects/MyProjects";
import WhatIKnow from "./WhatIKnow/WhatIKnow";
import WhoIAm from "./WhoIAm/WhoIAm";
import WhyHireMe from "./WhyHireMe/WhyHireMe";

interface IProps {
  elementId: string;
}

function SiteSecitonMap({ elementId }: IProps): JSX.Element {
  switch (elementId) {
    case "who-i-am":
      return <WhoIAm />;

    case "what-i-know":
      return <WhatIKnow />;

    case "my-projects":
      return <MyProjects />;

    case "why-hire-me":
      return <WhyHireMe />;

    default:
      return <Fragment></Fragment>;
  }
}

export default SiteSecitonMap;
