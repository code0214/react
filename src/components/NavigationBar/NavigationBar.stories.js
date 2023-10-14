import { NavigationBar } from ".";

export default {
  title: "Components/NavigationBar",
  component: NavigationBar,
  argTypes: {
    state: {
      options: ["burger", "white", "homepage-hero"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    state: "burger",
    className: {},
  },
};
