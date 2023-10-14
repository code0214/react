import { Number } from ".";

export default {
  title: "Components/Number",
  component: Number,
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
    divClassName: {},
    text: "01",
  },
};
