import { MenuTitle } from ".";

export default {
  title: "Components/MenuTitle",
  component: MenuTitle,
  argTypes: {
    state: {
      options: ["menu-white", "menu-black"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    state: "menu-white",
    className: {},
    text: "TITLE",
  },
};
