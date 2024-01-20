import { defineConfig } from "cypress";

export default defineConfig({
	component: {
    devServer: {
      framework: 'create-react-app',
      bundler: 'webpack',
    },
  },
	e2e: {
			baseUrl: 'http://localhost:3000',
			video: true,
			viewportHeight: 1920,
			viewportWidth: 1080,
			screenshotOnRunFailure: true,
			setupNodeEvents(on, config) {

			},
	},
});
