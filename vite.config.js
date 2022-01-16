import { defineConfig } from 'vite'
import preact from "@preact/preset-vite";
import { terser } from "rollup-plugin-terser";
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [
    preact({ devtoolsInProd: true }), 
    terser(),
    visualizer()
  ],
  resolve:{
    alias:{
    "@c": __dirname + "/src/components",
    "@a": __dirname + "/src/assets",
    "@s": __dirname + "/src/styles",
    }
  }
})
