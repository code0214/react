import { CardsHowWeThink } from ".";

export default {
  title: "Components/CardsHowWeThink",
  component: CardsHowWeThink,
  argTypes: {
    variant: {
      options: ["desktop", "mobile"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    variant: "desktop",
    className: {},
    numberText: "01",
    numberDivClassName: {},
  },
};
