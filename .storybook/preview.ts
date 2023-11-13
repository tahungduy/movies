import type { Preview } from "@storybook/react";
import AppScreen from "../src/stories/decorator";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [AppScreen],
};

export default preview;
