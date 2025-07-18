import path from "path";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

// Enable use of .env variables
import dotenv from 'dotenv';
dotenv.config();

// Get folder name from .env
const folder = process.env.VITE_DIST_BUILD;

// https://vite.dev/config/
export default defineConfig({
  base: "./",
  build: {
    outDir: path.resolve(__dirname, `dist/${folder}`),
    emptyOutDir: true,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});

