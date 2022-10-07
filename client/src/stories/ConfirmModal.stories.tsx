import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ConfirmModal } from "../components";

import { movies } from "./stub";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ConfirmModal component",
  component: ConfirmModal,
} as ComponentMeta<typeof ConfirmModal>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ConfirmModal> = (args: any) => (
  <ConfirmModal {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  open: true,
  url: 'http://localhost:3000/recommend?title="example moviesa"&ids=232,234,534,345',
  title: "Example for storybook",
  onClose: () => null,
};
