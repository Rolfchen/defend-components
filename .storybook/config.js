import { configure } from "@storybook/react";

configure(
  require.context("../docs/storybook", true, /\.stories\.(js:mdx)$/),
  module
);
