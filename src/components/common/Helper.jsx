import {
  AdvantageFamily,
  AdvantageLocation,
  AllNetworksIcon,
  Android,
  CompatibleIcon,
  NoInstallationIcon,
  PrivateIcon,
  SimpleUse,
} from "./Icons";

export const universalData = [
  {
    icon: <CompatibleIcon />,
    title: "Compatible for every phone",
    description:
      "Fames tincidunt pellentesque nisl blandit at sit. Ullamcorper nisi vestibulum fames libero id.",
    justifyClass: "sm:justify-end",
  },
  {
    icon: <AllNetworksIcon />,
    title: "Covers all networks",
    description:
      "Fames tincidunt pellentesque nisl blandit at sit. Ullamcorper nisi vestibulum fames libero id.",
    justifyClass: "sm:justify-start",
  },
  {
    icon: <NoInstallationIcon />,
    title: "No installation required",
    description:
      "Fames tincidunt pellentesque nisl blandit at sit. Ullamcorper nisi vestibulum fames libero id.",
    justifyClass: "sm:justify-end",
  },
  {
    icon: <PrivateIcon />,
    title: "Totally private",
    description:
      "Fames tincidunt pellentesque nisl blandit at sit. Ullamcorper nisi vestibulum fames libero id.",
    justifyClass: "sm:justify-start",
  },
];



// ----------------------------------------------- Advantage Cards data ---------------------------------------------------
export const AdvantageData = [
  {
    logo: <AdvantageLocation />,
    title: "Instant location lookups",
    description:
      "Check the location of your registered phones whenever you choose. Add up to 5 phones to your account.",
  },
  {
    logo: <Android />,
    title: "Android & iPhone compatible",
    description:
      "Our service works with any Android or iPhone device, and takes just minutes to set up.",
  },
  {
    logo: <SimpleUse />,
    title: "Simple to use",
    description:
      "Our service has been designed to be simple to use. Just follow our walkthrough wizard to locate your phone.",
  },
  {
    logo: <AdvantageFamily />,
    title: "Keep your family safe",
    description:
      "Keep track of your family using our tools. Know that your children or elderly relatives are safe.",
  },
];
