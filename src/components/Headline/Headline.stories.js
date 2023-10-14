import { Headline } from ".";

export default {
  title: "Components/Headline",
  component: Headline,
  argTypes: {
    state: {
      options: ["two-row", "one-row", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    state: "two-row",
    className: {},
    text: "TITLE",
    hasDiv: true,
    visible: true,
  },
};
