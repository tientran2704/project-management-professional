// server.js - Express 5, ESM, fallback cho SPA không dùng wildcard pattern
import express from "express";
import compression from "compression";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const distPath = path.resolve(__dirname, "dist");

// nén gzip
app.use(compression());

// serve static trước
app.use(express.static(distPath, {
  maxAge: "1y",
  setHeaders: (res, filePath) => {
    if (filePath.endsWith("index.html")) {
      res.setHeader("Cache-Control", "no-cache");
    }
  },
}));

// ✅ CATCH-ALL cho SPA (không dùng '*', '/*')
app.use((req, res, next) => {
  // chỉ fallback cho GET (tránh ảnh hưởng các request khác)
  if (req.method !== "GET") return next();
  res.sendFile(path.join(distPath, "index.html"));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
