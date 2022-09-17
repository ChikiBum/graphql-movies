import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import MovieCard from "../components/MovieCard";

import { movies } from "./stub";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Movie card",
  component: MovieCard,
} as ComponentMeta<typeof MovieCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof MovieCard> = (args: any) => (
  <MovieCard {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  movie: movies[0],
  // onCardSelect: () => {},
};
