import type { Preview } from "@storybook/react";
import { MuiDecorator, MuiDocsContainer } from "./MuiDecorator";

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        order: [
          "Introduction",
          "HowToUse",
          "Fundamentals",
          "Design Thinking",
          "UI Design",
          "Best Practices",
        ],
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      container: MuiDocsContainer,
    },
  },
  decorators: [MuiDecorator],
};

export default preview;
