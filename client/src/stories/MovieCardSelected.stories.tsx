import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import MovieCardSelected from "../components/MovieCardSelected";

import { movies } from "./stub";

export default {
  title: "Card/Movie card selected",
  component: MovieCardSelected,
} as ComponentMeta<typeof MovieCardSelected>;

const Template: ComponentStory<typeof MovieCardSelected> = (args: any) => (
  <MovieCardSelected {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  movie: movies[0],
  // onCardSelect: () => {},
};
