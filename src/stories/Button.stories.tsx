import type { Meta, StoryObj } from '@storybook/react';
import '../App.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

import Button from 'components/Button';
const meta: Meta<typeof Button> = {
  title: 'MovieComponent/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Button>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    className: 'mt-2 inline-block bg-yellow-500 text-white font-bold py-2 px-4 rounded-md',
    childComponent: 'Button',
  },
};

export const LoadMore: Story = {
  args: {
    childComponent: 'Load More',
    className: 'mt-2 inline-block text-black py-2 px-4 rounded-md bg-transparent font-semibold text-xl',
  },
};

export const Arrow: Story = {
  args: {
    childComponent: <FontAwesomeIcon icon={faArrowRight} size="1x" className="ml-4 text-white border border-yellow-500 mr-4 p-4 bg-black bg-opacity-70" />,
    className: 'mt-2 inline-block text-black py-2 px-4 rounded-md bg-transparent font-semibold text-xl',
  },
};
