import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import React from "react";
import theme from "./theme";

import { MDXProvider } from "@mdx-js/react";

import { DocsContainer } from "@storybook/blocks";

export const MuiDecorator = (Story: any) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Story />
  </ThemeProvider>
);

export const MuiDocsContainer = (props) => (
  <MDXProvider>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <DocsContainer {...props} />
    </ThemeProvider>
  </MDXProvider>
);
