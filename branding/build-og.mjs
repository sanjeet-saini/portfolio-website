// Builds public/og-image.png (the 1200x630 link preview) from branding/og-image.html
// using headless Chrome or Edge. Run with: npm run og
import { execFileSync } from "node:child_process";
import { existsSync, mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const input = pathToFileURL(join(root, "branding", "og-image.html")).href;
const output = join(root, "public", "og-image.png");

const browser = [
  process.env.CHROME_PATH,
  "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
  "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/usr/bin/google-chrome",
].find((path) => path && existsSync(path));

if (!browser) {
  console.error("Chrome or Edge not found. Set CHROME_PATH to your browser executable.");
  process.exit(1);
}

const profile = mkdtempSync(join(tmpdir(), "og-image-"));
try {
  execFileSync(browser, [
    "--headless=new",
    "--disable-gpu",
    "--no-first-run",
    "--hide-scrollbars",
    `--user-data-dir=${profile}`,
    "--window-size=1200,630",
    "--force-device-scale-factor=1",
    `--screenshot=${output}`,
    input,
  ]);
  console.log(`Preview image saved to ${output}`);
} finally {
  rmSync(profile, { recursive: true, force: true });
}
