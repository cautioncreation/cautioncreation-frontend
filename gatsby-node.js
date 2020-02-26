/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.createPages = ({ actions }) => {
  const { createRedirect } = actions;
  createRedirect({
    fromPath: "https://cautioncreation.netlify.com/*",
    toPath: "https://cautioncreation.com/:splat",
    isPermanent: true,
    force: true
  });
	createRedirect({
    fromPath: "https://www.cautioncreation.ca/*",
    toPath: "https://cautioncreation.com/:splat",
    isPermanent: true,
    force: true
  });
	createRedirect({
    fromPath: "https://cautioncreation.ca/*",
    toPath: "https://cautioncreation.com/:splat",
    isPermanent: true,
    force: true
  });
	createRedirect({
    fromPath: "https://admin.cautioncreation.com",
    toPath: "https://cautioncreation-backend.herokuapp.com/admin",
    isPermanent: true,
    force: true
  });
};
