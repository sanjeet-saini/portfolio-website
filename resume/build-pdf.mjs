// Builds public/Sanjeet-Saini-Resume.pdf from resume/resume.html using
// headless Chrome (or Edge). Run with: npm run resume
import { execFileSync } from "node:child_process";
import { existsSync, mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const input = pathToFileURL(join(root, "resume", "resume.html")).href;
const output = join(root, "public", "Sanjeet-Saini-Resume.pdf");

const candidates = [
  process.env.CHROME_PATH,
  "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
  "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium",
].filter(Boolean);

const browser = candidates.find((path) => existsSync(path));
if (!browser) {
  console.error("Chrome or Edge not found. Set CHROME_PATH to your browser executable.");
  process.exit(1);
}

// A separate profile lets this run even while your normal browser is open
const profile = mkdtempSync(join(tmpdir(), "resume-pdf-"));
try {
  execFileSync(browser, [
    "--headless=new",
    "--disable-gpu",
    "--no-first-run",
    `--user-data-dir=${profile}`,
    "--no-pdf-header-footer",
    `--print-to-pdf=${output}`,
    input,
  ]);
  console.log(`Resume saved to ${output}`);
} finally {
  rmSync(profile, { recursive: true, force: true });
}
