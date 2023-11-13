import type { Meta, StoryObj } from "@storybook/react";
import 'tailwindcss/tailwind.css';

import Button from "components/Button";
const meta: Meta<typeof Button> = {
  title: "MovieComponent/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Button>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    className: "primary-button",
    childComponent: "Button",
  },
};

export const LoadMore: Story = {
  args: {
    childComponent: "Load More",
    className: "load-more-button text-black",
  },
};
