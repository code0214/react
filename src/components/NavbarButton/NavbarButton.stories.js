import { NavbarButton } from ".";

export default {
  title: "Components/NavbarButton",
  component: NavbarButton,
  argTypes: {
    property1: {
      options: ["hovered", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "hovered",
    className: {},
    text: "LABEL",
  },
};
