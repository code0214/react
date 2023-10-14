import { StateHomepageHeroWrapper } from ".";

export default {
  title: "Components/StateHomepageHeroWrapper",
  component: StateHomepageHeroWrapper,
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
