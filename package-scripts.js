const { series, concurrent } = require("nps-utils");

module.exports = {
  scripts: {
    default: "webpack-dev-server --open --mode development",
    docs: {
      description: "Demo and documentation server",
      default: "npx nps docs.storybook",
      storybook: "start-storybook"
    }
  }
};
