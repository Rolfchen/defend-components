const { series, concurrent } = require("nps-utils");

module.exports = {
  scripts: {
    description: "DEFEND scripts for various operations",
    default: "npm start",
    docs: {
      description: "Documentation and demos",
      default: "npx nps docs.storybook",
      storybook: "storybook-server"
    },
    deploy: {
      default: "npx nps deploy.github",
      github: "npx nps deploy.transpile",
      transpile: "babel src -d dist",
      build: "webpack --mode production --config webpack.config.js"
    }
  }
};
