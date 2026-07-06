import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import fs from "fs";

// Auto-copy assets from backend/public/assets to frontend/public/assets
const backendAssets = path.resolve(__dirname, "../backend/public/assets");
const frontendAssets = path.resolve(__dirname, "./public/assets");

if (fs.existsSync(backendAssets)) {
  try {
    if (fs.existsSync(frontendAssets)) {
      fs.rmSync(frontendAssets, { recursive: true, force: true });
    }
    fs.mkdirSync(path.dirname(frontendAssets), { recursive: true });
    fs.cpSync(backendAssets, frontendAssets, { recursive: true });
    console.log(
      "Successfully copied assets from backend to frontend public folder.",
    );
  } catch (err) {
    console.error("Failed to copy assets in vite.config.js:", err);
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 5173,
    proxy: {
      "/api": {
        target: "http://127.0.0.1:8000",
        changeOrigin: true,
        secure: false,
      },
      "/storage": {
        target: "http://127.0.0.1:8000",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
