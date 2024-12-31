import {defineConfig} from "@rsbuild/core";
import {pluginReact} from "@rsbuild/plugin-react";
import {pluginTypedCSSModules} from "@rsbuild/plugin-typed-css-modules";
import {pluginLess} from "@rsbuild/plugin-less";
import path from "path";

export default defineConfig({
  plugins: [pluginReact(), pluginTypedCSSModules(), pluginLess()],
  output: {
    cssModules: {
      namedExport: true
    }
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src")
    }
  }
});
