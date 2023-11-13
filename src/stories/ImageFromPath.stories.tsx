import type { Meta, StoryObj } from "@storybook/react";
import ImageFromPath from "components/ImageFromPath";
import "../App.scss";

const meta: Meta<typeof ImageFromPath> = {
  title: "MovieComponent/ImageFromPath",
  component: ImageFromPath,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof ImageFromPath>;

export const ImageFromPathStory: Story = {
  args: {
    path: "e7Jvsry47JJQruuezjU2X1Z6J77.jpg",
    alt: "image",
    className: "w-40"
  },
};
