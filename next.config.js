// next.config.js
const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.jsx",
});

// If you have other Next.js configurations, you can pass them as the parameter:
// module.exports = withNextra({ /* other next.js config */ })

module.exports = {
  ...withNextra(),
  images: {
    unoptimized: true,
  },
};
