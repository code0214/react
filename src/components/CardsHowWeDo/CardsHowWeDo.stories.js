import { CardsHowWeDo } from ".";

export default {
  title: "Components/CardsHowWeDo",
  component: CardsHowWeDo,
  argTypes: {
    variant: {
      options: ["develop", "design", "research", "testing"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    variant: "develop",
    className: {},
    group: "/img/group-2-1.png",
  },
};
