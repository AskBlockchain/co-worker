import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const out = path.join(root, "public");
const filesSrc = path.join(root, "files");

await fs.rm(out, { recursive: true, force: true });
await fs.mkdir(out, { recursive: true });

await fs.copyFile(
	path.join(root, "co-worker-landing-page.html"),
	path.join(out, "index.html"),
);
await fs.copyFile(
	path.join(root, "thank-you.html"),
	path.join(out, "thank-you.html"),
);

try {
	await fs.cp(filesSrc, path.join(out, "files"), { recursive: true });
} catch (err) {
	if (err.code !== "ENOENT") throw err;
}

const headers = `/*
  X-Frame-Options: SAMEORIGIN
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
`;

await fs.writeFile(path.join(out, "_headers"), headers, "utf8");
console.log("Built", out);
