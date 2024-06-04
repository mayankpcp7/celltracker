// =========================================== landing page ==================================================
//---------------------------------------- universal cards data ----------------------------------------------

import {
  AllNetworksIcon,
  CompatibleIcon,
  NoInstallationIcon,
  PrivateIcon,
} from "./Icons";

export const universalData = [
  {
    id: 1,
    icon: <CompatibleIcon />,
    title: "Compatible for every phone",
    description:
      "Fames tincidunt pellentesque nisl blandit at sit. Ullamcorper nisi vestibulum fames libero id.",
    justifyClass: "sm:justify-end",
  },
  {
    id: 2,
    icon: <AllNetworksIcon />,
    title: "Covers all networks",
    description:
      "Fames tincidunt pellentesque nisl blandit at sit. Ullamcorper nisi vestibulum fames libero id.",
    justifyClass: "sm:justify-start",
  },
  {
    id: 3,
    icon: <NoInstallationIcon />,
    title: "No installation required",
    description:
      "Fames tincidunt pellentesque nisl blandit at sit. Ullamcorper nisi vestibulum fames libero id.",
    justifyClass: "sm:justify-end",
  },
  {
    id: 4,
    icon: <PrivateIcon />,
    title: "Totally private",
    description:
      "Fames tincidunt pellentesque nisl blandit at sit. Ullamcorper nisi vestibulum fames libero id.",
    justifyClass: "sm:justify-start",
  },
];
