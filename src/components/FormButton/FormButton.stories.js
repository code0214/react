import { FormButton } from ".";

export default {
  title: "Components/FormButton",
  component: FormButton,
  argTypes: {
    state: {
      options: ["hovered", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    state: "hovered",
    className: {},
    text: "LABEL",
  },
};
